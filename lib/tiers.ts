export type Tier = {
  id: string;
  name: string;
  price: number; // one-time payment in USD, 0 = free
  color: string;
  textColor: string;
  badge: string;
  features: string[];
  priceEnvKey?: string; // maps to .env STRIPE_PRICE_* key
};

export const tiers: Tier[] = [
  {
    id: "noob",
    name: "Noob",
    price: 0,
    color: "#2A2A2A",
    textColor: "#F8F9FA",
    badge: "FREE",
    features: [
      "Access to all Noob strips",
      "Community access",
    ],
  },
  {
    id: "meister",
    name: "Meister",
    price: 5,
    color: "#3A2A00",
    textColor: "#FFE000",
    badge: "$5",
    priceEnvKey: "STRIPE_PRICE_MEISTER",
    features: [
      "Everything in Noob",
      "Access to all Meister strips",
      "Priority request queue",
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    price: 10,
    color: "#001A2A",
    textColor: "#A8D8FF",
    badge: "$10",
    priceEnvKey: "STRIPE_PRICE_DIAMOND",
    features: [
      "Everything in Meister",
      "Access to every strip on the site",
      "Signed digital prints",
      "Direct message the artist",
      "Vote on upcoming strip ideas",
    ],
  },
];
