import { useState, useEffect, useRef } from "react";

// ── Reveal hook (fires once) ──────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Style builder ─────────────────────────────────────────────────────────────
function revealStyle(
  visible,
  { direction = "up", distance = 36, delay = 0, duration = 1.05 } = {}
) {
  const hidden = {
    up:    `translateY(${distance}px)`,
    left:  `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  };
  return {
    opacity:         visible ? 1 : 0,
    transform:       visible ? "translate(0,0)" : hidden[direction],
    transition:      `opacity ${duration}s cubic-bezier(0.16,1,0.3,1), transform ${duration}s cubic-bezier(0.16,1,0.3,1)`,
    transitionDelay: `${delay}s`,
  };
}

// ── Data ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    id: "01",
    question: "What services does S.A I.T Solution offer?",
    answer:
      "S.A I.T Solution specializes in branding, web design, digital marketing,  and creative solutions tailored to your business needs.",
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

// ── FAQ row — each observes itself ────────────────────────────────────────────
function FaqRow({ faq, index, isLast }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={revealStyle(visible, {
        direction: "up",
        distance: 32,
        delay: index * 0.09,
        duration: 1.0,
      })}
      className={`grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-6 py-7 sm:py-8 ${
        !isLast ? "border-b border-gray-200" : ""
      }`}
    >
      {/* Number */}
      <div className="text-gray-400 text-sm sm:text-base lg:text-lg font-normal">
        {faq.id}
      </div>

      {/* Question */}
      <div>
        <h3 className="text-gray-900 text-sm sm:text-base lg:text-lg font-normal leading-snug">
          {faq.question}
        </h3>
      </div>

      {/* Answer */}
      <div>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function FAQ() {
  const [labelRef,   labelVisible]   = useReveal(0.2);
  const [headingRef, headingVisible] = useReveal(0.2);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-24">

        {/* Label */}
        <div
          ref={labelRef}
          className="flex items-center gap-2 mb-4"
          style={revealStyle(labelVisible, {
            direction: "up",
            distance: 16,
            duration: 0.85,
          })}
        >
          <span className="block w-4 h-px bg-gray-400" />
          <span className="text-gray-500 text-xs sm:text-sm font-normal tracking-widest uppercase">
            FAQ's
          </span>
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-10 sm:mb-12"
          style={revealStyle(headingVisible, {
            direction: "up",
            distance: 28,
            delay: 0.1,
            duration: 1.05,
          })}
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ list */}
        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <FaqRow
              key={faq.id}
              faq={faq}
              index={index}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>

        <div className="border-b border-gray-200" />

      </div>
    </section>
  );
}