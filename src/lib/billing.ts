import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { getBillingStatus, createCheckoutSession, createPortalSession } from "./billing.functions";

export const PAYMENTS_UNAVAILABLE_MESSAGE = "Payments aren't set up yet — check back soon.";

export function useBillingStatus() {
  return useQuery({
    queryKey: ["billing-status"],
    queryFn: () => getBillingStatus(),
    staleTime: 60_000,
  });
}

async function accessToken() {
  const { data } = await supabase.auth.getSession();
  return data.session?.access_token ?? null;
}

export async function startCheckout(plan: "monthly" | "yearly"): Promise<string | null> {
  const token = await accessToken();
  if (!token) return "Please sign in first.";
  const res = await createCheckoutSession({
    data: { plan, accessToken: token, origin: window.location.origin },
  });
  if (!res.ok) return res.message;
  window.location.href = res.url;
  return null;
}

export async function openBillingPortal(): Promise<string | null> {
  const token = await accessToken();
  if (!token) return "Please sign in first.";
  const res = await createPortalSession({
    data: { accessToken: token, origin: window.location.origin },
  });
  if (!res.ok) return res.message;
  window.location.href = res.url;
  return null;
}
