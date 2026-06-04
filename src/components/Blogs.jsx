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
const featuredArticle = {
  id: 1,
  date: "May 29, 2025",
  title: "Strategies to boost presence and scale your business",
  excerpt:
    "We explore the essential strategies that businesses need to adopt in 2025 to stay ahead of the curve.",
  image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
  imageAlt: "Woman working on laptop in a cozy home office",
};

const smallArticles = [
  {
    id: 2,
    date: "Jun 18, 2025",
    title: "Strategies to grow brand and build lasting engagement",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80",
    imageAlt: "Team collaborating around a table",
  },
  {
    id: 3,
    date: "May 24, 2025",
    title: "Driving brand success with social media marketing",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
    imageAlt: "Woman using laptop for social media",
  },
  {
    id: 4,
    date: "May 24, 2025",
    title: "Tips and tools to amplify your brand's online presence.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80",
    imageAlt: "Business presentation in office",
  },
];

// ── Small card — each observes itself ─────────────────────────────────────────
function SmallCard({ article, index }) {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={revealStyle(visible, {
        direction: "up",
        distance: 44,
        delay: index * 0.15,
        duration: 1.1,
      })}
    >
      <div className="bg-white max-w-xl mx-auto rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-row cursor-pointer group h-full">
        {/* Image: Left side */}
        <div className="w-28 sm:w-40 md:w-44 h-40 sm:h-52 flex-shrink-0 overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text: Right side */}
        <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 text-left">
          <p className="text-gray-400 text-xs sm:text-sm mb-2">{article.date}</p>
          <h3 className="text-gray-900 text-sm sm:text-base lg:text-lg font-normal leading-snug group-hover:text-gray-600 transition-colors duration-300">
            {article.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Blogs() {
  const [labelRef,    labelVisible]    = useReveal(0.2);
  const [headingRef,  headingVisible]  = useReveal(0.2);
  const [featuredRef, featuredVisible] = useReveal(0.08);

  return (
    <div
      className="w-full py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-24"
      style={{ backgroundColor: "#f7f6f5" }}
    >
      {/* Section label */}
      <div
        ref={labelRef}
        className="flex items-center gap-2 mb-3"
        style={revealStyle(labelVisible, {
          direction: "up",
          distance: 16,
          duration: 0.85,
        })}
      >
        <span className="text-xs sm:text-sm font-normal tracking-widest uppercase text-gray-900">
          Our Blogs
        </span>
      </div>

      {/* Section heading */}
      <h2
        ref={headingRef}
        className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-7 sm:mb-8"
        style={revealStyle(headingVisible, {
          direction: "up",
          distance: 28,
          delay: 0.1,
          duration: 1.05,
        })}
      >
        Latest Articles
      </h2>

      {/* ── Featured card ── */}
      <div
        ref={featuredRef}
        className="mb-6 sm:mb-8"
        style={revealStyle(featuredVisible, {
          direction: "up",
          distance: 50,
          delay: 0.15,
          duration: 1.2,
        })}
      >
        <div className="bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row group cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Left – image */}
          <div className="w-full sm:w-[45%] lg:w-[480px] xl:w-[540px] flex-shrink-0 overflow-hidden h-56 sm:h-auto">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right – content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 flex-1">
            <p className="text-gray-400 text-xs sm:text-sm mb-3">
              {featuredArticle.date}
            </p>
            <h3 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-normal leading-snug mb-4">
              {featuredArticle.title}
            </h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              {featuredArticle.excerpt}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 w-fit hover:opacity-60 transition-opacity"
            >
              Read Article
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Small cards row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {smallArticles.map((article, index) => (
          <SmallCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </div>
  );
}