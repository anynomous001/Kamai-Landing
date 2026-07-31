'use client';

import { useEffect, useState } from "react";

// ⚠️ STUBBED — NOT REAL DATA. This repo (the marketing landing page) has no
// backend/API routes of its own; `/api/public/early-adopter-status` does not
// exist anywhere reachable from this deployment as of this commit. This
// component attempts the fetch below so it starts working automatically
// the moment that endpoint exists, but until then it always falls back to
// the hardcoded stub numbers, which are NOT real signup counts.
//
// Before this goes live, confirm:
//   1. Where the endpoint actually lives — this same Next.js app (would need
//      a route added under src/app/api/public/...), a rewrite/proxy to the
//      product backend, or a different domain entirely.
//   2. The response shape below is a guess (nothing to match against yet) —
//      align it with whatever Task 1 actually returns.
export const EARLY_ADOPTER_TOTAL_SPOTS = 149;

const STUB_STATUS: EarlyAdopterStatus = {
  spotsTotal: EARLY_ADOPTER_TOTAL_SPOTS,
  spotsRemaining: 134,
  offerEndsAt: "2026-12-31",
};

interface EarlyAdopterStatus {
  spotsTotal: number;
  spotsRemaining: number;
  offerEndsAt: string;
}

function isValidStatus(data: unknown): data is EarlyAdopterStatus {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return typeof d.spotsTotal === "number" && typeof d.spotsRemaining === "number";
}

export default function EarlyAdopterCounter() {
  const [status, setStatus] = useState<EarlyAdopterStatus>(STUB_STATUS);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/public/early-adopter-status")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (!cancelled && isValidStatus(data)) {
          setStatus(data);
          setIsLive(true);
        }
      })
      .catch(() => {
        // Endpoint not ready / not reachable — keep showing the stub above.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <p
      className="text-center text-xs font-bold uppercase tracking-widest text-[#EA580C]"
      data-testid="early-adopter-counter"
      data-live={isLive}
    >
      {status.spotsRemaining} of {status.spotsTotal} spots left
    </p>
  );
}
