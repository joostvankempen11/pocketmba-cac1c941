import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useProgress } from "@/lib/progress-store";
import { weeks } from "@/content/curriculum";
import { ArrowLeft, BookOpen, GraduationCap, LayoutDashboard, MessagesSquare, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function useWeekProgress(week: number) {
  const w = weeks.find((x) => x.week === week)!;
  const lessons = useProgress((s) => s.completedLessons);
  const quizzes = useProgress((s) => s.quizzes);
  const assignments = useProgress((s) => s.assignments);
  const totalItems = w.lessons.length + 1 + 1;
  let done = 0;
  for (const l of w.lessons) if (lessons[`${week}-${l.id}`]) done++;
  if (quizzes[week]) done++;
  if (assignments[`${week}-${w.assignment.id}`]) done++;
  return { done, totalItems, pct: Math.round((done / totalItems) * 100) };
}

function WeekItem({ week }: { week: number }) {
  const w = weeks.find((x) => x.week === week)!;
  const { pct } = useWeekProgress(week);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname.startsWith(`/week/${week}`) || pathname.startsWith(`/lesson/${week}`) || pathname.startsWith(`/quiz/${week}`) || pathname.startsWith(`/assignment/${week}`);
  return (
    <Link
      to="/week/$week"
      params={{ week: String(week) }}
      className={cn(
        "group flex items-start gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50",
      )}
    >
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sidebar-border text-[10px] font-semibold">
        {week}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate font-medium">{w.title}</div>
        <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-sidebar-border">
          <div className="h-full bg-sidebar-primary transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navItem = (to: string, icon: ReactNode, label: string) => (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm",
        pathname === to ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50",
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );

  const navigate = useNavigate();
  const canGoBack = pathname !== "/";

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <div className="flex items-center gap-2 px-5 py-5">
          <GraduationCap className="h-6 w-6 text-sidebar-primary" />
          <div>
            <div className="text-sm font-semibold text-sidebar-foreground">12-Week MBA</div>
            <div className="text-xs text-sidebar-foreground/60">Self-paced program</div>
          </div>
        </div>
        <nav className="space-y-1 px-3 pb-2">
          {navItem("/", <LayoutDashboard className="h-4 w-4" />, "Dashboard")}
          {navItem("/curriculum", <BookOpen className="h-4 w-4" />, "Curriculum")}
          {navItem("/tutor", <MessagesSquare className="h-4 w-4" />, "AI Tutor")}
          {navItem("/capstone", <Trophy className="h-4 w-4" />, "Capstone")}
        </nav>
        <div className="mt-2 px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">
          Weeks
        </div>
        <div className="flex-1 space-y-1 overflow-y-auto px-3 pb-6">
          {weeks.map((w) => (
            <WeekItem key={w.week} week={w.week} />
          ))}
        </div>
      </aside>
      <main className="min-w-0 flex-1">
        <div className="flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 md:hidden">
          <div className="flex items-center gap-2">
            {canGoBack && (
              <button
                onClick={() => navigate({ to: ".." })}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold">12-Week MBA</span>
            </Link>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}