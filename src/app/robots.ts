import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-config";

// This Next.js app currently only serves the marketing landing page at "/".
// The /api, /dashboard, /billing, and other authenticated app routes named
// in the audit request don't exist in this repo (they live on the separate
// app.getkamai.online deployment) — the rules below are kept as a defensive
// baseline in case this app ever grows those routes, and cost nothing today.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/billing/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
