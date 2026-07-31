import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

// Shared by both app/opengraph-image.tsx and app/twitter-image.tsx so the
// two conventions render identical output without duplicating the JSX.
// Not itself a route-convention file (underscore-prefixed), just a helper.

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_CONTENT_TYPE = "image/png";
export const OG_IMAGE_ALT = "Kamai — The Baker Cockpit for India's home bakers";

// Generated from the existing brand mark + real on-page copy (Hero headline,
// live ₹149/mo price) rather than a generic placeholder or stock photo —
// there was no pre-made 1200x630 marketing asset in the repo to use instead.
// If design later produces a real product-screenshot OG image, drop it in
// as app/opengraph-image.png / app/twitter-image.png and delete this file
// plus the two wrapper routes; Next.js picks up the static-file convention
// automatically instead.
export async function renderOgImage() {
  const logoPath = path.join(process.cwd(), "public", "dark-bg-logo.png");
  const logoData = fs.readFileSync(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#2D1B14",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(234,88,12,0.35), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Satori (next/og's renderer) needs an explicit numeric height —
            "auto" silently fails to render. 220x147 matches the source
            logo's real 612x408 aspect ratio. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={220} height={147} style={{ marginBottom: 48 }} alt="" />
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#F7F5F0",
            maxWidth: 920,
          }}
        >
          Run Your Bakery. Manage Every Order. Grow Every Profit.
        </div>
        {/* "Rs." instead of "₹": next/og fetches a Google Font glyph subset
            for characters outside its built-in fallback font, and that
            fetch can fail in restricted-network build environments,
            leaving a broken/missing-glyph box — confirmed this actually
            happens in a local production build. */}
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            color: "#EA580C",
            fontWeight: 700,
          }}
        >
          Lock in Rs. 149/month for life · 30 days free
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  );
}
