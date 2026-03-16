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
      "Access to all public strips",
      "1 free download",
      "Community access",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 1,
    color: "#1A3A5C",
    textColor: "#7EC8E3",
    badge: "$1",
    priceEnvKey: "STRIPE_PRICE_PRO",
    features: [
      "Everything in Noob",
      "5 HD downloads",
      "Early access to new strips",
    ],
  },
  {
    id: "expert",
    name: "Expert",
    price: 2,
    color: "#1A3A1A",
    textColor: "#7ED87E",
    badge: "$2",
    priceEnvKey: "STRIPE_PRICE_EXPERT",
    features: [
      "Everything in Pro",
      "15 HD downloads",
      "Access to strip archive",
    ],
  },
  {
    id: "hacker",
    name: "Hacker",
    price: 3,
    color: "#2A1A3A",
    textColor: "#C87ED8",
    badge: "$3",
    priceEnvKey: "STRIPE_PRICE_HACKER",
    features: [
      "Everything in Expert",
      "Unlimited downloads",
      "Behind-the-scenes sketches",
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
      "Everything in Hacker",
      "Exclusive Meister-only strips",
      "Wallpaper packs",
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
      "Name in credits",
      "Signed digital prints",
      "Direct message the artist",
      "Vote on upcoming strip ideas",
    ],
  },
];
