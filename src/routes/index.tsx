import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { weeks } from "@/content/curriculum";
import { useProgress } from "@/lib/progress-store";
import { ArrowRight, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "12-Week MBA — Dashboard" },
      { name: "description", content: "A self-paced MBA program with lessons, quizzes, AI-graded assignments, and a capstone." },
      { property: "og:title", content: "12-Week MBA" },
      { property: "og:description", content: "Build solid business foundations in 12 weeks." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const completedLessons = useProgress((s) => s.completedLessons);
  const quizzes = useProgress((s) => s.quizzes);
  const assignments = useProgress((s) => s.assignments);
  const capstone = useProgress((s) => s.capstone);

  const totalLessons = weeks.reduce((a, w) => a + w.lessons.length, 0);
  const doneLessons = weeks.reduce(
    (a, w) => a + w.lessons.filter((l) => completedLessons[`${w.week}-${l.id}`]).length,
    0,
  );
  const doneQuizzes = weeks.filter((w) => quizzes[w.week]).length;
  const doneAssignments = weeks.filter((w) => assignments[`${w.week}-${w.assignment.id}`]).length;
  const doneCapstone = Object.keys(capstone).length;

  const totalItems = totalLessons + weeks.length /*quizzes*/ + weeks.length /*assignments*/ + 5; /*capstone*/
  const doneItems = doneLessons + doneQuizzes + doneAssignments + doneCapstone;
  const pct = Math.round((doneItems / totalItems) * 100);

  // Find current week: first week with anything incomplete
  const currentWeek =
    weeks.find((w) => {
      const lessonsDone = w.lessons.every((l) => completedLessons[`${w.week}-${l.id}`]);
      const quizDone = !!quizzes[w.week];
      const aDone = !!assignments[`${w.week}-${w.assignment.id}`];
      return !(lessonsDone && quizDone && aDone);
    }) ?? weeks[weeks.length - 1];

  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-7 w-7 text-primary" />
          <h1 className="text-3xl font-semibold tracking-tight">Your MBA</h1>
        </div>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Twelve weeks. Ten core disciplines. Lessons you can read, a tutor you can ask anything, assignments graded against a rubric by AI, and a capstone that pulls it all together.
        </p>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Overall progress</div>
              <div className="mt-1 text-3xl font-semibold tabular-nums">{pct}%</div>
            </div>
            <Link
              to="/week/$week"
              params={{ week: String(currentWeek.week) }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Resume Week {currentWeek.week} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            <Stat label="Lessons" value={`${doneLessons}/${totalLessons}`} />
            <Stat label="Quizzes" value={`${doneQuizzes}/${weeks.length}`} />
            <Stat label="Assignments" value={`${doneAssignments}/${weeks.length}`} />
            <Stat label="Capstone" value={`${doneCapstone}/5`} />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold">12-week curriculum</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {weeks.map((w) => {
              const lessonsDone = w.lessons.filter((l) => completedLessons[`${w.week}-${l.id}`]).length;
              const quizDone = !!quizzes[w.week];
              const aDone = !!assignments[`${w.week}-${w.assignment.id}`];
              const sub = `${lessonsDone}/${w.lessons.length} lessons · ${quizDone ? "✓" : "○"} quiz · ${aDone ? "✓" : "○"} assignment`;
              return (
                <Link
                  key={w.week}
                  to="/week/$week"
                  params={{ week: String(w.week) }}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted font-semibold">
                    {w.week}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium">{w.title}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground line-clamp-1">{w.tagline}</div>
                    <div className="mt-2 text-xs text-muted-foreground">{sub}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-medium tabular-nums">{value}</div>
    </div>
  );
}
