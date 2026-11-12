import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Check, GraduationCap, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useBillingStatus } from "@/lib/billing";
import { PRICES, formatPrice, useCurrency } from "@/lib/currency";
import { supabase } from "@/integrations/supabase/client";
import { checkoutDestination, rememberCheckoutPlan } from "@/lib/checkout-intent";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Tuition — 12-Week MBA" },
      { name: "description", content: "One-time tuition of $997 (regularly $1,497) for lifetime access to the full 12-week MBA program." },
      { property: "og:title", content: "Tuition — 12-Week MBA" },
      { property: "og:description", content: "Pay once: $997 instead of $1,497. Lifetime access, no recurring fees." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Pricing,
});

const features = [
  "Full 12-week MBA curriculum (48 deep-dive lessons)",
  "24/7 personal AI MBA tutor",
  "Hands-on business exercises with instant feedback",
  "Capstone project and shareable certificate",
  "All future curriculum updates included",
  "30-day risk-free money-back guarantee",
];

function Pricing() {
  const navigate = useNavigate();
  const { data: billing } = useBillingStatus();
  const currency = useCurrency();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const configured = billing?.configured ?? false;
  const price = formatPrice(PRICES.tuition, currency);
  const regular = formatPrice(PRICES.tuitionRegular, currency);
  const saving = formatPrice(PRICES.tuitionRegular - PRICES.tuition, currency);

  async function enroll() {
    setError(null);
    setBusy(true);
    try {
      rememberCheckoutPlan("tuition");
      const { data } = await supabase.auth.getSession();
      await navigate(checkoutDestination("tuition", Boolean(data.session)));
    } catch {
      setError("Unable to continue right now. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-xl">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-semibold">12-Week MBA</span>
        </Link>
        <h1 className="mt-10 text-3xl font-semibold tracking-tight">Tuition</h1>
        <p className="mt-2 text-muted-foreground">One payment. Lifetime access. No subscriptions.</p>

        <div className="mt-8 rounded-xl border border-primary bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Early enrollment tuition</div>
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Save {saving}</span>
          </div>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <span className="text-xl text-muted-foreground line-through" aria-label={`Regular price ${regular}`}>{regular}</span>
            <span className="text-4xl font-semibold">{price}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">One-time payment · Full lifetime access</p>

          <ul className="mt-6 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {f}
              </li>
            ))}
          </ul>

          {configured ? (
            <Button onClick={enroll} disabled={busy} className="mt-6 w-full">
              {busy ? "Opening checkout…" : `Enroll now — ${price}`}
            </Button>
          ) : (
            <p className="mt-6 rounded-lg border border-border p-4 text-sm text-muted-foreground">
              Payments aren't set up yet — check back soon.
            </p>
          )}
          <p className="mt-3 text-center text-xs text-muted-foreground">No recurring charges · No monthly fees</p>

          <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="text-sm">
              <p className="font-semibold">30-day 100% money-back guarantee</p>
              <p className="mt-1 text-muted-foreground">
                Explore the full program risk-free. If it's not the right fit, get a full refund within 30 days — no questions asked.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-5 text-center text-sm">
          <p className="font-semibold">Want to explore first?</p>
          <p className="mt-1 text-muted-foreground">Start your 7-day free trial — instant full access, no card needed.</p>
          <Link to="/auth" search={{ mode: "signup" } as never} className="mt-3 inline-block font-medium text-primary underline underline-offset-4">
            Start 7-day free trial
          </Link>
        </div>

        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
