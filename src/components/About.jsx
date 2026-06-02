import React from 'react';
import { ArrowUpRight, ShieldCheck, HeartHandshake, History, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="relative bg-[#09090b] px-6 py-24 md:px-12 lg:px-20 border-t border-zinc-900" id="about">
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid-dim opacity-20 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-zinc-500 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              THE BACKGROUND STORY
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white uppercase mt-4 tracking-tight">
              My Journey <br />
              <span className="text-brand-orange">In IT Business</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 flex flex-col justify-between h-full pt-4">
            <p className="font-sans text-zinc-400 text-base md:text-lg leading-relaxed font-light max-w-3xl">
              "My journey began in the hospitality sector, where I faced numerous challenges that tested my resilience and determination. Working in this industry taught me valuable lessons about customer service, managing a business, and the importance of adaptability. It laid the foundation for creating practical, customer-first tech systems."
            </p>
          </div>
        </div>

        {/* Feature Cards matching the high-end grid blocks of Zinle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="about-highlights-grid">
          
          {/* Card 1 */}
          <div className="group relative bg-[#0e0e11] border border-zinc-900 p-8 rounded-2xl transition-all duration-350 hover:border-brand-orange/40 hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-5 w-5 text-brand-orange" />
            </div>
            <div className="h-12 w-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
              <History className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Hospitality Origin
            </h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              Roots in active client-service sectors, instilling a deep respect for customer satisfaction and service standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#0e0e11] border border-zinc-900 p-8 rounded-2xl transition-all duration-350 hover:border-brand-orange/40 hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-5 w-5 text-brand-orange" />
            </div>
            <div className="h-12 w-12 rounded-xl bg-[#52644d]/10 flex items-center justify-center text-[#6b8265] mb-6">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Adaptability First
            </h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              Successfully navigated operational difficulties, scaling flexible business setups that quickly pivot to modern tech standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#0e0e11] border border-zinc-900 p-8 rounded-2xl transition-all duration-350 hover:border-brand-orange/40 hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-5 w-5 text-brand-orange" />
            </div>
            <div className="h-12 w-12 rounded-xl bg-orange-950/15 flex items-center justify-center text-orange-400 mb-6 font-mono text-lg font-bold">
              12+
            </div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Years in IT
            </h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              Twelve years pioneering custom software integrations, enterprise architecture, and secure digital workflows.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-[#0e0e11] border border-zinc-900 p-8 rounded-2xl transition-all duration-350 hover:border-brand-orange/40 hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-5 w-5 text-brand-orange" />
            </div>
            <div className="h-12 w-12 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-3">
              Reliable Systems
            </h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              Committed to producing highly redundant hosted servers, data backup networks, and resilient business structures.
            </p>
          </div>

        </div>

        {/* Highlight quote banner block mimicking Zinle signature branding page features */}
        <div className="mt-16 bg-gradient-to-r from-zinc-950 to-[#0e0e11] border border-zinc-900 p-8 md:p-12 rounded-3xl relative overflow-hidden" id="about-banner-quote">
          <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
          <div className="max-w-3xl relative z-10 space-y-6">
            <HeartHandshake className="h-10 w-10 text-brand-orange" />
            <p className="font-display text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tight">
              "We believe tech should empower operations, not complicate them. Our solutions build a direct connection to your users."
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="h-10 w-10 rounded-full bg-brand-orange/20 overflow-hidden border border-brand-orange/40">
                <img 
                  src="/src/assets/images/sandip_portrait_1780393538681.png" 
                  alt="Sandip Bhattarai"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">Sandip Bhattarai</h4>
                <p className="text-zinc-500 text-xs">Principal Executive & IT Founder</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
