export default function BlogPage() {
  return (
    <div className="min-h-screen w-full flex items-center mt-16" style={{ backgroundColor: "#f7f6f5" }}>
      <div className=" px-6 sm:px-10 lg:px-24 py-14 sm:py-20">

        {/* ── Section heading ── */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 sm:mb-16">
          Latest Articles
        </h1>

        {/* ── Article row ── */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-0">

          {/* LEFT — date + title + excerpt + CTA */}
          <div className="flex flex-col lg:flex-row flex-1 gap-8 lg:gap-0 lg:pr-12">

            {/* Date column */}
            <div className="lg:w-48 xl:w-36 flex-shrink-0">
              <span className="text-gray-400 text-sm">Jun 18, 2025</span>
            </div>

            {/* Text column */}
            <div className="flex flex-col justify-between flex-1">
              {/* Title */}
              <div>
                <h2 className="text-gray-900 text-2xl sm:text-3xl font-semibold leading-snug mb-4">
                  Strategies to grow brand and build lasting engagement
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm">
                  This effective social media marketing strategies for 2025 that will help you build loyal following, &amp; drive conversions.
                </p>
              </div>

              {/* Read Article link — pushed down */}
              <div className="mt-12 sm:mt-16">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Read Article <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — large image */}
          <div className="w-full lg:w-[55%] xl:w-[58%] flex-shrink-0 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="Team working together at a white desk in a modern studio"
              className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}