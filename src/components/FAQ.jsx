const faqs = [
  {
    id: "01",
    question: "What services does S.A I.T Solution offer?",
    answer:
      "S.A I.T Solution specializes in branding, web design, digital marketing, app development, and creative solutions tailored to your business needs.",
  },
  {
    id: "02",
    question: "What makes S.A I.T Solution different from other agencies?",
    answer:
      "Our team blends creativity with strategy, offering tailored solutions, data-driven insights, and a client-first approach.",
  },
  {
    id: "03",
    question: "Do you work with international clients?",
    answer:
      "Yes, we collaborate with clients worldwide, delivering top-quality digital solutions regardless of location.",
  },
  {
    id: "04",
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer maintenance, updates, and continuous support to ensure your digital assets perform optimally.",
  },
  {
    id: "05",
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the type of service and project scope. Contact us for a detailed quote based on your requirements.",
  },
  {
    id: "06",
    question: "How can I contact S.A I.T Solution for more information?",
    answer:
      "You can reach us via email, phone, or our contact form on the website. Our team will be happy to assist you!",
  },
];

function FaqRow({ faq, isLast }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-2 py-6 sm:py-8 items-start ${
        !isLast ? "border-b border-gray-200" : ""
      }`}
    >
      {/* Number */}
      <span className="text-gray-400 text-sm font-light hidden sm:block pt-0.5">
        {faq.id}
      </span>

      {/* Question */}
      <p className="text-gray-900 text-sm sm:text-base font-medium leading-snug flex items-start gap-3 sm:gap-0">
        {/* Show number inline on mobile */}
        <span className="text-gray-400 text-xl font-light sm:hidden mr-3 flex-shrink-0">{faq.id}</span>
        {faq.question}
      </p>

      {/* Answer */}
      <p className="text-gray-500 text-lg leading-relaxed sm:pl-0 pl-7">
        {faq.answer}
      </p>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="w-full bg-white">
      <div className="px-6 sm:px-10 lg:px-24 py-16 sm:py-20">
        {/* ── Label ── */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-500">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1.5 4.5L3 6L6.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase">
            FAQ's
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-10 sm:mb-12">
          Frequently Asked Questions
        </h2>

        {/* ── FAQ rows ── */}
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <FaqRow
              key={faq.id}
              faq={faq}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-b border-gray-200" />
      </div>
    </div>
  );
}