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
  "Direct bookings with real-time availability & pricing.",
  "Seamless channel manager & OTA integration.",
  "Boost revenue with zero commission on direct bookings.",
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

// ── Phone icon ────────────────────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

// ── Partner badge ─────────────────────────────────────────────────────────────
function PartnerBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z" fill="#333" />
      </svg>
      Official Exely Partner — Nepal
    </span>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Newsletter() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [leftRef,  leftVisible]  = useReveal(0.1);
  const [rightRef, rightVisible] = useReveal(0.1);

  function handleSubmit() {
    if (phone.trim()) {
      setSubmitted(true);
    }
  }

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
                  {/* Badge + Heading */}
                  <div>
                    <PartnerBadge />
                    <h2 className="text-gray-900 text-xl sm:text-2xl font-normal leading-snug mb-24">
                      Power your hotel with Exely — Nepal's leading direct booking engine solution!
                    </h2>
                  </div>

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

                    <a
                      href="https://sait.com.np/services/exely/booking-engine-nepal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 transition-colors text-white text-sm font-medium px-6 py-3 rounded-full w-fit"
                    >
                      Book a Free Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full sm:w-[45%] flex-shrink-0 overflow-hidden h-56 sm:h-auto bg-[#e8e5e0] rounded-xl">
                  <img
                    src="/images/service3.png"
                    alt="Exely Booking Engine dashboard"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // fallback gradient if image not found
                      e.target.style.display = "none";
                      e.target.parentElement.style.background =
                        "linear-gradient(135deg, #e8e5e0 0%, #d4cfc9 100%)";
                      e.target.parentElement.innerHTML = `
                        <div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:8px;color:#888;">
                          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9"/></svg>
                          <span style="font-size:13px;font-weight:500;">Exely Booking Engine</span>
                        </div>
                      `;
                    }}
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
                  Get a free consultation today!
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  As an official Exely partner in Nepal, we help hotels, resorts,
                  and accommodations get set up fast. Drop your number — we'll call you!
                </p>
              </div>
              <img src="/images/exely.png" alt="Exely Booking Engine dashboard" className="w-full h-full object-contain" />

              {/* Phone input */}
              {submitted ? (
                <div className="mt-10 flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">We'll be in touch shortly!</span>
                </div>
              ) : (
                <div className="mt-10 flex items-center gap-2">
                  <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-gray-300 transition min-w-0">
                    <PhoneIcon />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder="Your phone number..."
                      className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none min-w-0"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl flex-shrink-0 text-gray-700"
                    aria-label="Submit phone number"
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
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}