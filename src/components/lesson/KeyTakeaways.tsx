import { Sparkles } from "lucide-react";

/** Pulls the H1/H2 section headings out of a lesson body for the summary block. */
export function extractSections(body: string): string[] {
  return body
    .split("\n")
    .map((line) => line.match(/^#{1,2}\s+(.*)$/))
    .filter((m): m is RegExpMatchArray => Boolean(m))
    .map((m) => m[1].replace(/[*_`]/g, "").trim())
    .filter(Boolean)
    .slice(0, 8);
}

/** Pulls bullet points out of the lesson's own "Key Takeaways" section, if present. */
export function extractKeyTakeaways(body: string): string[] {
  const match = body.match(/^#{1,3}\s*Key Takeaways\s*$([\s\S]*?)(?=^#{1,3}\s|\Z)/im);
  if (!match) return [];
  return match[1]
    .split("\n")
    .map((line) => line.match(/^\s*(?:[-*]|\d+\.)\s+(.*)$/))
    .filter((m): m is RegExpMatchArray => Boolean(m))
    .map((m) => m[1].replace(/[*_`]/g, "").trim())
    .filter(Boolean)
    .slice(0, 8);
}

export function KeyTakeaways({ summary, sections }: { summary: string; sections: string[] }) {
  if (!summary && sections.length === 0) return null;
  return (
    <section className="mt-12 overflow-hidden rounded-2xl border border-primary/25 bg-primary/[0.05]">
      <div className="flex items-center gap-2 border-b border-primary/20 bg-primary/10 px-4 py-3 sm:px-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        <Sparkles className="h-4 w-4" /> Key takeaways
      </div>
      <div className="px-4 py-5 sm:px-5">
        {summary && <p className="text-[1.0625rem] leading-[1.7] text-foreground/90">{summary}</p>}
        {sections.length > 0 && (
          <ul className="mt-4 space-y-2">
            {sections.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
