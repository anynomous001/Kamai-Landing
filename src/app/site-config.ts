// ⚠️ FOUNDER INPUT NEEDED: confirm the production marketing domain.
// The live app is at https://app.getkamai.online — this assumes the
// marketing site is the apex domain (https://getkamai.online). If the
// real domain is different (custom domain, www subdomain, etc.), update
// NEXT_PUBLIC_SITE_URL in the Vercel project's environment variables
// (or the fallback below) — every canonical URL, sitemap entry, OG/Twitter
// URL, and JSON-LD reference is derived from this one constant.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://getkamai.online";

export const SITE_NAME = "Kamai";
