const testimonials = [
  {
    id: 1,
    quote:
      "Working with Zinle has been an absolute pleasure. Their attention to detail, creativity, and strategic thinking has helped us connect with our target audience in ways we never imagined.",
    name: "Marvin McKinney",
    location: "Georgia, US",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: 2,
    quote:
      "We saw immediate improvements in our search engine rankings after Zinle's SEO services. Our organic traffic grew by 50%, and our lead generation has improved dramatically.",
    name: "Darlene Robertson",
    location: "Dallas, US",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6">
      {/* Quote */}
      <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed">
        "{testimonial.quote}"
      </p>

      {/* Author row */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-gray-900 text-sm font-semibold">{testimonial.name}</p>
          <p className="text-gray-400 text-xs mt-0.5">{testimonial.location}</p>
        </div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function ClientsReview() {
  return (
    <>
      <div className="w-full bg-[#f7f6f5] py-16 sm:py-24">
        <div className="w-full px-6 sm:px-10 lg:px-24">
          
          {/* FIX: Added items-start to ensure both panels align to the top edge */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── LEFT PANEL ── */}
            {/* FIX: Removed justify-center so it naturally aligns to the top */}
            <div className="flex flex-col">
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-semibold tracking-widest uppercase text-gray-500">
                  Testimonials
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Clients Review
              </h2>

              {/* Sub-text */}
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                We pride ourselves on building long-lasting relationships with
                businesses, delivering exceptional results across various industries.
              </p>

              {/* CTA Button */}
              <div>
                <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 transition-colors text-white text-sm font-medium px-6 py-3 rounded-full">
                  Work With us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── RIGHT PANEL — testimonial cards ── */}
            <div className="flex flex-col gap-6">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}