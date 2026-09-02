/**
 * Imports course lessons from a CSV export into the `lessons` table.
 *
 * CSV columns: week_number,title,purpose,content,order_index
 * Markdown inside `content` is inserted verbatim (no escaping/transformation).
 *
 * Usage (server-side only, requires service role key):
 *   bun scripts/import-lessons.ts path/to/lessons.csv
 */
import { readFileSync } from "node:fs";

type Row = Record<string, string>;

function parseCsv(text: string): Row[] {
  const src = text.replace(/^\uFEFF/, "");
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (inQuotes) {
      if (ch === '"') {
        if (src[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else field += ch;
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  const [header, ...body] = rows;
  return body
    .filter((r) => r.some((c) => c.trim() !== ""))
    .map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), r[i] ?? ""])));
}

async function main() {
  const file = process.argv[2];
  if (!file) throw new Error("Usage: bun scripts/import-lessons.ts <csv>");

  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!url || !key) throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required");

  const lessons = parseCsv(readFileSync(file, "utf8")).map((r) => {
    const content = r["content"].trim();
    const index = Number(r["order_index"]);
    return {
      week_number: Number(r["week_number"]),
      lesson_number: index,
      order_index: index,
      title: r["title"].trim(),
      summary: r["purpose"]?.trim() || null,
      content,
      estimated_read_time: Math.max(1, Math.round(content.split(/\s+/).length / 200)),
    };
  });

  for (let i = 0; i < lessons.length; i += 8) {
    const res = await fetch(`${url}/rest/v1/lessons`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(lessons.slice(i, i + 8)),
    });
    if (!res.ok) throw new Error(`Insert failed at row ${i}: ${await res.text()}`);
  }

  console.log(`Imported ${lessons.length} lessons.`);
}

main();
