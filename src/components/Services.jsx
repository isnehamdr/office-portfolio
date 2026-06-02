import React from 'react';
import { Smartphone, Cloud, Eye, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      id: '01',
      title: 'Digital Transformation & IT Consulting',
      desc: 'We guide your digital transformation with expert IT consulting and manage OTA (Online Travel Agency) systems to streamline and optimize your business flows.',
      icon: <Smartphone className="h-6 w-6" />,
      bullets: ['OTA Systems Management', 'IT Business Strategy', 'Digital Audits & Re-structuring'],
      color: 'text-brand-orange'
    },
    {
      id: '02',
      title: 'IT Infrastructure & Cloud Services',
      desc: 'We host, configure, and manage your IT infrastructure, introducing reliable cloud hosting and server maintenance to guarantee seamless operational uptime.',
      icon: <Cloud className="h-6 w-6" />,
      bullets: ['High-Availability Hosting', 'Server Maintenance & Migration', 'Network Routing Optimization'],
      color: 'text-blue-400'
    },
    {
      id: '03',
      title: 'Cybersecurity & Data Protection',
      desc: 'We perform robust safety audits, implementing cutting-edge endpoints protection and digital health hygiene to protect your organization assets from malicious threats.',
      icon: <ShieldAlert className="h-6 w-6" />,
      bullets: ['Vulnerability Assessment', 'Data Backup & Redundancy Systems', 'Security Compliance Standards'],
      color: 'text-red-400'
    },
    {
      id: '04',
      title: 'Software Development & Integration',
      desc: 'We construct high-performance custom web systems and solve complex integration needs across multiple platforms with modern API standards.',
      icon: <Cpu className="h-6 w-6" />,
      bullets: ['API Integration & Solutions', 'Custom Web Applications', 'Hospitality Tech Integrations'],
      color: 'text-emerald-400'
    },
  ];

  return (
    <section className="relative bg-[#0c0c0e] px-6 py-24 md:px-12 lg:px-20 border-t border-zinc-900" id="services">
      {/* Decorative lines & elements */}
      <div className="absolute inset-y-0 left-0 border-r border-zinc-900/40 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[#6a7c64] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6a7c64]" />
              EXPERT CAPABILITIES
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mt-4">
              Leading the Future of <br className="hidden sm:inline" />
              <span className="text-[#6a7c64]">IT Solutions</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-sm">
            <p className="font-sans text-sm text-zinc-500 leading-relaxed font-light">
              Designing efficient software networks, cloud pipelines, and security mechanisms crafted to scale.
            </p>
          </div>
        </div>

        {/* Services Grid with interactive effects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="services-interactive-grid">
          {serviceList.map((srv, idx) => (
            <div 
              key={srv.id}
              className="group relative bg-zinc-950/40 border border-zinc-900 rounded-2xl p-8 lg:p-10 transition-all duration-350 hover:bg-[#0f0f12] hover:border-zinc-800"
              id={`service-card-${srv.id}`}
            >
              <div className="flex items-start justify-between">
                
                {/* ID representation & ICON */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xl font-bold text-zinc-700 block group-hover:text-brand-orange transition-colors">
                    {srv.id}
                  </span>
                  <div className={`h-10 w-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:${srv.color} transition-colors duration-300`}>
                    {srv.icon}
                  </div>
                </div>

                <div className="text-[10px] uppercase font-bold tracking-widest text-[#52644d] bg-[#52644d]/10 px-2 py-0.5 rounded-full">
                  Fully Managed
                </div>

              </div>

              {/* SERVICE OFFERING TITLE & TEXT */}
              <div className="mt-8 space-y-4">
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight group-hover:text-zinc-100">
                  {srv.title}
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light">
                  {srv.desc}
                </p>
              </div>

              {/* INTEGRATED POINTS */}
              <div className="mt-8 pt-6 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-3" id={`service-tech-${srv.id}`}>
                {srv.bullets.map((bullet, bulletIdx) => (
                  <div key={bulletIdx} className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                    <CheckCircle className="h-3.5 w-3.5 text-zinc-700 group-hover:text-brand-orange transition-colors duration-300" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
