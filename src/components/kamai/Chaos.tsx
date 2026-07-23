'use client';

import React, { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import {
  MessageCircle,
  Smartphone,
  Users,
  BookOpen,
  Brain,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ORANGE = "#EA580C";

const ITEMS = [
  { id: 1, icon: MessageCircle, label: "Orders",     text: "Orders live inside WhatsApp.",           tint: "#25D366", origin: { x: -320, y: -180, r: -14 } },
  { id: 2, icon: Smartphone,   label: "Payments",   text: "Payments live in UPI.",                  tint: "#6366F1", origin: { x:  300, y: -210, r:  11 } },
  { id: 3, icon: Users,        label: "Customers",  text: "Customer details live in old chats.",    tint: "#0EA5E9", origin: { x: -360, y:   40, r:   8 } },
  { id: 4, icon: BookOpen,     label: "Costs",      text: "Ingredient costs live in your notebook.",tint: "#B45309", origin: { x:  340, y:   60, r:  -9 } },
  { id: 5, icon: Brain,        label: "Schedules",  text: "Delivery schedules live in your head.",  tint: "#DB2777", origin: { x:  -80, y:  240, r:  15 } },
];

interface ChaosCardProps {
  item: typeof ITEMS[number];
  index: number;
  progress: MotionValue<number>;
  resolveStart: number;
  resolveEnd: number;
}

const ChaosCard = ({ item, index, progress, resolveStart, resolveEnd }: ChaosCardProps) => {
  const Icon = item.icon;
  const total = ITEMS.length;

  const span = resolveEnd - resolveStart;
  const cardStart = resolveStart + (span * 0.35 * index) / total;
  const cardEnd = cardStart + span * 0.55;

  const x = useTransform(progress, [cardStart, cardEnd], [item.origin.x, 0]);
  const y = useTransform(progress, [cardStart, cardEnd], [item.origin.y, 0]);
  const rotate = useTransform(progress, [cardStart, cardEnd], [item.origin.r, 0]);
  const scale = useTransform(progress, [cardStart, cardEnd], [1, 0.98]);

  const sx = useSpring(x, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 20, mass: 0.6 });
  const sr = useSpring(rotate, { stiffness: 90, damping: 20, mass: 0.6 });

  const ringOpacity = useTransform(progress, [cardEnd - 0.02, cardEnd, cardEnd + 0.08], [0, 1, 0]);
  const indexOpacity = useTransform(progress, [cardEnd - 0.02, cardEnd], [0, 1]);

  return (
    <motion.div
      data-testid={`chaos-card-${item.id}`}
      style={{
        x: sx,
        y: sy,
        rotate: sr,
        scale,
        // Cards sit BELOW the cockpit chrome (which is z-50 inside cockpit's isolated layer)
        zIndex: 10 + index,
        top: `${index * 76}px`,
      }}
      className="absolute left-1/2 -translate-x-1/2 w-[440px] max-w-[86vw]"
    >
      <motion.div
        animate={{ y: [0, -6, 0, 5, 0] }}
        transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="relative flex items-center gap-4 rounded-2xl bg-[var(--surface)]/95 backdrop-blur-sm border border-[var(--border)] shadow-[var(--shadow-custom)] px-5 py-4 transition-colors duration-300">
          <motion.div style={{ opacity: ringOpacity }} className="pointer-events-none absolute inset-0 rounded-2xl ring-2" aria-hidden>
            <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: `0 0 0 2px ${ORANGE}55` }} />
          </motion.div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `${item.tint}18`, color: item.tint }}>
            <Icon size={20} strokeWidth={2.2} />
          </div>

          <div className="flex-1">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-left text-[var(--text-secondary)]">
              {item.label}
            </div>
            <div className="text-[15px] leading-snug font-medium text-left text-[var(--text-primary)]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              {item.text}
            </div>
          </div>

          <motion.div style={{ opacity: indexOpacity }} className="text-[11px] font-mono tabular-nums text-[var(--text-secondary)] opacity-80" aria-hidden>
            <span>{String(item.id).padStart(2, "0")}</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ChaosParticlesProps { opacity: MotionValue<number>; }

const ChaosParticles = ({ opacity }: ChaosParticlesProps) => {
  const particles = useMemo(
    () => Array.from({ length: 22 }).map((_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      s: 2 + Math.random() * 3, d: 4 + Math.random() * 6, delay: Math.random() * 3,
    })),
    []
  );
  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[var(--text-primary)]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -14, 0], opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </motion.div>
  );
};

