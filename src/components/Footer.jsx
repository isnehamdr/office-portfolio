import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ── Reveal hook ───────────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Style builder ─────────────────────────────────────────────────────────────
function revealStyle(visible, { direction = "up", distance = 36, delay = 0, duration = 1.05 } = {}) {
  const hidden = {
    up:    `translateY(${distance}px)`,
    left:  `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  };
  return {
    opacity:         visible ? 1 : 0,
    transform:       visible ? "translate(0,0)" : hidden[direction],
    transition:      `opacity ${duration}s cubic-bezier(0.16,1,0.3,1), transform ${duration}s cubic-bezier(0.16,1,0.3,1)`,
    transitionDelay: `${delay}s`,
  };
}

// ── Social icons ──────────────────────────────────────────────────────────────
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0.5 8h4V24h-4V8zm7 0h3.83v2.18h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.74c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.1V24h-4V8z" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const pages = [
  { name: "About Us", path: "/about" },
  { name: "Works", path: "/works" },
  { name: "Services", path: "/services" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];
const socials = [
  { name: "Instagram", icon: <IconInstagram />, href: "https://www.instagram.com/mesandipb/" },
  { name: "Facebook",  icon: <IconFacebook />,  href: "https://www.facebook.com/mesandipb" },
  { name: "LinkedIn",  icon: <IconLinkedIn />,  href: "https://www.linkedin.com/in/mesandipb" },
  { name: "Twitter",   icon: <IconX />,         href: "https://x.com/mesandipb" },
];

const galleryItems = [
  {
    id: 1,
    src: "/images/g1.png",
    alt: "Christmas campaign",
    label: "Campaign",
    isVideo: false,
  },
  {
    id: 2,
    src: "/images/about1.png",
    alt: "Repa Retreat app",
    label: "Branding",
    isVideo: true,
  },
  {
    id: 3,
    src: "/images/about2.png",
    alt: "Nepal mountains",
    label: "Photography",
    isVideo: true,
  },
  {
    id: 4,
    src: "/images/hero.jpeg",
    alt: "Workspace setup",
    label: "Workspace",
    isVideo: false,
  },
  {
    id: 5,
    src: "/images/g2.jpg",
    alt: "Agave product mockup",
    label: "Mockup",
    isVideo: false,
  },
];

// Each gallery item is its own slide — 1 image shown at a time on mobile
const mobileSlides = galleryItems;

// ── Horizontal divider (mobile only) ─────────────────────────────────────────
function HDivider() {
  return <div className="block lg:hidden w-full h-px bg-white my-2" />;
}

// ── Footer column wrapper with individual reveal ──────────────────────────────
function FooterCol({ children, delay = 0 }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className="flex flex-col px-0 lg:px-6 xl:px-8 first:pl-0 last:pr-0"
      style={revealStyle(visible, { direction: "up", distance: 32, delay, duration: 1.05 })}
    >
      {children}
    </div>
  );
}

// ── Mobile Carousel (infinite loop) ──────────────────────────────────────────
// Strategy: prepend a clone of the last slide and append a clone of the first.
// Track starts at index 1 (real first). When it lands on clone 0 or clone N+1,
// silently jump to the real counterpart with no transition, then resume.
function MobileGalleryCarousel() {
  const total = mobileSlides.length;
  // Build infinite list: [lastClone, ...realSlides, firstClone]
  const infiniteSlides = [mobileSlides[total - 1], ...mobileSlides, mobileSlides[0]];

  // Start at index 1 = real first slide
  const [index, setIndex] = useState(1);
  const [animated, setAnimated] = useState(true);
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);
  // real dot index (0-based)
  const dotIndex = ((index - 1) + total) % total;

  // Jump silently when landing on a clone
  useEffect(() => {
    if (!animated) {
      // Re-enable animation after the instant jump
      const id = setTimeout(() => setAnimated(true), 20);
      return () => clearTimeout(id);
    }
  }, [animated]);

  const handleTransitionEnd = () => {
    if (index === 0) {
      // Jumped past start → snap to real last
      setAnimated(false);
      setIndex(total);
    } else if (index === infiniteSlides.length - 1) {
      // Jumped past end → snap to real first
      setAnimated(false);
      setIndex(1);
    }
  };

  const advance = () => {
    setAnimated(true);
    setIndex((prev) => prev + 1);
  };

  const retreat = () => {
    setAnimated(true);
    setIndex((prev) => prev - 1);
  };

  const goToDot = (dotI) => {
    setAnimated(true);
    setIndex(dotI + 1);
  };

  // Auto-slide
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const resetTimer = () => startTimer();

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? advance() : retreat();
      resetTimer();
    }
    touchStartX.current = null;
  };

  return (
    <div className="block lg:hidden w-full bg-black overflow-hidden">
      {/* Slides track */}
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex"
          style={{
            transform:  `translateX(-${index * 100}%)`,
            transition: animated ? "transform 0.6s cubic-bezier(0.16,1,0.3,1)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {infiniteSlides.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-full relative h-52 sm:h-72 overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-white/80 text-xs font-medium tracking-wide uppercase">
                  {item.label}
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      {/* <div className="flex items-center justify-center gap-1.5 py-3 bg-black">
        {mobileSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { goToDot(i); resetTimer(); }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width:        i === dotIndex ? "16px" : "6px",
              height:       "6px",
              borderRadius: "3px",
              background:   i === dotIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
              border:       "none",
              padding:      0,
              cursor:       "pointer",
              transition:   "width 0.3s, background 0.3s",
            }}
          />
        ))}
      </div> */}
    </div>
  );
}

// ── Desktop Gallery Card ──────────────────────────────────────────────────────
function GalleryCard({ item, parentVisible }) {
  const [cardRef, cardVisible] = useReveal(0.05);
  const finalVisible = parentVisible && cardVisible;

  return (
    <div
      ref={cardRef}
      className="group relative w-full h-36 sm:h-44 lg:h-82 overflow-hidden cursor-pointer"
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
  );
}

// ── Gallery Section ───────────────────────────────────────────────────────────
function GallerySection() {
  const [sectionRef, sectionVisible] = useReveal(0.1);
  const [watermarkRef, watermarkVisible] = useReveal(0.05);
  const [bottomRef, bottomVisible] = useReveal(0.1);

  return (
    <div ref={sectionRef} className="fixed -bottom-20 z-[-10] bg-black w-full">

      {/* ── Mobile: Auto-sliding carousel (2 cols, 1 row) ── */}
      <MobileGalleryCarousel />

      {/* ── Desktop: Static 5-column grid (unchanged) ── */}
      <div className="hidden lg:grid grid-cols-5 gap-0">
        {galleryItems.map((item, i) => (
          <GalleryCard key={item.id} item={item} index={i} parentVisible={sectionVisible} />
        ))}
      </div>

      {/* ── Watermark ── */}
      <div
        ref={watermarkRef}
        className="relative h-32 sm:h-40 lg:h-56 overflow-hidden select-none pointer-events-none py-12"
        style={revealStyle(watermarkVisible, { direction: "up", distance: 20, delay: 0.1, duration: 1.4 })}
      >
        <p
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/[0.20] tracking-wide font-black leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(72px, 20vw, 220px)" }}
        >
          SANDIP
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div
        ref={bottomRef}
        className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pb-12 py-0"
        style={revealStyle(bottomVisible, { direction: "up", distance: 16, delay: 0.05, duration: 0.9 })}
      >
        <div className="border-t border-white/10 pt-5 flex flex-col items-start justify-between gap-2 py-12">
          <p className="text-white/40 text-sm">© 2026 Sandip Bhattrai.</p>
          <p className="text-white/40 text-sm">
            Crafted by{" "}
            <a href="https://sait.com.np/" className="underline underline-offset-2 text-white/60 hover:text-white transition-colors">
              S.A I.T Solution Trade and Concern
            </a>
          </p>
        </div>
      </div>

    </div>
  );
}

// ── Main footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-black text-white w-full relative overflow-hidden mb-[400px] lg:mb-[580px]">

      {/* ── Main section ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-14">
        <div className="border-b border-white/10 pb-10">

          {/* Desktop: single row with vertical dividers */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:divide-x lg:divide-white/10">

            {/* ── 1. Pages ── */}
            <FooterCol delay={0}>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Pages</p>
              <ul className="flex flex-col gap-3">
                {pages.map((page) => (
  <li key={page.path}>
    <Link
      to={page.path}
      className="text-white/60 hover:text-white text-sm transition-colors"
    >
      {page.name}
    </Link>
  </li>
))}
              </ul>
            </FooterCol>

            {/* <HDivider /> */}

            {/* ── 2. Offices ── */}
            <FooterCol delay={0.1}>
              <p className="text-white text-xs font-bold tracking-widest uppercase sm:mb-0 mb-2 sm:mt-0 mt-8">Offices</p>
              <div className="mb-5">
                <p className="text-white/60 text-sm font-semibold mb-1">Kathmandu</p>
                <p className="text-white/60 text-xs mb-2 uppercase tracking-wide">Head Office</p>
                <ul className="flex flex-col gap-1.5">
                  <li><a href="tel:+9779801072368" className="text-white/40 hover:text-white text-sm transition-colors">+977 9801072368</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white/60 text-sm font-semibold mb-1">Pokhara</p>
                <p className="text-white/60 text-xs mb-2 uppercase tracking-wide">Branch Office</p>
                <ul className="flex flex-col gap-1.5">
                  <li><a href="tel:+97761234567" className="text-white/40 hover:text-white text-sm transition-colors">+977 061591368</a></li>
                  <li><a href="tel:+97761234568" className="text-white/40 hover:text-white text-sm transition-colors">+977 9801067391</a></li>
                </ul>
              </div>
            </FooterCol>

            {/* <HDivider /> */}

            {/* ── 3. Send a Message ── */}
            <FooterCol delay={0.2}>
              <p className="text-white text-xs font-bold tracking-widest uppercase sm:mb-0 mb-2 sm:mt-0 mt-8">Send Us A Message</p>
              <a
                href="mailto:sandip@sait.com.np"
                className="text-white text-sm underline underline-offset-2 hover:text-white/70 transition-colors block mb-3"
              >
                sandip@sait.com.np
              </a>
              <p className="text-white/40 text-sm leading-relaxed">
                Get updates and exclusive offers straight to your inbox.
              </p>
            </FooterCol>

            {/* <HDivider /> */}

            {/* ── 4. Call ── */}
            <FooterCol delay={0.3}>
              <p className="text-white text-xs font-bold tracking-widest uppercase sm:mb-0 mb-2 sm:mt-0 mt-8">Give Us A Call</p>
              <a
                href="tel:+9779851172368"
                className="text-white text-sm underline underline-offset-2 hover:text-white/70 transition-colors block mb-3"
              >
              +977 985-1172368
              </a>
              <p className="text-white/40 text-sm leading-relaxed">
                Our team is happy to help on any working day.
              </p>
            </FooterCol>

            {/* <HDivider /> */}

            {/* ── 5. Socials ── */}
            <FooterCol delay={0.4}>
              <p className="text-white text-xs font-bold tracking-widest uppercase sm:mb-0 mb-2 sm:mt-0 mt-8">Follow Us</p>
              <ul className="flex flex-col gap-3">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
                    >
                      <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md text-white group-hover:bg-white/20 transition-colors flex-shrink-0">
                        {s.icon}
                      </span>
                      <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                        {s.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </FooterCol>

          </div>
        </div>
      </div>

      {/* ── Gallery Section ── */}
      <GallerySection />

    </footer>
  );
}