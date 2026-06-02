import React from 'react';
import { MapPin, PhoneCall, Globe, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export default function GallerySection() {
  const branchLions = [
    {
      city: 'Kathmandu, Nepal',
      role: 'Head Office',
      phone: ['+977 9801067391', '+977 9801072368'],
      mapLink: 'https://maps.app.goo.gl/eWgac47he9CQUcyG6',
      bgGlow: 'from-brand-orange/10'
    },
    {
      city: 'Pokhara, Nepal',
      role: 'Branch Office',
      phone: ['+977 061-501368', '+977 9802835021'],
      mapLink: 'https://maps.app.goo.gl/uFvJWSzWbaa23YRR6',
      bgGlow: 'from-emerald-500/10'
    }
  ];

  return (
    <section className="relative bg-[#09090b] px-6 py-24 md:px-12 lg:px-20 border-t border-zinc-900" id="gallery">
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid-dim opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section title */}
        <div className="mb-16">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            OPERATIONAL NODES
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mt-4">
            Office Locations & <br />
            <span className="text-zinc-500">Regional Presence</span>
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="gallery-bento-grid">
          
          {/* Big Bento Left: Kathmandu & Pokhara Branches cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6" id="bento-branches">
            {branchLions.map((branch, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden bg-gradient-to-br ${branch.bgGlow} to-zinc-950/90 border border-zinc-900 p-8 rounded-3xl flex flex-col justify-between group transition-all duration-300 hover:border-zinc-700 hover:shadow-xl`}
                id={`branch-bento-${idx}`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                      {branch.role}
                    </span>
                    <a 
                      href={branch.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="h-10 w-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-brand-orange group-hover:border-zinc-700 transition-colors"
                      title="Open in Map"
                    >
                      <MapPin className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase mt-6 tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                    {branch.city}
                  </h3>
                </div>

                <div className="mt-10 space-y-3 pt-6 border-t border-zinc-900">
                  <span className="text-[10px] font-bold text-zinc-500 tracking-wider block">CONTACT HOTLINE</span>
                  {branch.phone.map((num, numIdx) => (
                    <a 
                      key={numIdx}
                      href={`tel:${num.replace(/[^0-9+]/g, '')}`} 
                      className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-mono font-medium text-sm"
                    >
                      <PhoneCall className="h-3.5 w-3.5 text-brand-orange" />
                      <span>{num}</span>
                    </a>
                  ))}
                </div>

                {/* Aesthetic location coordinates indicator */}
                <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none text-[8px] font-mono select-none text-white">
                  SA IT SOLUTION NETWORK NODE
                </div>
              </div>
            ))}
          </div>

          {/* Big Bento Right: Digital Excellence Accolades */}
          <div className="lg:col-span-4 bg-[#0e0e11] border border-zinc-900 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group" id="bento-accolades">
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#52644d]/10 blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-xl bg-[#52644d]/10 flex items-center justify-center text-[#6b8265]">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                Global Operations
              </h3>
              <p className="font-sans text-sm text-zinc-500 leading-relaxed font-light">
                Serving domestic and international hospitality hubs. Synchronizing databases, cloud payloads, and reservations systems 24/7.
              </p>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-zinc-900" id="accolade-bullets">
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-brand-orange" />
                <span>Encrypted Hostings & Storage</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-brand-orange" />
                <span>Enterprise SLA Guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-brand-orange" />
                <span>OTA API Direct Channels</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
