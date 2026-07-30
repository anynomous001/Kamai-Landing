'use client';

import { ArrowRight } from "lucide-react";
import { FadeUp, Reveal } from "./Motion";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-[var(--border)]" data-testid="pricing-section">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeUp className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">( 07 · Pricing )</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1] text-[var(--text-primary)]">
            <Reveal>Choose Your Baker Plan.</Reveal>
            <Reveal delay={0.08}>
              <span className="italic-serif text-[#EA580C]">Lock in early pricing, forever.</span>
            </Reveal>
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="text-center mb-14">
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            30 days free · No card required upfront
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {/* Early Adopter — primary plan */}
          <FadeUp delay={0.15}>
            <div className="relative rounded-3xl border-2 border-[#EA580C] bg-[var(--surface)] p-8 md:p-10 shadow-[0_60px_120px_-60px_rgba(45,27,20,0.35)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#EA580C] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 shadow-md whitespace-nowrap">
                Early Adopter Price
              </div>

              <div className="text-center border-b border-[var(--border)] pb-8">
                <p className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--text-secondary)] mb-3">Early Adopter</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl md:text-7xl font-extrabold tracking-[-0.04em] tabular-nums text-[var(--text-primary)]">₹149</span>
                  <span className="text-lg text-[var(--text-secondary)]">/ month</span>
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                  Lifetime price lock — this rate never increases for you, even after we raise prices later.
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-[var(--text-primary)]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[#EA580C]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                  </span>
                  <span>First 3 months free as part of your trial</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[#EA580C]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                  </span>
                  <span>Then billed automatically via UPI AutoPay (Razorpay)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[#EA580C]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                  </span>
                  <span>No payment details required at signup</span>
                </li>
              </ul>

              <a
                href="https://app.getkamai.online/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="pricing-cta"
                className="mt-8 group inline-flex w-full items-center justify-center gap-2 rounded-full btn-primary-orange px-6 py-4 text-base font-bold transition-all text-white"
              >
                Get Started Free
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>

              <p className="mt-4 text-center text-xs text-[var(--text-secondary)]">
                30 days free · No card required upfront
              </p>
            </div>
          </FadeUp>

          {/* Pro — future plan, not live yet */}
          <FadeUp delay={0.22}>
            <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)]/60 p-8 md:p-10 opacity-80">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--text-secondary)] text-[var(--surface)] text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 shadow-md whitespace-nowrap">
                Coming Soon
              </div>

              <div className="text-center border-b border-[var(--border)] pb-8">
                <p className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--text-secondary)] mb-3">Pro</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl md:text-7xl font-extrabold tracking-[-0.04em] tabular-nums text-[var(--text-primary)]">₹299</span>
                  <span className="text-lg text-[var(--text-secondary)]">/ month</span>
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                  For bakeries scaling beyond the early tier.
                </p>
              </div>

              <div className="mt-8 min-h-[124px] flex items-center justify-center">
                <p className="text-sm text-[var(--text-secondary)] text-center">
                  Details coming soon.
                </p>
              </div>

              <button
                type="button"
                disabled
                data-testid="pricing-cta-pro"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-4 text-base font-bold text-[var(--text-secondary)] cursor-not-allowed"
              >
                Coming Soon
              </button>

              <p className="mt-4 text-center text-xs text-[var(--text-secondary)]">
                Not yet available
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
