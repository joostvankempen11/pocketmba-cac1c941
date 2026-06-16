import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { FeedbackCard } from "@/components/Feedback";
import { capstoneSections } from "@/content/curriculum";
import { gradeAssignment } from "@/lib/ai.functions";
import { useServerFn } from "@tanstack/react-start";
import { useProgress } from "@/lib/progress-store";
import { Loader2, Trophy } from "lucide-react";

export const Route = createFileRoute("/capstone")({
  head: () => ({ meta: [{ title: "Capstone — 12-Week MBA" }] }),
  component: CapstonePage,
});

function CapstonePage() {
  const business = useProgress((s) => s.capstoneBusiness);
  const setBusiness = useProgress((s) => s.setCapstoneBusiness);
  const capstone = useProgress((s) => s.capstone);
  const saveCap = useProgress((s) => s.setCapstone);

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex items-center gap-3">
          <Trophy className="h-7 w-7 text-primary" />
          <h1 className="text-3xl font-semibold tracking-tight">Capstone</h1>
        </div>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Integrate the program into one coherent strategic plan. Five sections, each AI-graded; the artifact at the end is your work product.
        </p>

        <div className="mt-8 rounded-lg border border-border bg-card p-5">
          <label className="text-sm font-medium">Your capstone business</label>
          <p className="mt-1 text-xs text-muted-foreground">A short description anchors every section. Update anytime.</p>
          <textarea
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            rows={4}
            placeholder="e.g. A subscription meal-kit service targeting busy urban professionals…"
            className="mt-3 w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="mt-10 space-y-6">
          {capstoneSections.map((s) => (
            <CapstoneSection
              key={s.id}
              section={s}
              prior={capstone[s.id]}
              businessContext={business}
              onSaved={(r) => saveCap(s.id, r)}
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
}

function CapstoneSection({
  section,
  prior,
  businessContext,
  onSaved,
}: {
  section: (typeof capstoneSections)[number];
  prior?: ReturnType<typeof useProgress.getState>["capstone"][string];
  businessContext: string;
  onSaved: (r: NonNullable<ReturnType<typeof useProgress.getState>["capstone"][string]>) => void;
}) {
  const grade = useServerFn(gradeAssignment);
  const [submission, setSubmission] = useState(prior?.submission ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(!prior);

  const words = submission.trim() ? submission.trim().split(/\s+/).length : 0;

  async function submit() {
    setLoading(true);
    setError(null);
    try {
      const fb = await grade({
        data: {
          assignmentTitle: section.title,
          prompt: `BUSINESS CONTEXT (for grader): ${businessContext || "Not provided — grade on internal consistency."}\n\nSECTION PROMPT:\n${section.prompt}`,
          rubric: section.rubric,
          submission,
        },
      });
      onSaved({ submission, feedback: fb, submittedAt: Date.now() });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to grade.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-lg border border-border bg-card">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <div>
          <div className="font-medium">{section.title}</div>
          <div className="mt-0.5 text-sm text-muted-foreground line-clamp-1">{section.prompt}</div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          {prior && (
            <span className="tabular-nums font-medium">{prior.feedback.score}/{prior.feedback.maxScore}</span>
          )}
          <span className="text-xs text-muted-foreground">{open ? "Close" : "Open"}</span>
        </div>
      </button>
      {open && (
        <div className="border-t border-border p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Prompt</div>
          <p className="mt-2 text-sm leading-relaxed">{section.prompt}</p>
          <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rubric</div>
          <p className="mt-2 text-sm text-muted-foreground">{section.rubric}</p>

          <textarea
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            rows={14}
            className="mt-4 w-full rounded-md border border-input bg-background p-4 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-ring"
            placeholder="Write this section…"
          />
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{words} words</span>
            {prior && <span>Last submitted {new Date(prior.submittedAt).toLocaleString()}</span>}
          </div>

          {error && <div className="mt-3 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">{error}</div>}

          <button
            onClick={submit}
            disabled={loading || words < 100}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Grading…" : prior ? "Resubmit for grading" : "Submit for AI feedback"}
          </button>

          {prior && (
            <div className="mt-6">
              <FeedbackCard result={prior} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}