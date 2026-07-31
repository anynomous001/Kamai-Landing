import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-config";

// This repo only serves the marketing landing page ("/"). Public menu pages
// (/m/:slug) and the product app (dashboard, billing, etc.) live on a
// separate deployment (app.getkamai.online) and are intentionally not
// listed here — they're user-generated / authenticated, not marketing
// pages, and aren't part of this Next.js app anyway.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
