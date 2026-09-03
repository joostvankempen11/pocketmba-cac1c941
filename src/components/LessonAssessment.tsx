import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, ClipboardCheck, Loader2, MessageSquare, Send, XCircle } from "lucide-react";
import type { LessonAssessment as Assessment } from "@/content/types";
import { exerciseFeedback } from "@/lib/exercise.functions";
import { cn } from "@/lib/utils";

function WrittenAnswer({
  lessonTitle,
  scenario,
  task,
  placeholder,
}: {
  lessonTitle: string;
  scenario: string;
  task: string;
  placeholder: string;
}) {
  const runFeedback = useServerFn(exerciseFeedback);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    const text = answer.trim();
    if (!text || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await runFeedback({ data: { lessonTitle, scenario, task, submission: text } });
      setFeedback(res.feedback);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={6}
        placeholder={placeholder}
        disabled={loading}
        className="mt-3 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={submit}
          disabled={loading || !answer.trim()}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {feedback ? "Resubmit for feedback" : "Submit for feedback"}
        </button>
        {loading && <span className="text-xs text-muted-foreground">Tutor is reading your answer…</span>}
      </div>
      {error && (
        <div className="mt-3 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}
      {feedback && !loading && (
        <div className="mt-4 rounded-md border border-border bg-card p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Tutor feedback</div>
          <div className="markdown text-sm leading-relaxed">
            <ReactMarkdown>{feedback}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
}

export function LessonAssessment({
  lessonTitle,
  assessment,
}: {
  lessonTitle: string;
  assessment: Assessment;
}) {
  const [answers, setAnswers] = useState<number[]>(() => Array(assessment.mcqs.length).fill(-1));
  const [checked, setChecked] = useState(false);
  const score = answers.reduce((acc, a, i) => acc + (a === assessment.mcqs[i].answerIndex ? 1 : 0), 0);

  return (
    <section className="mt-12 space-y-6">
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          <ClipboardCheck className="h-4 w-4" /> Knowledge check
        </div>
        <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight">Five questions on this lesson</h2>

        <ol className="mt-5 space-y-5">
          {assessment.mcqs.map((q, qi) => (
            <li key={q.id} className="rounded-xl border border-border/70 bg-background/60 p-4">
              <div className="text-sm font-medium">
                {qi + 1}. {q.prompt}
              </div>
              <div className="mt-3 space-y-2">
                {q.choices.map((c, ci) => {
                  const picked = answers[qi] === ci;
                  const correct = q.answerIndex === ci;
                  const showState = checked && (picked || correct);
                  return (
                    <label
                      key={ci}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-md border border-transparent px-3 py-2 text-sm hover:bg-accent",
                        picked && !checked && "border-primary bg-accent",
                        showState && correct && "border-emerald-500/40 bg-emerald-500/10",
                        showState && picked && !correct && "border-red-500/40 bg-red-500/10",
                      )}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={picked}
                        disabled={checked}
                        onChange={() => {
                          const next = [...answers];
                          next[qi] = ci;
                          setAnswers(next);
                        }}
                        className="mt-1"
                      />
                      <span className="flex-1">{c}</span>
                      {showState && correct && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />}
                      {showState && picked && !correct && <XCircle className="h-4 w-4 shrink-0 text-red-500" />}
                    </label>
                  );
                })}
              </div>
              {checked && (
                <div className="mt-3 rounded-md bg-muted p-3 text-sm text-muted-foreground">
                  <strong className="text-foreground">Why: </strong>
                  {q.explanation}
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {!checked ? (
            <button
              onClick={() => setChecked(true)}
              disabled={answers.some((a) => a === -1)}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              Check answers
            </button>
          ) : (
            <>
              <span className="text-sm font-medium tabular-nums">
                {score}/{assessment.mcqs.length} correct
              </span>
              <button
                onClick={() => {
                  setAnswers(Array(assessment.mcqs.length).fill(-1));
                  setChecked(false);
                }}
                className="text-xs text-primary hover:underline"
              >
                Try again
              </button>
            </>
          )}
        </div>
      </div>

      {assessment.scenarios.map((s, i) => (
        <div key={s.id} className="rounded-2xl border border-primary/25 bg-primary/[0.05] p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <MessageSquare className="h-4 w-4" /> Scenario {i + 1}
          </div>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/90">{s.prompt}</p>
          {s.guidance && (
            <p className="mt-2 text-xs text-muted-foreground">
              <strong className="text-foreground">A strong answer: </strong>
              {s.guidance}
            </p>
          )}
          <WrittenAnswer
            lessonTitle={lessonTitle}
            scenario={s.prompt}
            task={s.guidance || "Apply the lesson's concepts to this scenario and justify your recommendation."}
            placeholder="Work through the case here — roughly 100–200 words."
          />
        </div>
      ))}

      <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Reflection</div>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/90">{assessment.reflection}</p>
        <WrittenAnswer
          lessonTitle={lessonTitle}
          scenario={assessment.reflection}
          task="Reflect on how this lesson's concepts apply to your own role, team, or business, and be specific."
          placeholder="Your reflection — there is no single right answer."
        />
      </div>
    </section>
  );
}
