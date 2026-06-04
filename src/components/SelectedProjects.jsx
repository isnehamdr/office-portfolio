import { useState, useEffect, useRef } from "react";

// ── Reusable reveal hook (fires once) ─────────────────────────────────────────
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

// ── Shared style builder ───────────────────────────────────────────────────────
function revealStyle(visible, { direction = "up", distance = 40, delay = 0, duration = 1.1 } = {}) {
  const hidden = {
    up:    `translateY(${distance}px)`,
    left:  `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  };
  return {
    opacity:          visible ? 1 : 0,
    transform:        visible ? "translate(0,0)" : hidden[direction],
    transition:       `opacity ${duration}s cubic-bezier(0.16,1,0.3,1), transform ${duration}s cubic-bezier(0.16,1,0.3,1)`,
    transitionDelay:  `${delay}s`,
  };
}

// ── Data ──────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Maiden",
    description:
      "Maiden is built on the belief that stillness sparks transformation — our mission is to help you find it daily.",
    tags: ["SaaS", "Website", "Blurbird", "2021"],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    imageAlt: "Maiden project – laptop on a desk with green plants",
  },
  {
    id: 2,
    title: "Glamz",
    description:
      "Feel your best with Glamz — high-performance formulas designed to nurture and elevate your natural beauty.",
    tags: ["SaaS", "UI/UX", "Figma", "2020"],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    imageAlt: "Glamz project – beauty product lifestyle shot",
  },
  {
    id: 3,
    title: "Virox",
    description:
      "Guiding businesses to scale and redefine their potential, creating impactful, transformative solutions.",
    tags: ["Web Design", "UI/UX", "Photoshop", "2022"],
    image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&q=80",
    imageAlt: "Virox project – mobile UI on a tablet",
  },
  {
    id: 4,
    title: "Blake",
    description:
      "Designing with purpose — bringing creative ideas to life through intuitive and elegant digital solutions.",
    tags: ["App", "Web Design", "HTML", "2024"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    imageAlt: "Blake project – dark portfolio site on tablet and phone",
  },
];

// ── Tag ───────────────────────────────────────────────────────────────────────
function Tag({ label }) {
  return (
    <span className="text-xs sm:text-sm font-medium text-gray-600 border border-gray-200 rounded-full px-2.5 sm:px-3 py-1 whitespace-nowrap group-hover:text-white group-hover:border-white/50 transition-colors duration-300">
      {label}
    </span>
  );
}

// ── Project card — each observes itself ───────────────────────────────────────
function ProjectCard({ project, index }) {
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Alternate: even cards come from left, odd from right
  const direction = index % 2 === 0 ? "left" : "right";

  return (
    <div
      ref={ref}
      style={revealStyle(visible, {
        direction,
        distance: 50,
        delay: (index % 2) * 0.15, // slight stagger within each row
        duration: 1.2,
      })}
    >
      <div className="bg-white rounded-md border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">

        {/* Text block */}
        <div className="px-8 sm:px-10 flex-1 flex flex-col group-hover:bg-black transition-colors duration-300">
          <h3 className="text-2xl sm:text-2xl mt-8 text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-base sm:text-md text-gray-600 group-hover:text-white/80 leading-relaxed mb-4 transition-colors duration-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden h-64 sm:h-96 rounded-t-xl mt-6">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function SelectedProjects() {
  const [navRef,    navVisible]    = useReveal(0.2);
  const [titleRef,  titleVisible]  = useReveal(0.2);
  const [buttonRef, buttonVisible] = useReveal(0.1);

  return (
    <div className="min-h-screen bg-[#f7f6f5] font-sans overflow-hidden">

      {/* Nav */}
      <nav
        ref={navRef}
        className="px-4 sm:px-12 md:px-24 pt-6 sm:pt-8 pb-2 flex items-center gap-2"
        style={revealStyle(navVisible, { direction: "up", distance: 16, duration: 0.8 })}
      >
        <span className="text-sm font-normal tracking-[0.10em] uppercase text-black">
          Creative Works
        </span>
      </nav>

      {/* Main */}
      <main className="px-4 sm:px-12 md:px-24 pb-16">

        {/* Heading */}
        <h2
          ref={titleRef}
          className="text-2xl sm:text-4xl font-normal text-gray-900 mb-6 sm:mb-8"
          style={revealStyle(titleVisible, { direction: "up", distance: 28, delay: 0.08, duration: 1 })}
        >
          Selected Projects
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All button */}
        <div
          ref={buttonRef}
          className="flex justify-end mt-8 sm:mt-10"
          style={revealStyle(buttonVisible, { direction: "up", distance: 20, delay: 0.1, duration: 0.9 })}
        >
          <button className="bg-gray-900 hover:bg-gray-800 transition-colors text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md flex items-center gap-2">
            View All Work
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
