

import React from "react";
import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex items-center overflow-hidden"
    >
      {/* Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="w-px bg-white/10" />
        <div className="hidden md:block w-px bg-white/10" />
        <div className="hidden lg:block w-px bg-white/10" />
        <div className="w-px bg-white/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto py-24 ">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-center lg:text-left mt-12  ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[3.5rem]  font-semibold uppercase tracking-wide leading-tight text-white">
              Driving Growth Through Strategy <br/>
               and Technology
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start lg:items-start">
              {/* Scroll Indicator */}
              <a
                href="#about"
                className="hidden sm:flex h-14 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-orange-500 transition"
              >
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </a>

              <div className="space-y-5 max-w-3xl">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-md mx-auto">
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
                  className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-white font-semibold  transition"
                >
                  <span>View S.A I.T Solutions Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-18">
            <img
              src="/images/hero.jpeg"
              alt="Hero Section"
              className="
                w-full
                max-w-[260px]
                sm:max-w-[320px]
                md:max-w-[400px]
                lg:max-w-[500px]
                xl:max-w-[550px]
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}