'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutDashboard, Package, Wallet, Users, Calendar, Store, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { FadeUp } from "./Motion";
import KamaiLogo from "./KamaiLogo";

const metrics = [
  { label: "Total Earnings", value: "₹26,800", delta: "+18%", accent: true },
  { label: "Active Orders", value: "34", delta: "This Month" },
  { label: "Amount Due", value: "₹8,200", delta: "Pending" },
  { label: "Amount Paid", value: "₹18,600", delta: "Secured" },
];

const bars = [
  { d: "Mon", h: 42 },
  { d: "Tue", h: 68 },
  { d: "Wed", h: 55 },
  { d: "Thu", h: 82 },
  { d: "Fri", h: 74 },
  { d: "Sat", h: 96 },
  { d: "Sun", h: 60 },
];

const orders = [
  { name: "Anjali Desai", item: "Custom Chocolate Cake (2.5kg)", amt: "₹2,400", status: "Completed" },
  { name: "Rohit Merchant", item: "Assorted Cupcakes ×24", amt: "₹1,800", status: "Pending Advance" },
  { name: "Priya Kulkarni", item: "Fondant Wedding Tier Cake", amt: "₹3,200", status: "Completed" },
];

const sidebar = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Package, label: "Orders" },
  { icon: Wallet, label: "Profit Ledger" },
  { icon: Users, label: "Customer CRM" },
  { icon: Calendar, label: "Calendar" },
  { icon: Store, label: "Wholesale" },
];

function StatusRow({ color, label, pct }: { color: string; label: string; pct: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-sm" style={{ background: color }} />
        {label}
      </span>
      <span className="font-semibold tabular-nums">{pct}</span>
    </div>
  );
}

