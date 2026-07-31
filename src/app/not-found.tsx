import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/kamai/Nav";
import Footer from "@/components/kamai/Footer";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="noise-bg min-h-screen flex flex-col" style={{ background: "var(--background)", color: "var(--text-primary)" }}>
      <Nav />
      <main className="flex-1 flex items-center justify-center px-6 pt-40 pb-24 text-center">
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--text-secondary)] mb-4">( 404 )</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1] text-[var(--text-primary)] mb-6">
            This page went <span className="italic-serif text-[#EA580C]">missing</span>.
          </h1>
          <p className="text-base text-[var(--text-secondary)] mb-10">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full btn-primary-orange px-6 py-3.5 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
