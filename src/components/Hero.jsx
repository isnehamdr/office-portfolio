// import React from 'react';
// import { Zap, ArrowDown, ArrowRight, User, FolderGit2, Sparkles, BookOpen, MessageSquare } from 'lucide-react';

// export default function Hero() {
//   const sandipPortrait = '/src/assets/images/sandip_portrait_1780393538681.png';

 

//   return (
//     <section className="relative min-h-[calc(100vh-90px)] px-6 pb-24 pt-12 md:px-12 lg:px-20 flex items-center bg-black" id="home">
      
//       {/* GRID LINE OVERLAYS (Matches reference's structural grid-lines in background) */}
//       <div className="pointer-events-none absolute inset-0 z-0 flex justify-between px-6 md:px-12 lg:px-20" id="grid-lines-vertical">
//         <div className="h-full w-[1px] bg-white/20" />
//         <div className="hidden h-full w-[1px] bg-white/20 md:block" />
//         <div className="hidden h-full w-[1px] bg-white/20 lg:block" />
//         <div className="h-full w-[1px] bg-white/20" />
//       </div>

//       <div className="px-12 relative z-10 w-full" id="hero-container">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* LEFT PANEL: Headline & Text block */}
//           <div className="lg:col-span-7 flex flex-col space-y-10 md:space-y-16 lg:space-y-20" >
            
//             {/* GIANT HEADLINE */}
//             <div className="space-y-2">
             
//               <h1 className=" text-5xl  md:text-6xl lg:text-7xl xl:text-[4.2rem] font-black tracking-[3px] leading-none text-white uppercase">
//                 Driving Growth Through Strategy and Technology 
//               </h1>
//             </div>

//             {/* DESCRIPTION & DEEP LINK block */}
//             <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 max-w-2xl bg-zinc-950/20 backdrop-blur-sm p-5 sm:p-0 rounded-2xl" id="hero-description-block">
//               {/* Scrolling Capsule Arrow Indicator */}
//               <a 
//                 href="#about"
//                 className="hidden sm:flex h-16 w-10 flex-col items-center justify-center rounded-full border border-zinc-850 bg-zinc-900/80 p-2 text-zinc-500 hover:border-brand-orange hover:text-brand-orange transition-colors duration-300 group"
//                 id="down-scroll-indicator"
//               >
//                 <ArrowDown className="h-4 w-4 animate-bounce text-zinc-400 group-hover:text-brand-orange" />
//               </a>

//               <div className="flex-1 space-y-6" id="hero-desc-content">
//                 <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-200 font-normal" id="hero-main-text">
//                   With 12+ years of experience in IT & Business Services, Sandip Bhattarai has helped enterprises grow by delivering functional, secure, and cloud-ready digital solutions. We solve challenges and optimize complex processes to keep clients ahead in a changing tech world.
//                 </p>
//                 <div className="flex flex-wrap gap-4 items-center">
//                   <a 
//                     href="https://sait.com.np/" 
//                     target="_blank"
//                     className="group inline-flex items-center space-x-3 border-b-2 border-brand-orange pb-1 text-sm font-bold text-white tracking-wide transition-all duration-300 hover:border-white hover:text-brand-orange"
//                     id="see-works-link"
//                   >
//                     <span>View S.A I.T Solutions Portfolio</span>
//                     <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT PANEL: Team Avatars & 3D laptop mockup */}
//           <div className="lg:col-span-5 flex flex-col space-y-10 lg:space-y-12 lg:pt-6" id="hero-right-column">
            
           
// <img src="/images/logo.png" alt="Hero Section image" />
          

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


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

      <div className="relative z-10 w-full max-w-7xl mx-auto mt-24 ">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-center lg:text-left mt-12 sm:mt-0 ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-black uppercase tracking-wide leading-tight text-white">
              Driving Growth Through Strategy and Technology
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start lg:items-start">
              {/* Scroll Indicator */}
              <a
                href="#about"
                className="hidden sm:flex h-14 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-orange-500 transition"
              >
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </a>

              <div className="space-y-5 max-w-2xl">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
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
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src="/images/logo.png"
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