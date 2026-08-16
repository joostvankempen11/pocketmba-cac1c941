// Server-only Stripe helpers. Everything degrades gracefully when the Stripe
// secrets are absent — the app must keep working (especially the free_beta
// flow, which never touches Stripe at all).
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type StripeConfig = {
  secretKey: string;
  monthlyPriceId: string;
  yearlyPriceId: string;
};

/** Returns null when Stripe isn't configured yet. Read per-request. */
export function getStripeConfig(): StripeConfig | null {
  const secretKey = process.env['STRIPE_SECRET_KEY'];
  const monthlyPriceId = process.env['STRIPE_MONTHLY_PRICE_ID'];
  const yearlyPriceId = process.env['STRIPE_YEARLY_PRICE_ID'];
  if (!secretKey || !monthlyPriceId || !yearlyPriceId) return null;
  return { secretKey, monthlyPriceId, yearlyPriceId };
}

export const PAYMENTS_UNAVAILABLE_MESSAGE =
  "Payments aren't set up yet — check back soon.";

/** Minimal Stripe REST client (no SDK, Workers-safe). */
export async function stripeRequest<T = unknown>(
  secretKey: string,
  path: string,
  params?: Record<string, string>,
): Promise<T> {
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: params ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params ? new URLSearchParams(params).toString() : undefined,
  });
  const json = (await res.json()) as any;
  if (!res.ok) throw new Error(json?.error?.message ?? "Stripe request failed");
  return json as T;
}

export function getSupabaseAdmin() {
  return createClient<Database>(
    process.env['SUPABASE_URL']!,
    process.env['SUPABASE_SERVICE_ROLE_KEY']!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

/** Validates a bearer token and returns the user id, or null. */
export async function getUserFromToken(accessToken: string | undefined) {
  if (!accessToken) return null;
  const admin = getSupabaseAdmin();
  const { data, error } = await admin.auth.getUser(accessToken);
  if (error || !data.user) return null;
  return data.user;
}
