import { Link } from "@tanstack/react-router";
import { Check, Circle, FileQuestion } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Lesson } from "@/content/types";

export function LessonOutline({
  week,
  lessons,
  currentId,
  completed,
}: {
  week: number;
  lessons: Lesson[];
  currentId: string;
  completed: Record<string, true>;
}) {
  return (
    <nav className="rounded-xl border border-border bg-card p-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        In this module
      </div>
      <ol className="mt-3 space-y-1">
        {lessons.map((l, i) => {
          const done = Boolean(completed[`${week}-${l.id}`]);
          const active = l.id === currentId;
          return (
            <li key={l.id}>
              <Link
                to="/lesson/$week/$lesson"
                params={{ week: String(week), lesson: l.id }}
                className={cn(
                  "flex items-start gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
                  active ? "bg-primary/10 font-medium text-primary" : "text-foreground/80 hover:bg-accent",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                    done
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : active
                        ? "border-primary text-primary"
                        : "border-border text-transparent",
                  )}
                >
                  {done ? <Check className="h-3 w-3" /> : <Circle className="h-1.5 w-1.5 fill-current" />}
                </span>
                <span className="min-w-0 flex-1 leading-snug">
                  <span className="text-[11px] text-muted-foreground">{i + 1}. </span>
                  {l.title}
                </span>
              </Link>
            </li>
          );
        })}
        <li className="pt-1">
          <Link
            to="/quiz/$week"
            params={{ week: String(week) }}
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent"
          >
            <FileQuestion className="h-4 w-4 shrink-0 text-muted-foreground" />
            Week {week} quiz
          </Link>
        </li>
      </ol>
    </nav>
  );
}
