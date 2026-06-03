const awards = [
  {
    id: 1,
    year: "2024",
    title: "Best Digital Agency Award",
    description: "Recognized for outstanding creativity and strategic execution.",
    org: "InnoSync",
  },
  {
    id: 2,
    year: "2023",
    title: "Excellence in Branding",
    description: "Awarded for crafting impactful brand identities.",
    org: "Tech Flow",
  },
  {
    id: 3,
    year: "2022",
    title: "Innovation in Digital Marketing",
    description: "Acknowledged for successful, data-driven marketing campaigns.",
    org: "Pixo Edge",
  },
  {
    id: 4,
    year: "2022",
    title: "Top Web Design Agency",
    description: "Crafting bold, user-focused web designs that stand out.",
    org: "Digital Studio",
  },
];

function AwardRow({ award, isLast }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-[80px_1fr_auto] gap-y-3 sm:gap-y-0 gap-x-6 sm:gap-x-10 items-start py-7 sm:py-8 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      {/* Year */}
      <span className="text-white/50 text-sm sm:text-base font-light sm:pt-0.5">
        {award.year}
      </span>

      {/* Title + description */}
      <div className="sm:col-start-2">
        <h3 className="text-white text-base sm:text-lg font-semibold leading-snug mb-1.5">
          {award.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{award.description}</p>
      </div>

      {/* Organisation */}
      <span className="text-white/70 text-sm sm:text-base font-light sm:text-right sm:pt-0.5 whitespace-nowrap">
        {award.org}
      </span>
    </div>
  );
}

export default function AwardRecognition() {
  return (
    <div className="w-full py-16 sm:py-24" style={{ backgroundColor: "#1c1c1c" }}>
      <div className="px-6 sm:px-10 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ── LEFT — label, heading, CTA ── */}
          <div className="lg:w-[340px] xl:w-[380px] flex-shrink-0 flex flex-col gap-8 lg:gap-0 lg:justify-between">
            <div>
              {/* Label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-white/50 text-lg font-semibold tracking-widest uppercase">
                  Our Achievements
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Award Recognition
              </h2>
            </div>

            {/* CTA button */}
            <div className="mt-8 lg:mt-0">
              <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 transition-colors text-gray-900 text-sm font-medium px-6 py-3 rounded-full">
                Work With us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── RIGHT — awards list ── */}
          <div className="flex-1 border-t border-white/10">
            {awards.map((award, index) => (
              <AwardRow
                key={award.id}
                award={award}
                isLast={index === awards.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}