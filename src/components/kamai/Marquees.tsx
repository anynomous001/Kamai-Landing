'use client';

const strip1 = [
  "Order Management",
  "Profit Ledger",
  "Customer CRM",
  "Production Calendar",
  "Payment Links",
  "Investment Tracker",
  "Wholesale Marketplace",
];

const strip2 = [
  "Never Miss An Order",
  "Always Know Your Profit",
  "Every Customer Saved",
  "One Baker Cockpit",
  "₹299 / month",
  "Kamai OS",
];

export default function Marquees() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" data-testid="diagonal-marquees">
      <div className="space-y-4">
        <div className="w-[110%] -ml-[5%] -rotate-2">
          <div className="relative overflow-hidden bg-[#2D1B14] text-[#F7F5F0] py-5 border-y border-[#EA580C]/30 shadow-lg">
            <div className="flex marquee-left gap-10 whitespace-nowrap">
              {[...strip1, ...strip1, ...strip1, ...strip1].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-8 text-lg md:text-2xl font-extrabold tracking-tight">
                  {t}
                  <span className="text-[#EA580C]">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[110%] -ml-[5%] rotate-2">
          <div className="relative overflow-hidden bg-[#EA580C] text-white py-5 shadow-lg">
            <div className="flex marquee-right gap-10 whitespace-nowrap">
              {[...strip2, ...strip2, ...strip2, ...strip2].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-8 text-lg md:text-2xl font-extrabold tracking-tight">
                  {t}
                  <span className="text-white/70">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
