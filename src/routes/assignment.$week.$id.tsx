import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { FeedbackCard } from "@/components/Feedback";
import { getWeek } from "@/content/curriculum";
import { gradeAssignment } from "@/lib/ai.functions";
import { useServerFn } from "@tanstack/react-start";
import { useProgress } from "@/lib/progress-store";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/assignment/$week/$id")({
  head: ({ params }) => ({ meta: [{ title: `Assignment — Week ${params.week}` }] }),
  component: AssignmentPage,
});

function AssignmentPage() {
  const { week, id } = Route.useParams();
  const weekNum = Number(week);
  const maybeW = getWeek(weekNum);
  if (!maybeW) throw notFound();
  const w = maybeW;
  if (w.assignment.id !== id) throw notFound();
  const a = w.assignment;

  const prior = useProgress((s) => s.assignments[`${weekNum}-${a.id}`]);
  const save = useProgress((s) => s.setAssignment);
  const grade = useServerFn(gradeAssignment);

  const [submission, setSubmission] = useState(prior?.submission ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const words = submission.trim() ? submission.trim().split(/\s+/).length : 0;

  async function submit() {
    setLoading(true);
    setError(null);
    try {
      const fb = await grade({
        data: {
          assignmentTitle: a.title,
          prompt: a.prompt,
          rubric: a.rubric,
          submission,
        },
      });
      save(weekNum, a.id, {
        submission,
        feedback: fb,
        submittedAt: Date.now(),
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to grade. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <Link to="/week/$week" params={{ week: String(weekNum) }} className="text-xs text-muted-foreground hover:text-foreground">
          ← Week {weekNum}: {w.title}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">{a.title}</h1>
        <div className="mt-4 rounded-lg border border-border bg-card p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Prompt</div>
          <p className="mt-2 text-sm leading-relaxed">{a.prompt}</p>
          <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rubric</div>
          <p className="mt-2 text-sm text-muted-foreground">{a.rubric}</p>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium">Your submission</label>
          <textarea
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            rows={14}
            className="mt-2 w-full rounded-md border border-input bg-background p-4 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-ring"
            placeholder="Write your response here…"
          />
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{words} words</span>
            {prior && <span>Last submitted {new Date(prior.submittedAt).toLocaleString()}</span>}
          </div>
        </div>

        {error && <div className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">{error}</div>}

        <button
          onClick={submit}
          disabled={loading || words < 30}
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {loading ? "Grading…" : prior ? "Resubmit for grading" : "Submit for AI feedback"}
        </button>

        {prior && (
          <div className="mt-8">
            <FeedbackCard result={prior} />
          </div>
        )}
      </div>
    </AppShell>
  );
}