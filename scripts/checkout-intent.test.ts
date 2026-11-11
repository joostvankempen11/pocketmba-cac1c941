import { expect, test } from "bun:test";
import { alreadyHasSubscription, checkoutDestination, parseCheckoutPlan, readCheckoutIntent } from "../src/lib/checkout-intent";

test("monthly selection sends signed-out visitors to sign-up with the plan preserved", () => {
  expect(checkoutDestination("monthly", false)).toEqual({ to: "/auth", search: { mode: "signup", plan: "monthly" } });
});
test("yearly selection sends signed-out visitors to sign-up with the plan preserved", () => {
  expect(checkoutDestination("yearly", false)).toEqual({ to: "/auth", search: { mode: "signup", plan: "yearly" } });
});
test("signed-in visitors continue to checkout for their selected plan", () => {
  expect(checkoutDestination("yearly", true)).toEqual({ to: "/checkout", search: { plan: "yearly" } });
  expect(checkoutDestination("monthly", true)).toEqual({ to: "/checkout", search: { plan: "monthly" } });
});
test("only supported plans can resume checkout, never arbitrary URLs", () => {
  expect(parseCheckoutPlan("https://example.com")).toBeUndefined();
  expect(parseCheckoutPlan("unknown")).toBeUndefined();
  expect(parseCheckoutPlan("monthly")).toBe("monthly");
});
test("confirmation can resume an unexpired plan but not stale or invalid intent", () => {
  expect(readCheckoutIntent('{"plan":"yearly","expiresAt":200}', 100)).toBe("yearly");
  expect(readCheckoutIntent('{"plan":"monthly","expiresAt":100}', 100)).toBeUndefined();
  expect(readCheckoutIntent("invalid", 100)).toBeUndefined();
});
test("legacy beta and paid members skip new subscription checkout", () => {
  expect(alreadyHasSubscription("free_beta")).toBe(true);
  expect(alreadyHasSubscription("active")).toBe(true);
  expect(alreadyHasSubscription("trialing")).toBe(false);
  expect(alreadyHasSubscription("expired")).toBe(false);
});