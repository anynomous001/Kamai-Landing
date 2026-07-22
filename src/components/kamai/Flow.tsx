'use client';

import { motion } from "framer-motion";
import { FadeUp, Reveal } from "./Motion";

const steps = [
  {
    num: "01",
    title: "Customer Confirms Order",
    body: "Customer agrees on custom order details on WhatsApp.",
  },
  {
    num: "02",
    title: "Create Order in Kamai",
    body: "Log ingredients, labor time, delivery date, and calculate margin.",
  },
  {
    num: "03",
    title: "Send WhatsApp Link",
    body: "Share branded receipt & direct UPI advance link in one click.",
  },
  {
    num: "04",
    title: "Track Production",
    body: "Monitor order progress on your visual production calendar.",
  },
  {
    num: "05",
    title: "Deliver & Auto-Save CRM",
    body: "Deliver cake; customer profile & net profit updated instantly.",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-24 md:py-32 border-t border-[var(--border)] relative" data-testid="flow-section">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeUp className="mb-16 max-w-2xl">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">( 05 · End-to-End Operational Flow )</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1] text-[var(--text-primary)]">
            <Reveal>From order to</Reveal>
            <Reveal delay={0.08}>
              <span className="italic-serif text-[#EA580C]">delivery.</span>
            </Reveal>
          </h2>
          <FadeUp delay={0.15} className="mt-6 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Kamai unifies your entire business into one smooth workflow — from initial WhatsApp confirmation to profit
            calculation and repeat customer retention.
          </FadeUp>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)]" />
          <div className="space-y-16 md:space-y-20">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className={`flex items-center gap-4 mb-4 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                    <span className="text-xs tracking-[0.1em] uppercase font-bold text-[#EA580C]">Step {s.num}</span>
                    <div className="h-px w-16 bg-[var(--border)]" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">{s.title}</h3>
                  <p className="mt-3 text-[var(--text-secondary)] max-w-md md:max-w-sm md:inline-block">{s.body}</p>
                </div>

                {/* Stepper Dot */}
                <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 h-5 w-5 rounded-full bg-[var(--background)] border-2 border-[#EA580C]">
                  <div className="absolute inset-1 rounded-full bg-[#EA580C]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
