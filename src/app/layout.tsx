import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/kamai/ThemeProvider";
import { SmoothScroll } from "@/components/kamai/SmoothScroll";

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
    <html lang="en" className={`${jakarta.variable} ${instrumentSerif.variable} ${bricolage.variable} ${inter.variable}`}>
      <body className={`${jakarta.className} antialiased`}>
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
