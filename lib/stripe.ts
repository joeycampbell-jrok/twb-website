import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
  typescript: true,
});

// Map tier IDs to their Stripe price env var
export const tierPriceMap: Record<string, string | undefined> = {
  pro: process.env.STRIPE_PRICE_PRO,
  expert: process.env.STRIPE_PRICE_EXPERT,
  hacker: process.env.STRIPE_PRICE_HACKER,
  meister: process.env.STRIPE_PRICE_MEISTER,
  diamond: process.env.STRIPE_PRICE_DIAMOND,
};
