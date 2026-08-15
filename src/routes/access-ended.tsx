import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useProfile } from "@/lib/profile";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/access-ended")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Access ended — 12-Week MBA" },
      { name: "description", content: "Your subscription has ended. Resubscribe to continue your 12-week MBA program." },
      { property: "og:title", content: "Access ended — 12-Week MBA" },
      { property: "og:description", content: "Resubscribe to continue your 12-week MBA program." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AccessEnded,
});

function AccessEnded() {
  const { data: profile } = useProfile();
  const navigate = useNavigate();
  const expired = profile?.subscription_status === "expired";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {expired ? "Your last payment failed" : "Your access has ended"}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {expired
            ? "We couldn't charge your card. Update your payment details to restore access to the program."
            : "Your subscription is no longer active. Resubscribe to pick up exactly where you left off."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            to="/pricing"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {expired ? "Update payment details" : "Resubscribe"}
          </Link>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              navigate({ to: "/auth", replace: true });
            }}
            className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}