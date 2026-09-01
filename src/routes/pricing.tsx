import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, GraduationCap } from "lucide-react";
import { useState } from "react";
import { useBillingStatus, startCheckout } from "@/lib/billing";
import { PRICES, formatPrice, useCurrency } from "@/lib/currency";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — 12-Week MBA" },
      { name: "description", content: "€29,99 per month or €119,99 per year for the full 12-week MBA program, with a 7-day free trial." },
      { property: "og:title", content: "Pricing — 12-Week MBA" },
      { property: "og:description", content: "€29,99 monthly or €119,99 yearly. 7-day free trial. Cancel anytime." },
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
  const { data: billing } = useBillingStatus();
  const currency = useCurrency();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const configured = billing?.configured ?? false;

  async function choose(plan: "monthly" | "yearly") {
    setError(null);
    setBusy(plan);
    const msg = await startCheckout(plan);
    if (msg) setError(msg);
    setBusy(null);
  }

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
            price={formatPrice(PRICES.monthly, currency)}
            period="per month"
            note="7-day free trial, then billed monthly."
            configured={configured}
            busy={busy === "monthly"}
            onChoose={() => choose("monthly")}
          />
          <PlanCard
            name="Yearly"
            price={formatPrice(PRICES.yearly, currency)}
            period="per year"
            note="Billed once a year — roughly 66% off the monthly plan."
            highlight
            configured={configured}
            busy={busy === "yearly"}
            onChoose={() => choose("yearly")}
          />
        </div>

        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

        <ul className="mt-10 grid gap-2 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>

        {!configured && (
          <p className="mt-10 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
            Payments aren't set up yet — check back soon. Accounts and the free-beta places work
            today; the first 10 members get full access without any payment.
          </p>
        )}
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
  configured,
  busy,
  onChoose,
}: {
  name: string;
  price: string;
  period: string;
  note: string;
  highlight?: boolean;
  configured: boolean;
  busy: boolean;
  onChoose: () => void;
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
      {configured ? (
        <button
          onClick={onChoose}
          disabled={busy}
          className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {busy ? "Opening checkout…" : "Get started"}
        </button>
      ) : (
        <Link
          to="/auth"
          className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Create your account
        </Link>
      )}
    </div>
  );
}