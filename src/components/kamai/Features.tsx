'use client';

import { motion } from "framer-motion";
import { FadeUp, Reveal } from "./Motion";

interface FeatureItem {
  num: string;
  label: string;
  title: [string, string];
  desc: string;
  tags: Record<string, string>;
  visual: "ledger" | "whatsapp" | "wholesale" | "crm";
}

const features: FeatureItem[] = [
  {
    num: "01",
    label: "Profit Ledger",
    title: ["Know Your Profit", "Before You Say Yes."],
    desc: "Every ingredient. Every delivery. Every hour of labour. Automatically calculated so you always know your real margin before accepting an order.",
    tags: {
      Input: "Ingredients + Labour",
      Feature: "Automatic margin check",
      Outcome: "Know profit before baking",
      Creator: "Anjali Desai · India",
    },
    visual: "ledger",
  },
  {
    num: "02",
    label: "WhatsApp & UPI Sync",
    title: ["Get Paid Before", "You Start Baking."],
    desc: "Generate professional payment links and branded receipts directly inside WhatsApp. Customers pay. You bake. No awkward follow-ups.",
    tags: {
      Input: "Order details",
      Feature: "WhatsApp payment link",
      Outcome: "50% advance locked",
      Creator: "Rohit Merchant · India",
    },
    visual: "whatsapp",
  },
  {
    num: "03",
    label: "Wholesale Marketplace",
    title: ["Buy Smarter.", "Bake More."],
    desc: "Browse local wholesalers, place ingredient orders in advance, and collect them in minutes instead of spending hours in crowded markets.",
    tags: {
      Input: "Bulk ingredient list",
      Feature: "Pre-order & QR escrow",
      Outcome: "60-second pickup",
      Creator: "Priya Kulkarni · India",
    },
    visual: "wholesale",
  },
  {
    num: "04",
    label: "Customer CRM",
    title: ["Turn One-Time Buyers", "Into Regulars."],
    desc: "Automatically build your customer directory. Know who orders most. Track lifetime spending. Reconnect before birthdays and anniversaries.",
    tags: {
      Input: "Order history & dates",
      Feature: "Customer directory & CRM",
      Outcome: "Repeat orders & loyalty",
      Creator: "Sneha Mehta · India",
    },
    visual: "crm",
  },
];

export default function Features() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--border)]" data-testid="features-section">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeUp className="mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">( 04 · Core capabilities )</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1] max-w-3xl text-[var(--text-primary)]">
              <Reveal>Four modules,</Reveal>
              <Reveal delay={0.08}>
                <span className="italic-serif text-[#EA580C]">infinite calm.</span>
              </Reveal>
            </h2>
          </div>
          <p className="max-w-sm text-base text-[var(--text-secondary)]">
            Every capability designed around the real texture of running an independent home bakery — no fluff, no
            filler.
          </p>
        </FadeUp>

        <div className="space-y-24 md:space-y-32">
          {features.map((f, i) => (
            <FeatureBlock key={f.num} f={f} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ f, reverse }: { f: FeatureItem; reverse: boolean }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-6xl md:text-7xl font-extrabold tracking-tighter text-[#EA580C]/70 tabular-nums">
            {f.num}
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
          <span className="text-xs tracking-[0.1em] uppercase font-bold text-[var(--text-secondary)]">{f.label}</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1] text-[var(--text-primary)]">
          <Reveal>{f.title[0]}</Reveal>
          <Reveal delay={0.06}>
            <span className="italic-serif">{f.title[1]}</span>
          </Reveal>
        </h3>
        <FadeUp delay={0.15} className="mt-6 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
          {f.desc}
        </FadeUp>

        <FadeUp delay={0.2} className="mt-8 grid grid-cols-1 gap-px bg-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
          {Object.entries(f.tags).map(([k, v]) => (
            <div key={k} className="grid grid-cols-3 bg-[var(--surface)] px-4 py-3 text-sm">
              <span className="text-[var(--text-secondary)] font-medium">{k}</span>
              <span className="col-span-2 font-semibold text-[var(--text-primary)]">{v}</span>
            </div>
          ))}
        </FadeUp>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
      >
        <FeatureVisual kind={f.visual} />
      </motion.div>
    </div>
  );
}

