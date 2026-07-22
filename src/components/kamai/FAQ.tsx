'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp, Reveal } from "./Motion";

const faqs = [
  {
    q: "Do I need to be tech-savvy to use Kamai?",
    a: "Not at all. Kamai was designed hand-in-hand with home bakers in Mumbai, Bangalore, and Pune. If you can use WhatsApp, you can run your entire bakery on Kamai in under 10 minutes a day.",
  },
  {
    q: "How does the WhatsApp payment link actually work?",
    a: "When you create an order, Kamai generates a branded receipt with a direct UPI advance link (GPay/PhonePe/Paytm). Share it in one tap. Once the customer pays, your ledger updates automatically — no manual reconciliation.",
  },
  {
    q: "Can I use Kamai from just my phone?",
    a: "Yes. The Baker Cockpit is fully responsive on mobile, tablet, and desktop. Most of our bakers manage everything from their phone while shortlisting orders and prepping ingredients.",
  },
  {
    q: "What if I want to cancel or pause?",
    a: "Cancel anytime with a single click — no calls, no forms, no fine print. You can also pause your account during festival breaks and pick up right where you left off.",
  },
  {
    q: "Is my customer & recipe data private?",
    a: "Your data belongs to you. We use bank-grade encryption, never sell or share your information, and you can export your entire cockpit — customers, orders, recipes — anytime.",
  },
  {
    q: "How is the Wholesale Marketplace different from just going to the market?",
    a: "Pre-order your ingredients from verified local wholesalers, pay via QR escrow, and collect them in 60 seconds instead of standing in queues. We onboard only trusted suppliers, and you get transparent pricing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-[var(--border)]" data-testid="faq-section">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeUp>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">( 08 · FAQs )</p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1] text-[var(--text-primary)]">
                <Reveal>Your questions,</Reveal>
                <Reveal delay={0.08}>
                  <span className="italic-serif text-[#EA580C]">answered.</span>
                </Reveal>
              </h2>
              <FadeUp delay={0.2} className="mt-6 text-[var(--text-secondary)] max-w-sm text-sm md:text-base leading-relaxed">
                Still curious? Ping our team on WhatsApp — a real baker (usually Anjali) will reply within an hour.
              </FadeUp>
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-[var(--border)]">
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-[var(--border)]" data-testid={`faq-item-${i}`}>
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group cursor-pointer"
                    data-testid={`faq-trigger-${i}`}
                  >
                    <div className="flex items-start gap-4 md:gap-6 flex-1">
                      <span className="text-xs md:text-sm font-bold tabular-nums text-[#EA580C] pt-1">
                        0{i + 1}
                      </span>
                      <span className="text-lg md:text-2xl font-bold tracking-tight leading-tight text-[var(--text-primary)]">{f.q}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="h-9 w-9 rounded-full border border-[var(--border)] grid place-items-center flex-shrink-0 text-[var(--text-primary)] group-hover:bg-[#EA580C] group-hover:border-[#EA580C] group-hover:text-white transition-colors"
                    >
                      <Plus size={16} strokeWidth={2} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 md:pb-10 pr-16 md:pl-12 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