function Donut() {
  const segments = [
    { color: "var(--text-primary)", value: 62 },
    { color: "#EA580C", value: 28 },
    { color: "rgba(45,27,20,0.25)", value: 10 },
  ];
  const R = 42;
  const C = 2 * Math.PI * R;
  let offset = 0;
  return (
    <div className="relative mx-auto h-32 w-32">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        {segments.map((s, i) => {
          const len = (s.value / 100) * C;
          const el = (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke={s.color}
              strokeWidth="12"
              strokeDasharray={`${len} ${C - len}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="text-2xl font-extrabold tabular-nums">34</p>
          <p className="text-[9px] uppercase tracking-widest text-secondary">Orders</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardMockup() {
  const { theme, toggle } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, -6]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -80]);

  return (
    <section id="product" className="relative py-24 md:py-32" data-testid="dashboard-showcase">
      <div className="mx-auto max-w-[1400px] px-6">
        <FadeUp className="mb-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-[#EA580C] mb-3">( 01 · THE COCKPIT )</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-2xl">
              One dashboard. Every corner of your bakery, <span className="italic-serif text-[#EA580C]">visible</span>.
            </h2>
          </div>
          <button
            onClick={toggle}
            data-testid="mockup-theme-toggle"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2.5 text-xs font-semibold hover:bg-[var(--border)] transition-colors cursor-pointer"
          >
            {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </FadeUp>

        <motion.div
          ref={ref}
          style={{ perspective: 2000 }}
          className="relative"
        >
          <motion.div
            style={{ rotateX, scale, y, transformStyle: "preserve-3d" }}
            className="relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[0_60px_120px_-40px_rgba(45,27,20,0.35)]"
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--background)]">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#f87171]" />
                <div className="h-3 w-3 rounded-full bg-[#fbbf24]" />
                <div className="h-3 w-3 rounded-full bg-[#34d399]" />
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[var(--surface)] border border-[var(--border)] px-4 py-1.5 text-xs font-mono text-[var(--text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                kamai.app / dashboard
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EA580C]/10 text-[#EA580C] px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C] pulse-dot" />
                Live Cockpit
              </span>
            </div>

            {/* App body */}
            <div className="grid grid-cols-12 min-h-[560px]">
              {/* Sidebar */}
              <aside className="col-span-3 md:col-span-2 border-r border-[var(--border)] bg-[var(--background)] p-4 space-y-1">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <KamaiLogo height={28} />
                </div>
                {sidebar.map((s) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium ${
                      s.active
                        ? "bg-[#2D1B14] text-[#F7F5F0]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--border)]"
                    }`}
                  >
                    <s.icon size={14} strokeWidth={1.75} />
                    <span className="hidden md:inline truncate">{s.label}</span>
                  </div>
                ))}
              </aside>

              {/* Main */}
              <div className="col-span-9 md:col-span-10 p-5 md:p-7 space-y-5 bg-[var(--surface)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase font-bold text-[var(--text-secondary)] mb-1">Overview · This month</p>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-[var(--text-primary)]">Welcome back, Anjali 🎂</h3>
                  </div>
                  <button className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#2D1B14] text-[#F7F5F0] px-4 py-2 text-xs font-semibold">
                    New Order <ArrowUpRight size={12} />
                  </button>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`rounded-2xl border border-[var(--border)] p-4 ${
                        m.accent ? "bg-[#2D1B14] text-[#F7F5F0]" : "bg-[var(--background)]"
                      }`}
                    >
                      <p className={`text-[10px] uppercase tracking-widest font-semibold ${m.accent ? "text-[#F7F5F0]/60" : "text-[var(--text-secondary)]"}`}>
                        {m.label}
                      </p>
                      <p className="mt-2 text-2xl font-extrabold tracking-tight tabular-nums">{m.value}</p>
                      <p className={`text-[11px] font-medium mt-1 ${m.accent ? "text-[#EA580C]" : "text-[var(--text-secondary)]"}`}>{m.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
                  <div className="lg:col-span-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs tracking-[0.1em] uppercase font-bold text-[var(--text-secondary)] mb-1">Weekly performance</p>
                        <p className="text-xl font-extrabold tabular-nums text-[var(--text-primary)]">₹9,240 <span className="text-xs text-[var(--text-secondary)] font-medium">Net Profit</span></p>
                      </div>
                      <span className="text-xs text-emerald-600 font-semibold">▲ 12.4%</span>
                    </div>
                    <div className="flex items-end justify-between h-32 gap-2">
                      {bars.map((b, i) => (
                        <div key={b.d} className="flex-1 flex flex-col items-center gap-1.5">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${b.h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: i * 0.06, ease: [0.76, 0, 0.24, 1] }}
                            className={`w-full rounded-t-md ${i === 5 ? "bg-[#EA580C]" : "bg-[#2D1B14]"}`}
                          />
                          <span className="text-[10px] text-[var(--text-secondary)]">{b.d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5">
                    <p className="text-xs tracking-[0.1em] uppercase font-bold text-[var(--text-secondary)] mb-4">Order status</p>
                    <Donut />
                    <div className="mt-4 space-y-2 text-xs">
                      <StatusRow color="var(--text-primary)" label="Fully Paid" pct="62%" />
                      <StatusRow color="#EA580C" label="In Progress" pct="28%" />
                      <StatusRow color="rgba(45,27,20,0.25)" label="Due / Cancelled" pct="10%" />
                    </div>
                  </div>
                </div>

                {/* Orders */}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] overflow-hidden">
                  <div className="px-5 py-3 border-b border-[var(--border)] flex items-center justify-between">
                    <p className="text-xs tracking-[0.1em] uppercase font-bold text-[var(--text-secondary)]">Recent orders</p>
                    <span className="text-[10px] text-[var(--text-secondary)]">3 of 34</span>
                  </div>
                  <div>
                    {orders.map((o, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-12 items-center px-5 py-3 border-b border-[var(--border)] last:border-b-0 text-xs md:text-sm"
                      >
                        <span className="col-span-3 font-semibold truncate text-[var(--text-primary)]">{o.name}</span>
                        <span className="col-span-5 text-[var(--text-secondary)] truncate">{o.item}</span>
                        <span className="col-span-2 font-semibold tabular-nums text-[var(--text-primary)]">{o.amt}</span>
                        <span className="col-span-2 text-right">
                          <span
                            className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase ${
                              o.status === "Completed"
                                ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                                : "bg-[#EA580C]/15 text-[#EA580C]"
                            }`}
                          >
                            {o.status}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
