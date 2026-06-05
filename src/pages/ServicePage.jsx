import React, { useState, useEffect, useRef } from "react";
import Blogs from "../components/Blogs";

// ── Reveal hook (fires once) ──────────────────────────────────────────────────
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

// ── Icons — matched to each title ─────────────────────────────────────────────

// Digital Transformation — network hub with pulse line
function IconDigitalTransformation() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="5" stroke="#333" strokeWidth="1.1" fill="none"/>
      <circle cx="28" cy="28" r="14" stroke="#333" strokeWidth="1" strokeDasharray="3.5 2.5" fill="none"/>
      <line x1="28" y1="23" x2="28" y2="10" stroke="#333" strokeWidth="1.1"/>
      <line x1="32.7" y1="30.7" x2="41.7" y2="39.7" stroke="#333" strokeWidth="1.1"/>
      <line x1="23.3" y1="30.7" x2="14.3" y2="39.7" stroke="#333" strokeWidth="1.1"/>
      <circle cx="28" cy="9" r="2.2" stroke="#333" strokeWidth="1" fill="none"/>
      <circle cx="43" cy="41" r="2.2" stroke="#333" strokeWidth="1" fill="none"/>
      <circle cx="13" cy="41" r="2.2" stroke="#333" strokeWidth="1" fill="none"/>
      <path d="M10,28 L14,28 L16,22 L19,34 L22,28 L28,28" stroke="#333" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// IT Consulting — layered screens with gear
function IconITConsulting() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="32" height="22" rx="2" stroke="#333" strokeWidth="1.1" fill="none"/>
      <line x1="8" y1="19" x2="40" y2="19" stroke="#333" strokeWidth="1"/>
      <circle cx="12" cy="15.5" r="1.2" fill="#333"/>
      <circle cx="16" cy="15.5" r="1.2" fill="#333"/>
      <circle cx="20" cy="15.5" r="1.2" fill="#333"/>
      <line x1="14" y1="25" x2="26" y2="25" stroke="#333" strokeWidth="1" strokeDasharray="2 2"/>
      <line x1="14" y1="28.5" x2="22" y2="28.5" stroke="#333" strokeWidth="1" strokeDasharray="2 2"/>
      <line x1="24" y1="34" x2="24" y2="40" stroke="#333" strokeWidth="1.1"/>
      <line x1="16" y1="40" x2="32" y2="40" stroke="#333" strokeWidth="1.1"/>
      {/* Gear */}
      <circle cx="42" cy="38" r="5" stroke="#333" strokeWidth="1.1" fill="none"/>
      <circle cx="42" cy="38" r="2" stroke="#333" strokeWidth="1" fill="none"/>
      <line x1="42" y1="31" x2="42" y2="33" stroke="#333" strokeWidth="1.2"/>
      <line x1="42" y1="43" x2="42" y2="45" stroke="#333" strokeWidth="1.2"/>
      <line x1="35" y1="38" x2="37" y2="38" stroke="#333" strokeWidth="1.2"/>
      <line x1="47" y1="38" x2="49" y2="38" stroke="#333" strokeWidth="1.2"/>
      <line x1="37" y1="33" x2="38.4" y2="34.4" stroke="#333" strokeWidth="1.2"/>
      <line x1="45.6" y1="41.6" x2="47" y2="43" stroke="#333" strokeWidth="1.2"/>
      <line x1="47" y1="33" x2="45.6" y2="34.4" stroke="#333" strokeWidth="1.2"/>
      <line x1="38.4" y1="41.6" x2="37" y2="43" stroke="#333" strokeWidth="1.2"/>
    </svg>
  );
}

