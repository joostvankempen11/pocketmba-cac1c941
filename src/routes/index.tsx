import { createFileRoute, Link } from "@tanstack/react-router";
import { weeks } from "@/content/curriculum";
import { ArrowRight, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "12-Week MBA — A self-paced business education" },
      { name: "description", content: "Twelve weeks, ten disciplines: lessons, an AI tutor, AI-graded assignments and a capstone. Free 7-day trial." },
      { property: "og:title", content: "12-Week MBA" },
      { property: "og:description", content: "Build solid business foundations in 12 weeks. Free 7-day trial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-semibold">12-Week MBA</span>
        </div>
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/pricing" className="rounded-md px-3 py-2 hover:bg-accent">Pricing</Link>
          <Link
            to="/auth"
            className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
          >
            Sign in
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          An MBA for the rest of us
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Twelve weeks. Ten core disciplines. Real rigor — lessons you can read, a tutor you can ask anything,
          assignments graded against a rubric by AI, and a capstone that pulls it all together.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/auth"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"
          >
            See pricing
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          The first 10 members get lifetime access, free.
        </p>

        <h2 className="mt-16 text-lg font-semibold">The curriculum</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {weeks.map((w) => (
            <div key={w.week} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted font-semibold">
                {w.week}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-medium">{w.title}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{w.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
