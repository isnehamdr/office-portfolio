import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

function revealStyle(visible, { direction = "up", distance = 40, delay = 0, duration = 1.1 } = {}) {
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

const testimonials = [
  {
    id: 1,
    quote:
      "The software development and training provided by SAIT Solution transformed our restaurant operations. Their expertise in hospitality technology helped us implement a complete digital solution that improved our efficiency and customer experience.",
    name: "Nirmal Ghale",
    location: "Owner, Baranda Restro",
    image: "/images/testimonial.webp",
  },
  {
    id: 2,
    quote:
      "SAIT Solution delivered exceptional hotel technology solutions for our group. Their software development expertise and OTA integration services have streamlined our operations across multiple properties in Nepal.",
    name: "Bhoj Raj Tiwari",
    location: "CEO, Nepal Hospitality Group",
    image: "/images/testimonial2.png",
  },
  {
    id: 3,
    quote:
      "The web development and digital solutions from SAIT Solution perfectly captured our brand. Their team in Pokhara created a website that showcases our trekking services while integrating booking functionality seamlessly.",
    name: "Back to Nature Adventure",
    location: "Travel Company in Nepal",
    image: "/images/testimonial3.png",
  },
  {
    id: 4,
    quote:
      "For five years, SAIT Solution has been our trusted software development partner. Their digital marketing, website development, and IT solutions have been instrumental in growing our bakery business across Nepal.",
    name: "Shiva Prasad Sharma",
    location: "CEO, Everyday Bakery",
    image: "/images/testimonial4.png",
  },
  
];

// ── Single testimonial card (same style as original) ─────────────────────────
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 flex-shrink-0">
      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
        "{testimonial.quote}"
      </p>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-gray-900 text-base sm:text-lg font-normal">{testimonial.name}</p>
          <p className="text-gray-400 text-sm mt-0.5">{testimonial.location}</p>
        </div>
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=e8e5e0&color=555&size=80`;
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Auto-scrolling single column ──────────────────────────────────────────────
function AutoScrollColumn({ items, duration = 30, paused, onMouseEnter, onMouseLeave }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden flex-1"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="flex flex-col gap-5 sm:gap-6"
        style={{
          animation: `autoScrollUp ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function ClientsReview() {
  const [paused, setPaused] = useState(false);

  const [labelRef,   labelVisible]   = useReveal(0.2);
  const [headingRef, headingVisible] = useReveal(0.2);
  const [bodyRef,    bodyVisible]    = useReveal(0.15);
  const [ctaRef,     ctaVisible]     = useReveal(0.15);

  return (
    <>
      <style>{`
        @keyframes autoScrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      <div className="w-full bg-[#f7f6f5] py-14 sm:pt-28 overflow-hidden">
        <div className="w-full px-5 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

            {/* ── LEFT PANEL ── */}
            <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">

              <div
                ref={labelRef}
                className="flex items-center gap-2 mb-4"
                style={revealStyle(labelVisible, { direction: "up", distance: 16, duration: 0.85 })}
              >
                <span className="block w-4 h-px bg-gray-900" />
                <span className="text-xs sm:text-sm font-normal tracking-widest uppercase text-gray-900">
                  Testimonials
                </span>
              </div>

              <h2
                ref={headingRef}
                className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 leading-tight mb-4"
                style={revealStyle(headingVisible, { direction: "up", distance: 30, delay: 0.1, duration: 1.1 })}
              >
                Clients Review
              </h2>

              <p
                ref={bodyRef}
                className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-md"
                style={revealStyle(bodyVisible, { direction: "up", distance: 24, delay: 0.2, duration: 1.1 })}
              >
                We pride ourselves on building long-lasting relationships with
                businesses, delivering exceptional results across various industries.
              </p>

              <div
                ref={ctaRef}
                style={revealStyle(ctaVisible, { direction: "up", distance: 20, delay: 0.32, duration: 1 })}
              >
                <Link
                  to="contact" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 transition-colors text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full">
                  Work With us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* ── RIGHT PANEL — single auto-scrolling column ── */}
            <div
              className="h-[520px] sm:h-[620px] lg:h-[680px]"
            >
              <AutoScrollColumn
                items={testimonials}
                duration={32}
                paused={paused}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}