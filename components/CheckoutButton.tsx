"use client";

import { useState } from "react";
import { Tier } from "@/lib/tiers";

type Props = {
  tier: Tier;
};

export default function CheckoutButton({ tier }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierId: tier.id }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error || "Something went wrong. Try again.");
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="block w-full font-bangers text-xl tracking-widest px-4 py-3 text-center border-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
        style={{
          backgroundColor: tier.textColor,
          color: tier.color,
          borderColor: tier.color,
        }}
      >
        {loading ? "LOADING..." : `GET ${tier.name.toUpperCase()} →`}
      </button>
      {error && (
        <p className="mt-2 font-comic text-xs text-twb-red text-center">{error}</p>
      )}
    </div>
  );
}
