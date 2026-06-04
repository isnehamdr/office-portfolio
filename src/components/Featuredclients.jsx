import { useState, useEffect, useRef } from "react";

// ── Reveal hook (fires once) ──────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ── Style builder ─────────────────────────────────────────────────────────────
function revealStyle(
  visible,
  { direction = "up", distance = 40, delay = 0, duration = 1.1 } = {}
) {
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

// ─── SVG Logos ────────────────────────────────────────────────────────────────
function LogoCloudWatch() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" fill="#FF9900" opacity="0.15"/>
      <path d="M6 18 Q10 8 14 14 Q18 20 22 10" stroke="#FF9900" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="3" fill="#FF9900"/>
      <path d="M10 14 Q12 10 14 14 Q16 18 18 14" stroke="#29B6F6" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
function LogoCapsule() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4 Q22 4 22 14 Q22 24 14 24 Q6 24 6 14 Q6 4 14 4Z" stroke="#7C5CBF" strokeWidth="1.8" fill="none"/>
      <path d="M6 14 Q10 10 14 14 Q18 18 22 14" stroke="#7C5CBF" strokeWidth="2" fill="none"/>
      <ellipse cx="14" cy="14" rx="4" ry="6" fill="#B39DDB" opacity="0.4"/>
    </svg>
  );
}
function LogoHourglass() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="8" y="4" width="12" height="20" rx="6" fill="#0D47A1" opacity="0.15"/>
      <rect x="8" y="4" width="12" height="20" rx="6" stroke="#1565C0" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="6" width="4" height="10" rx="2" fill="#1565C0"/>
    </svg>
  );
}
function LogoNietzsche() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      {[4,6,8,10,8,6,4].map((h, i) => (
        <rect key={i} x={4 + i * 3.2} y={14 - h / 2} width="2.2" height={h} rx="1" fill="#2E7D32"/>
      ))}
    </svg>
  );
}
function LogoAcmeCorp() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 5 L20 12 L17 12 L17 22 L11 22 L11 12 L8 12 Z" fill="#F9A825" opacity="0.85"/>
      <circle cx="20" cy="20" r="4" fill="#FF6F00" opacity="0.7"/>
    </svg>
  );
}
function LogoEpicurious() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 6 C10 6 7 9 7 13 C7 17 10 20 14 22 C18 20 21 17 21 13 C21 9 18 6 14 6Z" fill="#7E57C2" opacity="0.2"/>
      <path d="M7 13 C10 11 14 10 21 13" stroke="#5E35B1" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M14 6 L11 13 L14 22 L17 13 Z" fill="#7E57C2" opacity="0.6"/>
    </svg>
  );
}
function LogoGlobalBank() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" fill="#E64A19" opacity="0.15"/>
      <circle cx="14" cy="14" r="10" stroke="#E64A19" strokeWidth="1.4" fill="none"/>
      <path d="M14 6 C11 10 11 18 14 22 C17 18 17 10 14 6Z" fill="#E64A19" opacity="0.5"/>
      <path d="M6 12 Q10 10 14 10 Q18 10 22 12" stroke="#E64A19" strokeWidth="1.2" fill="none"/>
      <path d="M6 16 Q10 18 14 18 Q18 18 22 16" stroke="#E64A19" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}
function LogoLogoipsum() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="16" rx="10" ry="7" fill="#388E3C" opacity="0.2"/>
      <ellipse cx="14" cy="13" rx="8" ry="5" fill="#43A047" opacity="0.4"/>
      <ellipse cx="14" cy="10" rx="5" ry="3.5" fill="#66BB6A" opacity="0.7"/>
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const clients = [
  { id: 1, logo: <LogoCloudWatch />, name: "CloudWatch", nameColor: "text-gray-700" },
  { id: 2, logo: <LogoCapsule />,    name: "Capsule",    nameColor: "text-purple-700" },
  { id: 3, logo: <LogoHourglass />,  name: "Hourglass",  nameColor: "text-blue-900" },
  { id: 4, logo: <LogoNietzsche />,  name: "Nietzsche",  nameColor: "text-green-800" },
  { id: 5, logo: <LogoAcmeCorp />,   name: "Acme Corp",  nameColor: "text-gray-600" },
  { id: 6, logo: <LogoEpicurious />, name: "Epicurious", nameColor: "text-purple-600" },
  { id: 7, logo: <LogoGlobalBank />, name: "GlobalBank", nameColor: "text-orange-700" },
  { id: 8, logo: <LogoLogoipsum />,  name: "Logoipsum",  nameColor: "text-green-700" },
];

