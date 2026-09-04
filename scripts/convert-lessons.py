"""Converts the revised Lessons CSV export into src/content/lessons-content.ts.

The revised CSV already contains clean markdown (headings, bold, lists, tables),
so the body is preserved verbatim except that end-of-lesson knowledge-check /
reflection question sections are stripped — those live in the weekly quiz only.

Usage: python3 scripts/convert-lessons.py <csv>
"""
import csv, json, re, sys

csv.field_size_limit(10 ** 9)

DROP_HEADINGS = re.compile(
    r"^(reflection and knowledge[- ]check questions|knowledge[- ]check questions|"
    r"knowledge check|reflection questions|review questions|end[- ]of[- ]lesson questions|"
    r"discussion questions|answer key)\s*:?\s*$",
    re.I,
)
HEADING = re.compile(r"^(#{1,6})\s+(.*)$")


def strip_question_sections(body: str) -> str:
    lines = body.replace("\r\n", "\n").split("\n")
    out, skip_level = [], None
    for line in lines:
        m = HEADING.match(line.strip())
        if m:
            level, text = len(m.group(1)), m.group(2).replace("*", "").strip()
            if DROP_HEADINGS.match(text):
                skip_level = level
                continue
            if skip_level is not None and level <= skip_level:
                skip_level = None
        if skip_level is None:
            out.append(line)
    text = "\n".join(out)
    return re.sub(r"\n{3,}", "\n\n", text).strip()


LEAD = re.compile(
    r"^(by the end of this lesson[^:]*:|after completing this lesson[^:]*:|in this lesson[^:]*:)\s*",
    re.I,
)
VERBS = ("Explain|Identify|Distinguish|Describe|Apply|Differentiate|Analyze|Analyse|Evaluate|"
         "Calculate|Understand|Compare|Interpret|Assess|Recognize|Define|Outline|Discuss|Use|"
         "Estimate|Build|Design|Determine|Construct|Diagnose")
SPLIT = re.compile(r"(?<=[a-z,)])\s+(?=(?:-\s*)?(?:%s)\s)" % VERBS)


def summarize(purpose: str) -> str:
    text = LEAD.sub("", purpose.strip()).strip().lstrip("- ").strip()
    first = SPLIT.split(text)[0].strip().rstrip(".").rstrip("-").strip()
    if 20 <= len(first) <= 240:
        return first + "."
    if len(text) <= 240:
        return text
    cut = text[:240]
    return cut[: cut.rfind(" ")].rstrip(".,;-") + "..."


def ts(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def main():
    rows = list(csv.DictReader(open(sys.argv[1], encoding="utf-8-sig")))
    entries = []
    for r in rows:
        entries.append((
            int(r["week_number"]),
            int(r["order_index"]),
            r["title"].strip(),
            summarize(r["purpose"]),
            strip_question_sections(r["content"]),
        ))
    entries.sort(key=lambda e: (e[0], e[1]))

    parts = [
        "// AUTO-GENERATED from the Lessons table export. Do not edit by hand.",
        "// Regenerate with: python3 scripts/convert-lessons.py <csv>",
        "",
        "export type LessonContent = { week: number; lessonId: string; title: string; summary: string; body: string };",
        "",
        "export const lessonContent: LessonContent[] = [",
    ]
    for week, idx, title, purpose, body in entries:
        parts.append("  {")
        parts.append(f"    week: {week},")
        parts.append(f"    lessonId: \"l{idx}\",")
        parts.append(f"    title: {ts(title)},")
        parts.append(f"    summary: {ts(purpose)},")
        parts.append(f"    body: {ts(body)},")
        parts.append("  },")
    parts.append("];")
    parts.append("")
    open("src/content/lessons-content.ts", "w", encoding="utf-8").write("\n".join(parts))
    print(f"wrote {len(entries)} lessons")


main()
