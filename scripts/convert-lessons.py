"""Converts the Lessons CSV export into src/content/lessons-content.ts.

The CSV `content` column uses **Bold Label** lines as section markers. This script
turns those into structured markdown the lesson reader already renders:
  - recognised labels (Definition, Formula, Managerial Perspective, Example, ...)
    become labelled callout blockquotes
  - other bold labels become `##` section headings
  - Learning Objectives / Key Takeaways bodies become bullet lists
No text is dropped, summarised, or reordered.

Usage: python3 scripts/convert-lessons.py <csv> 
"""
import csv, json, re, sys

CALLOUTS = {
    "definition": "Definition",
    "formula": "Formula",
    "managerial perspective": "Managerial Perspective",
    "the recurring managerial perspective": "Managerial Perspective",
    "ceo perspective": "Managerial Perspective",
    "example": "Example",
    "examples": "Example",
    "examples:": "Example",
    "examples include:": "Example",
    "integrated example": "Example",
    "northstar example": "Northstar Example",
    "for northstar:": "Northstar Example",
}
LIST_SECTIONS = {"learning objectives", "key takeaways", "answer key",
                 "reflection and knowledge-check questions", "reflection questions",
                 "by the end of this lesson, you will be able to:"}

BOLD = re.compile(r"^\*\*(.+?)\*\*$")
NUMBERED = re.compile(r"^\*\*(\d+)\.\*\*$")


def blocks(content: str):
    """Yields (label|None, [paragraphs])."""
    label, buf = None, []
    for raw in content.replace("\r\n", "\n").split("\n"):
        line = raw.strip()
        if not line:
            continue
        m = BOLD.match(line)
        if m and not NUMBERED.match(line):
            yield label, buf
            label, buf = m.group(1).strip(), []
        else:
            buf.append(line)
    yield label, buf


def render(content: str) -> str:
    out = []
    for label, paras in blocks(content):
        if label is None:
            out.extend(paras)
            continue
        key = label.lower()
        if key in CALLOUTS:
            body = "\n>\n".join("> " + p.replace("**", "") for p in paras)
            out.append(f"> **{CALLOUTS[key]}**\n>\n{body}" if paras else f"> **{CALLOUTS[key]}**")
        elif key in LIST_SECTIONS:
            out.append(f"## {label}")
            items, pending = [], None
            for p in paras:
                n = NUMBERED.match(p)
                if n:
                    pending = n.group(1)
                    continue
                text = p.replace("**", "")
                items.append(f"{pending}. {text}" if pending else f"- {text}")
                pending = None
            out.append("\n".join(items))
        else:
            out.append(f"## {label}")
            for p in paras:
                n = NUMBERED.match(p)
                out.append(f"**{n.group(1)}.**" if n else p)
    # formulas inside callouts stay monospace
    text = "\n\n".join(x for x in out if x.strip())
    return text


def ts(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def main():
    rows = list(csv.DictReader(open(sys.argv[1], encoding="utf-8-sig")))
    entries = []
    for r in rows:
        week = int(r["week_number"])
        idx = int(r["order_index"])
        entries.append((week, idx, r["title"].strip(), r["purpose"].strip(), render(r["content"])))
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
