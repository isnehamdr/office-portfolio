const stats = [
  {
    id: 1,
    value: "85%",
    description: "Built on trust, with a strong client retention rate.",
    bg: "bg-orange-500",
    textColor: "text-white",
  },
  {
    id: 2,
    value: "30+",
    description: "Recognized for excellence with award-winning projects.",
    bg: "bg-[#1e1e1e]",
    textColor: "text-white",
  },
];

function StatCard({ stat }) {
  return (
    <div
      className={`${stat.bg} rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[220px] sm:min-h-[320px] flex-1`}
    >
      {/* Big number */}
      <p className={`${stat.textColor} text-5xl sm:text-6xl font-bold tracking-tight`}>
        {stat.value}
      </p>

      {/* Description at bottom */}
      <p className={`${stat.textColor} text-sm sm:text-base leading-relaxed opacity-90 mt-8`}>
        {stat.description}
      </p>
    </div>
  );
}

export default function FactsFigures() {
  return (
    <div className="py-18 bg-white flex items-center">
      <div className="w-full px-6 sm:px-10 lg:px-24 ">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* ── LEFT — label + text ── */}
          <div className="lg:w-[38%] flex-shrink-0 flex flex-col justify-center">
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              {/* Orange circle-check icon */}
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 flex-shrink-0">
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5L3.8 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                Facts &amp; Figures
              </span>
            </div>

            {/* Body text */}
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              We've helped hundreds of clients achieve their goals, constantly
              improving &amp; adapting our services to meet the ever-evolving
              digital landscape.
            </p>
          </div>

          {/* ── RIGHT — stat cards ── */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}