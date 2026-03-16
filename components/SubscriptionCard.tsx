"use client";

import Link from "next/link";
import { Tier } from "@/lib/tiers";

type Props = {
  tier: Tier;
  compact?: boolean;
  highlighted?: boolean;
};

export default function SubscriptionCard({ tier, compact = false, highlighted = false }: Props) {
  if (compact) {
    return (
      <div
        className="border-2 p-3 text-center transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer"
        style={{
          backgroundColor: tier.color,
          borderColor: tier.textColor,
          boxShadow: `3px 3px 0px #000`,
        }}
      >
        <p className="font-bangers text-xl tracking-widest mb-1" style={{ color: tier.textColor }}>
          {tier.name}
        </p>
        <p className="font-bangers text-sm" style={{ color: tier.textColor + "99" }}>
          {tier.badge}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`border-2 flex flex-col transition-all ${
        highlighted
          ? "translate-x-[-4px] translate-y-[-4px]"
          : "hover:translate-x-[-3px] hover:translate-y-[-3px]"
      }`}
      style={{
        backgroundColor: tier.color,
        borderColor: tier.textColor,
        boxShadow: highlighted ? `6px 6px 0px ${tier.textColor}` : `4px 4px 0px #000`,
      }}
    >
      {/* Header */}
      <div
        className="p-5 border-b-2"
        style={{ borderColor: tier.textColor + "50" }}
      >
        {highlighted && (
          <div
            className="inline-block font-bangers text-xs tracking-widest px-2 py-0.5 mb-2 border"
            style={{ backgroundColor: tier.textColor, color: tier.color, borderColor: tier.color }}
          >
            MOST POPULAR
          </div>
        )}
        <h3
          className="font-bangers text-3xl tracking-widest mb-1"
          style={{ color: tier.textColor }}
        >
          {tier.name}
        </h3>
        <div className="flex items-baseline gap-1">
          {tier.price === 0 ? (
            <span className="font-bangers text-4xl" style={{ color: tier.textColor }}>
              FREE
            </span>
          ) : (
            <>
              <span className="font-bangers text-4xl" style={{ color: tier.textColor }}>
                ${tier.price}
              </span>
              <span className="font-comic text-sm" style={{ color: tier.textColor + "80" }}>
                one-time
              </span>
            </>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="p-5 flex-1">
        <ul className="space-y-2">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span style={{ color: tier.textColor }} className="font-bangers text-base leading-5">✓</span>
              <span className="font-comic text-sm text-twb-white/70 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-5 pt-0">
        <Link
          href={tier.price === 0 ? "/comics" : `/subscribe?tier=${tier.id}`}
          className="block font-bangers text-lg tracking-widest px-4 py-3 text-center border-2 transition-all hover:opacity-90"
          style={{
            backgroundColor: tier.textColor,
            color: tier.color,
            borderColor: tier.color,
          }}
        >
          {tier.price === 0 ? "START FREE →" : `GET ${tier.name.toUpperCase()} →`}
        </Link>
      </div>
    </div>
  );
}
