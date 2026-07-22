'use client';

import { ArrowRight } from "lucide-react";
import { FadeUp, Reveal } from "./Motion";

const strip = ["orders", "profit", "CRM", "calendar", "payments", "wholesale", "kamai"];

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-40 bg-[#2D1B14] text-[#F7F5F0] overflow-hidden" data-testid="final-cta">
      {/* Text Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="font-extrabold tracking-[-0.06em] text-[#F7F5F0]/[0.04] text-[28vw] leading-none select-none">
          Kamai
        </span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6">
        <FadeUp>
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-[#F7F5F0]/60 mb-6">( 09 · Start today )</p>
        </FadeUp>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[104px] font-extrabold tracking-[-0.045em] leading-[0.95] max-w-5xl text-[#F7F5F0]">
          <Reveal>You already bake</Reveal>
          <Reveal delay={0.06}>like a professional.</Reveal>
          <Reveal delay={0.14}>
            <span className="italic-serif text-[#EA580C]">Now manage your business </span>
          </Reveal>
          <Reveal delay={0.22}>like one.</Reveal>
        </h2>

        <FadeUp delay={0.3} className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#"
            data-testid="final-cta-button"
            className="group inline-flex items-center gap-2 rounded-full btn-primary-orange px-8 py-4 text-base font-bold text-white shadow-lg"
          >
            Get Your Baker Cockpit
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-sm text-[#F7F5F0]/70">
            ₹299/month · No setup fee · Cancel anytime
          </p>
        </FadeUp>
      </div>

      {/* Slow editorial marquee */}
      <div className="mt-24 md:mt-40 relative overflow-hidden border-t border-[#F7F5F0]/10">
        <div className="flex marquee-left gap-12 whitespace-nowrap py-8 opacity-60">
          {[...strip, ...strip, ...strip, ...strip].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-12 text-2xl md:text-4xl italic-serif text-[#F7F5F0]">
              {t}
              <span className="text-[#EA580C]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
