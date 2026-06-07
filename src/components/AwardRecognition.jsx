import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

// ── Data ──────────────────────────────────────────────────────────────────────
const awards = [
  {
    id: 1,
    year: "2024",
    title: "Best Digital Agency Award",
    description: "Recognized for outstanding creativity and strategic execution.",
    org: "InnoSync",
  },
  {
    id: 2,
    year: "2023",
    title: "Excellence in Branding",
    description: "Awarded for crafting impactful brand identities.",
    org: "Tech Flow",
  },
  {
    id: 3,
    year: "2022",
    title: "Innovation in Digital Marketing",
    description: "Acknowledged for successful, data-driven marketing campaigns.",
    org: "Pixo Edge",
  },
  {
    id: 4,
    year: "2022",
    title: "Top Web Design Agency",
    description: "Crafting bold, user-focused web designs that stand out.",
    org: "Digital Studio",
  },
];

// ── Award row — each observes itself ─────────────────────────────────────────
function AwardRow({ award, index, isLast }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={revealStyle(visible, {
        direction: "up",
        distance: 36,
        delay: index * 0.12,
        duration: 1.05,
      })}
      className={`grid grid-cols-1 sm:grid-cols-[80px_1fr_auto] gap-y-2 sm:gap-y-0 gap-x-6 sm:gap-x-10 items-start py-7 sm:py-8 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      {/* Year */}
      <span className="text-white text-sm sm:text-lg lg:text-xl font-normal sm:pt-0.5">
        {award.year}
      </span>

      {/* Title + description */}
      <div className="sm:col-start-2">
        <h3 className="text-white text-sm sm:text-lg lg:text-xl font-normal leading-snug mb-1.5">
          {award.title}
        </h3>
        <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
          {award.description}
        </p>
      </div>

      {/* Organisation */}
      <span className="text-white/60 text-sm sm:text-lg lg:text-xl font-normal sm:text-right sm:pt-0.5 whitespace-nowrap">
        {award.org}
      </span>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function AwardRecognition() {
  const [labelRef,   labelVisible]   = useReveal(0.15);
  const [headingRef, headingVisible] = useReveal(0.15);
  const [ctaRef,     ctaVisible]     = useReveal(0.15);

  return (
    <div className="w-full py-14 sm:py-20 lg:py-24" style={{ backgroundColor: "#1c1c1c" }}>
      <div className="px-5 sm:px-10 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16">

          {/* ── LEFT — label, heading, CTA ── */}
          <div className="lg:w-[340px] xl:w-[380px] flex-shrink-0 flex flex-col gap-8 lg:gap-0 lg:justify-between">
            <div>
              {/* Label */}
              <div
                ref={labelRef}
                className="flex items-center gap-2 mb-5"
                style={revealStyle(labelVisible, {
                  direction: "left",
                  distance: 24,
                  duration: 0.9,
                })}
              >
                <span className="block w-4 h-px bg-white/40" />
                <span className="text-white/50 text-xs sm:text-sm font-normal tracking-widest uppercase">
                  Our Achievements
                </span>
              </div>

              {/* Heading */}
              <h2
                ref={headingRef}
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight"
                style={revealStyle(headingVisible, {
                  direction: "left",
                  distance: 32,
                  delay: 0.1,
                  duration: 1.05,
                })}
              >
                Award Recognition
              </h2>
            </div>

            {/* CTA */}
            <div
              ref={ctaRef}
              className="mt-6 lg:mt-0"
              style={revealStyle(ctaVisible, {
                direction: "left",
                distance: 24,
                delay: 0.2,
                duration: 1.0,
              })}
            >
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 transition-colors text-gray-900 text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full">
                Work With us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── RIGHT — awards list ── */}
          <div className="flex-1 border-t border-white/10">
            {awards.map((award, index) => (
              <AwardRow
                key={award.id}
                award={award}
                index={index}
                isLast={index === awards.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}