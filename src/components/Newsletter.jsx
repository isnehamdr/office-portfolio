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
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
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
  { direction = "up", distance = 40, delay = 0, duration = 1.1 } = {}
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
const checkItems = [
  "Improvements for long-term success.",
  "Leverage the latest trends and technology.",
  "Work with team that understands your vision.",
];

// ── Check icon ────────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="9" cy="9" r="8" stroke="#333" strokeWidth="1.3" fill="none" />
      <path
        d="M5.5 9L7.8 11.5L12.5 6.5"
        stroke="#333"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Newsletter() {
  const [email, setEmail] = useState("");

  const [leftRef,  leftVisible]  = useReveal(0.1);
  const [rightRef, rightVisible] = useReveal(0.1);

  return (
    <div className="w-full py-12 sm:py-24" style={{ backgroundColor: "#f7f6f5" }}>
      <div className="px-5 sm:px-8 lg:px-24 py-8">
        <div className="flex flex-col lg:flex-row gap-5">

          {/* ══ LEFT CARD ════════════════════════════════════════════════════ */}
          <div
            ref={leftRef}
            className="flex-1"
            style={revealStyle(leftVisible, {
              direction: "left",
              distance: 55,
              duration: 1.25,
            })}
          >
            <div className="bg-white rounded-2xl overflow-hidden h-full">
              <div className="flex flex-col sm:flex-row p-7 sm:p-8 lg:p-10 gap-8 sm:gap-12 h-full">

                {/* Text content */}
                <div className="flex flex-col justify-between flex-1 gap-12">
                  {/* Heading */}
                  <h2 className="text-gray-900 text-xl sm:text-2xl font-normal leading-snug mb-24">
                    Let's build something innovative solutions to elevate your brand!
                  </h2>

                  {/* Checklist + button */}
                  <div className="flex flex-col gap-8">
                    <ul className="flex flex-col gap-3.5">
                      {checkItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckIcon />
                          <span className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 transition-colors text-white text-sm font-medium px-6 py-3 rounded-full w-fit">
                      Let's Collaborate
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Phone image */}
                <div className="w-full sm:w-[45%] flex-shrink-0 overflow-hidden h-56 sm:h-auto bg-[#e8e5e0] rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80"
                    alt="App shown on a phone held in hand"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* ══ RIGHT CARD ═══════════════════════════════════════════════════ */}
          <div
            ref={rightRef}
            className="lg:w-[320px] xl:w-[360px] flex-shrink-0"
            style={revealStyle(rightVisible, {
              direction: "right",
              distance: 55,
              delay: 0.15,
              duration: 1.25,
            })}
          >
            <div className="bg-white rounded-2xl p-7 sm:p-8 lg:p-10 flex flex-col justify-between h-full min-h-[300px] sm:min-h-0">

              {/* Top text */}
              <div>
                <h2 className="text-gray-900 text-xl sm:text-2xl font-bold leading-snug mb-4">
                  Sign up for insider updates!
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Get the latest industry news, expert tips, and special offers
                  right in your inbox. Stay informed of the curve!
                </p>
              </div>

              {/* Email input */}
              <div className="mt-10 flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-300 transition min-w-0"
                />
                <button
                  className="w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex-shrink-0 text-gray-700"
                  aria-label="Subscribe"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}