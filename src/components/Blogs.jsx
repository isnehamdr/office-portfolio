import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';

export default function Blogs() {
  const blogs = [
    {
      id: 'blog-1',
      title: 'Digital Journeys: The Tech-Powered Revolution of Online Travel Booking',
      excerpt: 'How modern application layers, cloud inventories, and OTA orchestrations are transforming how we schedule global accommodation and local tours.',
      date: 'August 16, 2024',
      readTime: '6 min read',
      category: 'Travel Technology',
      link: 'https://sandipbhattarai.com.np/blog/digital-journeys-the-tech-powered-revolution-of-online-travel-booking'
    },
    {
      id: 'blog-2',
      title: 'Cyber Hygiene – Practices to protect the health of Digital Assets',
      excerpt: 'Important daily habits, firewalls discipline, server hygiene, and encryption strategies required to protect cloud data from ransomware and unauthorized intrusion.',
      date: 'May 23, 2021',
      readTime: '5 min read',
      category: 'Cybersecurity',
      link: 'https://sandipbhattarai.com.np/blog/cyber-hygiene-practices-to-protect-the-health-of-digital-assets'
    },
    {
      id: 'blog-3',
      title: 'Can AI chatbots completely replace customer service representatives?',
      excerpt: 'An objective analysis of modern LLM capabilities and customer service needs. Discover why human empathy remains critical alongside generative bots.',
      date: 'April 23, 2021',
      readTime: '7 min read',
      category: 'Artificial Intelligence',
      link: 'https://sandipbhattarai.com.np/blog/can-ai-chatbots-completely-replace-customer-service-representatives'
    }
  ];

  return (
    <section className="relative bg-[#0c0c0e] px-6 py-24 md:px-12 lg:px-20 border-t border-zinc-900" id="blogs">
      {/* Background patterns */}
      <div className="absolute inset-y-0 right-0 border-l border-zinc-900/30 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div>
            <span className="text-[#6a7c64] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6a7c64]" />
              LATEST WRITINGS
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mt-4">
              Insights & <br />
              <span className="text-[#6a7c64]">Expert Articles</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://sandipbhattarai.com.np/blogs" 
              target="_blank" 
              className="group inline-flex items-center space-x-2 text-zinc-400 font-bold tracking-wider hover:text-white transition-colors text-sm uppercase"
            >
              <span>Explore All Blogs</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Blogs List Layout matching Zinle's stylish row elements */}
        <div className="flex flex-col space-y-6" id="blog-feeds-rows">
          {blogs.map((b, idx) => (
            <a
              key={b.id}
              href={b.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col md:grid md:grid-cols-12 gap-6 items-start md:items-center bg-zinc-950/40 hover:bg-[#0e0e11] border border-zinc-900 hover:border-zinc-800 rounded-3xl p-6 md:p-8 transition-all duration-300"
              id={`blog-item-${b.id}`}
            >
              {/* Category */}
              <div className="md:col-span-2" id={`blog-category-${idx}`}>
                <span className="inline-block text-[10px] font-bold tracking-widest text-[#6a7c64] uppercase border border-[#6a7c64]/20 bg-[#6a7c64]/5 px-3 py-1 rounded-full">
                  {b.category}
                </span>
              </div>

              {/* Title & Excerpt */}
              <div className="md:col-span-7 space-y-2" id={`blog-title-excerpt-${idx}`}>
                <h3 className="font-display text-xl sm:text-2xl font-black text-zinc-100 group-hover:text-brand-orange uppercase leading-tight tracking-tight transition-colors duration-300">
                  {b.title}
                </h3>
                <p className="font-sans text-sm text-zinc-500 font-light leading-relaxed">
                  {b.excerpt}
                </p>
              </div>

              {/* Meta: DateTime & Micro stats */}
              <div className="md:col-span-2 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-1.5 text-xs text-zinc-650 font-mono" id={`blog-meta-${idx}`}>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-zinc-600" />
                  <span>{b.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-zinc-600" />
                  <span>{b.readTime}</span>
                </div>
              </div>

              {/* Link Arrow on Right side */}
              <div className="absolute top-6 right-6 md:static md:col-span-1 md:flex md:justify-end" id={`blog-link-arrow-${idx}`}>
                <div className="h-10 w-10 border border-zinc-800 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-350">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
