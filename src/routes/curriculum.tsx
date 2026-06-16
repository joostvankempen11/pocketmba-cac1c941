import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { weeks } from "@/content/curriculum";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — 12-Week MBA" },
      { name: "description", content: "All twelve weeks of the MBA program." },
    ],
  }),
  component: Curriculum,
});

function Curriculum() {
  return (
    <AppShell>
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Curriculum</h1>
        <p className="mt-2 text-muted-foreground">
          A generalist MBA core. Each week is self-contained but builds on the previous ones.
        </p>
        <ol className="mt-8 space-y-3">
          {weeks.map((w) => (
            <li key={w.week}>
              <Link
                to="/week/$week"
                params={{ week: String(w.week) }}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted font-semibold">
                  {w.week}
                </div>
                <div>
                  <div className="font-medium">{w.title}</div>
                  <div className="mt-0.5 text-sm text-muted-foreground">{w.tagline}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {w.topics.map((t) => (
                      <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </AppShell>
  );
}