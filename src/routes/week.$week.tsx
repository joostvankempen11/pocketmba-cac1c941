import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { getWeek } from "@/content/curriculum";
import { useProgress } from "@/lib/progress-store";
import { BookOpen, CheckCircle2, ClipboardList, FileQuestion } from "lucide-react";

export const Route = createFileRoute("/week/$week")({
  head: ({ params }) => ({
    meta: [{ title: `Week ${params.week} — 12-Week MBA` }],
  }),
  component: WeekPage,
});

function WeekPage() {
  const { week } = Route.useParams();
  const maybeW = getWeek(Number(week));
  if (!maybeW) throw notFound();
  const w = maybeW;
  const completed = useProgress((s) => s.completedLessons);
  const quiz = useProgress((s) => s.quizzes[w.week]);
  const assignment = useProgress((s) => s.assignments[`${w.week}-${w.assignment.id}`]);

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Week {w.week}</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">{w.title}</h1>
        <p className="mt-2 text-muted-foreground">{w.tagline}</p>

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <BookOpen className="h-4 w-4" /> Lessons
          </h2>
          <ul className="mt-3 space-y-2">
            {w.lessons.map((l, i) => {
              const done = completed[`${w.week}-${l.id}`];
              return (
                <li key={l.id}>
                  <Link
                    to="/lesson/$week/$lesson"
                    params={{ week: String(w.week), lesson: l.id }}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50"
                  >
                    <div className="mt-0.5 text-xs text-muted-foreground">{i + 1}</div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium">{l.title}</div>
                      <div className="mt-0.5 text-sm text-muted-foreground line-clamp-2">{l.summary}</div>
                    </div>
                    {done && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {w.quiz.length > 0 && (
          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <FileQuestion className="h-4 w-4" /> Quiz
            </h2>
            <Link
              to="/quiz/$week"
              params={{ week: String(w.week) }}
              className="mt-3 flex items-center justify-between rounded-lg border border-border bg-card p-4 hover:border-primary/50"
            >
              <div>
                <div className="font-medium">Check your understanding</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{w.quiz.length} questions, auto-graded</div>
              </div>
              {quiz ? (
                <div className="text-sm font-medium">{quiz.score}/{quiz.total}</div>
              ) : (
                <div className="text-xs text-muted-foreground">Not started</div>
              )}
            </Link>
          </section>
        )}

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <ClipboardList className="h-4 w-4" /> Assignment
          </h2>
          <Link
            to="/assignment/$week/$id"
            params={{ week: String(w.week), id: w.assignment.id }}
            className="mt-3 flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary/50"
          >
            <div className="min-w-0 flex-1">
              <div className="font-medium">{w.assignment.title}</div>
              <div className="mt-0.5 text-sm text-muted-foreground line-clamp-2">{w.assignment.prompt}</div>
            </div>
            {assignment && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
          </Link>
        </section>
      </div>
    </AppShell>
  );
}