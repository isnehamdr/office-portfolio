import React, { useState, useEffect } from "react";
// ✅ Import NavLink alongside Link
import { Link, NavLink, useLocation } from "react-router-dom"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();

  // ✅ FIX 1: Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  // 2. Handle Scroll Behavior (Hide on scroll down, Show on scroll up)
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // 3. Handle Body Scroll Lock when Mobile Menu is Open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0f0f0f]/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="h-20 flex items-center justify-between">
            
            {/* LEFT SIDE: Logo + Desktop Navigation */}
            <div className="flex items-center gap-8 lg:gap-14">
              <div className="flex items-center">
                <Link to="/" className="text-white text-2xl font-normal tracking-wide uppercase">
                  Sandip
                </Link>
              </div>

              <nav className="hidden lg:flex items-center gap-8">
                {/* ✅ FIX 2: Using NavLink for native active state handling */}
                <NavLink 
                  to="/" 
                  end // 'end' prop ensures it ONLY matches exactly "/"
                  className={({ isActive }) => 
                    isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"
                  }
                >
                  About
                </NavLink>
                <NavLink 
                  to="/works" 
                  className={({ isActive }) => 
                    isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"
                  }
                >
                  Works
                </NavLink>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"
                  }
                >
                  Services
                </NavLink>
                <NavLink 
                  to="/blogs" 
                  className={({ isActive }) => 
                    isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"
                  }
                >
                  Blogs
                </NavLink>
              </nav>
            </div>

            {/* RIGHT SIDE: Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <Link 
                to="/contact" 
                className="hidden cursor-pointer lg:flex items-center gap-3 border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Work with us
                <span>→</span>
              </Link>

              <button 
                onClick={toggleMenu} 
                className="lg:hidden text-white cursor-pointer text-3xl focus:outline-none z-50 relative p-2 hover:text-gray-300 transition"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ?
          
           "visible" : "invisible"
        }`}
      >
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <div 
          className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-[#0f0f0f] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-24 px-8 gap-6">
            {/* ✅ FIX 3: NavLink applied to mobile menu as well */}
            <NavLink 
              to="/" 
              end
              onClick={closeMenu}
              className={({ isActive }) => 
                `text-xl py-2 border-b border-white/10 ${isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `text-xl py-2 border-b border-white/10 ${isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/works" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `text-xl py-2 border-b border-white/10 ${isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"}`
              }
            >
              Works
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `text-xl py-2 border-b border-white/10 ${isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/blogs" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `text-xl py-2 border-b border-white/10 ${isActive ? "text-white font-medium" : "text-gray-300 hover:text-white transition"}`
              }
            >
              Blogs
            </NavLink>

            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="mt-8 flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition w-full"
            >
              Work with us
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;