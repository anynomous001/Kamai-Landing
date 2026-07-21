import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-stone-50 overflow-x-hidden selection:bg-emerald-500 selection:text-slate-900">
      {/* 1. Global Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10 text-emerald-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 25 45 V 30 A 25 25 0 0 1 75 30 V 45" />
              <path d="M 15 45 H 85" />
              <path d="M 15 45 V 80 A 10 10 0 0 0 25 90 H 75 A 10 10 0 0 0 85 80 V 45" />
              <path d="M 35 60 H 65" />
              <path d="M 50 45 V 85" />
              <path d="M 50 60 C 65 60, 65 45, 50 45" />
              <path d="M 50 70 L 70 85" />
            </svg>
            <span className="text-3xl font-extrabold tracking-tight lowercase text-stone-50">kamai</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <a href="#baker" className="hover:text-stone-50 transition-colors">The Baker Cockpit</a>
            <a href="#wholesale" className="hover:text-stone-50 transition-colors">The Wholesale Bridge</a>
            <a href="#pricing" className="hover:text-stone-50 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-5 py-2.5 text-sm font-semibold rounded-lg border border-stone-700 text-stone-300 hover:text-stone-50 hover:border-stone-500 transition-all">
              Login
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* 2. The "Dual Gateway" Hero Section */}
      <header className="relative pt-24 pb-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-900 -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Stop Chasing Payments. <br />
            <span className="text-emerald-500">Start Tracking Your Kamai.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            The all-in-one operating system and digital escrow for India's independent creators and local wholesale merchants.
          </p>
        </div>

        {/* Dual Mockups */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 relative">
          
          {/* Left Card: Baker */}
          <div className="bg-slate-800/50 border border-white/10 rounded-3xl p-6 lg:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 text-emerald-500">
              ₹
            </div>
            
            {/* Phone Mockup Frame */}
            <div className="bg-stone-50 rounded-[2.5rem] p-4 lg:p-6 shadow-2xl mx-auto max-w-[320px] aspect-[1/1.8] relative mb-10 ring-8 ring-slate-950/50">
              <div className="w-full h-full rounded-[1.5rem] border border-stone-200 overflow-hidden flex flex-col bg-stone-100 text-slate-900 relative">
                {/* Mockup Top */}
                <div className="p-4 border-b border-stone-200 bg-white flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">B</div>
                    <div className="font-bold text-sm">Cockpit</div>
                  </div>
                </div>
                {/* Mockup Body */}
                <div className="p-4 flex-1">
                  <div className="flex justify-between mb-4 text-xs font-semibold text-stone-500">
                    <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center">M</div>
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">T</div>
                    <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center">W</div>
                    <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center">T</div>
                    <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center">F</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 bg-white rounded-lg shadow-sm w-full"></div>
                    <div className="h-12 bg-white rounded-lg shadow-sm w-full"></div>
                    <div className="h-12 bg-white rounded-lg shadow-sm w-full"></div>
                  </div>
                </div>
                {/* Overlay Notification */}
                <div className="absolute bottom-6 left-4 right-4 bg-emerald-500 text-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-pulse">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">✓</div>
                  <div className="text-sm font-semibold">Advance Secured</div>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 hover:-translate-y-1 transition-all shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)]">
              Claim Your Baker Cockpit (₹299/mo)
            </button>
          </div>

          {/* Right Card: Wholesaler */}
          <div className="bg-slate-800/50 border border-white/10 rounded-3xl p-6 lg:p-10 backdrop-blur-sm relative overflow-hidden group hover:border-white/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-5 font-bold text-6xl -rotate-12 group-hover:-rotate-6 group-hover:scale-110 transition-transform duration-500">
              📦
            </div>
            
            {/* Phone Mockup Frame */}
            <div className="bg-stone-50 rounded-[2.5rem] p-4 lg:p-6 shadow-2xl mx-auto max-w-[320px] aspect-[1/1.8] relative mb-10 ring-8 ring-slate-950/50">
              <div className="w-full h-full rounded-[1.5rem] border border-stone-200 overflow-hidden flex flex-col bg-slate-900 text-stone-50">
                {/* Mockup Top */}
                <div className="p-4 border-b border-white/10 bg-slate-800 flex justify-between items-center">
                  <div className="font-bold text-sm">Fulfillment Board</div>
                  <div className="w-6 h-6 rounded bg-stone-50 text-slate-900 flex items-center justify-center font-bold text-[10px]">QR</div>
                </div>
                {/* Mockup Body */}
                <div className="p-4 flex-1 flex flex-col items-center">
                  <div className="w-32 h-32 bg-white rounded-xl mb-6 p-2 flex flex-wrap gap-1 items-center justify-center">
                     {/* Fake QR */}
                     <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#000,#000_4px,#fff_4px,#fff_8px)] rounded"></div>
                  </div>
                  <div className="w-full space-y-3">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded bg-slate-800"></div>
                      <div className="flex-1"><div className="h-2 w-full bg-slate-800 rounded mb-2"></div><div className="h-2 w-2/3 bg-slate-800 rounded"></div></div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded bg-slate-800"></div>
                      <div className="flex-1"><div className="h-2 w-full bg-slate-800 rounded mb-2"></div><div className="h-2 w-1/2 bg-slate-800 rounded"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-transparent border-2 border-stone-50 text-stone-50 font-bold rounded-xl hover:bg-stone-50 hover:text-slate-950 hover:-translate-y-1 transition-all">
              Join the Wholesale Network (Free)
            </button>
          </div>
          
        </div>
      </header>

      {/* 3. The Trust & Escrow Bridge */}
      <section className="bg-emerald-500 py-10 px-6 relative overflow-hidden">
        {/* Subtle background lines/pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed">
            Powered by Zero-MDR UPI Escrow. We secure the baker's margins on the front end, and guarantee the wholesaler's payments on the back end.
          </p>
        </div>
      </section>

      {/* 4. The Baker's Journey */}
      <section id="baker" className="py-24 px-6 bg-stone-50 text-slate-900 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">For Bakers: The End of Administrative Chaos.</h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="flex-1 w-full flex justify-center md:justify-end">
                <div className="w-[320px] aspect-square bg-slate-100 rounded-3xl shadow-xl border border-stone-200 overflow-hidden flex flex-col">
                  <div className="bg-[#075E54] text-white p-4 font-semibold shadow text-center">WhatsApp Receipt</div>
                  <div className="bg-[#E5DDD5] flex-1 p-6 flex flex-col justify-end gap-3">
                    <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm max-w-[85%] self-start w-full text-sm font-medium text-stone-500 flex flex-col gap-2">
                       <div className="h-3 bg-stone-200 rounded w-full"></div>
                       <div className="h-3 bg-stone-200 rounded w-4/5"></div>
                       <div className="h-6 bg-emerald-100 rounded w-full mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">WhatsApp-Native Receipts.</h3>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Don't force your customers to download an app. Send professional, auto-calculated receipts and payment links directly to their WhatsApp.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
              <div className="flex-1 w-full flex justify-center md:justify-start">
                <div className="w-[320px] bg-white rounded-3xl shadow-2xl border border-stone-200 p-8 flex flex-col gap-6">
                  <div className="font-bold text-xl border-b pb-4">Cost Calculator</div>
                  <div className="space-y-4">
                    <div className="h-12 bg-stone-50 border border-stone-200 rounded-lg"></div>
                    <div className="h-12 bg-stone-50 border border-stone-200 rounded-lg"></div>
                  </div>
                  <div className="h-20 bg-emerald-500 rounded-xl mt-4 flex items-center justify-between px-6 text-white">
                    <span className="font-medium">Net Profit</span>
                    <span className="font-bold text-xl">₹850</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Automated Profit Ledger.</h3>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Input your raw material costs once. Kamai automatically calculates your net profit per order so you never underprice your hard work again.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="flex-1 w-full flex justify-center md:justify-end">
                <div className="w-[320px] aspect-square bg-slate-900 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center text-center gap-6 relative overflow-hidden">
                   <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center">
                     <span className="text-5xl">🔒</span>
                   </div>
                   <div className="text-white font-bold text-xl">100% Secured Advance</div>
                   <div className="text-emerald-500 font-bold text-3xl">₹1,500 via UPI</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">100% Upfront Advances.</h3>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Stop the awkward follow-ups. Lock in UPI advances securely via Digital Escrow before you ever turn on the oven.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The Wholesaler's Advantage */}
      <section id="wholesale" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-slate-950 -z-10"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-50">For Wholesalers: High-Velocity Fulfillment, Zero Live Inventory.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature Card 1 */}
            <div className="bg-slate-800/40 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-8">
                📱
              </div>
              <h3 className="text-xl font-bold mb-4">Click & Collect Escrow.</h3>
              <p className="text-stone-400 leading-relaxed">
                Bakers pre-pay safely via UPI. You pack the boxes during quiet hours without ever updating digital inventory.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-slate-800/40 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-8">
                ⏱️
              </div>
              <h3 className="text-xl font-bold mb-4">60-Second Flash Pickup.</h3>
              <p className="text-stone-400 leading-relaxed">
                Kill the 2-hour physical queue. Bakers scan a QR code at the counter, funds are instantly released, and they leave in 60 seconds.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-slate-800/40 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-8">
                ₹
              </div>
              <h3 className="text-xl font-bold mb-4">Zero Platform Commissions.</h3>
              <p className="text-stone-400 leading-relaxed">
                You get exactly your list price. We charge the baker a tiny convenience fee to skip the line—making Kamai 100% free for your shop.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Final CTA & Footer */}
      <footer className="bg-slate-900 border-t border-white/5 pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Ready to treat your business like a real business?
          </h2>
          <button className="px-8 py-5 text-lg font-bold rounded-xl bg-emerald-500 text-slate-950 hover:bg-emerald-400 hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] transition-all">
            Claim Your Store Link Now
          </button>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-stone-500 text-sm">
          <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 25 45 V 30 A 25 25 0 0 1 75 30 V 45" />
              <path d="M 15 45 H 85" />
              <path d="M 15 45 V 80 A 10 10 0 0 0 25 90 H 75 A 10 10 0 0 0 85 80 V 45" />
              <path d="M 35 60 H 65" />
              <path d="M 50 45 V 85" />
              <path d="M 50 60 C 65 60, 65 45, 50 45" />
              <path d="M 50 70 L 70 85" />
            </svg>
            <span className="text-2xl font-extrabold tracking-tight lowercase text-stone-50">kamai</span>
          </div>
          <div>Proudly Made in India for Bharat.</div>
        </div>
      </footer>

    </main>
  );
}
