import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="halftone-bg min-h-screen">
      {/* Header */}
      <div className="bg-twb-panel border-b-4 border-twb-yellow py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-twb-red text-twb-white font-bangers text-sm tracking-widest px-3 py-1 mb-3 border-2 border-black shadow-comic">
            THE ORIGIN STORY
          </div>
          <h1 className="font-bangers text-6xl text-twb-yellow tracking-widest mb-2">ABOUT</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14">
        {/* Artist section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Avatar placeholder */}
          <div className="comic-panel aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 speed-lines opacity-20" />
            <div className="text-center z-10">
              <div className="font-bangers text-8xl text-twb-yellow/20 mb-2">TWB</div>
              <div className="font-bangers text-sm text-twb-white/30 tracking-widest">[ARTIST PHOTO]</div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4">
              <div className="speech-bubble text-twb-black font-bangers text-xl tracking-widest">
                HI, I&apos;M THE ARTIST
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <p className="font-comic text-twb-white/80 leading-relaxed">
                The Weird Book started as a notebook. Then the notebook got weird. Then the notebook got a website.
              </p>
              <p className="font-comic text-twb-white/80 leading-relaxed">
                Every strip you see here is drawn by hand — no AI, no templates, no rules.
                Just a pen, some paper, and an imagination that doesn&apos;t know when to stop.
              </p>
              <p className="font-comic text-twb-white/80 leading-relaxed">
                New strips drop every week. Subscribe to get them as they happen.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { stat: "???", label: "Strips Published" },
            { stat: "100%", label: "Hand Drawn" },
            { stat: "0%", label: "Normal Content" },
            { stat: "∞", label: "Weirdness Level" },
          ].map((item) => (
            <div key={item.label} className="comic-panel p-4 text-center">
              <div className="font-bangers text-4xl text-twb-yellow mb-1">{item.stat}</div>
              <div className="font-comic text-xs text-twb-white/50 uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>

        {/* The story */}
        <div className="comic-panel p-8 mb-10">
          <h2 className="font-bangers text-3xl text-twb-yellow tracking-widest mb-6">HOW IT STARTED</h2>
          <div className="space-y-4 font-comic text-twb-white/70 leading-relaxed">
            <p>
              The Weird Book didn&apos;t have a plan. It never does. One day there was a strip about a void.
              Then another about socks. Then a government cat. Before long there was a whole world of strange —
              and it needed somewhere to live.
            </p>
            <p>
              This website is that somewhere. A place where the strips can exist, where readers can find them,
              and where subscribers can go deeper into the weird.
            </p>
            <p>
              Everything here is made with care. The art is real. The weird is genuine.
              Thanks for being part of it.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-twb-yellow p-8 border-2 border-black shadow-comic-lg text-center">
          <h3 className="font-bangers text-3xl text-twb-black tracking-widest mb-2">
            WANT TO SUPPORT THE WEIRD?
          </h3>
          <p className="font-comic text-twb-black/70 mb-6">
            Subscribe at any level — even Noob (free) helps keep the strips coming.
          </p>
          <Link
            href="/subscribe"
            className="inline-block font-bangers text-xl tracking-widest px-8 py-4 bg-twb-black text-twb-yellow border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            SUBSCRIBE NOW →
          </Link>
        </div>
      </div>
    </div>
  );
}
