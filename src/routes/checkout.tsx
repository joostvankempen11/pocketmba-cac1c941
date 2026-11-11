import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/Button";
import { supabase } from "@/integrations/supabase/client";
import { startCheckout } from "@/lib/billing";
import { fetchMyProfile } from "@/lib/profile";
import { alreadyHasSubscription, clearCheckoutPlan, parseCheckoutPlan, recallCheckoutPlan, rememberCheckoutPlan } from "@/lib/checkout-intent";

export const Route = createFileRoute("/checkout")({
  validateSearch: (search: Record<string, unknown>) => ({ plan: parseCheckoutPlan(search.plan) }),
  head: () => ({ meta: [
    { title: "Checkout — The Unofficial MBA" },
    { name: "description", content: "Complete your selected Unofficial MBA membership securely with Stripe." },
    { property: "og:title", content: "Checkout — The Unofficial MBA" },
    { property: "og:description", content: "Complete your selected Unofficial MBA membership securely with Stripe." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Checkout,
});

function Checkout() {
  const { plan: selectedPlan } = Route.useSearch();
  const navigate = useNavigate();
  const started = useRef(false);
  const [error, setError] = useState<string | null>(null);

  const proceed = useCallback(async () => {
    setError(null);
    try {
      const plan = selectedPlan ?? recallCheckoutPlan();
      if (!plan) { await navigate({ to: "/pricing", replace: true }); return; }
      rememberCheckoutPlan(plan);
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        await navigate({ to: "/auth", search: { mode: "signup", plan }, replace: true });
        return;
      }
      const profile = await fetchMyProfile();
      if (alreadyHasSubscription(profile?.subscription_status)) {
        clearCheckoutPlan();
        await navigate({ to: "/dashboard", replace: true });
        return;
      }
      const message = await startCheckout(plan);
      if (message) setError(message);
    } catch {
      setError("Checkout couldn't open. Please try again or choose another plan.");
    }
  }, [navigate, selectedPlan]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    void proceed();
  }, [proceed]);

  return <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
    <div className="max-w-md text-center">
      {!error && <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-primary motion-reduce:animate-none" aria-hidden="true" />}
      <h1 className="text-2xl font-semibold">{error ? "Checkout couldn't open" : "Opening secure checkout…"}</h1>
      {error && <>
        <p role="alert" className="mt-3 text-sm text-destructive">{error}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button onClick={() => void proceed()}>Try again</Button>
          <Link to="/pricing" onClick={clearCheckoutPlan} className="rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">Back to pricing</Link>
        </div>
      </>}
    </div>
  </main>;
}