// Cybersecurity — shield with lock
function IconCybersecurity() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28,8 L46,16 L46,32 C46,42 28,50 28,50 C28,50 10,42 10,32 L10,16 Z" stroke="#333" strokeWidth="1.1" fill="none"/>
      <rect x="22" y="28" width="12" height="10" rx="1.5" stroke="#333" strokeWidth="1.1" fill="none"/>
      <path d="M24,28 L24,24 Q24,20 28,20 Q32,20 32,24 L32,28" stroke="#333" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      <circle cx="28" cy="32.5" r="1.5" stroke="#333" strokeWidth="1" fill="none"/>
      <line x1="28" y1="34" x2="28" y2="36" stroke="#333" strokeWidth="1"/>
      <path d="M28,16 L28,20" stroke="#333" strokeWidth="1" strokeDasharray="2 2"/>
      <circle cx="10" cy="16" r="1.8" stroke="#333" strokeWidth="1" fill="none"/>
      <circle cx="46" cy="16" r="1.8" stroke="#333" strokeWidth="1" fill="none"/>
    </svg>
  );
}

// Software Development — code editor window
function IconSoftwareDev() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="44" height="34" rx="3" stroke="#333" strokeWidth="1.1" fill="none"/>
      <line x1="6" y1="19" x2="50" y2="19" stroke="#333" strokeWidth="1"/>
      <circle cx="12" cy="14.5" r="1.5" stroke="#333" strokeWidth="1" fill="none"/>
      <circle cx="17.5" cy="14.5" r="1.5" stroke="#333" strokeWidth="1" fill="none"/>
      <circle cx="23" cy="14.5" r="1.5" stroke="#333" strokeWidth="1" fill="none"/>
      {/* Code brackets */}
      <path d="M16,26 L12,30 L16,34" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M24,26 L28,30 L24,34" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="30" y1="26" x2="44" y2="26" stroke="#333" strokeWidth="1" opacity="0.5"/>
      <line x1="30" y1="30" x2="40" y2="30" stroke="#333" strokeWidth="1" opacity="0.5"/>
      <line x1="30" y1="34" x2="38" y2="34" stroke="#333" strokeWidth="1" opacity="0.5"/>
      <line x1="28" y1="44" x2="28" y2="50" stroke="#333" strokeWidth="1.1"/>
      <line x1="18" y1="50" x2="38" y2="50" stroke="#333" strokeWidth="1.1"/>
    </svg>
  );
}

// Collaboration — three interlocking people / Venn
function IconCollaboration() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Three people */}
      <circle cx="16" cy="18" r="5" stroke="#333" strokeWidth="1.1" fill="none"/>
      <path d="M6,34 Q6,26 16,26 Q26,26 26,34" stroke="#333" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      <circle cx="40" cy="18" r="5" stroke="#333" strokeWidth="1.1" fill="none"/>
      <path d="M30,34 Q30,26 40,26 Q50,26 50,34" stroke="#333" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      <circle cx="28" cy="32" r="5" stroke="#333" strokeWidth="1.1" fill="none"/>
      <path d="M18,48 Q18,40 28,40 Q38,40 38,48" stroke="#333" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      {/* Connection lines */}
      <line x1="20" y1="20" x2="36" y2="20" stroke="#333" strokeWidth="0.9" strokeDasharray="2.5 2" opacity="0.6"/>
      <line x1="22" y1="28" x2="28" y2="32" stroke="#333" strokeWidth="0.9" strokeDasharray="2.5 2" opacity="0.6"/>
      <line x1="34" y1="28" x2="28" y2="32" stroke="#333" strokeWidth="0.9" strokeDasharray="2.5 2" opacity="0.6"/>
    </svg>
  );
}

// Problem Solving — lightbulb with circuit
function IconProblemSolving() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20,36 C20,36 16,32 16,26 C16,20 21.5,14 28,14 C34.5,14 40,20 40,26 C40,32 36,36 36,36 L36,40 L20,40 Z" stroke="#333" strokeWidth="1.1" fill="none"/>
      <line x1="22" y1="43" x2="34" y2="43" stroke="#333" strokeWidth="1.1"/>
      <line x1="24" y1="46.5" x2="32" y2="46.5" stroke="#333" strokeWidth="1.1"/>
      {/* Circuit lines inside */}
      <path d="M24,30 L24,26 L28,26 L28,22" stroke="#333" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round"/>
      <path d="M32,30 L32,26 L28,26" stroke="#333" strokeWidth="1" strokeDasharray="2 2" strokeLinecap="round"/>
      <circle cx="28" cy="22" r="1.5" stroke="#333" strokeWidth="1" fill="none"/>
      {/* Rays */}
      <line x1="28" y1="9" x2="28" y2="6" stroke="#333" strokeWidth="1.1"/>
      <line x1="36" y1="11" x2="38" y2="9" stroke="#333" strokeWidth="1.1"/>
      <line x1="20" y1="11" x2="18" y2="9" stroke="#333" strokeWidth="1.1"/>
      <line x1="41" y1="20" x2="44" y2="19" stroke="#333" strokeWidth="1.1"/>
      <line x1="15" y1="20" x2="12" y2="19" stroke="#333" strokeWidth="1.1"/>
    </svg>
  );
}

