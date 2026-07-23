'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { MaskedLines, FadeUp } from "./Motion";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-36 md:pt-40 pb-24 md:pb-32 overflow-hidden"
      data-testid="hero-section"
    >
      {/* radial spotlight */}
      <motion.div
        style={{ y: glowY }}
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-40 blur-3xl"
      >
        <div className="h-full w-full bg-[radial-gradient(closest-side,rgba(234,88,12,0.35),transparent_70%)]" />
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6">
        {/* Badges */}
        <motion.div
          style={{ y: badgeY }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
            Built for India&apos;s independent bakers.
            <span className="text-[var(--text-secondary)] font-normal">(AD · PK · SM)</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-primary)] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inset-0 rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            The Baker Cockpit — Now Live
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-center font-extrabold tracking-[-0.045em] leading-[0.95] text-[var(--text-primary)] text-[13vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[112px]">
          <MaskedLines
            lines={[
              <>Run Your Bakery.</>,
              <>Manage Every Order.</>,
              <>
                Grow Every <span className="italic-serif text-[#EA580C]">Profit</span>.
              </>,
            ]}
            delay={0.5}
            stagger={0.12}
          />
        </h1>

        {/* Subhead */}
        <FadeUp delay={1.15} className="mx-auto mt-8 max-w-2xl text-center text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
          The all-in-one operating system for independent home bakers. Manage orders, customers, profits, payments,
          deliveries, and wholesale sourcing from one Baker Cockpit.
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={1.3} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            data-testid="hero-cta-primary"
            className="group inline-flex items-center gap-2 rounded-full btn-espresso px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-all text-[#F7F5F0] shadow-md"
          >
            Get the Cockpit
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#product"
            data-testid="hero-cta-secondary"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold hover:bg-[var(--border)]/20 transition-colors text-[var(--text-primary)] shadow-sm"
          >
            <Play size={14} strokeWidth={2} />
            See how it works
          </a>
        </FadeUp>

        {/* Trust checks */}
        <FadeUp delay={1.45} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--text-secondary)]">
          <span className="inline-flex items-center gap-2"><Check /> ₹299/month</span>
          <span className="inline-flex items-center gap-2"><Check /> No setup fee</span>
          <span className="inline-flex items-center gap-2"><Check /> Cancel anytime</span>
        </FadeUp>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#EA580C]">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
