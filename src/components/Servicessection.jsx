import React, { useEffect, useRef } from "react";

// ── Scroll reveal hook (fires once, slow & smooth) ──────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("srv-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

// ── Icons matched to each service title ────────────────────────────────────

// Digital Transformation — network/nodes morphing into arrows
function IconDigitalTransformation() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central hub */}
      <circle cx="40" cy="40" r="5" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Orbit ring */}
      <circle cx="40" cy="40" r="18" stroke="white" strokeWidth="1" strokeDasharray="4 3" fill="none"/>
      {/* Spokes to satellite nodes */}
      <line x1="40" y1="35" x2="40" y2="18" stroke="white" strokeWidth="1.2"/>
      <line x1="44.7" y1="42.7" x2="55.6" y2="53.6" stroke="white" strokeWidth="1.2"/>
      <line x1="35.3" y1="42.7" x2="24.4" y2="53.6" stroke="white" strokeWidth="1.2"/>
      {/* Satellite nodes */}
      <circle cx="40" cy="16" r="3" stroke="white" strokeWidth="1.2" fill="none"/>
      <circle cx="58" cy="56" r="3" stroke="white" strokeWidth="1.2" fill="none"/>
      <circle cx="22" cy="56" r="3" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Transform arrows curving outward */}
      <path d="M46,22 Q56,14 64,20" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <line x1="63" y1="19" x2="64" y2="20" stroke="white" strokeWidth="1.2"/>
      <line x1="62" y1="23" x2="64" y2="20" stroke="white" strokeWidth="1.2"/>
      {/* Digital pulse lines */}
      <path d="M20,40 L25,40 L27,34 L30,46 L33,40 L40,40" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Software Development — code window / layered screens
function IconSoftwareDev() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back screen */}
      <rect x="18" y="20" width="38" height="26" rx="2" stroke="white" strokeWidth="1.2" fill="none" opacity="0.35"/>
      {/* Front screen */}
      <rect x="24" y="26" width="38" height="26" rx="2" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Titlebar dot */}
      <circle cx="29" cy="31" r="1.5" stroke="white" strokeWidth="1" fill="none"/>
      <circle cx="34" cy="31" r="1.5" stroke="white" strokeWidth="1" fill="none"/>
      <circle cx="39" cy="31" r="1.5" stroke="white" strokeWidth="1" fill="none"/>
      {/* Code line: < / > */}
      <text x="27" y="43" fontSize="9" fill="white" fontFamily="monospace" opacity="1">{"<"}</text>
      <text x="34" y="43" fontSize="7" fill="white" fontFamily="monospace" opacity="0.6">{"/>"}</text>
      <text x="42" y="43" fontSize="9" fill="white" fontFamily="monospace" opacity="1">{"}"}</text>
      {/* Stub lines */}
      <line x1="27" y1="47" x2="43" y2="47" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="27" y1="50" x2="37" y2="50" stroke="white" strokeWidth="1" opacity="0.4"/>
      {/* Stand */}
      <line x1="43" y1="52" x2="43" y2="58" stroke="white" strokeWidth="1.2"/>
      <line x1="36" y1="58" x2="50" y2="58" stroke="white" strokeWidth="1.2"/>
    </svg>
  );
}

// Cybersecurity & IT — shield with circuit trace
function IconCybersecurity() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield outline */}
      <path
        d="M40,14 L62,22 L62,42 C62,54 40,66 40,66 C40,66 18,54 18,42 L18,22 Z"
        stroke="white" strokeWidth="1.2" fill="none"
      />
      {/* Inner circuit trace */}
      <path d="M40,28 L40,32 L34,32 L34,38 L46,38 L46,44 L40,44 L40,52"
        stroke="white" strokeWidth="1" strokeDasharray="3 2" fill="none" strokeLinecap="round"/>
      {/* Lock body */}
      <rect x="34" y="40" width="12" height="10" rx="1.5" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Lock shackle */}
      <path d="M36,40 L36,36 Q36,32 40,32 Q44,32 44,36 L44,40" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Keyhole */}
      <circle cx="40" cy="44.5" r="1.5" stroke="white" strokeWidth="1" fill="none"/>
      <line x1="40" y1="46" x2="40" y2="48" stroke="white" strokeWidth="1"/>
      {/* Corner nodes */}
      <circle cx="18" cy="22" r="2" stroke="white" strokeWidth="1" fill="none"/>
      <circle cx="62" cy="22" r="2" stroke="white" strokeWidth="1" fill="none"/>
    </svg>
  );
}

// ── Service data — titles, matching descriptions, matching icons ────────────
const services = [
  {
    id: 1,
    icon: <IconDigitalTransformation />,
    title: "Digital Transformation",
    description:
      "Modernizing businesses by integrating cutting-edge digital technologies to streamline operations and unlock new growth.",
    items: [
      "Business Process Digitization",
      "Cloud Migration & Strategy",
      "Digital Workflow Automation",
      "Technology Roadmap Planning",
    ],
  },
  {
    id: 2,
    icon: <IconSoftwareDev />,
    title: "Software Development",
    description:
      "Building robust, scalable, and secure software tailored to your business — from full-stack web apps to enterprise systems.",
    items: [
      "Custom Web & App Development",
      "CMS & API Integration",
      "SEO-Optimized Architecture",
      "High-Performance Engineering",
    ],
  },
  {
    id: 3,
    icon: <IconCybersecurity />,
    title: "Cybersecurity & IT Solutions",
    description:
      "Protecting your digital assets and infrastructure with proactive security measures, audits, and resilient IT support.",
    items: [
      "Network Security & Monitoring",
      "Vulnerability Assessments",
      "IT Infrastructure Management",
      "Compliance & Risk Mitigation",
    ],
  },
];

// ── Single service column ────────────────────────────────────────────────────
function ServiceColumn({ service, index }) {
  const ref = useReveal(0.12);
  const isLast = index === services.length - 1;

  return (
    <div
      ref={ref}
      className={`srv-reveal flex flex-col ${
        !isLast
          ? "border-b border-white/10 pb-10 sm:pb-0 sm:border-b-0 sm:border-r sm:border-white/10 sm:pr-12 lg:pr-16"
          : ""
      }`}
      style={{ transitionDelay: `${index * 0.18}s` }}
    >
      {/* Icon */}
      <div className="mb-8">{service.icon}</div>

      {/* Title */}
      <h2 className="text-white text-xl sm:text-2xl font-light tracking-wide mb-3">
        {service.title}
      </h2>

      {/* Short description */}
      {/* <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
        {service.description}
      </p> */}

      {/* Divider */}
      <div className="w-full h-px bg-white/15 mb-6" />

      {/* Items */}
      <ul className="flex flex-col gap-5">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-3 group cursor-default">
            <span className="text-white/40 text-sm group-hover:text-white transition-colors duration-300 select-none">
              →
            </span>
            <span className="text-white/75 text-sm font-light tracking-wide group-hover:text-white transition-colors duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function ServicesSection() {
  return (
    <>
      <style>{`
        /* Base hidden state */
        .srv-reveal {
          opacity: 0;
          transform: translateY(48px);
          transition:
            opacity   1.1s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        /* Settled state */
        .srv-reveal.srv-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="w-full py-16 sm:py-20" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="w-full px-6 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0">
            {services.map((service, index) => (
              <div key={service.id} className={index !== 0 ? "sm:pl-12 lg:pl-16" : ""}>
                <ServiceColumn service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}