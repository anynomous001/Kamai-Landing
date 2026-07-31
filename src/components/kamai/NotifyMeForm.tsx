'use client';

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// ⚠️ UI ONLY — NOT WIRED TO A REAL BACKEND. There is no email-capture
// endpoint specified or built anywhere (this is distinct from, and in
// addition to, the early-adopter-status stub in EarlyAdopterCounter.tsx).
// Right now this form only sets local component state on submit — the
// email address is NOT sent anywhere and is NOT persisted. Shipping this
// as-is means users who submit their email believe they'll be notified,
// but nothing captures that address. Needs a real endpoint (serverless
// route + storage, or a Vercel Marketplace email/CRM integration) wired
// into the onSubmit handler below before this goes live.
export default function NotifyMeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: replace with a real API call once an email-capture endpoint exists.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        className="mt-8 text-center text-sm font-semibold text-[var(--text-primary)]"
        data-testid="notify-me-success"
      >
        Thanks — we&apos;ll email you when Pro launches.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-2" data-testid="notify-me-form">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@bakery.com"
        aria-label="Email address"
        className="w-full rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#EA580C]"
      />
      <button
        type="submit"
        data-testid="pricing-cta-pro"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-4 text-base font-bold text-[var(--text-primary)] hover:bg-[var(--border)]/20 transition-colors"
      >
        Notify me
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
