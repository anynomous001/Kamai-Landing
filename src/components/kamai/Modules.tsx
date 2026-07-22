'use client';

import { FadeUp, Reveal } from "./Motion";

interface ModuleItem {
  num: string;
  title: string;
  desc: string;
  outcome: string;
  span?: string;
}

const modules: ModuleItem[] = [
  { num: "01", title: "Order Management", desc: "Every order in one place", outcome: "Centralized cockpit", span: "md:col-span-2" },
  { num: "02", title: "Profit Ledger", desc: "Know your margin before baking", outcome: "Real net profit" },
  { num: "03", title: "Customer CRM", desc: "Track repeat customers & special dates", outcome: "Lifetime spending" },
  { num: "04", title: "Production Calendar", desc: "Never miss another delivery", outcome: "Schedule clarity" },
  { num: "05", title: "Payment Links", desc: "Collect advances instantly via UPI", outcome: "Direct payout", span: "md:col-span-2" },
  { num: "06", title: "Investment Tracker", desc: "Understand your real business costs", outcome: "Asset tracking" },
  { num: "07", title: "Wholesale Marketplace", desc: "Buy ingredients without queues", outcome: "Direct suppliers", span: "md:col-span-2" },
];

export default function Modules() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--border)]" data-testid="modules-section">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeUp className="mb-16 max-w-3xl">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">( 06 · The 7 Core Modules )</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1] text-[var(--text-primary)]">
            <Reveal>The complete operating system</Reveal>
            <Reveal delay={0.08}>
              <span className="italic-serif text-[#EA580C]">architecture.</span>
            </Reveal>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-3xl overflow-hidden shadow-sm">
          {modules.map((m) => (
            <div
              key={m.num}
              className={`bg-[var(--surface)] p-6 md:p-8 min-h-[220px] flex flex-col justify-between group hover:bg-[#2D1B14] hover:text-[#F7F5F0] transition-colors duration-500 ${m.span || ""}`}
              data-testid={`module-${m.num}`}
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl md:text-5xl font-extrabold tabular-nums text-[#EA580C]/70 group-hover:text-[#EA580C] transition-colors">
                  {m.num}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-secondary)] group-hover:text-[#F7F5F0]/60 transition-colors">Module</span>
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-extrabold tracking-tight leading-tight group-hover:text-[#F7F5F0] transition-colors text-[var(--text-primary)]">{m.title}</h3>
                <p className="mt-2 text-sm md:text-base text-[var(--text-secondary)] group-hover:text-[#F7F5F0]/70 transition-colors">
                  {m.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                  <span className="text-[#EA580C]">→</span>
                  <span className="group-hover:text-[#F7F5F0] text-[var(--text-primary)] transition-colors">{m.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
