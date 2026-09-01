import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Clock, PlayCircle } from "lucide-react";

export function LessonHeader({
  week,
  weekTitle,
  lessonTitle,
  summary,
  index,
  total,
  minutes,
  videoCount,
  isComplete,
  modulePct,
}: {
  week: number;
  weekTitle: string;
  lessonTitle: string;
  summary: string;
  index: number;
  total: number;
  minutes: number;
  videoCount: number;
  isComplete: boolean;
  modulePct: number;
}) {
  return (
    <header className="border-b border-border bg-card/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-6">
        <Link
          to="/week/$week"
          params={{ week: String(week) }}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Week {week} · {weekTitle}
        </Link>

        <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">
            Lesson {index + 1} of {total}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-muted-foreground">
            <Clock className="h-3 w-3" /> {minutes} min read
          </span>
          {videoCount > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-muted-foreground">
              <PlayCircle className="h-3 w-3" /> {videoCount} video{videoCount > 1 ? "s" : ""}
            </span>
          )}
          {isComplete && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-3 w-3" /> Completed
            </span>
          )}
        </div>

        <h1 className="mt-4 max-w-3xl text-balance font-serif text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          {lessonTitle}
        </h1>
        {summary && (
          <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">{summary}</p>
        )}

        <div className="mt-6">
          <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
            <span>Module progress</span>
            <span>{modulePct}%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${modulePct}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
