import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { AppShell } from "@/components/AppShell";
import { TutorChat } from "@/components/TutorChat";
import { getWeek } from "@/content/curriculum";
import { useProgress } from "@/lib/progress-store";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/lesson/$week/$lesson")({
  head: ({ params }) => ({
    meta: [{ title: `Lesson — Week ${params.week}` }],
  }),
  component: LessonPage,
});

function LessonPage() {
  const { week, lesson } = Route.useParams();
  const weekNum = Number(week);
  const maybeW = getWeek(weekNum);
  if (!maybeW) throw notFound();
  const w = maybeW;
  const idx = w.lessons.findIndex((x) => x.id === lesson);
  const maybeL = w.lessons[idx];
  if (!maybeL) throw notFound();
  const l = maybeL;

  const markComplete = useProgress((s) => s.markLessonComplete);
  const isComplete = useProgress((s) => Boolean(s.completedLessons[`${weekNum}-${l.id}`]));

  const prev = w.lessons[idx - 1];
  const next = w.lessons[idx + 1];

  return (
    <AppShell>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <article className="min-w-0">
          <Link
            to="/week/$week"
            params={{ week: String(weekNum) }}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3 w-3" /> Week {weekNum}: {w.title}
          </Link>
          <div className="markdown mt-4 max-w-[68ch]">
            <ReactMarkdown>{l.body}</ReactMarkdown>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6">
            <button
              onClick={() => markComplete(weekNum, l.id)}
              disabled={isComplete}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
            >
              <Check className="h-4 w-4" />
              {isComplete ? "Marked complete" : "Mark complete"}
            </button>
            {prev && (
              <Link
                to="/lesson/$week/$lesson"
                params={{ week: String(weekNum), lesson: prev.id }}
                className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-sm hover:bg-accent"
              >
                <ArrowLeft className="h-4 w-4" /> Previous
              </Link>
            )}
            {next ? (
              <Link
                to="/lesson/$week/$lesson"
                params={{ week: String(weekNum), lesson: next.id }}
                className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-sm hover:bg-accent"
              >
                Next <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                to="/quiz/$week"
                params={{ week: String(weekNum) }}
                className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-sm hover:bg-accent"
              >
                Take quiz <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </article>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <TutorChat
            sessionId={`tutor-${weekNum}-${l.id}`}
            context={`Week ${weekNum} — ${w.title}: ${l.title}. ${l.summary}`}
            compact
          />
        </aside>
      </div>
    </AppShell>
  );
}