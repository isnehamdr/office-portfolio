import React, { useState } from 'react';
import { ArrowUpRight, FolderGit, Calendar, Briefcase, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Hospitality', 'Cybersecurity', 'Cloud Infrastructure'];

  const projectList = [
    {
      id: 'proj-1',
      title: 'Hospitality OTA Integration Platform',
      client: 'Luxury Resort Groups',
      year: '2024',
      category: 'Hospitality',
      description: 'Connected and synchronized local property management systems (PMS) directly with major travel channels using custom XML APIs. Eliminated latency, solved overbooking troubles, and elevated hotel booking traffic by 45%.',
      imageUrl: '/src/assets/images/project_hospitality_1780393592783.png',
      tagline: 'Custom Channel API Management',
    },
    {
      id: 'proj-2',
      title: 'Enterprise Cyber Security Assessment & Auditing',
      client: 'Financial & Corporate Units',
      year: '2023',
      category: 'Cybersecurity',
      description: 'Arranged strict state-of-the-art vulnerability scanning, perimeter firewalls audits, and strict cyber hygiene directives preventing ransomware and data leakage incidents across digital archives.',
      imageUrl: '/src/assets/images/project_security_1780393575227.png',
      tagline: 'Information Security & Shielding',
    },
    {
      id: 'proj-3',
      title: 'High-Redundancy Cloud Infrastructure Setup',
      client: 'E-commerce & SaaS Providers',
      year: '2023',
      category: 'Cloud Infrastructure',
      description: 'Orchestrated the migration of thousands of file archives and system resources into highly optimized cloud servers using redundant load balancers and safe incremental backup protocols.',
      imageUrl: '/src/assets/images/project_cloud_1780393558158.png',
      tagline: 'Reliable Cloud Servers Orchestration',
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectList 
    : projectList.filter(proj => proj.category === activeFilter);

  return (
    <section className="relative bg-[#09090b] px-6 py-24 md:px-12 lg:px-20 border-t border-zinc-900" id="projects">
      {/* Decorative lines in background */}
      <div className="absolute inset-0 bg-grid-dim opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Title block */}
        <div className="mb-14 lg:flex lg:items-end lg:justify-between">
          <div>
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mt-4">
              Selected Projects & <br />
              <span className="text-zinc-500">Case Studies</span>
            </h2>
          </div>

          {/* Filtering Tabs matching Webflow filters */}
          <div className="mt-6 lg:mt-0 flex flex-wrap gap-2.5" id="portfolio-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-white text-black font-semibold' 
                    : 'bg-[#0e0e11] border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
                id={`filter-btn-${cat.toLowerCase().replace(' ', '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="selected-projects-grid">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="group flex flex-col bg-[#0c0c0e] border border-zinc-900 rounded-3xl overflow-hidden transition-all duration-350 hover:border-brand-orange/40"
              id={`project-card-${proj.id}`}
            >
              
              {/* Media Container with zoom on hover */}
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-950 border-b border-zinc-900" id={`project-media-${proj.id}`}>
                <img 
                  src={proj.imageUrl} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay floating categories */}
                <span className="absolute top-4 left-4 bg-[#0c0c0e]/95 border border-zinc-800 text-[10px] font-bold text-white tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm shadow-xl">
                  {proj.category}
                </span>

                <div className="absolute top-4 right-4 h-9 w-9 bg-brand-orange text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-brand-orange/30">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 flex-1 flex flex-col justify-between" id={`project-desc-${proj.id}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" /> {proj.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {proj.year}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                    {proj.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-900/60 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 italic">
                    {proj.tagline}
                  </span>
                  <a 
                    href="#contact" 
                    className="flex items-center gap-1 text-xs text-brand-orange font-bold hover:text-white transition-colors uppercase tracking-wider"
                  >
                    <span>Request Details</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty case if filters don't resolve */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#0e0e11] border border-zinc-900 rounded-2xl" id="no-projects-view">
            <FolderGit className="h-10 w-10 text-zinc-700 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white">Temporary Archive</h4>
            <p className="text-zinc-500 text-sm mt-1 max-w-sm mx-auto">
              Additional projects in this field are currently undergoing secure non-disclosure formatting. Contact us for private credentials.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
