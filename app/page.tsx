import Link from "next/link";
import SubscriptionCard from "@/components/SubscriptionCard";
import { tiers } from "@/lib/tiers";

// Featured comic strip placeholders
const featuredStrips = [
  { id: 1, title: "The Void Stares Back", issue: "#001", tier: "Noob" },
  { id: 2, title: "Tuesday in Dimension X", issue: "#002", tier: "Noob" },
  { id: 3, title: "My Cat Is a Government Agent", issue: "#003", tier: "Pro" },
];

export default function HomePage() {
  return (
    <div className="halftone-bg">
      {/* HERO */}
      <section className="relative overflow-hidden bg-twb-black speed-lines min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-twb-black via-twb-black to-twb-panel" />

        {/* Big decorative text */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-5 select-none pointer-events-none">
          <span className="font-bangers text-[30vw] text-twb-yellow leading-none">TWB</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20">
          {/* Caption label */}
          <div className="inline-block bg-twb-red text-twb-white font-bangers text-sm tracking-widest px-3 py-1 mb-4 border-2 border-black shadow-comic">
            NEW STRIPS WEEKLY
          </div>

          <h1 className="font-bangers text-6xl sm:text-8xl lg:text-[10rem] text-twb-yellow leading-none tracking-wide mb-2">
            THE
          </h1>
          <h1 className="font-bangers text-6xl sm:text-8xl lg:text-[10rem] text-twb-white leading-none tracking-wide mb-2">
            WEIRD
          </h1>
          <h1 className="font-bangers text-6xl sm:text-8xl lg:text-[10rem] text-twb-yellow leading-none tracking-wide mb-8">
            BOOK
          </h1>

          <p className="font-comic text-lg sm:text-xl text-twb-white/70 max-w-xl mb-8 leading-relaxed">
            Comic strips that don&apos;t follow the rules. Weird characters, weirder stories.
            Start free — go Diamond if you dare.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/subscribe"
              className="font-bangers text-xl tracking-widest px-8 py-4 bg-twb-yellow text-twb-black border-3 border-black shadow-comic-lg hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all"
            >
              START READING FREE →
            </Link>
            <Link
              href="/comics"
              className="font-bangers text-xl tracking-widest px-8 py-4 bg-transparent text-twb-yellow border-2 border-twb-yellow hover:bg-twb-yellow hover:text-twb-black transition-all"
            >
              BROWSE COMICS
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED STRIPS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="font-bangers text-4xl text-twb-yellow tracking-widest">LATEST STRIPS</h2>
          <div className="flex-1 border-b-2 border-twb-gray" />
          <Link href="/comics" className="font-bangers text-sm tracking-widest text-twb-white/50 hover:text-twb-yellow transition-colors">
            SEE ALL →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStrips.map((strip) => (
            <div key={strip.id} className="comic-panel group cursor-pointer hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_#FFE000] transition-all">
              {/* Comic panel placeholder */}
              <div className="aspect-[4/3] bg-twb-gray flex items-center justify-center border-b-3 border-twb-yellow relative overflow-hidden">
                <div className="absolute inset-0 speed-lines opacity-30" />
                <div className="text-center z-10">
                  <div className="font-bangers text-5xl text-twb-yellow/20 mb-2">{strip.issue}</div>
                  <div className="font-bangers text-lg text-twb-white/40 tracking-widest px-4 text-center">
                    [COMIC STRIP HERE]
                  </div>
                </div>
                {/* Tier badge */}
                <div className={`absolute top-2 right-2 font-bangers text-xs tracking-widest px-2 py-0.5 border ${
                  strip.tier === "Noob"
                    ? "bg-twb-gray border-twb-white/30 text-twb-white/60"
                    : "bg-twb-yellow border-black text-black"
                }`}>
                  {strip.tier.toUpperCase()}
                </div>
              </div>
              <div className="p-4">
                <p className="font-comic text-xs text-twb-yellow/60 mb-1">{strip.issue}</p>
                <h3 className="font-bangers text-xl tracking-widest text-twb-white group-hover:text-twb-yellow transition-colors">
                  {strip.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT BLURB */}
      <section className="bg-twb-panel border-y-4 border-twb-yellow py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 relative">
            <div className="speech-bubble font-bangers text-2xl tracking-widest text-twb-black">
              WAIT — WHO MADE THIS?
            </div>
          </div>
          <div className="mt-10">
            <p className="font-comic text-lg text-twb-white/80 leading-relaxed max-w-2xl mx-auto">
              Every strip in The Weird Book is drawn by hand by one artist with a seriously strange imagination.
              No AI. No filters. Just pure, unhinged creativity — one panel at a time.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 font-bangers text-lg tracking-widest text-twb-yellow border-b-2 border-twb-yellow hover:border-twb-white hover:text-twb-white transition-colors"
            >
              MEET THE ARTIST →
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION TIERS PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-bangers text-5xl text-twb-yellow tracking-widest mb-2">CHOOSE YOUR LEVEL</h2>
          <p className="font-comic text-twb-white/60">Start free. Unlock more weirdness as you go.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiers.map((tier) => (
            <SubscriptionCard key={tier.id} tier={tier} compact />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/subscribe"
            className="inline-block font-bangers text-xl tracking-widest px-8 py-4 bg-twb-yellow text-twb-black border-2 border-black shadow-comic-lg hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all"
          >
            SEE ALL PLANS →
          </Link>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-twb-yellow py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bangers text-5xl sm:text-6xl text-twb-black tracking-widest mb-4">
            READY TO GET WEIRD?
          </h2>
          <p className="font-comic text-twb-black/70 text-lg mb-8">
            Free forever at the Noob level. No credit card needed to start.
          </p>
          <Link
            href="/subscribe"
            className="inline-block font-bangers text-2xl tracking-widest px-10 py-5 bg-twb-black text-twb-yellow border-3 border-black shadow-[5px_5px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all"
          >
            JOIN THE WEIRD BOOK →
          </Link>
        </div>
      </section>
    </div>
  );
}
