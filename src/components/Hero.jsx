

// import React from "react";
// import {
//   ArrowDown,
//   ArrowRight,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen bg-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex items-center overflow-hidden"
//     >
//       {/* Grid Lines */}
//       <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
//         <div className="w-px bg-white/10" />
//         <div className="hidden md:block w-px bg-white/10" />
//         <div className="hidden lg:block w-px bg-white/10" />
//         <div className="w-px bg-white/10" />
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto py-24 ">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-7 text-center lg:text-left mt-12  ">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[3.8rem]  font-semibold uppercase tracking-wide leading-tight text-white">
//               Driving Growth Through Strategy <br/>
//                and Technology
//             </h1>

//             <div className="mt-8 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start lg:items-start">
//               {/* Scroll Indicator */}
//               <a
//                 href="#about"
//                 className="hidden sm:flex h-14 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-orange-500 transition"
//               >
//                 <ArrowDown className="h-4 w-4 animate-bounce" />
//               </a>

//               <div className="space-y-5 max-w-3xl">
//                 <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-md mx-auto">
//                   With 12+ years of experience in IT & Business Services,
//                   Sandip Bhattarai has helped enterprises grow by delivering
//                   functional, secure, and cloud-ready digital solutions. We
//                   solve challenges and optimize complex processes to keep
//                   clients ahead in a changing tech world.
//                 </p>

//                 <a
//                   href="https://sait.com.np/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-white font-semibold  transition"
//                 >
//                   <span>View S.A I.T Solutions Portfolio</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="lg:col-span-5 flex justify-center lg:justify-end mt-18">
//             <img
//               src="/images/hero.jpeg"
//               alt="Hero Section"
//               className="
//                 w-full
//                 max-w-[260px]
//                 sm:max-w-[320px]
//                 md:max-w-[400px]
//                 lg:max-w-[500px]
//                 xl:max-w-[550px]
//                 h-auto
//                 object-contain
//               "
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

function useReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
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

