import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="halftone-bg min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="comic-panel p-10">
          {/* Big POW effect */}
          <div className="font-bangers text-8xl text-twb-yellow tracking-widest mb-4 action-text">
            POW!
          </div>
          <h1 className="font-bangers text-4xl text-twb-white tracking-widest mb-4">
            YOU&apos;RE IN!
          </h1>
          <p className="font-comic text-twb-white/70 mb-8 leading-relaxed">
            Welcome to The Weird Book. Your subscription is active —
            time to explore the strips you just unlocked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/comics"
              className="font-bangers text-xl tracking-widest px-8 py-4 bg-twb-yellow text-twb-black border-2 border-black shadow-comic hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              READ COMICS →
            </Link>
            <Link
              href="/"
              className="font-bangers text-xl tracking-widest px-8 py-4 bg-transparent text-twb-white border-2 border-twb-white/30 hover:border-twb-yellow hover:text-twb-yellow transition-all"
            >
              HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
