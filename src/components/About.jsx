import { useState, useEffect, useRef } from "react";

// ── Reusable reveal hook ───────────────────────────────────────────────────────
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



// ── Image components ──────────────────────────────────────────────────────────
function ImgMainPlaceholder() {
  return (
    <div className="w-full h-full">
      <img src="/images/about1.png" alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function ImgSecondaryPlaceholder() {
  return (
    <div className="w-full h-full">
      <img src="/images/about2.png" alt="" className="w-full h-full object-cover" />
    </div>
  );
}

// ── Shared transition style builder ──────────────────────────────────────────
function revealStyle(visible, { direction = "up", delay = 0, distance = 40, duration = 1.1 } = {}) {
  const transforms = {
    up:    `translateY(${distance}px)`,
    left:  `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  };

  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0,0)" : transforms[direction],
    transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1), transform ${duration}s cubic-bezier(0.16,1,0.3,1)`,
    transitionDelay: `${delay}s`,
  };
}

// ── Timeline item ─────────────────────────────────────────────────────────────
function TimelineItem({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLate = index >= 4;

  return (
    <div
      ref={ref}
      className="relative pl-8 mb-12 last:mb-0"
      style={revealStyle(visible, {
        direction: "up",
        distance: 30,
        delay: index * 0.1,
        duration: 1,
      })}
    >
    
     
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function About() {
  const [eyebrowRef,  eyebrowVisible]  = useReveal(0.2);
  const [headlineRef, headlineVisible] = useReveal(0.2);
  const [leftImgRef,  leftImgVisible]  = useReveal(0.08);
  const [rightImgRef, rightImgVisible] = useReveal(0.08);
  const [textCardRef, textCardVisible] = useReveal(0.08);
  const [timelineRef, timelineVisible] = useReveal(0.05);

  return (
    <div className="min-h-screen bg-[#f7f6f5]">

      {/* ── INTRO SECTION ── */}
      <section className="px-4 sm:px-8 md:px-24 pt-12 sm:pt-16 pb-2">

        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="flex items-center gap-3 mb-5"
          style={revealStyle(eyebrowVisible, { direction: "up", distance: 16, duration: 0.9 })}
        >
          <span className="block w-5 h-px bg-stone-800" />
          <span className="text-xs sm:text-sm font-normal tracking-[0.10em] uppercase text-stone-800">
            About Me
          </span>
        </div>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="text-base sm:text-lg md:text-xl text-stone-900 leading-relaxed max-w-2xl mb-4"
          style={revealStyle(headlineVisible, { direction: "up", distance: 28, delay: 0.1, duration: 1.1 })}
        >
          A dynamic agency dedicated to crafting innovative digital solutions
          that help businesses grow, engage, and succeed.
        </h2>
      </section>

      {/* ── SPLIT IMAGE LAYOUT ── */}
      <section className="px-4 sm:px-8 md:px-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 items-stretch">

          {/* Left — large image, slides from left */}
          <div
            ref={leftImgRef}
            className="md:col-span-3 flex flex-col h-full"
            style={revealStyle(leftImgVisible, { direction: "left", distance: 50, duration: 1.3 })}
          >
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 md:min-h-[70vh] flex-1">
              <ImgMainPlaceholder />
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-2 flex flex-col gap-4 h-full">

            {/* Secondary image, slides from right */}
            <div
              ref={rightImgRef}
              className="rounded-2xl overflow-hidden h-52 sm:h-64 md:h-[calc(70vh-180px)] flex-shrink-0"
              style={revealStyle(rightImgVisible, { direction: "right", distance: 50, delay: 0.1, duration: 1.3 })}
            >
              <ImgSecondaryPlaceholder />
            </div>

            {/* Text card, fades up with delay */}
            <div
              ref={textCardRef}
              className="p-2 flex flex-col flex-1 justify-between"
              style={revealStyle(textCardVisible, { direction: "up", distance: 28, delay: 0.25, duration: 1.1 })}
            >
              <p className="text-sm sm:text-base md:text-lg text-stone-900 leading-relaxed mb-4">
                We combine creativity, user experience design and strategy to deliver
                cutting-edge digital solutions that help businesses thrive in a competitive
                landscape.
              </p>
              <button className="self-start inline-flex items-center gap-2 bg-stone-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-stone-700 transition-colors">
                About us
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}