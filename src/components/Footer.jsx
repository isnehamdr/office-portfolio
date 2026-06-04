import { useState, useEffect, useRef } from "react";

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
function IconYouTube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a"/>
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
const pages = ["About us", "Works", "Services", "Blogs", "Contact us"];
const socials = [
  { name: "Instagram", icon: <IconInstagram /> },
  { name: "Facebook",  icon: <IconFacebook /> },
  { name: "YouTube",   icon: <IconYouTube /> },
  { name: "Twitter",   icon: <IconX /> },
];

// ── Vertical divider (desktop only) ──────────────────────────────────────────
function VDivider() {
  return <div className="hidden lg:block w-px bg-white self-stretch mx-2" />;
}

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

// ── Main footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  const [watermarkRef, watermarkVisible] = useReveal(0.05);
  const [bottomRef,    bottomVisible]    = useReveal(0.1);

  return (
    <footer className="bg-black text-white w-full relative overflow-hidden">

      {/* ── Main section ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-14 pb-10">
        <div className="border-b border-white/10 pb-10">

          {/* Desktop: single row with vertical dividers */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:divide-x lg:divide-white/10">

            {/* ── 1. Pages ── */}
            <FooterCol delay={0}>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Pages</p>
              <ul className="flex flex-col gap-3">
                {pages.map((p) => (
                  <li key={p}>
                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterCol>

            <HDivider />

            {/* ── 2. Offices ── */}
            <FooterCol delay={0.1}>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Offices</p>
              <div className="mb-5">
                <p className="text-white/40 text-sm font-semibold mb-1">Kathmandu</p>
                <p className="text-white/40 text-xs mb-2 uppercase tracking-wide">Head Office</p>
                <ul className="flex flex-col gap-1.5">
                  <li><a href="tel:+9771234567" className="text-white/60 hover:text-white text-sm transition-colors">+977 1-234567</a></li>
                  <li><a href="tel:+9771234568" className="text-white/60 hover:text-white text-sm transition-colors">+977 1-234568</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white/40 text-sm font-semibold mb-1">Pokhara</p>
                <p className="text-white/40 text-xs mb-2 uppercase tracking-wide">Branch Office</p>
                <ul className="flex flex-col gap-1.5">
                  <li><a href="tel:+97761234567" className="text-white/60 hover:text-white text-sm transition-colors">+977 61-234567</a></li>
                  <li><a href="tel:+97761234568" className="text-white/60 hover:text-white text-sm transition-colors">+977 61-234568</a></li>
                </ul>
              </div>
            </FooterCol>

            <HDivider />

            {/* ── 3. Send a Message ── */}
            <FooterCol delay={0.2}>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Send Us A Message</p>
              <a
                href="mailto:info@sait.com.np"
                className="text-white text-sm underline underline-offset-2 hover:text-white/70 transition-colors block mb-3"
              >
                info@sait.com.np
              </a>
              <p className="text-white/40 text-sm leading-relaxed">
                Get updates and exclusive offers straight to your inbox.
              </p>
            </FooterCol>

            <HDivider />

            {/* ── 4. Call ── */}
            <FooterCol delay={0.3}>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Give Us A Call</p>
             <a 
                href="tel:+977061501368"
                className="text-white text-sm underline underline-offset-2 hover:text-white/70 transition-colors block mb-3"
              >
                +977 061-501368
              </a>
              <p className="text-white/40 text-sm leading-relaxed">
                Our team is happy to help on any working day.
              </p>
            </FooterCol>

            <HDivider />

            {/* ── 5. Socials ── */}
            <FooterCol delay={0.4}>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Follow Us</p>
              <ul className="flex flex-col gap-3">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a href="#" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
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

      {/* ── Watermark ── */}
      <div
        ref={watermarkRef}
        className="relative h-32 sm:h-40 lg:h-48 overflow-hidden select-none pointer-events-none"
        style={revealStyle(watermarkVisible, { direction: "up", distance: 20, delay: 0.1, duration: 1.4 })}
      >
        <p
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/[0.20] font-black leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: "clamp(72px, 20vw, 220px)" }}
        >
          SANDIP
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div
        ref={bottomRef}
        className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pb-8"
        style={revealStyle(bottomVisible, { direction: "up", distance: 16, delay: 0.05, duration: 0.9 })}
      >
        <div className="border-t border-white/10 pt-5 flex flex-col  items-start  justify-between gap-2">
          <p className="text-white/40 text-sm">© 2026 Sandip Bhattrai.</p>
          <p className="text-white/40 text-sm">
            Crafted by{" "}
            <a href="https://sait.com.np/" className="underline underline-offset-2 text-white/60 hover:text-white transition-colors">
              S.A I.T Solution Trade and Concern
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}