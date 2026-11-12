import { expect, test } from "bun:test";
import { alreadyHasSubscription, checkoutDestination, parseCheckoutPlan, readCheckoutIntent } from "../src/lib/checkout-intent";
import { PRICES } from "../src/lib/currency";

test("tuition is a one-time $997 payment shown against a $1,497 regular price", () => {
  expect(PRICES.tuition).toBe(997);
  expect(PRICES.tuitionRegular).toBe(1497);
});
test("signed-out visitors go to sign-up with tuition preserved", () => {
  expect(checkoutDestination("tuition", false)).toEqual({ to: "/auth", search: { mode: "signup", plan: "tuition" } });
});
test("signed-in visitors continue to tuition checkout", () => {
  expect(checkoutDestination("tuition", true)).toEqual({ to: "/checkout", search: { plan: "tuition" } });
});
test("monthly and yearly plans are no longer offered", () => {
  expect(parseCheckoutPlan("monthly")).toBeUndefined();
  expect(parseCheckoutPlan("yearly")).toBeUndefined();
  expect(parseCheckoutPlan("https://example.com")).toBeUndefined();
  expect(parseCheckoutPlan("tuition")).toBe("tuition");
});
test("stale or invalid intent cannot resume checkout", () => {
  expect(readCheckoutIntent('{"plan":"tuition","expiresAt":200}', 100)).toBe("tuition");
  expect(readCheckoutIntent('{"plan":"tuition","expiresAt":100}', 100)).toBeUndefined();
  expect(readCheckoutIntent("invalid", 100)).toBeUndefined();
});
test("beta and paid members skip checkout", () => {
  expect(alreadyHasSubscription("free_beta")).toBe(true);
  expect(alreadyHasSubscription("active")).toBe(true);
  expect(alreadyHasSubscription("trialing")).toBe(false);
});
