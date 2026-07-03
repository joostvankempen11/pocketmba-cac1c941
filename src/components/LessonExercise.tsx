import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useServerFn } from "@tanstack/react-start";
import { Lightbulb, Send, Loader2 } from "lucide-react";
import type { Exercise } from "@/content/types";
import { exerciseFeedback } from "@/lib/exercise.functions";

export function LessonExercise({
  lessonTitle,
  exercise,
}: {
  lessonTitle: string;
  exercise: Exercise;
}) {
  const runFeedback = useServerFn(exerciseFeedback);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    const text = answer.trim();
    if (!text || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await runFeedback({
        data: {
          lessonTitle,
          scenario: exercise.scenario,
          task: exercise.task,
          submission: text,
        },
      });
      setFeedback(res.feedback);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-10">
      <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-5 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <Lightbulb className="h-4 w-4" /> Apply it — exercise
        </div>
        <h2 className="mt-2 text-xl font-semibold tracking-tight">Put the concept to work</h2>

        <div className="mt-4 space-y-3 text-sm leading-relaxed">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Scenario</div>
            <p className="mt-1">{exercise.scenario}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Your task</div>
            <p className="mt-1">{exercise.task}</p>
          </div>
        </div>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={7}
          placeholder="Write your answer here — aim for roughly 100–200 words. The AI tutor will give inline feedback below."
          className="mt-4 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          disabled={loading}
        />

        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={submit}
            disabled={loading || !answer.trim()}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {feedback ? "Resubmit for feedback" : "Submit for feedback"}
          </button>
          {loading && <span className="text-xs text-muted-foreground">Tutor is reading your answer…</span>}
        </div>

        {error && (
          <div className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {feedback && !loading && (
          <div className="mt-5 rounded-md border border-border bg-card p-4">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Tutor feedback</div>
            <div className="markdown text-sm leading-relaxed">
              <ReactMarkdown>{feedback}</ReactMarkdown>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              Edit your answer above and resubmit to get another round of feedback.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}