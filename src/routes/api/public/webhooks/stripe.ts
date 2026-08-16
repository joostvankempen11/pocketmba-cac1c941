import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

function verifyStripeSignature(payload: string, header: string | null, secret: string) {
  if (!header) return false;
  const parts = Object.fromEntries(
    header.split(",").map((p) => {
      const [k, ...rest] = p.split("=");
      return [k.trim(), rest.join("=")];
    }),
  ) as Record<string, string>;
  const timestamp = parts["t"];
  const signature = parts["v1"];
  if (!timestamp || !signature) return false;
  const expected = createHmac("sha256", secret).update(`${timestamp}.${payload}`).digest("hex");
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const Route = createFileRoute("/api/public/webhooks/stripe")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env['STRIPE_WEBHOOK_SECRET'];
        if (!secret) {
          // Stripe isn't configured yet — acknowledge without doing anything.
          return new Response("Payments not configured", { status: 503 });
        }

        const body = await request.text();
        if (!verifyStripeSignature(body, request.headers.get("stripe-signature"), secret)) {
          return new Response("Invalid signature", { status: 401 });
        }

        const event = JSON.parse(body) as { type: string; data: { object: any } };
        const { getSupabaseAdmin } = await import("@/lib/billing.server");
        const admin = getSupabaseAdmin();
        const obj = event.data.object;

        async function findUserId(): Promise<string | null> {
          const metaId = obj?.metadata?.supabase_user_id;
          if (metaId) return metaId as string;
          const customerId = typeof obj?.customer === "string" ? obj.customer : null;
          if (!customerId) return null;
          const { data } = await admin
            .from("profiles")
            .select("id")
            .eq("stripe_customer_id", customerId)
            .maybeSingle();
          return data?.id ?? null;
        }

        const userId = await findUserId();
        if (!userId) return new Response("ok");

        switch (event.type) {
          case "checkout.session.completed": {
            await admin
              .from("profiles")
              .update({
                stripe_customer_id: typeof obj.customer === "string" ? obj.customer : null,
                stripe_subscription_id:
                  typeof obj.subscription === "string" ? obj.subscription : null,
              })
              .eq("id", userId);
            break;
          }
          case "customer.subscription.created":
          case "customer.subscription.updated": {
            const plan = obj?.metadata?.plan === "yearly" ? "yearly" : "monthly";
            const status =
              obj.status === "trialing"
                ? "trialing"
                : obj.status === "active"
                  ? "active"
                  : obj.status === "canceled"
                    ? "canceled"
                    : obj.status === "past_due" || obj.status === "unpaid"
                      ? "expired"
                      : "canceled";
            await admin
              .from("profiles")
              .update({
                subscription_status: status,
                subscription_plan: plan,
                stripe_subscription_id: obj.id ?? null,
                trial_ends_at: obj.trial_end ? new Date(obj.trial_end * 1000).toISOString() : null,
              })
              .eq("id", userId);
            break;
          }
          case "customer.subscription.deleted": {
            await admin
              .from("profiles")
              .update({ subscription_status: "canceled" })
              .eq("id", userId);
            break;
          }
          case "invoice.payment_failed": {
            await admin.from("profiles").update({ subscription_status: "expired" }).eq("id", userId);
            break;
          }
          default:
            break;
        }

        return new Response("ok");
      },
    },
  },
});
