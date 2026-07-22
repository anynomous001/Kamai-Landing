'use client';

import { ArrowUp } from "lucide-react";
import KamaiLogo from "./KamaiLogo";

const columns = [
  {
    title: "Product",
    links: ["Baker Cockpit", "7 Core Modules", "Wholesale", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "Examples", "WhatsApp"],
  },
  {
    title: "Company",
    links: ["About", "Privacy", "Terms", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16 md:py-20 bg-[var(--background)] text-[var(--text-primary)]" data-testid="site-footer">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-3">
            <a href="#top" className="flex items-center mb-4">
              <KamaiLogo height={44} />
            </a>
            <p className="text-lg md:text-xl font-bold tracking-tight max-w-sm text-[var(--text-primary)]">
              The Baker Cockpit. Built for India&apos;s independent bakers.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--text-secondary)] mb-4">{c.title}</p>
              <ul className="space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[#EA580C] transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-secondary)]">© 2026 Kamai. All rights reserved.</p>
          <p className="text-sm text-[var(--text-secondary)]">Made for Bakers 🎂</p>
          <a
            href="#top"
            data-testid="back-to-top"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-[#EA580C] transition-colors group"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
