"""Generates per-lesson assessments (5 MCQ, 2 scenarios, 1 reflection) from the lessons CSV.

Writes one JSON per lesson to /tmp/assessments and then src/content/assessments.generated.ts.
Usage: python3 scripts/generate-assessments.py <csv>
"""
import csv, json, os, re, sys, time
from concurrent.futures import ThreadPoolExecutor

import requests

OUT_DIR = "/tmp/assessments"
MODEL = "google/gemini-3.7-flash"
KEY = os.environ["LOVABLE_API_KEY"]

SYSTEM = """You write assessments for an MBA-level online course. You return ONLY JSON.
Schema:
{
 "mcqs": [ {"question": str, "options": [str,str,str,str], "correctAnswer": int, "explanation": str} ] (exactly 5),
 "scenarios": [ {"prompt": str, "guidance": str} ] (exactly 2),
 "reflection": str
}
Rules:
- MCQs: exactly 4 options, exactly one correct, explanation required (1-2 sentences saying why the answer is right).
- Question mix across the 5 MCQs: 2 recall, 2 understanding, 1 application.
- Questions must be answerable from the lesson content only. No trick questions, no "all of the above".
- Scenarios: realistic managerial cases requiring the learner to apply this lesson's concepts. Use the company
  "Northstar" (Northstar Outdoor Equipment) as the business example whenever it fits. Each scenario prompt is
  3-6 sentences of situation plus a clear question. "guidance" is 1-3 sentences describing what a strong answer covers.
- Reflection: one personal reflection question, lesson-specific, in the spirit of
  "How would you apply this lesson's concepts in your current role, team, or business?"
"""


def gen(row):
    week, idx = int(row["week_number"]), int(row["order_index"])
    path = f"{OUT_DIR}/w{week}-l{idx}.json"
    if os.path.exists(path):
        return path
    content = row["content"][:24000]
    prompt = f"LESSON TITLE: {row['title']}\n\nPURPOSE:\n{row['purpose']}\n\nLESSON CONTENT:\n{content}"
    for attempt in range(5):
        r = requests.post(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            headers={"Lovable-API-Key": KEY, "Content-Type": "application/json", "X-Lovable-AIG-SDK": "fetch"},
            json={
                "model": MODEL,
                "messages": [{"role": "system", "content": SYSTEM}, {"role": "user", "content": prompt}],
                "response_format": {"type": "json_object"},
            },
            timeout=300,
        )
        if r.status_code in (429, 500, 502, 503, 504):
            time.sleep(5 * (attempt + 1))
            continue
        if not r.ok:
            raise RuntimeError(f"w{week}-l{idx}: {r.status_code} {r.text[:300]}")
        text = r.json()["choices"][0]["message"]["content"]
        text = re.sub(r"^```(?:json)?|```$", "", text.strip(), flags=re.M).strip()
        data = json.loads(text)
        assert len(data["mcqs"]) == 5 and len(data["scenarios"]) == 2 and data["reflection"], "bad shape"
        for q in data["mcqs"]:
            assert len(q["options"]) == 4 and 0 <= int(q["correctAnswer"]) <= 3
        json.dump({"week": week, "index": idx, **data}, open(path, "w"), ensure_ascii=False)
        print("ok", week, idx, flush=True)
        return path
    raise RuntimeError(f"w{week}-l{idx}: retries exhausted")


def build_ts():
    entries = []
    for week in range(1, 13):
        for idx in range(1, 5):
            p = f"{OUT_DIR}/w{week}-l{idx}.json"
            if not os.path.exists(p):
                raise SystemExit(f"missing {p}")
            entries.append(json.load(open(p)))
    lines = [
        "// AUTO-GENERATED lesson assessments. Do not edit by hand.",
        "// Regenerate with: python3 scripts/generate-assessments.py <csv>",
        "",
        'import type { LessonAssessment } from "./types";',
        "",
        "export const lessonAssessments: Record<string, LessonAssessment> = {",
    ]
    for e in entries:
        key = f'{e["week"]}-l{e["index"]}'
        lines.append(f'  "{key}": {{')
        lines.append("    mcqs: [")
        for i, q in enumerate(e["mcqs"], 1):
            opts = ", ".join(json.dumps(o, ensure_ascii=False) for o in q["options"])
            lines.append(
                f'      {{ id: "{key}-q{i}", prompt: {json.dumps(q["question"], ensure_ascii=False)}, '
                f"choices: [{opts}], answerIndex: {int(q['correctAnswer'])}, "
                f"explanation: {json.dumps(q['explanation'], ensure_ascii=False)} }},"
            )
        lines.append("    ],")
        lines.append("    scenarios: [")
        for i, s in enumerate(e["scenarios"], 1):
            lines.append(
                f'      {{ id: "{key}-s{i}", prompt: {json.dumps(s["prompt"], ensure_ascii=False)}, '
                f"guidance: {json.dumps(s.get('guidance', ''), ensure_ascii=False)} }},"
            )
        lines.append("    ],")
        lines.append(f'    reflection: {json.dumps(e["reflection"], ensure_ascii=False)},')
        lines.append("  },")
    lines.append("};")
    lines.append("")
    open("src/content/assessments.generated.ts", "w", encoding="utf-8").write("\n".join(lines))
    print(f"wrote {len(entries)} assessments")


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    rows = list(csv.DictReader(open(sys.argv[1], encoding="utf-8-sig")))
    with ThreadPoolExecutor(max_workers=6) as ex:
        list(ex.map(gen, rows))
    build_ts()


main()
