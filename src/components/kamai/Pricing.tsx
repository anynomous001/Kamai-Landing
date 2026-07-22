'use client';

import { Check, ArrowRight } from "lucide-react";
import { FadeUp, Reveal } from "./Motion";

const features = [
  "Unlimited Orders & Centralized Cockpit",
  "Smart Profit Ledger & Real Margin Check",
  "Customer CRM & Lifetime Spend Tracking",
  "Visual Production & Delivery Calendar",
  "WhatsApp Payment Links & Auto Receipts",
  "Investment & Equipment Cost Tracker",
  "Wholesale Marketplace Access",
  "Unlimited Clients & Priority Support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-[var(--border)]" data-testid="pricing-section">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeUp className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">( 07 · Pricing )</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1] text-[var(--text-primary)]">
            <Reveal>Choose Your Baker Plan.</Reveal>
            <Reveal delay={0.08}>
              <span className="italic-serif text-[#EA580C]">Everything to run a modern bakery.</span>
            </Reveal>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15} className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10 shadow-[0_60px_120px_-60px_rgba(45,27,20,0.35)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#EA580C] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 shadow-md">
              Full Suite
            </div>

            <div className="text-center border-b border-[var(--border)] pb-8">
              <p className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--text-secondary)] mb-3">Baker Cockpit</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-extrabold tracking-[-0.04em] tabular-nums text-[var(--text-primary)]">₹299</span>
                <span className="text-lg text-[var(--text-secondary)]">/ month</span>
              </div>
              <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                Less than one custom cake order. All 7 modules included.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--text-primary)]">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-[#EA580C]/15 grid place-items-center flex-shrink-0">
                    <Check size={10} strokeWidth={3} className="text-[#EA580C]" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[var(--border)] text-sm text-[var(--text-secondary)] flex items-center justify-between">
              <span>Best for: All independent bakers</span>
              <span className="text-xs font-semibold">14-day free trial</span>
            </div>

            <a
              href="#"
              data-testid="pricing-cta"
              className="mt-6 group inline-flex w-full items-center justify-center gap-2 rounded-full btn-primary-orange px-6 py-4 text-base font-bold transition-all text-white"
            >
              Get Started — ₹299/mo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <p className="mt-4 text-center text-xs text-[var(--text-secondary)]">
              Cancel anytime · 14-day free trial
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
