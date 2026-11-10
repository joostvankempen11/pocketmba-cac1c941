import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

test("new signups receive a seven-day trial, not first-ten lifetime access", () => {
  const sql = readFileSync(new URL("../drizzle/migrations/0000_end_first_ten_free_signup_offer.sql", import.meta.url), "utf8");
  expect(sql).toContain("VALUES (NEW.id, NEW.email, 'trialing', now() + interval '7 days')");
  expect(sql).not.toMatch(/free_beta|beta_free|beta_user_number|rank|count\(\*\)/i);
  expect(sql).not.toMatch(/\bUPDATE\s+public\.profiles|\bDELETE\s+FROM\s+public\.profiles/i);
});