function FeatureVisual({ kind }: { kind: FeatureItem["visual"] }) {
  if (kind === "ledger") {
    return (
      <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 min-h-[420px] shadow-[0_40px_80px_-40px_rgba(45,27,20,0.3)]">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs tracking-[0.1em] uppercase font-bold text-[var(--text-secondary)]">Chocolate Cake · 2.5kg</p>
          <span className="text-xs font-bold text-emerald-600">MARGIN 42%</span>
        </div>
        <div className="space-y-2">
          {[
            ["Cocoa & chocolate", "₹420"],
            ["Butter, cream, eggs", "₹380"],
            ["Sugar & flour", "₹110"],
            ["Packaging", "₹90"],
            ["Delivery", "₹120"],
            ["Labour (2.5h)", "₹500"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-2 border-b border-[var(--border)] text-sm">
              <span className="text-[var(--text-secondary)]">{k}</span>
              <span className="font-semibold tabular-nums text-[var(--text-primary)]">{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl bg-[#2D1B14] text-[#F7F5F0] p-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Net Profit</p>
            <p className="text-3xl font-extrabold tabular-nums">₹780</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest opacity-60">Sell at</p>
            <p className="text-3xl font-extrabold tabular-nums text-[#EA580C]">₹2,400</p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "whatsapp") {
    return (
      <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 md:p-8 min-h-[420px] shadow-[0_40px_80px_-40px_rgba(45,27,20,0.3)]">
        <div className="max-w-sm mx-auto space-y-3">
          <div className="bg-[var(--surface)] rounded-2xl rounded-bl-sm p-4 text-sm shadow-sm border border-[var(--border)]">
            <p className="font-semibold text-[var(--text-primary)]">Kamai · Anjali&apos;s Bakery</p>
            <p className="mt-2 text-[var(--text-secondary)]">Order #A-2410 · Chocolate Cake 2.5kg</p>
            <p className="mt-1 font-bold text-[var(--text-primary)]">Advance: ₹1,200</p>
            <a href="#" className="mt-3 block rounded-lg bg-[#EA580C] text-white text-center py-2.5 font-semibold text-xs">
              Pay via UPI →
            </a>
          </div>
          <div className="bg-emerald-500/15 rounded-2xl rounded-br-sm p-3 text-xs ml-auto max-w-[200px] text-emerald-800 dark:text-emerald-300">
            <p className="font-bold">✓ Paid ₹1,200 via UPI</p>
            <p className="opacity-70 mt-1">14:22 · GPay</p>
          </div>
          <div className="bg-[var(--surface)] rounded-2xl rounded-bl-sm p-4 text-sm shadow-sm border border-[var(--border)]">
            <p className="font-semibold text-[var(--text-primary)]">Thank you Anjali! Order confirmed 🎂</p>
            <p className="text-[var(--text-secondary)] mt-1 text-xs">Delivery: 22 Dec, 6pm</p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "wholesale") {
    return (
      <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 min-h-[420px] shadow-[0_40px_80px_-40px_rgba(45,27,20,0.3)]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs tracking-[0.1em] uppercase font-bold text-[var(--text-secondary)]">Ingredient basket</p>
          <span className="text-xs font-bold text-[#EA580C]">QR ESCROW LOCKED</span>
        </div>
        {[
          ["Callebaut 811 · 5kg", "Kumar Bros", "₹4,200"],
          ["Amul butter · 3kg", "Fresh Depot", "₹1,320"],
          ["Almond flour · 2kg", "Nutshop", "₹1,600"],
          ["Fondant · 1kg", "SugarCraft", "₹680"],
        ].map(([n, v, p]) => (
          <div key={n} className="grid grid-cols-6 items-center py-3 border-b border-[var(--border)] text-sm">
            <span className="col-span-3 font-semibold truncate text-[var(--text-primary)]">{n}</span>
            <span className="col-span-2 text-[var(--text-secondary)] truncate">{v}</span>
            <span className="col-span-1 text-right font-bold tabular-nums text-[var(--text-primary)]">{p}</span>
          </div>
        ))}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-[var(--text-secondary)]">Ready for pickup in <span className="font-bold text-[var(--text-primary)]">60 seconds</span></p>
          <div className="grid place-items-center h-14 w-14 rounded-lg bg-[#2D1B14] p-2">
            <div className="grid grid-cols-4 gap-0.5 h-full w-full">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={`${i % 3 === 0 ? "bg-[#F7F5F0]" : "bg-transparent"} rounded-[1px]`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // crm
  return (
    <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 min-h-[420px] shadow-[0_40px_80px_-40px_rgba(45,27,20,0.3)]">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs tracking-[0.1em] uppercase font-bold text-[var(--text-secondary)]">Top customers · Lifetime</p>
        <span className="text-xs font-semibold text-[var(--text-secondary)]">12 birthdays this month</span>
      </div>
      {[
        ["Anjali Desai", "Chocolate lover", "₹42,800", "24 orders"],
        ["Rohit Merchant", "Cupcake regular", "₹18,300", "17 orders"],
        ["Priya Kulkarni", "Wedding tiers", "₹64,200", "8 orders"],
        ["Sneha Mehta", "Fondant birthdays", "₹28,900", "19 orders"],
      ].map(([n, tag, ltv, o]) => (
        <div key={n} className="grid grid-cols-12 gap-3 items-center py-3 border-b border-[var(--border)] text-sm">
          <div className="col-span-1 h-9 w-9 rounded-full bg-gradient-to-br from-[#EA580C] to-[#2D1B14] grid place-items-center text-[#F7F5F0] font-bold text-xs">
            {n.split(" ").map((x) => x[0]).join("")}
          </div>
          <div className="col-span-5">
            <p className="font-bold text-[var(--text-primary)]">{n}</p>
            <p className="text-xs text-[var(--text-secondary)]">{tag}</p>
          </div>
          <span className="col-span-3 font-bold tabular-nums text-right md:text-left text-[var(--text-primary)]">{ltv}</span>
          <span className="col-span-3 text-xs text-[var(--text-secondary)] text-right tabular-nums">{o}</span>
        </div>
      ))}
    </div>
  );
}
