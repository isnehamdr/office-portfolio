// const testimonials = [
//   {
//     id: 1,
//     quote:
//       "Working with Zinle has been an absolute pleasure. Their attention to detail, creativity, and strategic thinking has helped us connect with our target audience in ways we never imagined.",
//     name: "Marvin McKinney",
//     location: "Georgia, US",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
//   },
//   {
//     id: 2,
//     quote:
//       "We saw immediate improvements in our search engine rankings after Zinle's SEO services. Our organic traffic grew by 50%, and our lead generation has improved dramatically.",
//     name: "Darlene Robertson",
//     location: "Dallas, US",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
//   },
// ];

// function TestimonialCard({ testimonial }) {
//   return (
//     <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6">
//       {/* Quote */}
//       <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
//         "{testimonial.quote}"
//       </p>

//       {/* Author row */}
//       <div className="flex items-end justify-between gap-4">
//         <div>
//           <p className="text-gray-900 text-lg font-normal">{testimonial.name}</p>
//           <p className="text-gray-400 text-md mt-0.5">{testimonial.location}</p>
//         </div>
//         <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
//           <img
//             src={testimonial.image}
//             alt={testimonial.name}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ClientsReview() {
//   return (
//     <>
//       <div className="w-full bg-[#f7f6f5] py-16 sm:py-24">
//         <div className="w-full px-6 sm:px-10 lg:px-24">
          
//           {/* FIX: Added items-start to ensure both panels align to the top edge */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

//             {/* ── LEFT PANEL ── */}
//             {/* FIX: Removed justify-center so it naturally aligns to the top */}
//             <div className="flex flex-col">
//               {/* Label */}
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-sm font-normal tracking-widest uppercase text-gray-900">
//                   Testimonials
//                 </span>
//               </div>

//               {/* Heading */}
//               <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 leading-tight mb-4">
//                 Clients Review
//               </h2>

//               {/* Sub-text */}
//               <p className="text-gray-900 text-lg leading-relaxed mb-8">
//                 We pride ourselves on building long-lasting relationships with
//                 businesses, delivering exceptional results across various industries.
//               </p>

//               {/* CTA Button */}
//               <div>
//                 <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 transition-colors text-white text-sm font-medium px-6 py-3 rounded-full">
//                   Work With us
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* ── RIGHT PANEL — testimonial cards ── */}
//             <div className="flex flex-col gap-6">
//               {testimonials.map((t) => (
//                 <TestimonialCard key={t.id} testimonial={t} />
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


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

// ── Shared style builder ──────────────────────────────────────────────────────
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

// ── Data ──────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    quote:
      "Working with Zinle has been an absolute pleasure. Their attention to detail, creativity, and strategic thinking has helped us connect with our target audience in ways we never imagined.",
    name: "Marvin McKinney",
    location: "Georgia, US",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: 2,
    quote:
      "We saw immediate improvements in our search engine rankings after Zinle's SEO services. Our organic traffic grew by 50%, and our lead generation has improved dramatically.",
    name: "Darlene Robertson",
    location: "Dallas, US",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
];

// ── Testimonial card — each observes itself ───────────────────────────────────
function TestimonialCard({ testimonial, index }) {
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
      style={revealStyle(visible, {
        direction: "right",
        distance: 45,
        delay: index * 0.18,
        duration: 1.15,
      })}
    >
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6">
        {/* Quote */}
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          "{testimonial.quote}"
        </p>

        {/* Author row */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-gray-900 text-base sm:text-lg font-normal">{testimonial.name}</p>
            <p className="text-gray-400 text-sm sm:text-md mt-0.5">{testimonial.location}</p>
          </div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function ClientsReview() {
  const [labelRef,   labelVisible]   = useReveal(0.2);
  const [headingRef, headingVisible] = useReveal(0.2);
  const [bodyRef,    bodyVisible]    = useReveal(0.15);
  const [ctaRef,     ctaVisible]     = useReveal(0.15);

  return (
    <div className="w-full bg-[#f7f6f5] py-14 sm:pt-28 overflow-hidden">
      <div className="w-full px-5 sm:px-10 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* ── LEFT PANEL ── */}
          <div className="flex flex-col">

            {/* Label */}
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

            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 leading-tight mb-4"
              style={revealStyle(headingVisible, { direction: "up", distance: 30, delay: 0.1, duration: 1.1 })}
            >
              Clients Review
            </h2>

            {/* Body */}
            <p
              ref={bodyRef}
              className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-md"
              style={revealStyle(bodyVisible, { direction: "up", distance: 24, delay: 0.2, duration: 1.1 })}
            >
              We pride ourselves on building long-lasting relationships with
              businesses, delivering exceptional results across various industries.
            </p>

            {/* CTA */}
            <div
              ref={ctaRef}
              style={revealStyle(ctaVisible, { direction: "up", distance: 20, delay: 0.32, duration: 1 })}
            >
              <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 transition-colors text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full">
                Work With us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── RIGHT PANEL — cards slide in from right, staggered ── */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {testimonials.map((t, index) => (
              <TestimonialCard key={t.id} testimonial={t} index={index} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
