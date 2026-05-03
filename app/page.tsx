import React from 'react';
import { Shield, Zap, Globe, CheckCircle2, Check, ShieldCheck } from 'lucide-react';

export default function CompliancePlatform() {
  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* SECTION 1: HERO */}
      <header className="py-24 px-6 border-b border-white/5 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 uppercase">
            <Shield size={14} />
            <span>EU AI Act Compliance Engine v1.0</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight uppercase">
            THE LEGAL <span className="text-blue-600">SHIELD</span> <br /> FOR AI TEAMS
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 font-light">
            Automate your regulatory strategy. We transform complex European laws into seamless automated workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-xl shadow-blue-600/20 uppercase text-xs tracking-widest">
              Secure Your Startup
            </button>
            <button className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/10 transition-all uppercase text-xs tracking-widest">
              Institutional Demo
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 2: PRICING */}
      <section className="py-24 px-6 bg-[#070707]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Starter */}
            <div className="p-10 rounded-2xl border border-white/5 bg-[#0F0F0F] hover:border-blue-900/40 transition-all group">
              <Zap className="text-gray-600 group-hover:text-blue-500 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-2">Starter Guard</h3>
              <div className="text-5xl font-bold mb-8">€499<span className="text-lg text-gray-600 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-10 text-gray-400 text-sm">
                <li className="flex items-center gap-3"><Check className="text-blue-500" size={16} /> EU AI Act Foundation</li>
                <li className="flex items-center gap-3"><Check className="text-blue-500" size={16} /> Quarterly Compliance Audit</li>
              </ul>
              <button className="w-full py-4 bg-white/5 hover:bg-white/10 rounded-xl font-bold border border-white/10 text-xs uppercase tracking-widest transition-all">
                Activate Guard
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-10 rounded-3xl border-2 border-blue-600 bg-[#141414] relative shadow-2xl shadow-blue-600/10">
              <div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-black px-6 py-2 uppercase">Institutional</div>
              <ShieldCheck className="text-blue-500 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-2 text-white">Enterprise Shield</h3>
              <div className="text-5xl font-bold mb-8 text-white">€1,499<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-10 text-gray-200 text-sm">
                <li className="flex items-center gap-3"><Check className="text-blue-500" size={16} /> Full Automation Suite</li>
                <li className="flex items-center gap-3"><Check className="text-blue-500" size={16} /> Priority Legal Response</li>
                <li className="flex items-center gap-3"><Check className="text-blue-500" size={16} /> Investor Certification</li>
              </ul>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold shadow-lg shadow-blue-600/30 text-xs uppercase tracking-widest transition-all">
                Secure Everything
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-gray-700 text-[10px] border-t border-white/5 uppercase tracking-[0.4em]">
        ComplianceGuard AI © 2026 | Built for Institutional Trust
      </footer>
    </div>
  );
}