import { useState, useEffect, useRef } from "react";

const journeySteps = [
  {
    tag: "The Beginning",
    title: "Hospitality to IT",
    body: "Sandip's journey began in the hospitality sector, where he faced numerous challenges that tested his resilience and determination. Working in that industry taught him valuable lessons about customer service, managing a business, and the importance of adaptability.",
  },
  {
    tag: "The Spark",
    title: "Spotting a Gap",
    body: "During his time working at a leading Indian software company in Pokhara, he noticed a significant gap in technological advancement and expertise within the local IT sector. This observation fueled his ambition to create a company that could raise the standards of IT services in Nepal.",
  },
  {
    tag: "The Founding",
    title: "Starting from Scratch",
    body: "With this mission in mind, Sandip, along with his friend Ajit Singdan, established S.A I.T Solution and Trade Concern Pvt. Ltd. in Kathmandu. The early days were far from easy — they started in a humble residential flat. However, their determination and commitment to excellence gradually set them apart in the industry.",
  },
  {
    tag: "Growth — 2019",
    title: "Expanding to Pokhara",
    body: "Recognizing the increasing demand for quality IT services, they expanded their operations, opening a second branch in Pokhara on June 27th, 2019. Today, with successful operations in both Kathmandu and Pokhara, they remain dedicated to delivering top-notch IT solutions tailored to their clients' needs.",
  },
  {
    tag: "Today",
    title: "Where He Stands Today",
    body: "With 12+ years of experience in IT and business services, Sandip has helped businesses grow by providing practical and effective solutions across digital transformation, IT infrastructure, cybersecurity, and software development.",
  },
  {
    tag: "Expertise",
    title: "Core Competencies",
    body: "His core competencies span digital transformation, IT consulting, cybersecurity, custom software development, project management, and problem solving — delivering innovative, actionable solutions to complex challenges.",
  },
  {
    tag: "Looking Ahead",
    title: "The Road Forward",
    body: "Sandip is focused on expanding his expertise in emerging technologies like AI, blockchain, and IoT; scaling his business to reach global clients; mentoring the next generation of IT professionals; and driving innovation in IT infrastructure.",
  },
];

// ── Placeholder image components ──────────────────────────────────────────────
function ImgMainPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <img src="/images/about1.png" alt="" />
    </div>
  );
}

function ImgSecondaryPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <img src="/images/about2.png" alt="" />
    </div>
  );
}

// ── Timeline Item with intersection-observer fade-in ──────────────────────────
function TimelineItem({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isLate = index >= 4;

  return (
    <div
      ref={ref}
      className="relative pl-8 mb-12 last:mb-0 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Dot */}
      <span
        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-stone-50 ${
          isLate ? "bg-stone-400 ring-1 ring-stone-400" : "bg-stone-900 ring-1 ring-stone-900"
        }`}
        style={{ zIndex: 1 }}
      />

      {/* Tag */}
      <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-stone-500 bg-stone-100 px-3 py-1 rounded-full mb-2">
        {step.tag}
      </span>

      {/* Heading */}
      <h3 className=" text-xl text-stone-900 mb-2 leading-snug">{step.title}</h3>

      {/* Body */}
      <p className="text-sm text-stone-900 leading-relaxed max-w-2xl">{step.body}</p>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function SandipJourney() {
  return (
    <div className="min-h-screen bg-white ">

      {/* ── INTRO SECTION ── */}
      <section className=" px-6 md:px-24 pt-16 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span className="block w-7 h-px bg-stone-800" />
          <span className="text-lg font-semibold tracking-[0.18em] uppercase text-stone-800">
            Who We Are
          </span>
        </div>

        <h2 className=" text-3xl md:text-4xl text-stone-900 leading-[62px] max-w-2xl mb-4">
          We are a dynamic agency dedicated to crafting innovative digital solutions
        </h2>
       
      </section>

      {/* ── SPLIT LAYOUT ── */}
      <section className="px-6 md:px-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Left column */}
          <div className="flex flex-col gap-5">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-80 bg-stone-200">
              <ImgMainPlaceholder />
              {/* Badge */}
              {/* <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                <div className="flex">
                  {["bg-stone-400", "bg-stone-300", "bg-stone-200"].map((c, i) => (
                    <span
                      key={i}
                      className={`w-6 h-6 rounded-full border-2 border-white ${c} ${i !== 0 ? "-ml-2" : ""}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-stone-700 whitespace-nowrap">
                  Trusted by hundreds
                </span>
              </div> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "12+", label: "Years of experience" },
                { num: "2", label: "Offices in Nepal" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-5 border border-stone-200"
                >
                  <div className=" text-4xl text-stone-900 leading-none mb-1">
                    {s.num}
                  </div>
                  <div className="text-xs text-stone-400 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            {/* Secondary image */}
            <div className="rounded-2xl overflow-hidden h-52 md:h-56 bg-stone-300">
              <ImgSecondaryPlaceholder />
            </div>

            {/* Text card */}
            <div className="bg-white rounded-2xl p-7 border border-stone-200 flex flex-col flex-1 justify-between">
              <p className="text-[14.5px] text-stone-500 leading-relaxed mb-6">
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