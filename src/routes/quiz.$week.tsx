import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { getWeek } from "@/content/curriculum";
import { useProgress } from "@/lib/progress-store";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quiz/$week")({
  head: ({ params }) => ({ meta: [{ title: `Quiz — Week ${params.week}` }] }),
  component: QuizPage,
});

function QuizPage() {
  const { week } = Route.useParams();
  const w = getWeek(Number(week));
  if (!w) throw notFound();

  const setQuizResult = useProgress((s) => s.setQuizResult);
  const prior = useProgress((s) => s.quizzes[w.week]);

  const [answers, setAnswers] = useState<number[]>(() => prior?.answers ?? Array(w.quiz.length).fill(-1));
  const [submitted, setSubmitted] = useState(Boolean(prior));

  const score = answers.reduce((acc, a, i) => acc + (a === w.quiz[i].answerIndex ? 1 : 0), 0);

  function submit() {
    setSubmitted(true);
    setQuizResult(w.week, { score, total: w.quiz.length, answers, takenAt: Date.now() });
  }

  function retake() {
    setAnswers(Array(w.quiz.length).fill(-1));
    setSubmitted(false);
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl px-6 py-10">
        <Link to="/week/$week" params={{ week: String(w.week) }} className="text-xs text-muted-foreground hover:text-foreground">
          ← Week {w.week}: {w.title}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Week {w.week} quiz</h1>

        {submitted && (
          <div className="mt-4 rounded-lg border border-border bg-card p-4">
            <div className="text-sm">Score</div>
            <div className="text-3xl font-semibold tabular-nums">{score}/{w.quiz.length}</div>
            <button onClick={retake} className="mt-3 text-xs text-primary hover:underline">Retake</button>
          </div>
        )}

        <ol className="mt-6 space-y-6">
          {w.quiz.map((q, qi) => (
            <li key={q.id} className="rounded-lg border border-border bg-card p-5">
              <div className="font-medium">{qi + 1}. {q.prompt}</div>
              <div className="mt-3 space-y-2">
                {q.choices.map((c, ci) => {
                  const picked = answers[qi] === ci;
                  const correct = q.answerIndex === ci;
                  const showState = submitted && (picked || correct);
                  return (
                    <label
                      key={ci}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-md border border-transparent px-3 py-2 text-sm hover:bg-accent",
                        picked && !submitted && "border-primary bg-accent",
                        showState && correct && "border-emerald-500/40 bg-emerald-500/10",
                        showState && picked && !correct && "border-red-500/40 bg-red-500/10",
                      )}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        checked={picked}
                        disabled={submitted}
                        onChange={() => {
                          const next = [...answers];
                          next[qi] = ci;
                          setAnswers(next);
                        }}
                        className="mt-1"
                      />
                      <span className="flex-1">{c}</span>
                      {showState && correct && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                      {showState && picked && !correct && <XCircle className="h-4 w-4 text-red-500" />}
                    </label>
                  );
                })}
              </div>
              {submitted && (
                <div className="mt-3 rounded-md bg-muted p-3 text-sm text-muted-foreground">
                  <strong className="text-foreground">Explanation: </strong>{q.explanation}
                </div>
              )}
            </li>
          ))}
        </ol>

        {!submitted && (
          <button
            onClick={submit}
            disabled={answers.some((a) => a === -1)}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            Submit quiz
          </button>
        )}
      </div>
    </AppShell>
  );
}