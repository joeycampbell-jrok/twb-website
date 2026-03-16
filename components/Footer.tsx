import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-twb-panel border-t-4 border-twb-yellow mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bangers text-3xl text-twb-yellow tracking-widest mb-2">TWB</h3>
            <p className="font-comic text-sm text-twb-white/60">
              The Weird Book — Comic strips that don&apos;t follow the rules.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bangers text-lg tracking-widest text-twb-white mb-3">NAVIGATE</h4>
            <ul className="space-y-1">
              {[
                { href: "/comics", label: "Comics" },
                { href: "/subscribe", label: "Subscribe" },
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-comic text-sm text-twb-white/60 hover:text-twb-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe CTA */}
          <div>
            <h4 className="font-bangers text-lg tracking-widest text-twb-white mb-3">GET WEIRD</h4>
            <p className="font-comic text-sm text-twb-white/60 mb-4">
              Start free. Upgrade when you&apos;re ready for more weirdness.
            </p>
            <Link
              href="/subscribe"
              className="inline-block font-bangers text-lg tracking-widest px-5 py-2 bg-twb-yellow text-twb-black border-2 border-twb-black shadow-comic hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-comic-lg transition-all"
            >
              SUBSCRIBE FREE →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-twb-gray flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-comic text-xs text-twb-white/40">
            © {new Date().getFullYear()} TWB: The Weird Book. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="font-comic text-xs text-twb-white/40 hover:text-twb-yellow transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="font-comic text-xs text-twb-white/40 hover:text-twb-yellow transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
