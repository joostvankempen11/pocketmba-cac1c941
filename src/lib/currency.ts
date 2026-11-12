export type Currency = "EUR" | "USD";

export const PRICES = { monthly: 29.99, yearly: 119.99, tuition: 997, tuitionRegular: 1497 } as const;

/** Stripe charges in USD, so every visitor sees USD to match checkout exactly. */
export function detectCurrency(): Currency {
  return "USD";
}

export function useCurrency(): Currency {
  return "USD";
}

export function formatPrice(amount: number, currency: Currency): string {
  if (Number.isInteger(amount)) {
    const n = amount.toLocaleString(currency === "EUR" ? "de-DE" : "en-US");
    return currency === "EUR" ? `€${n}` : `$${n}`;
  }
  return currency === "EUR"
    ? `€${amount.toFixed(2).replace(".", ",")}`
    : `$${amount.toFixed(2)}`;
}
