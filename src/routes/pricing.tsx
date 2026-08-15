import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — 12-Week MBA" },
      { name: "description", content: "€29,99 per month or €119 per year for the full 12-week MBA program, with a 7-day free trial." },
      { property: "og:title", content: "Pricing — 12-Week MBA" },
      { property: "og:description", content: "€29,99 monthly or €119 yearly. 7-day free trial. Cancel anytime." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Pricing,
});

const features = [
  "12 weeks of structured lessons across 10 disciplines",
  "AI tutor available around the clock",
  "Quizzes and AI-graded assignments with rubric feedback",
  "Hands-on exercises in every lesson",
  "Capstone project",
];

function Pricing() {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-semibold">12-Week MBA</span>
        </Link>
        <h1 className="mt-10 text-3xl font-semibold tracking-tight">Simple pricing</h1>
        <p className="mt-2 text-muted-foreground">
          Start with a 7-day free trial. Cancel anytime. The first 10 members join free, forever.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <PlanCard
            name="Monthly"
            price="€29,99"
            period="per month"
            note="7-day free trial, then billed monthly."
          />
          <PlanCard
            name="Yearly"
            price="€119"
            period="per year"
            note="Billed once a year — roughly two-thirds off the monthly price."
            highlight
          />
        </div>

        <ul className="mt-10 grid gap-2 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-10 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
          Card payments are not switched on yet for this app. Accounts, the free-beta places and the
          7-day trial all work today; checkout will be connected once billing is activated.
        </p>
      </div>
    </div>
  );
}

function PlanCard({
  name,
  price,
  period,
  note,
  highlight,
}: {
  name: string;
  price: string;
  period: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "rounded-xl border bg-card p-6 " + (highlight ? "border-primary" : "border-border")
      }
    >
      <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{name}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-semibold">{price}</span>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{note}</p>
      <Link
        to="/auth"
        className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Get started
      </Link>
    </div>
  );
}