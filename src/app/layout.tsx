import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/kamai/ThemeProvider";
import { SmoothScroll } from "@/components/kamai/SmoothScroll";
import { StructuredData } from "./structured-data";
import { SITE_URL, SITE_NAME } from "./site-config";

// Title/description below are a first draft targeting how an Indian home
// baker actually searches (WhatsApp bakery orders, cake business app India,
// bakery billing software) rather than generic "business platform" language.
// Two more options for founder review — swap in `title`/`description` below:
//
// Option B — title: "Bakery Order Management App India | WhatsApp Orders – Kamai"
//            description: "Manage cake orders, WhatsApp payments, and bakery
//            billing in one app built for India's home bakers. Kamai —
//            30-day free trial, ₹149/month early adopter pricing."
//
// Option C — title: "Kamai: Cake Business App for India's Home Bakers (WhatsApp Orders, Billing)"
//            description: "The bakery billing and order management app for
//            India's independent home bakers — WhatsApp order tracking, UPI
//            payment links, and profit calculators. Try Kamai free for 30 days."
const TITLE = "Kamai – WhatsApp Order & Billing App for Home Bakers in India";
const DESCRIPTION =
  "Kamai is the WhatsApp-first order management and billing app for India's home bakers. Track orders, profits, and UPI payments — plans start at ₹149/month with a 30-day free trial.";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  variable: "--font-newsreader",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "bakery order management app India",
    "WhatsApp bakery orders",
    "cake business app India",
    "bakery billing software",
    "home baker app India",
    "UPI advance payment bakery",
    "baker profit calculator",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#2D1B14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrumentSerif.variable} ${bricolage.variable} ${inter.variable}`}>
      <body className={`${jakarta.className} antialiased`}>
        <StructuredData />
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