// ── Service data — titles, matched icons, matched items ───────────────────────
const services = [
  {
    id: 1,
    icon: <IconDigitalTransformation />,
    title: "Digital Transformation",
    items: [
      "Business Process Digitization",
      "Cloud Migration & Strategy",
      "Digital Workflow Automation",
      "Technology Roadmap Planning",
    ],
  },
  {
    id: 2,
    icon: <IconITConsulting />,
    title: "IT Consulting",
    items: [
      "Infrastructure Assessment",
      "Technology Stack Advisory",
      "IT Strategy & Planning",
      "Vendor Management Support",
    ],
  },
  {
    id: 3,
    icon: <IconCybersecurity />,
    title: "Cybersecurity",
    items: [
      "Network Security & Monitoring",
      "Vulnerability Assessments",
      "IT Infrastructure Management",
      "Compliance & Risk Mitigation",
    ],
  },
  {
    id: 4,
    icon: <IconSoftwareDev />,
    title: "Software Development",
    items: [
      "Custom Web & App Development",
      "CMS & API Integration",
      "SEO-Optimized Architecture",
      "High-Performance Engineering",
    ],
  },
  {
    id: 5,
    icon: <IconCollaboration />,
    title: "Collaboration",
    items: [
      "Cross-Team Project Coordination",
      "Client & Stakeholder Engagement",
      "Agile Workflow Integration",
      "Remote Team Enablement",
    ],
  },
  {
    id: 6,
    icon: <IconProblemSolving />,
    title: "Problem Solving",
    items: [
      "Root Cause Analysis",
      "Process Optimization",
      "Creative Solution Design",
      "Performance Bottleneck Resolution",
    ],
  },
];

// ── Service card — each observes itself ───────────────────────────────────────
function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Row-aware stagger: cards in the same row cascade left→right
  const col = index % 3;
  const row = Math.floor(index / 3);

  return (
    <div
      ref={ref}
      style={revealStyle(visible, {
        direction: "up",
        distance: 44,
        delay: col * 0.15 + row * 0.05,
        duration: 1.1,
      })}
      className="flex flex-col"
    >
      {/* Icon */}
      <div className="mb-5">{service.icon}</div>

      {/* Title */}
      <h3 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-semibold mb-3">
        {service.title}
      </h3>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 mb-4" />

      {/* Items */}
      <ul className="flex flex-col gap-2.5">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 group cursor-default">
            <span className="text-gray-400 text-sm group-hover:text-gray-700 transition-colors duration-300 shrink-0">
              →
            </span>
            <span className="text-gray-500 text-sm sm:text-base lg:text-lg leading-snug group-hover:text-gray-700 transition-colors duration-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ServicePage() {
  const [headingRef, headingVisible] = useReveal(0.2);

  return (
    <>
    <div className="overflow-x-hidden">
      <div className="min-h-screen  w-full bg-[#f7f6f5]">
        <div className="px-5 sm:px-10 lg:px-24 py-12 sm:py-16 lg:py-20 ">

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-black text-3xl sm:text-4xl lg:text-5xl font-normal mb-10 lg:mb-12 sm:pt-12  tracking-wide"
            style={revealStyle(headingVisible, {
              direction: "up",
              distance: 32,
              duration: 1.0,
            })}
          >
            Our Services
          </h2>

          {/* 3×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 sm:gap-y-14 lg:gap-y-16">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

        </div>
      </div>

      <Blogs />

    </div>
    </>
  );
}