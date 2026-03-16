"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/comics", label: "Comics" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-twb-black border-b-4 border-twb-yellow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-bangers text-2xl text-twb-yellow tracking-widest group-hover:text-twb-white transition-colors">
            TWB
          </span>
          <span className="hidden sm:block font-comic text-sm text-twb-white/60 leading-tight">
            The Weird<br />Book
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-bangers text-lg tracking-widest px-4 py-2 text-twb-white hover:text-twb-yellow hover:bg-twb-gray transition-all border-2 border-transparent hover:border-twb-yellow"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            className="ml-3 font-bangers text-lg tracking-widest px-5 py-2 bg-twb-yellow text-twb-black border-2 border-twb-black shadow-comic hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-comic-lg transition-all"
          >
            JOIN NOW
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-twb-yellow border-2 border-twb-yellow p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-twb-yellow mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-twb-yellow mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-twb-yellow transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t-2 border-twb-yellow bg-twb-panel">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-bangers text-xl tracking-widest px-6 py-3 border-b border-twb-gray hover:bg-twb-yellow hover:text-twb-black transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            className="block font-bangers text-xl tracking-widest px-6 py-4 bg-twb-yellow text-twb-black hover:bg-twb-white transition-all"
            onClick={() => setMenuOpen(false)}
          >
            JOIN NOW →
          </Link>
        </div>
      )}
    </nav>
  );
}
