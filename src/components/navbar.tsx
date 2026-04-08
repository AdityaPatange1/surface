"use client";

import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#install", label: "Install" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-white">
          <GraduationCap className="h-7 w-7 text-green-primary" />
          Surface
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-neutral-400 transition-colors hover:text-green-primary"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#install"
          className="hidden rounded-full bg-green-primary px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-light md:inline-block"
        >
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-black/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-sm text-neutral-400 transition-colors hover:text-green-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#install"
                className="inline-block rounded-full bg-green-primary px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-green-light"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
