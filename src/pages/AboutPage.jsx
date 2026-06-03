import React from "react";
import Journey from "../components/Journey";
import AwardRecognition from "../components/AwardRecognition";
import Blogs from "../components/Blogs";
import FAQ from "../components/Faq";
import Newsletter from "../components/Newsletter";

const commitments = [
  "Scalable Solutions",
  "Dedicated Customer Support",
  "Data-Driven Strategies",
  "Delivering result-driven strategies",
];

export default function AboutPage() {
  return (
    <>
    <div className="w-full py-16 sm:py-24 mt-12 sm:mt-16" style={{ backgroundColor: "#f7f6f5" }}>
      <div className="px-6 sm:px-10 lg:px-24">

        {/* ── Page title ── */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 sm:mb-6">
          About us
        </h1>

        {/* ── Hero tagline with inline image chip ── */}
        <div className="mb-12 sm:mb-16 max-w-4xl">
          {/* Line 1 */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug mb-2">
            Empowering businesses with creative strategies, innovation
          </p>

          {/* Line 2 — inline image + text */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {/* Small rounded image chip */}
            <div className="w-28 sm:w-36 lg:w-40 h-12 sm:h-14 lg:h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80"
                alt="Person working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
              and cutting-edge design
            </p>
          </div>
        </div>

        {/* ── Three-column content row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">

          {/* LEFT — commitment list */}
          <div className="flex flex-col justify-start order-2 sm:order-1">
            <p className="text-gray-700 text-3xl font-medium mb-5">We are committed to:</p>
            <ul className="flex flex-col gap-3.5">
              {commitments.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
                  <span className="text-gray-600 text-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTRE — large photo */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm order-1 sm:order-2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="Team working together in a modern office"
              className="w-full h-60 sm:h-72 lg:h-80 object-cover"
            />
          </div>

          {/* RIGHT — blurb + CTA */}
          <div className="flex flex-col justify-between h-full gap-8 order-3">
            <div>
              <p className="text-gray-900 text-base sm:text-3xl font-semibold leading-snug mb-3">
                Creating meaningful digital experiences
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                We are your creative partners in crafting impactful digital experiences.
              </p>
            </div>

            <div>
              <button className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium px-6 py-3 rounded-full">
                See Our Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <Journey/>
<AwardRecognition/>
<Blogs/>
<FAQ/>
<Newsletter/>
    </>
  );
}