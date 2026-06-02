import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/mesandipb', icon: <Github className="h-4 w-4" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mesandipb', icon: <Linkedin className="h-4 w-4" /> },
    { name: 'Twitter', url: 'https://twitter.com/mesandipb', icon: <Twitter className="h-4 w-4" /> }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-zinc-900 py-12 px-6 md:px-12 lg:px-20 relative z-10" id="footer">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8" id="footer-top">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <span className="font-display text-lg font-black tracking-widest text-white uppercase select-none">
              SANDIP BHATTARAI
            </span>
            <p className="text-zinc-500 text-xs font-light max-w-xs">
              Leading the Future of IT Solutions with Technology, Vision, and Success.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4" id="footer-social-links">
            {socialLinks.map((soc) => (
              <a 
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 flex items-center justify-center transition-all duration-300"
                title={`Follow me on ${soc.name}`}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Scroll to Top Trigger */}
          <div>
            <button 
              onClick={handleScrollToTop}
              className="group flex items-center space-x-2 text-zinc-500 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors"
              id="back-to-top-btn"
            >
              <span>Back to top</span>
              <div className="h-8 w-8 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all duration-300">
                <ArrowUp className="h-3.5 w-3.5" />
              </div>
            </button>
          </div>

        </div>

        {/* Separator */}
        <div className="my-8 border-t border-zinc-900" />

        {/* Bottom Credits matching Sandip's original footnote exactly */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600" id="footer-credits">
          <p>© {new Date().getFullYear()} Sandip Bhattarai (mesandipb) | All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with pride by</span>
            <a 
              href="https://www.sait.com.np/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-500 hover:text-brand-orange font-bold uppercase tracking-wider transition-colors"
            >
              SA IT Solution
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
