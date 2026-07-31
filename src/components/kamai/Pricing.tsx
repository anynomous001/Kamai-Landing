'use client';

import { ArrowRight } from "lucide-react";
import { FadeUp, Reveal } from "./Motion";
import EarlyAdopterCounter, { EARLY_ADOPTER_TOTAL_SPOTS } from "./EarlyAdopterCounter";
import NotifyMeForm from "./NotifyMeForm";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {/* Early Adopter — primary plan, live, highlighted */}
          <FadeUp delay={0.15}>
            <div className="relative rounded-3xl border-2 border-[#EA580C] bg-[var(--surface)] p-8 md:p-10 shadow-[0_60px_120px_-60px_rgba(45,27,20,0.35)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#EA580C] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 shadow-md whitespace-nowrap">
                Lifetime Price Lock
              </div>

              <EarlyAdopterCounter />

              <div className="text-center border-b border-[var(--border)] pb-8 mt-4">
                <p className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--text-secondary)] mb-3">Early Adopter</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl md:text-7xl font-extrabold tracking-[-0.04em] tabular-nums text-[var(--text-primary)]">₹149</span>
                  <span className="text-lg text-[var(--text-secondary)]">/ month</span>
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                  Lock in ₹149/month for life — this rate never increases for you, even after we raise prices later.
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-[var(--text-primary)]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[#EA580C]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                  </span>
                  <span>30 days free, then ₹149/month for life</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[#EA580C]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                  </span>
                  <span>
                    Only {EARLY_ADOPTER_TOTAL_SPOTS} spots — offer ends December 31, 2026, or when we hit{" "}
                    {EARLY_ADOPTER_TOTAL_SPOTS} bakers, whichever comes first
                  </span>
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

          {/* Standard — live, no lock-in framing, for after the Early Adopter cutoff */}
          <FadeUp delay={0.2}>
            <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10 shadow-[0_60px_120px_-60px_rgba(45,27,20,0.35)]">
              <div className="text-center border-b border-[var(--border)] pb-8">
                <p className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--text-secondary)] mb-3">Standard</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl md:text-7xl font-extrabold tracking-[-0.04em] tabular-nums text-[var(--text-primary)]">₹199</span>
                  <span className="text-lg text-[var(--text-secondary)]">/ month</span>
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                  Regular pricing once the Early Adopter offer ends.
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-[var(--text-primary)]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[var(--text-secondary)]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-secondary)]" />
                  </span>
                  <span>30 days free, then ₹199/month</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[var(--text-secondary)]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-secondary)]" />
                  </span>
                  <span>Billed automatically via UPI AutoPay (Razorpay)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[var(--text-secondary)]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-secondary)]" />
                  </span>
                  <span>No payment details required at signup</span>
                </li>
              </ul>

              <a
                href="https://app.getkamai.online/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="pricing-cta-standard"
                className="mt-8 group inline-flex w-full items-center justify-center gap-2 rounded-full btn-pill-border px-6 py-4 text-base font-bold transition-all"
              >
                Get Started Free
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>

              <p className="mt-4 text-center text-xs text-[var(--text-secondary)]">
                30 days free · No card required upfront
              </p>
            </div>
          </FadeUp>

          {/* Pro — future plan, not live yet. No Razorpay wiring, no checkout — email capture only. */}
          <FadeUp delay={0.25}>
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

              <ul className="mt-8 space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[var(--text-secondary)]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-secondary)]" />
                  </span>
                  <span>AI menu import (upcoming)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[var(--text-secondary)]/15 grid place-items-center flex-shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-secondary)]" />
                  </span>
                  <span>Analytics (upcoming)</span>
                </li>
              </ul>

              <NotifyMeForm />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
