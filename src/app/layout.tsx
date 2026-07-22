import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/kamai/ThemeProvider";
import { SmoothScroll } from "@/components/kamai/SmoothScroll";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamai — The Baker Cockpit | Run Your Bakery Like a Real Business",
  description: "Track every order. Know your real profit. Collect UPI advances instantly. Skip wholesale queues. Everything India's independent bakers need, in one Baker Cockpit.",
  keywords: "home baker app India, bakery operating system, UPI advance payment, wholesale escrow, baker profit calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className={`${manrope.className} antialiased`}>
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