export default function Hero() {
  const headingRef = useReveal(0.1);
  const contentRef = useReveal(0.1);
  const imageRef = useReveal(0.1);

  return (
    <>
      <style>{`
        .reveal {
          opacity: 0;
          transition:
            opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal--left {
          transform: translateX(-60px);
        }

        .reveal--right {
          transform: translateX(60px);
        }

        .reveal--up {
          transform: translateY(50px);
        }

        .reveal.visible {
          opacity: 1;
          transform: translate(0, 0);
        }

        .reveal-stagger > * {
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-stagger.visible > *:nth-child(1) {
          opacity: 1;
          transform: none;
          transition-delay: 0.1s;
        }

        .reveal-stagger.visible > *:nth-child(2) {
          opacity: 1;
          transform: none;
          transition-delay: 0.35s;
        }

        .reveal-stagger.visible > *:nth-child(3) {
          opacity: 1;
          transform: none;
          transition-delay: 0.6s;
        }

        .reveal--right {
          transition-delay: 0.2s;
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex items-center overflow-hidden z-10"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4"
            type="video/mp4"
          />
        </video>

        {/* Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="w-px bg-white/10" />
          <div className="hidden md:block w-px bg-white/10" />
          <div className="hidden lg:block w-px bg-white/10" />
          <div className="w-px bg-white/10" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto py-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* CONTENT FIRST ON MOBILE */}
            <div className="order-1 lg:order-2 lg:col-span-7 text-center lg:text-left sm:pt-0 pt-12">

              <h1
                ref={headingRef}
                className="reveal reveal--left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[3.8rem] font-semibold uppercase tracking-wide leading-tight text-white"
              >
                Driving Growth Through Strategy
                <br />
                and Technology
              </h1>

              <div
                ref={contentRef}
                className="reveal-stagger mt-8 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center lg:items-start"
              >
                <a
                  href="/about"
                  className="hidden sm:flex h-14 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 transition"
                >
                  <ArrowDown className="h-4 w-4 animate-bounce" />
                </a>

                <div className="space-y-5 max-w-3xl">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-md mx-auto lg:mx-0">
                    With 12+ years of experience in IT & Business Services,
                    Sandip Bhattarai has helped enterprises grow by delivering
                    functional, secure, and cloud-ready digital solutions. We
                    solve challenges and optimize complex processes to keep
                    clients ahead in a changing tech world.
                  </p>

                  <a
                    href="https://sait.com.np/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-white font-semibold transition"
                  >
                    <span>View S.A I.T Solutions Portfolio</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* IMAGE SECOND ON MOBILE */}
            <div
              ref={imageRef}
              className="reveal reveal--right order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-end"
            >
              <img
                src="/images/hero2.png"
                alt="Hero Section"
                className="
                  w-full
                  max-w-[580px]
                  sm:max-w-[450px]
                  md:max-w-[520px]
                  lg:max-w-[550px]
                  xl:max-w-[600px]
                  h-auto
                  object-contain
                "
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}


// import React, { useEffect, useRef } from "react";
// import { ArrowDown, ArrowRight } from "lucide-react";

// function useReveal(threshold = 0.1) {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add("visible");
//           observer.unobserve(el);
//         }
//       },
//       { threshold }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [threshold]);
//   return ref;
// }

// export default function Hero() {
//   const headingRef = useReveal(0.1);
//   const contentRef = useReveal(0.1);
//   const imageRef   = useReveal(0.1);

//   return (
//     <>
//       <style>{`
//         /* ── Base reveal state ── */
//         .reveal {
//           opacity: 0;
//           transition:
//             opacity    1.2s cubic-bezier(0.16, 1, 0.3, 1),
//             transform  1.2s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         /* Directional starting positions */
//         .reveal--left  { transform: translateX(-60px); }
//         .reveal--right { transform: translateX(60px);  }
//         .reveal--up    { transform: translateY(50px);  }

//         /* Visible (settled) state */
//         .reveal.visible {
//           opacity: 1;
//           transform: translate(0, 0);
//         }

//         /* ── Stagger children ── */
//         .reveal-stagger > * {
//           opacity: 0;
//           transform: translateY(36px);
//           transition:
//             opacity   1s cubic-bezier(0.16, 1, 0.3, 1),
//             transform 1s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         /* Each child settles with a longer gap between them */
//         .reveal-stagger.visible > *:nth-child(1) {
//           opacity: 1; transform: none;
//           transition-delay: 0.1s;
//         }
//         .reveal-stagger.visible > *:nth-child(2) {
//           opacity: 1; transform: none;
//           transition-delay: 0.35s;
//         }
//         .reveal-stagger.visible > *:nth-child(3) {
//           opacity: 1; transform: none;
//           transition-delay: 0.6s;
//         }

//         /* Image gets a slight extra delay so heading lands first */
//         .reveal--right { transition-delay: 0.2s; }
//       `}</style>

//       <section
//         id="home"
//         className="relative min-h-screen bg-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex items-center overflow-hidden"
//       >
//         {/* Grid Lines */}
//         <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
//           <div className="w-px bg-white/10" />
//           <div className="hidden md:block w-px bg-white/10" />
//           <div className="hidden lg:block w-px bg-white/10" />
//           <div className="w-px bg-white/10" />
//         </div>

//         <div className="relative z-10 w-full max-w-7xl mx-auto py-24">
//           <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

//             {/* LEFT CONTENT */}
//             <div className="lg:col-span-7 text-center lg:text-left mt-12">

//               {/* Heading — drifts in slowly from left */}
//               <h1
//                 ref={headingRef}
//                 className="reveal reveal--left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[3.8rem] font-semibold uppercase tracking-wide leading-tight text-white"
//               >
//                 Driving Growth Through Strategy <br />
//                 and Technology
//               </h1>

//               {/* Sub-content — children stagger in slowly */}
//               <div
//                 ref={contentRef}
//                 className="reveal-stagger mt-8 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start lg:items-start"
//               >
//                 {/* Scroll indicator */}
//                 <a
//                   href="#about"
//                   className="hidden sm:flex h-14 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-orange-500 transition"
//                 >
//                   <ArrowDown className="h-4 w-4 animate-bounce" />
//                 </a>

//                 <div className="space-y-5 max-w-3xl">
//                   <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-md mx-auto">
//                     With 12+ years of experience in IT & Business Services,
//                     Sandip Bhattarai has helped enterprises grow by delivering
//                     functional, secure, and cloud-ready digital solutions. We
//                     solve challenges and optimize complex processes to keep
//                     clients ahead in a changing tech world.
//                   </p>

//                   <a
//                     href="https://sait.com.np/"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-white font-semibold transition"
//                   >
//                     <span>View S.A I.T Solutions Portfolio</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CONTENT — drifts in slowly from right, slightly delayed */}
//             <div
//               ref={imageRef}
//               className="reveal reveal--right lg:col-span-5 flex justify-center lg:justify-end mt-18"
//             >
//               <img
//                 src="/images/hero.jpeg"
//                 alt="Hero Section"
//                 className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[550px] h-auto object-contain"
//               />
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



// import React, { useEffect, useRef, useState } from "react";
// import { ArrowDown, ArrowRight } from "lucide-react";

// function Hero() {
//   const headingRef = useRef(null);
//   const contentRef = useRef(null);
//   const imageRef = useRef(null);
//   const [charsLoaded, setCharsLoaded] = useState(false);

//   useEffect(() => {
//     // Set up intersection observers for reveal elements
//     const observerOptions = { threshold: 0.1 };
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     // Observe all reveal elements
//     const revealElements = document.querySelectorAll(".reveal, .reveal-stagger");
//     revealElements.forEach((el) => observer.observe(el));

//     // Character animation for heading
//     if (headingRef.current && !charsLoaded) {
//       const heading = headingRef.current;
//       const text = heading.innerText;
      
//       // Split text into characters
//       const chars = text.split("").map((char, index) => {
//         const span = document.createElement("span");
//         span.textContent = char === " " ? "\u00A0" : char;
//         span.className = "char";
//         // Add staggered animation delay
//         span.style.animationDelay = `${index * 0.04}s`;
//         return span;
//       });
      
//       heading.innerHTML = "";
//       chars.forEach(char => heading.appendChild(char));
//       setCharsLoaded(true);
//     }

//     return () => observer.disconnect();
//   }, [charsLoaded]);

//   return (
//     <>
//       <style>{`
//         /* ── Character animation ── */
//         .char {
//           display: inline-block;
//           opacity: 0;
//           transform: translateX(150px);
//           animation: charReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//           will-change: transform, opacity;
//         }
        
//         @keyframes charReveal {
//           0% {
//             opacity: 0;
//             transform: translateX(150px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         /* ── Base reveal state for other elements ── */
//         .reveal {
//           opacity: 0;
//           transition:
//             opacity    1.2s cubic-bezier(0.16, 1, 0.3, 1),
//             transform  1.2s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         /* Directional starting positions */
//         .reveal--left  { transform: translateX(-60px); }
//         .reveal--right { transform: translateX(60px);  }

//         /* Visible (settled) state */
//         .reveal.visible {
//           opacity: 1;
//           transform: translate(0, 0);
//         }

//         /* ── Stagger children ── */
//         .reveal-stagger > * {
//           opacity: 0;
//           transform: translateY(36px);
//           transition:
//             opacity   1s cubic-bezier(0.16, 1, 0.3, 1),
//             transform 1s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         /* Each child settles with a longer gap between them */
//         .reveal-stagger.visible > *:nth-child(1) {
//           opacity: 1;
//           transform: none;
//           transition-delay: 0.1s;
//         }
//         .reveal-stagger.visible > *:nth-child(2) {
//           opacity: 1;
//           transform: none;
//           transition-delay: 0.35s;
//         }
//         .reveal-stagger.visible > *:nth-child(3) {
//           opacity: 1;
//           transform: none;
//           transition-delay: 0.6s;
//         }

//         /* Image gets a slight extra delay so heading lands first */
//         .reveal--right { transition-delay: 0.2s; }
//       `}</style>

//       <section
//         id="home"
//         className="relative min-h-screen bg-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex items-center overflow-hidden"
//       >
//         {/* Grid Lines */}
//         <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
//           <div className="w-px bg-white/10" />
//           <div className="hidden md:block w-px bg-white/10" />
//           <div className="hidden lg:block w-px bg-white/10" />
//           <div className="w-px bg-white/10" />
//         </div>

//         <div className="relative z-10 w-full max-w-7xl mx-auto py-24">
//           <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

//             {/* LEFT CONTENT */}
//             <div className="lg:col-span-7 text-center lg:text-left mt-12">

//               {/* Heading with character-by-character animation */}
//               <h1
//                 ref={headingRef}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[3.8rem] font-semibold uppercase tracking-wide leading-tight text-white"
//               >
//                 Driving Growth Through Strategy <br />
//                 and Technology
//               </h1>

//               {/* Sub-content — children stagger in slowly */}
//               <div
//                 ref={contentRef}
//                 className="reveal-stagger mt-8 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start lg:items-start"
//               >
//                 {/* Scroll indicator */}
//                 <a
//                   href="#about"
//                   className="hidden sm:flex h-14 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-orange-500 transition"
//                 >
//                   <ArrowDown className="h-4 w-4 animate-bounce" />
//                 </a>

//                 <div className="space-y-5 max-w-3xl">
//                   <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-md mx-auto">
//                     With 12+ years of experience in IT & Business Services,
//                     Sandip Bhattarai has helped enterprises grow by delivering
//                     functional, secure, and cloud-ready digital solutions. We
//                     solve challenges and optimize complex processes to keep
//                     clients ahead in a changing tech world.
//                   </p>

//                   <a
//                     href="https://sait.com.np/"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-white font-semibold transition"
//                   >
//                     <span>View S.A I.T Solutions Portfolio</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div
//               ref={imageRef}
//               className="reveal reveal--right lg:col-span-5 flex justify-center lg:justify-end mt-18"
//             >
//               <img
//                 src="/images/hero.jpeg"
//                 alt="Hero Section"
//                 className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[550px] h-auto object-contain"
//               />
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Hero;