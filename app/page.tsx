"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, Activity, Globe, Mail, Phone } from 'lucide-react';

/**
 * UTILITY: Conditional Class Merger
 */
const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

/**
 * COMPONENT: Institutional Navigation Bar
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-white/5 bg-black/50 backdrop-blur-md">
        
        {/* BRAND IDENTITY */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
            <Shield size={20} className="text-white" />
          </div>
          <span className="font-black text-xl tracking-tighter text-white uppercase">
            Compliance<span className="text-blue-500">Guard</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {["Solutions", "Enterprise", "About Us", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`} 
              className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-blue-500 transition-colors font-bold"
            >
              {item}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-[10px] uppercase tracking-widest font-black text-white px-6 py-2 border border-white/10 rounded-sm hover:bg-white/5">
            Login
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-6 bg-white transition-all", isOpen && "rotate-45 translate-y-2")} />
              <span className={cn("block h-0.5 w-6 bg-white transition-all", isOpen && "opacity-0")} />
              <span className={cn("block h-0.5 w-6 bg-white transition-all", isOpen && "-rotate-45 -translate-y-2")} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

/**
 * COMPONENT: Hero Section (The Shield)
 */
const Hero = () => (
  <section className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-xl mb-12"
      >
        <Activity size={14} className="text-blue-500 animate-pulse" />
        <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.3em]">Institutional Grade Compliance</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, filter: "blur(10px)" }} 
        animate={{ opacity: 1, filter: "blur(0px)" }} 
        className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9]"
      >
        THE AI <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">SHIELD</span> <br />
        FOR MODERN <span className="italic font-serif text-blue-100/80">ENTERPRISE</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }} 
        className="max-w-2xl text-gray-400 text-lg md:text-xl font-light mx-auto mb-12 leading-relaxed"
      >
        A sovereign regulatory OS transforming the **EU AI Act** into a strategic competitive advantage.
      </motion.p>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ delay: 0.6 }} 
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <motion.div 
  initial={{ scale: 0.9, opacity: 0 }} 
  animate={{ scale: 1, opacity: 1 }} 
  transition={{ delay: 0.6 }} 
  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
> {/* PRIMARY ACTION: DIRECT CHECKOUT VIA LEMON SQUEEZY */}
  <button 
    onClick={() => {
      const url = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_URL;
      if (url) {
        window.open(url, '_blank');
      } else {
        alert("Configuration Error: Payment link not found in .env");
      }
    }}
    className="px-12 py-5 bg-white text-black font-black rounded-sm uppercase text-[10px] tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_40px_rgba(37,99,235,0.2)] min-w-[300px]"
  >
    Initialize Compliance Protocol
  </button>

  {/* SECONDARY ACTION: INSTITUTIONAL DEMO */}
  <button className="px-10 py-5 border border-white/10 text-white font-bold rounded-sm text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all min-w-[240px]">
    Institutional Demo
  </button>
</motion.div>

      </motion.div>
    </div>
  </section>
);

/**
 * COMPONENT: Strategic Contact Hub
 */
const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-[#030303] relative border-t border-white/5">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      <div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
          Ready to <span className="text-blue-500 font-serif italic text-7xl">Shield</span> <br />Your Data?
        </h2>
        <p className="text-gray-500 text-lg mb-12 font-light">
          Partner with our lead regulatory architects to secure your AI infrastructure.
        </p>
        
        <div className="space-y-6">
          {/* WHATSAPP: UPDATED WITH UKRAINIAN NUMBER */}
          <a href="https://wa.me/380932318376" className="flex items-center gap-4 group">
            <div className="p-4 rounded-full bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600 transition-all">
              <Phone size={20} className="text-blue-500 group-hover:text-white" />
            </div>
            <div>
              <div className="text-[10px] tracking-widest text-gray-600 font-bold uppercase">Fast Response</div>
              <div className="text-white font-bold">WhatsApp Business</div>
            </div>
          </a>
          
          {/* EMAIL: UPDATED WITH GMAIL */}
          <a href="mailto:Complianceguard.ai@gmail.com" className="flex items-center gap-4 group">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all">
              <Mail size={20} className="text-gray-400 group-hover:text-white" />
            </div>
            <div>
              <div className="text-[10px] tracking-widest text-gray-600 font-bold uppercase">Official Inquiries</div>
              <div className="text-white font-bold">Complianceguard.ai@gmail.com</div>
            </div>
          </a>
        </div>
      </div>

      <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
        <form className="space-y-6">
          <div className="space-y-4">
            <input type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-xs tracking-widest text-white outline-none focus:border-blue-600 transition-all" />
            <input type="email" placeholder="CORPORATE EMAIL" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-xs tracking-widest text-white outline-none focus:border-blue-600 transition-all" />
            <textarea placeholder="PROJECT SCOPE" rows={4} className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-xs tracking-widest text-white outline-none focus:border-blue-600 transition-all" />
          </div>
          <button className="w-full py-5 bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-colors">
            Submit Strategy Request
          </button>
        </form>
      </div>
    </div>
  </section>
);

/**
 * ROOT PLATFORM
 */
export default function CompliancePlatform() {
  return (
    <main className="bg-[#030303] selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 text-center text-gray-700 text-[10px] tracking-[0.5em] uppercase">
        ComplianceGuard AI © 2026 | Built for Institutional Trust
      </footer>
    </main>
  );
}
