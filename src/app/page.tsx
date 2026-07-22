'use client';
import Nav from "@/components/kamai/Nav";
import Hero from "@/components/kamai/Hero";
import TrustedBy from "@/components/kamai/TrustedBy";
import DashboardMockup from "@/components/kamai/DashboardMockup";
import Marquees from "@/components/kamai/Marquees";
import Chaos from "@/components/kamai/Chaos";
import Outcomes from "@/components/kamai/Outcomes";
import Features from "@/components/kamai/Features";
import Flow from "@/components/kamai/Flow";
import Modules from "@/components/kamai/Modules";
import Pricing from "@/components/kamai/Pricing";
import FAQ from "@/components/kamai/FAQ";
import FinalCTA from "@/components/kamai/FinalCTA";
import Footer from "@/components/kamai/Footer";

export default function Landing() {
  return (
    <div className="noise-bg min-h-screen" style={{ background: 'var(--background)', color: 'var(--text-primary)' }} data-testid="kamai-landing">
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <DashboardMockup />
        <Marquees />
        <Chaos />
        <Outcomes />
        <Features />
        <Flow />
        <Modules />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
