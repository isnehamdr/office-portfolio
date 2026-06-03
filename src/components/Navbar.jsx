import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0f0f0f]/95 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="h-20 flex items-center justify-between">
            {/* Logo - Left Side */}
            <div className="lg:hidden block flex items-center">
              <img src="/images/logo.png" alt="Logo" className="h-16 w-auto" />
            </div>

            {/* Desktop Menu - Hidden on Mobile */}
            <nav className="hidden lg:flex items-center gap-14">
              <a href="/" className="text-white font-medium hover:text-gray-300 transition">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white transition">
                About
              </a>
              <a href="/works" className="text-gray-300 hover:text-white transition">
                Works
              </a>
              <a href="/services" className="text-gray-300 hover:text-white transition">
                Services
              </a>
              <a href="/blogs" className="text-gray-300 hover:text-white transition">
                Blogs
              </a>
            </nav>

            {/* Desktop CTA Button - Added ml-10 to push it further right */}
            <button className="hidden lg:flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition ml-10">
              Work with us
              <span>→</span>
            </button>

            {/* Mobile Hamburger Button - Right Side */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-white text-3xl focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Smooth Right to Left Animation */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Menu Panel - Slides from Right to Left */}
        <div 
          className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-[#0f0f0f] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Content */}
          <div className="flex flex-col pt-24 px-8 gap-6">
            <a 
              href="/" 
              onClick={closeMenu}
              className="text-white text-xl font-medium hover:text-gray-300 transition py-2 border-b border-white/10"
            >
              Home
            </a>
            <a 
              href="/about" 
              onClick={closeMenu}
              className="text-gray-300 text-xl hover:text-white transition py-2 border-b border-white/10"
            >
              About
            </a>
            <a 
              href="/works" 
              onClick={closeMenu}
              className="text-gray-300 text-xl hover:text-white transition py-2 border-b border-white/10"
            >
              Works
            </a>
            <a 
              href="/services" 
              onClick={closeMenu}
              className="text-gray-300 text-xl hover:text-white transition py-2 border-b border-white/10"
            >
              Services
            </a>
            <a 
              href="/blogs" 
              onClick={closeMenu}
              className="text-gray-300 text-xl hover:text-white transition py-2 border-b border-white/10"
            >
              Blogs
            </a>
            
            {/* Mobile CTA Button - Changed mt-6 to mt-12 to push it further down */}
            <button className="mt-12 flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition w-full">
              Work with us
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;