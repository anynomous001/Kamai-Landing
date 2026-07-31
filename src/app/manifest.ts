import type { MetadataRoute } from "next";
import { SITE_NAME } from "./site-config";

// The product itself is installable as a PWA, so the marketing site should
// be too — lets a baker "Add to Home Screen" straight from the landing page.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — The Baker Cockpit`,
    short_name: SITE_NAME,
    description:
      "The WhatsApp-first order management and billing app for India's home bakers.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F0",
    theme_color: "#2D1B14",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
