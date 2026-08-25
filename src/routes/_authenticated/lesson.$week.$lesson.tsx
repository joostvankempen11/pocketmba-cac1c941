import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { TutorChat } from "@/components/TutorChat";
import { FurtherStudy } from "@/components/FurtherStudy";
import { LessonExercise } from "@/components/LessonExercise";
import { LessonHeader } from "@/components/lesson/LessonHeader";
import { LessonOutline } from "@/components/lesson/LessonOutline";
import { LessonMarkdown } from "@/components/lesson/LessonMarkdown";
import { KeyTakeaways, extractSections } from "@/components/lesson/KeyTakeaways";
import { getWeek } from "@/content/curriculum";
import { useProgress } from "@/lib/progress-store";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/_authenticated/lesson/$week/$lesson")({
  head: ({ params }) => ({
    meta: [{ title: `Lesson — Week ${params.week}` }],
  }),
  component: LessonPage,
});

function readingMinutes(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}

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
  const completed = useProgress((s) => s.completedLessons);
  const isComplete = Boolean(completed[`${weekNum}-${l.id}`]);
  const doneCount = w.lessons.filter((x) => completed[`${weekNum}-${x.id}`]).length;
  const modulePct = Math.round((doneCount / w.lessons.length) * 100);

  const prev = w.lessons[idx - 1];
  const next = w.lessons[idx + 1];

  return (
    <AppShell>
      <LessonHeader
        week={weekNum}
        weekTitle={w.title}
        lessonTitle={l.title}
        summary={l.summary}
        index={idx}
        total={w.lessons.length}
        minutes={readingMinutes(l.body)}
        videoCount={l.videos?.length ?? 0}
        isComplete={isComplete}
        modulePct={modulePct}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="min-w-0">
          <article className="mx-auto w-full max-w-[45rem]">
            <LessonMarkdown body={l.body} />

            <KeyTakeaways summary={l.summary} sections={extractSections(l.body)} />

            <div className="mt-12 border-t border-border pt-2">
              <FurtherStudy videos={l.videos} readings={l.readings} lessonTitle={l.title} />
            </div>

            {l.exercise && <LessonExercise lessonTitle={l.title} exercise={l.exercise} />}

            <section className="mt-14 rounded-2xl border border-border bg-card p-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => markComplete(weekNum, l.id)}
                    disabled={isComplete}
                    className={
                      isComplete
                        ? "inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                        : "inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                    }
                  >
                    <Check className="h-4 w-4" />
                    {isComplete ? "Lesson completed" : "Mark as complete"}
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {doneCount} of {w.lessons.length} lessons complete in this module
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${modulePct}%` }}
                  />
                </div>
              </div>
            </section>

            <nav className="mt-6 grid gap-3 sm:grid-cols-2">
              {prev ? (
                <Link
                  to="/lesson/$week/$lesson"
                  params={{ week: String(weekNum), lesson: prev.id }}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Previous lesson
                    </span>
                    <span className="block truncate text-sm font-medium">{prev.title}</span>
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next ? (
                <Link
                  to="/lesson/$week/$lesson"
                  params={{ week: String(weekNum), lesson: next.id }}
                  className="group flex items-center justify-end gap-3 rounded-xl border border-border bg-card p-4 text-right transition-colors hover:border-primary/50"
                >
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Next lesson
                    </span>
                    <span className="block truncate text-sm font-medium">{next.title}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                </Link>
              ) : (
                <Link
                  to="/quiz/$week"
                  params={{ week: String(weekNum) }}
                  className="group flex items-center justify-end gap-3 rounded-xl border border-primary/40 bg-primary/5 p-4 text-right transition-colors hover:border-primary"
                >
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                      Up next
                    </span>
                    <span className="block truncate text-sm font-medium">Week {weekNum} quiz</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                </Link>
              )}
            </nav>
          </article>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <LessonOutline week={weekNum} lessons={w.lessons} currentId={l.id} completed={completed} />
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
