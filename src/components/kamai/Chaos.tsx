'use client';

import { motion } from "framer-motion";
import { FadeUp, Reveal } from "./Motion";

const chaos = [
  { emoji: "💬", text: "Orders live inside WhatsApp." },
  { emoji: "📲", text: "Payments live in UPI." },
  { emoji: "👥", text: "Customer details live in old chats." },
  { emoji: "📖", text: "Ingredient costs live in your notebook." },
  { emoji: "🧠", text: "Delivery schedules live in your head." },
];

export default function Chaos() {
  return (
    <section className="py-24 md:py-32" data-testid="chaos-section">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <FadeUp>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">
                ( 02 · Operational clarity )
              </p>
            </FadeUp>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.02] text-[var(--text-primary)]">
              <Reveal>Your bakery has grown.</Reveal>
              <Reveal delay={0.1}>
                <span className="italic-serif text-[#EA580C]">Your workflow </span>hasn&apos;t.
              </Reveal>
            </h2>
            <FadeUp delay={0.2} className="mt-6 max-w-md text-base text-[var(--text-secondary)] leading-relaxed">
              Kamai brings everything together into one organized Baker Cockpit — no more juggling five different apps
              and a paper notebook.
            </FadeUp>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {chaos.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30, rotate: (i - 2) * 1.5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6 hover:border-[#EA580C]/50 transition-colors shadow-sm"
              >
                <span className="text-2xl md:text-3xl">{c.emoji}</span>
                <span className="text-lg md:text-2xl font-semibold tracking-tight flex-1 text-[var(--text-primary)]">{c.text}</span>
                <span className="text-xs font-bold tabular-nums text-[var(--text-secondary)]">0{i + 1}</span>
              </motion.div>
            ))}
            <FadeUp delay={0.4} className="mt-8 border-t border-[var(--border)] pt-6 flex items-start gap-4">
              <span className="text-[#EA580C] text-3xl leading-none">→</span>
              <p className="text-xl md:text-2xl font-bold tracking-tight max-w-md text-[var(--text-primary)]">
                Kamai brings everything together into one organized Baker Cockpit.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
