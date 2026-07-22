'use client';

import { FadeUp, Reveal } from "./Motion";

const outcomes = [
  { top: "Never Miss", bottom: "An Order", num: "01" },
  { top: "Always Know", bottom: "Your Profit", num: "02" },
  { top: "Every Customer", bottom: "Saved", num: "03" },
  { top: "One Dashboard", bottom: "Everything Connected", num: "04" },
];

export default function Outcomes() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--border)]" data-testid="outcomes-section">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeUp>
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">( 03 · Why bakers rely on Kamai )</p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-3xl overflow-hidden mt-6 shadow-sm">
          {outcomes.map((o, i) => (
            <div key={i} className="bg-[var(--surface)] p-8 md:p-12 group hover:bg-[var(--border)]/20 transition-colors relative min-h-[200px] flex flex-col justify-between">
              <span className="text-xs font-bold text-[var(--text-secondary)] absolute top-6 right-6">{o.num}</span>
              <div className="mt-8">
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-[var(--text-primary)]">
                  <Reveal delay={i * 0.06}>{o.top}</Reveal>
                  <Reveal delay={i * 0.06 + 0.08}>
                    <span className="italic-serif text-[#EA580C]">{o.bottom}</span>
                  </Reveal>
                </h3>
              </div>
            </div>
          ))}
        </div>

        <FadeUp className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--text-secondary)]">Testimonial</p>
          </div>
          <blockquote className="md:col-span-10 relative">
            <span className="absolute -top-8 -left-2 font-serif text-[120px] leading-none text-[#EA580C]/30 select-none pointer-events-none">
              &ldquo;
            </span>
            <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.15] relative text-[var(--text-primary)]">
              Before Kamai, I was losing money on packaging and delivery because I couldn&apos;t track my real costs.
              Now I know exactly what my profit is{" "}
              <span className="italic-serif text-[#EA580C]">before I even turn on the oven.</span>
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#EA580C] to-[#2D1B14] flex-shrink-0" />
              <div>
                <p className="font-bold text-[var(--text-primary)]">Anjali D.</p>
                <p className="text-sm text-[var(--text-secondary)]">Home Baker · Mumbai</p>
              </div>
            </footer>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  );
}
