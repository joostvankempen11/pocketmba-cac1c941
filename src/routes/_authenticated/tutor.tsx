import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { TutorChat } from "@/components/TutorChat";

export const Route = createFileRoute("/_authenticated/tutor")({
  head: () => ({ meta: [
    { title: "AI Tutor — 12-Week MBA" },
    { name: "description", content: "Study business concepts and worked examples with your MBA tutor." },
    { property: "og:title", content: "AI Tutor — 12-Week MBA" },
    { property: "og:description", content: "Study business concepts and worked examples with your MBA tutor." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: TutorPage,
});

function TutorPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">AI Tutor</h1>
        <p className="mt-2 text-muted-foreground">
          Ask about anything in the curriculum — concepts, worked examples, study help, or how to think about a real business situation.
        </p>
        <div className="mt-6">
          <TutorChat sessionId="tutor-global" />
        </div>
      </div>
    </AppShell>
  );
}