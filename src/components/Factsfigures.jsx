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

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  {
    id: 1,
    value: "85%",
    description: "Built on trust, with a strong client retention rate.",
    bg: "bg-orange-500",
    textColor: "text-white",
  },
  {
    id: 2,
    value: "30+",
    description: "Recognized for excellence with award-winning projects.",
    bg: "bg-[#1e1e1e]",
    textColor: "text-white",
  },
];

// ── Stat card — each observes itself ─────────────────────────────────────────
function StatCard({ stat, index }) {
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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex-1"
      style={revealStyle(visible, {
        direction: "up",
        distance: 50,
        delay: index * 0.18,
        duration: 1.15,
      })}
    >
      <div
        className={`${stat.bg} rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[200px] sm:min-h-[280px] lg:min-h-[320px] h-full`}
      >
        {/* Big number */}
        <p className={`${stat.textColor} text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight`}>
          {stat.value}
        </p>

        {/* Description */}
        <p className={`${stat.textColor} text-sm sm:text-base leading-relaxed opacity-90 mt-8`}>
          {stat.description}
        </p>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function FactsFigures() {
  const [labelRef,  labelVisible]  = useReveal(0.15);
  const [bodyRef,   bodyVisible]   = useReveal(0.15);

  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full px-5 sm:px-10 lg:px-24">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* ── LEFT — label + body text ── */}
          <div className="w-full lg:w-[38%] flex-shrink-0 flex flex-col justify-center">

            {/* Label */}
            <div
              ref={labelRef}
              className="flex items-center gap-2 mb-5 sm:mb-6"
              style={revealStyle(labelVisible, {
                direction: "left",
                distance: 24,
                duration: 0.9,
              })}
            >
              <span className="block w-4 h-px bg-gray-800" />
              <span className="text-xs sm:text-sm font-normal tracking-widest uppercase text-gray-800">
                Facts &amp; Figures
              </span>
            </div>

            {/* Body */}
            <p
              ref={bodyRef}
              className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-normal"
              style={revealStyle(bodyVisible, {
                direction: "left",
                distance: 32,
                delay: 0.12,
                duration: 1.1,
              })}
            >
              We've helped hundreds of clients achieve their goals, constantly
              improving &amp; adapting our services to meet the ever-evolving
              digital landscape.
            </p>
          </div>

          {/* ── RIGHT — stat cards ── */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
            {stats.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}