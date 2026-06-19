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

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-stretch min-h-screen pt-12 pb-0 lg:py-0">
            {/* CONTENT FIRST ON MOBILE */}
            <div className="order-1 lg:order-2 lg:col-span-7 text-center lg:text-left flex flex-col justify-center flex-1 lg:flex-none">
              <h1
                ref={headingRef}
                className="reveal reveal--left text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[3.8rem] font-semibold uppercase tracking-normal sm:tracking-wide leading-snug sm:leading-tight text-white mt-8 sm:mt-0"
              >
                Driving Growth Through Strategy
                <br className="hidden sm:block" />
                {" "}and Technology
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

                <div className="sm:space-y-5 space-y-3 max-w-3xl">
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

            <div
              ref={imageRef}
              className="reveal reveal--right order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-end self-center lg:self-end mt-auto lg:mt-0"
            >
              <img
                src="/images/hero2.png"
                alt="Sandip Bhattarai"
                className="
                  block
                  w-full
                  max-w-[320px]
                  sm:max-w-[420px]
                  md:max-w-[500px]
                  lg:max-w-[560px]
                  xl:max-w-[620px]
                  object-contain
                  object-bottom
                  h-auto
                "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}