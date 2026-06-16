import type { AssignmentResult } from "@/lib/progress-store";
import { CheckCircle2, Lightbulb } from "lucide-react";

export function FeedbackCard({ result }: { result: AssignmentResult }) {
  const f = result.feedback;
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">AI Feedback</div>
        <div className="text-2xl font-semibold tabular-nums">
          {f.score}<span className="text-muted-foreground text-base">/{f.maxScore}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{f.summary}</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" /> Strengths
          </div>
          <ul className="space-y-1 text-sm">
            {f.strengths.map((s, i) => (
              <li key={i} className="flex gap-2"><span className="text-muted-foreground">•</span>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Lightbulb className="h-3.5 w-3.5" /> Improve
          </div>
          <ul className="space-y-1 text-sm">
            {f.improvements.map((s, i) => (
              <li key={i} className="flex gap-2"><span className="text-muted-foreground">•</span>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}