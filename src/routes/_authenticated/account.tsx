import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { AppShell } from "@/components/AppShell";
import { supabase } from "@/integrations/supabase/client";
import { daysLeft, planLabel, useProfile } from "@/lib/profile";
import { useBillingStatus, openBillingPortal, startCheckout } from "@/lib/billing";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/_authenticated/account")({
  head: () => ({
    meta: [
      { title: "Account & billing — 12-Week MBA" },
      { name: "description", content: "Manage your 12-Week MBA plan, trial and billing details." },
      { property: "og:title", content: "Account & billing — 12-Week MBA" },
      { property: "og:description", content: "Manage your plan, trial and billing details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AccountPage,
});

const statusLabel: Record<string, string> = {
  trialing: "Free trial",
  active: "Active",
  free_beta: "Free beta access",
  canceled: "Canceled",
  expired: "Payment failed",
};

function AccountPage() {
  const { data: profile, isLoading } = useProfile();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: billing } = useBillingStatus();
  const [billingError, setBillingError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function run(fn: () => Promise<string | null>) {
    setBillingError(null);
    setBusy(true);
    const msg = await fn();
    if (msg) setBillingError(msg);
    setBusy(false);
  }

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Account & billing</h1>

        {isLoading && <p className="mt-6 text-sm text-muted-foreground">Loading your account…</p>}

        {profile && (
          <>
            {profile.beta_user_number && (
              <div className="mt-6 flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-4 py-3 text-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>
                  Beta user #{profile.beta_user_number} — free forever, thank you for joining early.
                </span>
              </div>
            )}

            <div className="mt-6 grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-2">
              <Field label="Email" value={profile.email ?? "—"} />
              <Field label="Status" value={statusLabel[profile.subscription_status] ?? profile.subscription_status} />
              <Field label="Plan" value={planLabel(profile.subscription_plan)} />
              <Field
                label={profile.subscription_status === "trialing" ? "Trial ends" : "Member since"}
                value={
                  profile.subscription_status === "trialing" && profile.trial_ends_at
                    ? `${new Date(profile.trial_ends_at).toLocaleDateString()} (${daysLeft(profile.trial_ends_at)} days left)`
                    : new Date(profile.created_at).toLocaleDateString()
                }
              />
            </div>

            {profile.subscription_status !== "free_beta" && (
              <div className="mt-6 rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold">Billing</h2>
                {billing?.configured ? (
                  <>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Manage your card, invoices or switch to the yearly plan.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        onClick={() => run(openBillingPortal)}
                        disabled={busy}
                        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                      >
                        Manage billing
                      </button>
                      {profile.subscription_plan !== "yearly" && (
                        <button
                          onClick={() => run(() => startCheckout("yearly"))}
                          disabled={busy}
                          className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent disabled:opacity-60"
                        >
                          Switch to yearly — €119
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Payments aren't set up yet — check back soon. You keep full access in the
                      meantime.
                    </p>
                    <Link
                      to="/pricing"
                      className="mt-4 inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
                    >
                      View plans
                    </Link>
                  </>
                )}
                {billingError && <p className="mt-3 text-sm text-destructive">{billingError}</p>}
              </div>
            )}

            <button
              onClick={signOut}
              className="mt-6 inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Sign out
            </button>
          </>
        )}
      </div>
    </AppShell>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}