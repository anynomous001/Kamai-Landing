'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, ArrowUpRight, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import KamaiLogo from "./KamaiLogo";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#flow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      data-testid="site-nav"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className={`flex flex-col rounded-[24px] border border-[var(--border)] backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "bg-[var(--surface-glass)] shadow-[0_10px_40px_-20px_rgba(45,27,20,0.25)]"
              : "bg-[var(--surface-glass)]/60"
          }`}
        >
          {/* Main header row */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3">
            <a href="#top" className="flex items-center" data-testid="nav-brand">
              <KamaiLogo height={44} />
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                data-testid="theme-toggle"
                className="h-10 w-10 grid place-items-center rounded-full border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--border)] transition-colors cursor-pointer"
              >
                {theme === "light" ? <Moon size={16} strokeWidth={1.75} /> : <Sun size={16} strokeWidth={1.75} className="text-amber-400" />}
              </button>
              <a
                href="https://app.getkamai.online/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-launch-webapp"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full btn-pill-border px-5 py-2.5 text-sm font-semibold transition-opacity"
              >
                Launch Cockpit
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
              <a
                href="https://app.getkamai.online/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-cta"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full btn-espresso px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get the Cockpit
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>

              {/* Mobile menu toggle button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="h-10 w-10 grid place-items-center rounded-full border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--border)] transition-colors cursor-pointer md:hidden"
                aria-label="Toggle menu"
                data-testid="menu-toggle"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile expanded menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden border-t border-[var(--border)] px-6 py-4 flex flex-col gap-3 md:hidden bg-[var(--surface)]/95 rounded-b-[24px]"
              >
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors border-b border-[var(--border)]/30 last:border-0"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="https://app.getkamai.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full btn-pill-border px-5 py-3 text-sm font-bold text-center"
                >
                  Launch Cockpit
                  <ArrowUpRight size={14} strokeWidth={2} />
                </a>
                <a
                  href="https://app.getkamai.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-full btn-espresso px-5 py-3 text-sm font-bold text-center"
                >
                  Get the Cockpit
                  <ArrowUpRight size={14} strokeWidth={2} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
