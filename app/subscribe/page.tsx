import SubscriptionCard from "@/components/SubscriptionCard";
import { tiers } from "@/lib/tiers";
import CheckoutButton from "@/components/CheckoutButton";

export default function SubscribePage() {
  return (
    <div className="halftone-bg min-h-screen">
      {/* Header */}
      <div className="bg-twb-panel border-b-4 border-twb-yellow py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-twb-red text-twb-white font-bangers text-sm tracking-widest px-3 py-1 mb-3 border-2 border-black shadow-comic">
            CHOOSE YOUR LEVEL
          </div>
          <h1 className="font-bangers text-6xl text-twb-yellow tracking-widest mb-2">SUBSCRIBE</h1>
          <p className="font-comic text-twb-white/60 max-w-lg mx-auto">
            Start at Noob for free — no credit card needed. Upgrade any time to unlock more strips, downloads, and weirdness.
          </p>
        </div>
      </div>

      {/* Tier grid */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div key={tier.id} className="flex flex-col">
              <div
                className={`border-2 flex flex-col flex-1 transition-all ${
                  tier.id === "meister"
                    ? "translate-x-[-4px] translate-y-[-4px]"
                    : "hover:translate-x-[-3px] hover:translate-y-[-3px]"
                }`}
                style={{
                  backgroundColor: tier.color,
                  borderColor: tier.textColor,
                  boxShadow:
                    tier.id === "meister"
                      ? `6px 6px 0px ${tier.textColor}`
                      : `4px 4px 0px #000`,
                }}
              >
                {/* Popular badge */}
                {tier.id === "meister" && (
                  <div
                    className="font-bangers text-sm tracking-widest text-center py-2 border-b-2"
                    style={{ backgroundColor: tier.textColor, color: tier.color, borderColor: tier.color }}
                  >
                    ★ MOST POPULAR ★
                  </div>
                )}

                {/* Header */}
                <div className="p-6 border-b-2" style={{ borderColor: tier.textColor + "40" }}>
                  <h3 className="font-bangers text-4xl tracking-widest mb-1" style={{ color: tier.textColor }}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    {tier.price === 0 ? (
                      <span className="font-bangers text-5xl" style={{ color: tier.textColor }}>FREE</span>
                    ) : (
                      <>
                        <span className="font-bangers text-5xl" style={{ color: tier.textColor }}>${tier.price}</span>
                        <span className="font-comic text-sm" style={{ color: tier.textColor + "80" }}>one-time</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="font-bangers text-base" style={{ color: tier.textColor }}>✓</span>
                        <span className="font-comic text-sm text-twb-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  {tier.price === 0 ? (
                    <a
                      href="/comics"
                      className="block font-bangers text-xl tracking-widest px-4 py-3 text-center border-2 transition-all hover:opacity-90"
                      style={{
                        backgroundColor: tier.textColor,
                        color: tier.color,
                        borderColor: tier.color,
                      }}
                    >
                      START FREE →
                    </a>
                  ) : (
                    <CheckoutButton tier={tier} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="font-bangers text-3xl text-twb-yellow tracking-widest mb-8 text-center">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is this a one-time payment?",
                a: "Yes — every tier is a one-time payment. Pay once, keep your access forever. No recurring charges.",
              },
              {
                q: "What counts as a 'download'?",
                a: "Each comic strip is one download. HD downloads are full resolution PNG files.",
              },
              {
                q: "What payment methods are accepted?",
                a: "All major credit/debit cards via Stripe. Safe, secure, and simple.",
              },
              {
                q: "Is the free Noob tier really free?",
                a: "100% free. No credit card, no trial period — just sign up and start reading.",
              },
            ].map((item, i) => (
              <div key={i} className="comic-panel p-5">
                <h4 className="font-bangers text-lg text-twb-yellow tracking-widest mb-2">{item.q}</h4>
                <p className="font-comic text-sm text-twb-white/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
