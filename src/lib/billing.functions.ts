import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/** Public: tells the UI whether card payments are switched on. */
export const getBillingStatus = createServerFn({ method: "GET" }).handler(async () => {
  const { getStripeConfig, PAYMENTS_UNAVAILABLE_MESSAGE } = await import("./billing.server");
  const configured = getStripeConfig() !== null;
  return {
    configured,
    message: configured ? null : PAYMENTS_UNAVAILABLE_MESSAGE,
  };
});

const checkoutInput = z.object({
  plan: z.enum(["monthly", "yearly"]),
  accessToken: z.string().min(1),
  origin: z.string().url(),
});

export const createCheckoutSession = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => checkoutInput.parse(data))
  .handler(async ({ data }) => {
    const {
      getStripeConfig,
      PAYMENTS_UNAVAILABLE_MESSAGE,
      stripeRequest,
      getSupabaseAdmin,
      getUserFromToken,
    } = await import("./billing.server");

    const config = getStripeConfig();
    if (!config) return { ok: false as const, message: PAYMENTS_UNAVAILABLE_MESSAGE };

    const user = await getUserFromToken(data.accessToken);
    if (!user) return { ok: false as const, message: "Please sign in again." };

    const admin = getSupabaseAdmin();
    const { data: profile } = await admin
      .from("profiles")
      .select("stripe_customer_id, subscription_status")
      .eq("id", user.id)
      .maybeSingle();

    // Beta members never go through Stripe.
    if (profile?.subscription_status === "free_beta") {
      return { ok: false as const, message: "You have free beta access — no payment needed." };
    }

    let customerId = profile?.stripe_customer_id ?? null;
    if (!customerId) {
      const customer = await stripeRequest<{ id: string }>(config.secretKey, "customers", {
        email: user.email ?? "",
        "metadata[supabase_user_id]": user.id,
      });
      customerId = customer.id;
      await admin.from("profiles").update({ stripe_customer_id: customerId }).eq("id", user.id);
    }

    const params: Record<string, string> = {
      mode: "subscription",
      customer: customerId,
      "line_items[0][price]":
        data.plan === "monthly" ? config.monthlyPriceId : config.yearlyPriceId,
      "line_items[0][quantity]": "1",
      success_url: `${data.origin}/dashboard`,
      cancel_url: `${data.origin}/pricing`,
      "subscription_data[metadata][supabase_user_id]": user.id,
      "subscription_data[metadata][plan]": data.plan,
      "metadata[supabase_user_id]": user.id,
    };
    if (data.plan === "monthly") {
      params["subscription_data[trial_period_days]"] = "7";
      params["payment_method_collection"] = "always";
    }

    const session = await stripeRequest<{ url: string }>(config.secretKey, "checkout/sessions", params);
    return { ok: true as const, url: session.url };
  });

const portalInput = z.object({
  accessToken: z.string().min(1),
  origin: z.string().url(),
});

export const createPortalSession = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => portalInput.parse(data))
  .handler(async ({ data }) => {
    const {
      getStripeConfig,
      PAYMENTS_UNAVAILABLE_MESSAGE,
      stripeRequest,
      getSupabaseAdmin,
      getUserFromToken,
    } = await import("./billing.server");

    const config = getStripeConfig();
    if (!config) return { ok: false as const, message: PAYMENTS_UNAVAILABLE_MESSAGE };

    const user = await getUserFromToken(data.accessToken);
    if (!user) return { ok: false as const, message: "Please sign in again." };

    const admin = getSupabaseAdmin();
    const { data: profile } = await admin
      .from("profiles")
      .select("stripe_customer_id, subscription_status")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.subscription_status === "free_beta") {
      return { ok: false as const, message: "You have free beta access — there's nothing to bill." };
    }
    if (!profile?.stripe_customer_id) {
      return { ok: false as const, message: "No billing account yet — choose a plan first." };
    }

    const session = await stripeRequest<{ url: string }>(config.secretKey, "billing_portal/sessions", {
      customer: profile.stripe_customer_id,
      return_url: `${data.origin}/account`,
    });
    return { ok: true as const, url: session.url };
  });
