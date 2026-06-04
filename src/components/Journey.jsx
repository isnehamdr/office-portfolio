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
    body: "With this mission in mind, Sandip established S.A I.T Solution and Trade Concern Pvt. Ltd. in Kathmandu. The early days were far from easy — they started in a humble residential flat. However, their determination and commitment to excellence gradually set them apart in the industry.",
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

function TimelineItem({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0; // even = left, odd = right

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_auto_1fr] gap-x-6 mb-12 last:mb-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* LEFT SIDE */}
      <div className={`flex flex-col ${isLeft ? "items-end text-right" : "items-start"} pt-1`}>
        {isLeft ? (
          <div className="max-w-lg">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-stone-900 bg-stone-100 px-3 py-1 rounded-full mb-2">
              {step.tag}
            </span>
            <h3 className="text-xl text-stone-900 mb-2 leading-snug tracking-[1px]">{step.title}</h3>
            <p className="text-md text-stone-700 leading-relaxed">{step.body}</p>
          </div>
        ) : (
          // empty right side on odd items
          <div />
        )}
      </div>

      {/* CENTER — dot + line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full border-2 border-white mt-1.5 flex-shrink-0 ${
            index >= 4 ? "bg-stone-400 ring-1 ring-stone-400" : "bg-stone-900 ring-1 ring-stone-900"
          }`}
        />
        {/* Connector line (skip for last item) */}
        {index < journeySteps.length - 1 && (
          <div className="w-px flex-1 mt-1" style={{ background: "linear-gradient(to bottom, #1c1917 0%, #e7e5e4 100%)", minHeight: "80px" }} />
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className={`flex flex-col ${!isLeft ? "items-start text-left" : "items-end"} pt-1`}>
        {!isLeft ? (
           <div className="max-w-lg">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-stone-900 bg-stone-100 px-3 py-1 rounded-full mb-2">
              {step.tag}
            </span>
            <h3 className="text-xl text-stone-900 mb-2 leading-snug tracking-[1px]">{step.title}</h3>
            <p className="text-md text-stone-700 leading-relaxed">{step.body}</p>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

// Mobile fallback — single column
function TimelineItemMobile({ step, index }) {
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

  return (
    <div
      ref={ref}
      className="relative pl-8 mb-12 last:mb-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <span
        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-stone-50 ${
          index >= 4 ? "bg-stone-400 ring-1 ring-stone-400" : "bg-stone-900 ring-1 ring-stone-900"
        }`}
      />
      <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-stone-500 bg-stone-100 px-3 py-1 rounded-full mb-2">
        {step.tag}
      </span>
      <h3 className="text-xl text-stone-900 mb-2 leading-snug">{step.title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed max-w-2xl">{step.body}</p>
    </div>
  );
}

export default function Journey() {
  return (
    <div className="min-h-screen bg-[#f7f6f5]">
      <section className="bg-white border-t border-stone-200 py-20 px-6 md:px-24">
        <div className="">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl text-stone-900 leading-none">
              How my journey
              <br />
              <div className=" text-stone-900">started</div>
            </h2>
            <p className="text-lg text-stone-900 leading-relaxed md:text-right md:max-w-lg">
              From hospitality to leading IT solutions across Nepal — a story of
              resilience, vision, and unwavering commitment to technology.
            </p>
          </div>

          {/* Desktop alternating timeline */}
          <div className="hidden md:block">
            {journeySteps.map((step, i) => (
              <TimelineItem key={i} step={step} index={i} />
            ))}
          </div>

          {/* Mobile single-column timeline */}
          <div className="md:hidden relative pl-2" style={{ paddingLeft: "2rem" }}>
            <span
              className="absolute left-[6px] top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom, #1c1917 0%, #e7e5e4 100%)" }}
            />
            {journeySteps.map((step, i) => (
              <TimelineItemMobile key={i} step={step} index={i} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}