export default function Chaos() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const RESOLVE_START = 0.15;
  const RESOLVE_END = 0.7;

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0.85, 0.98], [1, 0.85]);

  const particlesOpacity = useTransform(scrollYProgress, [0.05, 0.55], [1, 0]);

  // Cockpit: appears at 0.05–0.20 AND is explicitly held at opacity 1 / scale 1
  // all the way to the end of the section. useTransform is bidirectional,
  // so reverse scroll still fades it out naturally — exactly what you asked for.
  const cockpitOpacity = useTransform(scrollYProgress, [0.05, 0.2, 1], [0, 1, 1]);
  const cockpitScale   = useTransform(scrollYProgress, [0.05, 0.2, 1], [0.92, 1, 1]);

  const resolveOpacity = useTransform(scrollYProgress, [0.78, 0.92], [0, 1]);
  const resolveY = useTransform(scrollYProgress, [0.78, 0.92], [24, 0]);

  const railProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const chaosLetters = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      data-testid="problem-section"
      className="relative w-full bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300"
      style={{ height: "260vh", fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply dark:mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.176 0 0 0 0 0.106 0 0 0 0 0.078 0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl bg-[#EA580C]/10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full blur-3xl bg-[var(--text-primary)]/5" />

        <ChaosParticles opacity={particlesOpacity} />

        <div className="relative mx-auto flex h-full max-w-[1240px] flex-col px-6 md:px-10 lg:px-16 pt-12 md:pt-16">
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="flex items-center justify-between">
            <div className="text-[11px] tracking-[0.32em] uppercase font-semibold text-left text-[var(--text-secondary)]" data-testid="section-tag">
              ( 02 · operational clarity )
            </div>
            <div className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[var(--text-secondary)] opacity-80">
              <Sparkles size={12} style={{ color: ORANGE }} />
              scroll to resolve
            </div>
          </motion.div>

          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mt-6 md:mt-8 max-w-[720px] text-left">
            <h2
              data-testid="section-headline"
              className="leading-[0.95] tracking-tight text-left text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5.6vw, 4.75rem)" }}
            >
              <span className="block">Your bakery has grown.</span>
              <span className="block">
                <motion.span style={{ fontFamily: "var(--font-newsreader), serif", fontStyle: "italic", fontWeight: 400, color: ORANGE, letterSpacing: "-0.01em" }}>
                  Your workflow
                </motion.span>{" "}
                hasn&apos;t.
              </span>
            </h2>
            <p className="mt-5 text-[15px] md:text-base max-w-[540px] leading-relaxed text-left text-[var(--text-secondary)]">
              Five apps. A paper notebook. And a lot of mental gymnastics. Watch what happens when it all snaps into place.
            </p>
          </motion.div>

          <div className="relative mt-6 md:mt-8 flex-1">
            <div className="absolute left-2 md:left-4 top-4 bottom-8 flex flex-col items-center">
              <div className="relative h-full w-[2px] rounded-full bg-[var(--text-primary)]/10">
                <motion.div data-testid="progress-rail" className="absolute left-0 top-0 w-full rounded-full" style={{ height: railProgress, background: ORANGE }} />
              </div>
              <div className="mt-3 text-[9px] tracking-[0.24em] uppercase rotate-180 text-[var(--text-secondary)] opacity-80" style={{ writingMode: "vertical-rl" }}>
                chaos · order
              </div>
            </div>

            <div className="relative mx-auto h-full w-full max-w-[720px]">
              {/* Baker Cockpit — isolate creates its own stacking context so
                   the chrome (z-50) always wins over the cards inside it.
                   zIndex: 5 keeps the cockpit body below the chaos cards,
                   but the chrome header still sits above everything. */}
              <motion.div
                style={{ opacity: cockpitOpacity, scale: cockpitScale, zIndex: 5 }}
                className="absolute left-1/2 top-[6%] -translate-x-1/2 w-[480px] max-w-[92vw] ml-3 isolate"
                data-testid="baker-cockpit"
              >
                <div
                  className="relative rounded-[28px] p-5 pt-3 transition-colors duration-300"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-custom)",
                  }}
                >
                  {/* Cockpit chrome — pinned above cards with relative z-50 */}
                  <div className="relative z-50 flex items-center justify-between mb-4 px-1 bg-[var(--surface)] rounded-t-[20px] transition-colors duration-300">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#F87171" }} />
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FBBF24" }} />
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#34D399" }} />
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--text-secondary)] opacity-80">
                      Baker Cockpit
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-secondary)] opacity-60">
                      /one‑view
                    </div>
                  </div>

                  <div className="relative" style={{ height: `${ITEMS.length * 76 + 8}px` }} />
                </div>
              </motion.div>

              {/* Chaos cards */}
              <div className="absolute left-1/2 top-[6%] -translate-x-1/2 w-[480px] max-w-[92vw] pointer-events-none pt-[64px] ml-3 z-10">
                <div className="relative w-full h-full">
                  {ITEMS.map((item, i) => (
                    <ChaosCard
                      key={item.id}
                      item={item}
                      index={i}
                      progress={scrollYProgress}
                      resolveStart={RESOLVE_START}
                      resolveEnd={RESOLVE_END}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              style={{ opacity: resolveOpacity, y: resolveY }}
              className="absolute left-0 right-0 bottom-4 md:bottom-6 flex justify-center"
              data-testid="resolution-block"
            >
              <div className="flex items-center gap-3 max-w-[560px] text-center">
                <ArrowRight size={18} style={{ color: ORANGE }} strokeWidth={2.4} />
                <p className="text-[15px] md:text-[17px] font-semibold text-[var(--text-primary)]">
                  Kamai brings everything together into{" "}
                  <span style={{ fontFamily: "var(--font-newsreader), serif", fontStyle: "italic", color: ORANGE, fontWeight: 400 }}>
                    one organized Baker Cockpit.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ul className="sr-only" aria-label="Current fragmented workflow">
        {ITEMS.map((i) => (<li key={i.id}>{i.text}</li>))}
        <li>Kamai brings everything together into one organized Baker Cockpit.</li>
      </ul>

      <motion.span aria-hidden className="hidden" style={{ opacity: chaosLetters }} />
      {reduce ? <span className="sr-only">Reduced motion active.</span> : null}
    </section>
  );
}