// ── Single logo cell — observes itself ────────────────────────────────────────
function ClientLogo({ client, colIndex, rowIndex, totalCols }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLastCol = colIndex === totalCols - 1;
  const isLastRow = rowIndex === 1;

  // Stagger: each cell delays by its grid position
  const delay = rowIndex * 0.12 + colIndex * 0.1;

  return (
    <div
      ref={ref}
      style={revealStyle(visible, {
        direction: "up",
        distance: 30,
        delay,
        duration: 1.0,
      })}
      className={`
        flex items-center justify-center gap-2.5 py-12 px-4
        ${!isLastCol ? "border-r border-gray-300" : ""}
        ${!isLastRow ? "border-b border-gray-300" : ""}
        hover:opacity-70 transition-opacity cursor-default
      `}
    >
      {client.logo}
      <span className={`font-semibold text-sm sm:text-base tracking-tight ${client.nameColor}`}>
        {client.name}
      </span>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function FeaturedClients() {
  const rows = [clients.slice(0, 4), clients.slice(4, 8)];
  const totalCols = 4;

  const [headingRef, headingVisible] = useReveal(0.15);
  const [bodyRef,    bodyVisible]    = useReveal(0.15);
  const [ctaRef,     ctaVisible]     = useReveal(0.15);
  const [mobileRef,  mobileVisible]  = useReveal(0.1);

  return (
    <div className="w-full py-12 sm:py-24" style={{ backgroundColor: "#f2f0ed" }}>
      <div className="px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-stretch">

          {/* ── LEFT — text panel ── */}
          <div className="lg:w-[340px] xl:w-[380px] flex-shrink-0 flex flex-col justify-center lg:pr-12 min-h-[200px] lg:min-h-0">

            <h2
              ref={headingRef}
              className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4"
              style={revealStyle(headingVisible, {
                direction: "left",
                distance: 32,
                duration: 1.05,
              })}
            >
              Features Clients
            </h2>

            <p
              ref={bodyRef}
              className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8"
              style={revealStyle(bodyVisible, {
                direction: "left",
                distance: 28,
                delay: 0.12,
                duration: 1.05,
              })}
            >
              We work closely with our clients to create solutions that are not just innovative.
            </p>

            <div
              ref={ctaRef}
              style={revealStyle(ctaVisible, {
                direction: "left",
                distance: 24,
                delay: 0.22,
                duration: 1.0,
              })}
            >
              <button className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full">
                Work With us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── RIGHT — desktop logo grid (sm+) ── */}
          <div className="flex-1 w-full hidden sm:block border-l border-gray-300">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4">
                {row.map((client, colIndex) => (
                  <ClientLogo
                    key={client.id}
                    client={client}
                    colIndex={colIndex}
                    rowIndex={rowIndex}
                    totalCols={totalCols}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* ── Mobile logo grid (2-col) ── */}
          <div
            ref={mobileRef}
            className="w-full grid grid-cols-2 gap-3 sm:hidden"
            style={revealStyle(mobileVisible, {
              direction: "up",
              distance: 36,
              delay: 0.1,
              duration: 1.0,
            })}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center gap-2.5 bg-white/40 rounded-xl px-4 py-5"
              >
                {client.logo}
                <span className={`font-semibold text-sm tracking-tight ${client.nameColor}`}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}