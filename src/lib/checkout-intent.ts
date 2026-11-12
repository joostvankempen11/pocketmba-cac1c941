export type CheckoutPlan = "tuition";

export function parseCheckoutPlan(value: unknown): CheckoutPlan | undefined {
  return value === "tuition" ? value : undefined;
}

const STORAGE_KEY = "mba-checkout-intent";
const MAX_AGE = 24 * 60 * 60 * 1000;

export function rememberCheckoutPlan(plan: CheckoutPlan) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ plan, expiresAt: Date.now() + MAX_AGE }));
  } catch { /* The URL still preserves the plan when storage is unavailable. */ }
}

export function recallCheckoutPlan(): CheckoutPlan | undefined {
  try {
    return readCheckoutIntent(localStorage.getItem(STORAGE_KEY), Date.now());
  } catch { return undefined; }
}

export function readCheckoutIntent(value: string | null, now: number): CheckoutPlan | undefined {
  try {
    const intent = JSON.parse(value ?? "null");
    if (!intent || typeof intent.expiresAt !== "number" || intent.expiresAt <= now) return undefined;
    return parseCheckoutPlan(intent.plan);
  } catch { return undefined; }
}

export function clearCheckoutPlan() {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* Storage is optional. */ }
}

export function checkoutDestination(plan: CheckoutPlan, signedIn: boolean) {
  return signedIn
    ? { to: "/checkout" as const, search: { plan } }
    : { to: "/auth" as const, search: { mode: "signup", plan } };
}

export function alreadyHasSubscription(status: string | undefined) {
  return status === "free_beta" || status === "active";
}