import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Blogs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(() => window.scrollY < 10);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const useLightText = isHomePage && isAtTop;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsAtTop(true);
    setIsVisible(true);
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const controlNavbar = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const atTop = currentScrollY < 10;

        setIsAtTop(atTop);
        setIsVisible(atTop || currentScrollY < lastScrollY || currentScrollY <= 50);

        lastScrollY = currentScrollY;
        ticking = false;
      });

      ticking = true;
    };

    controlNavbar();
    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const navBgClass = isAtTop ? "bg-transparent" : "bg-[#f7f6f5] backdrop-blur-md shadow-sm";
  const navTextClass = useLightText ? "text-white" : "text-black";
  const navLinkClass = useLightText
    ? "text-white hover:text-white"
    : "text-black hover:text-black";
  const ctaBorderClass = useLightText ? "border-white/25" : "border-black/20";
  const ctaHoverClass = useLightText
    ? "hover:bg-white hover:text-black"
    : "hover:bg-black hover:text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full ${navBgClass} transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-8 lg:gap-14">
              <Link
                to="/"
                className={`${navTextClass} text-2xl font-normal uppercase tracking-wide transition-colors duration-300`}
              >
                Sandip
              </Link>

              <nav className="hidden items-center gap-8 lg:flex">
                {navLinks.map(({ to, label, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `${navLinkClass} transition-colors duration-200 ${
                        isActive ? "font-medium" : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className={`hidden cursor-pointer items-center gap-3 rounded-full border ${ctaBorderClass} ${navTextClass} ${ctaHoverClass} px-8 py-3 transition-all duration-200 lg:flex`}
              >
                Work with us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`relative z-50 cursor-pointer p-2 text-3xl ${navTextClass} transition-colors duration-300 focus:outline-none lg:hidden`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" aria-hidden="true" />
                ) : (
                  <Menu className="h-7 w-7" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute right-0 top-0 h-full w-full transform bg-[#0f0f0f] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] sm:w-96 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 px-8 pt-24">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-white/10 py-2 text-xl ${
                    isActive
                      ? "font-medium text-white"
                      : "text-gray-300 transition hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-white transition hover:bg-white hover:text-black"
            >
              Work with us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
