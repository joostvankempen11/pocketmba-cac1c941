import { useEffect, useState } from "react";

export type Currency = "EUR" | "USD";

export const PRICES = { monthly: 29.99, yearly: 119.99 } as const;

/** Non-Europe/* zones that are still European (or euro-adjacent) territories. */
const EUROPEAN_EXTRA_TZ = new Set([
  "Atlantic/Canary",
  "Atlantic/Madeira",
  "Atlantic/Azores",
  "Atlantic/Faeroe",
  "Atlantic/Faroe",
  "Atlantic/Reykjavik",
  "Arctic/Longyearbyen",
]);

/**
 * Europe -> EUR, everywhere else -> USD (same numeric price, different symbol).
 * Browser time zone is used because it needs no network call or IP lookup.
 */
export function detectCurrency(): Currency {
  if (typeof Intl === "undefined") return "EUR";
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    if (tz.startsWith("Europe/") || EUROPEAN_EXTRA_TZ.has(tz)) return "EUR";
    return tz ? "USD" : "EUR";
  } catch {
    return "EUR";
  }
}

/** Hydration-safe: renders EUR on the server, then corrects on the client. */
export function useCurrency(): Currency {
  const [currency, setCurrency] = useState<Currency>("EUR");
  useEffect(() => setCurrency(detectCurrency()), []);
  return currency;
}

export function formatPrice(amount: number, currency: Currency): string {
  return currency === "EUR"
    ? `€${amount.toFixed(2).replace(".", ",")}`
    : `$${amount.toFixed(2)}`;
}
