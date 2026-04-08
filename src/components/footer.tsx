import { GraduationCap } from "lucide-react";

const FOOTER_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#install", label: "Install" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-lg font-bold text-white">
          <GraduationCap className="h-6 w-6 text-green-primary" />
          Surface
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-neutral-500 transition-colors hover:text-green-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Surface. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
