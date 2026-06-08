import React, { useState, useEffect, useRef } from "react";
import Journey from "../components/Journey";
// import AwardRecognition from "../components/AwardRecognition";
import Blogs from "../components/Blogs";
import FAQ from "../components/Faq";
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero";
import { HeartOff } from "lucide-react";
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
const commitments = [
  "Scalable Solutions",
  "Dedicated Customer Support",
  "Data-Driven Strategies",
  "Delivering result-driven strategies",
];

// ── Page component ────────────────────────────────────────────────────────────
export default function AboutPage() {
  // Individual observers per element
  const [titleRef,      titleVisible]      = useReveal(0.2);
  const [tagline1Ref,   tagline1Visible]   = useReveal(0.15);
  const [tagline2Ref,   tagline2Visible]   = useReveal(0.15);
  const [leftColRef,    leftColVisible]    = useReveal(0.12);
  const [centerImgRef,  centerImgVisible]  = useReveal(0.12);
  const [rightColRef,   rightColVisible]   = useReveal(0.12);

  return (
    <>
    <div className="overflow-x-hidden">
      <div
        className="w-full py-14 sm:py-20 "
        style={{ backgroundColor: "#f7f6f5" }}
      >
        <div className="px-5 sm:px-10 lg:px-24">

          {/* ── Page title ── */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl font-normal text-gray-900 mb-6 pt-12"
            style={revealStyle(titleVisible, {
              direction: "up",
              distance: 32,
              duration: 1.0,
            })}
          >
            About us
          </h1>

          {/* ── Hero tagline ── */}
          <div className="mb-10 sm:mb-12 max-w-4xl">

            {/* Line 1 */}
            <p
              ref={tagline1Ref}
              className="text-2xl sm:text-3xl font-normal text-gray-900 leading-snug mb-3"
              style={revealStyle(tagline1Visible, {
                direction: "up",
                distance: 28,
                delay: 0.1,
                duration: 1.05,
              })}
            >
              Empowering businesses with creative strategies, innovation
            </p>

            {/* Line 2 — inline image chip + text */}
            <div
              ref={tagline2Ref}
              className="flex items-center gap-3 sm:gap-4 flex-wrap"
              style={revealStyle(tagline2Visible, {
                direction: "up",
                distance: 28,
                delay: 0.2,
                duration: 1.05,
              })}
            >
              <div className="w-24 sm:w-32 lg:w-40 h-11 sm:h-13 lg:h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                <img
                  src="/images/about1.png"
                  alt="Person working on laptop"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-2xl sm:text-3xl font-normal text-gray-900 leading-snug">
                and cutting-edge design
              </p>
            </div>
          </div>

          {/* ── Three-column content row ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

            {/* LEFT — commitment list, slides from left */}
            <div
              ref={leftColRef}
              className="flex flex-col justify-start order-2 sm:order-1"
              style={revealStyle(leftColVisible, {
                direction: "left",
                distance: 44,
                delay: 0.05,
                duration: 1.15,
              })}
            >
              <p className="text-gray-800 text-base sm:text-lg font-normal mb-5">
                We are committed to:
              </p>
              <ul className="flex flex-col gap-3.5">
                {commitments.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5"
                    style={{
                      opacity:         leftColVisible ? 1 : 0,
                      transform:       leftColVisible ? "translateX(0)" : "translateX(-20px)",
                      transition:      "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
                      transitionDelay: `${0.15 + i * 0.1}s`,
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
                    <span className="text-gray-600 text-sm sm:text-base lg:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTRE — large photo, fades up */}
            <div
              ref={centerImgRef}
              className="w-full rounded-2xl overflow-hidden shadow-sm order-1 sm:order-2"
              style={revealStyle(centerImgVisible, {
                direction: "up",
                distance: 44,
                delay: 0.15,
                duration: 1.2,
              })}
            >
              <img
                src="/images/about2.png"
                alt="Team working together in a modern office"
                className="w-full h-56 sm:h-64 lg:h-72 object-cover"
              />
            </div>

            {/* RIGHT — blurb + CTA, slides from right */}
            <div
              ref={rightColRef}
              className="flex flex-col justify-between h-full gap-8 order-3"
              style={revealStyle(rightColVisible, {
                direction: "right",
                distance: 44,
                delay: 0.1,
                duration: 1.15,
              })}
            >
              <div>
                <p className="text-gray-900 text-base sm:text-lg font-normal leading-snug mb-3">
                  Creating meaningful digital experiences
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  We are your creative partners in crafting impactful digital experiences.
                </p>
              </div>

              <div>
                <Link to="https://sait.com.np/portfolio" className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full">
                  See Our Work
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

          </div>
        </div>
      </div>

      <Journey />
      {/* <AwardRecognition /> */}
      <Blogs />
      <FAQ />
      <Newsletter />
      </div>
    </>
  );
}