'use client';

import { FadeUp } from "./Motion";

const brands = [
  { emoji: "🍰", name: "The Flour Girl" },
  { emoji: "🎂", name: "Whisk & Batch" },
  { emoji: "🧁", name: "Artisan Crust" },
  { emoji: "🍪", name: "Sugar & Spice" },
];

export default function TrustedBy() {
  return (
    <section className="border-y border-[var(--border)] py-10" data-testid="trusted-by">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeUp>
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] text-center mb-6">
            Trusted by 500+ India home bakers
          </p>
        </FadeUp>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <div className="flex marquee-left gap-16 whitespace-nowrap opacity-80">
            {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
              <div key={i} className="inline-flex items-center gap-3 text-lg md:text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                <span className="text-2xl">{b.emoji}</span>
                <span>{b.name}</span>
                <span className="text-[#EA580C] px-4">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
