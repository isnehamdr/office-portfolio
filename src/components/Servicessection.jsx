// SVG Icons — white line-art style matching the original
function IconGraphicDesign() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central cube */}
      <polygon points="40,12 58,22 58,44 40,54 22,44 22,22" stroke="white" strokeWidth="1.2" fill="none"/>
      <line x1="40" y1="12" x2="40" y2="54" stroke="white" strokeWidth="1.2"/>
      <line x1="22" y1="22" x2="58" y2="44" stroke="white" strokeWidth="1.2"/>
      <line x1="58" y1="22" x2="22" y2="44" stroke="white" strokeWidth="1.2"/>
      {/* Nodes / circles at vertices */}
      <circle cx="40" cy="12" r="2.5" stroke="white" strokeWidth="1.2" fill="none"/>
      <circle cx="58" cy="22" r="2.5" stroke="white" strokeWidth="1.2" fill="none"/>
      <circle cx="58" cy="44" r="2.5" stroke="white" strokeWidth="1.2" fill="none"/>
      <circle cx="40" cy="54" r="2.5" stroke="white" strokeWidth="1.2" fill="none"/>
      <circle cx="22" cy="44" r="2.5" stroke="white" strokeWidth="1.2" fill="none"/>
      <circle cx="22" cy="22" r="2.5" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Outer connecting lines */}
      <line x1="40" y1="9.5" x2="40" y2="4" stroke="white" strokeWidth="1.2"/>
      <line x1="40" y1="4" x2="36" y2="8" stroke="white" strokeWidth="1.2"/>
      <line x1="40" y1="4" x2="44" y2="8" stroke="white" strokeWidth="1.2"/>
      <line x1="40" y1="56.5" x2="40" y2="62" stroke="white" strokeWidth="1.2"/>
      <line x1="60.5" y1="22" x2="66" y2="19" stroke="white" strokeWidth="1.2"/>
      <circle cx="66" cy="19" r="2" stroke="white" strokeWidth="1.2" fill="none"/>
      <line x1="19.5" y1="44" x2="14" y2="47" stroke="white" strokeWidth="1.2"/>
      <circle cx="14" cy="47" r="2" stroke="white" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

function IconWebDev() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stacked layers / code brackets look */}
      {/* Bottom layer */}
      <path d="M15,58 L40,66 L65,58 L40,50 Z" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Middle layer */}
      <path d="M15,47 L40,55 L65,47 L40,39 Z" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Top layer */}
      <path d="M15,36 L40,44 L65,36 L40,28 Z" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Code brackets inside top layer */}
      <text x="34" y="40" fontSize="10" fill="white" fontFamily="monospace" opacity="0.9">{"</>"}</text>
      {/* Vertical connectors on sides */}
      <line x1="15" y1="36" x2="15" y2="58" stroke="white" strokeWidth="1.2"/>
      <line x1="65" y1="36" x2="65" y2="58" stroke="white" strokeWidth="1.2"/>
    </svg>
  );
}

function IconUiUx() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pyramid */}
      {/* Base */}
      <path d="M20,62 L60,62 L60,55 L20,55 Z" stroke="white" strokeWidth="1.2" fill="none"/>
      {/* Left face */}
      <line x1="20" y1="62" x2="40" y2="18" stroke="white" strokeWidth="1.2"/>
      {/* Right face */}
      <line x1="60" y1="62" x2="40" y2="18" stroke="white" strokeWidth="1.2"/>
      {/* Front left base */}
      <line x1="20" y1="55" x2="40" y2="18" stroke="white" strokeWidth="1.2"/>
      {/* Front right base */}
      <line x1="60" y1="55" x2="40" y2="18" stroke="white" strokeWidth="1.2"/>
      {/* Base front edge */}
      <line x1="20" y1="55" x2="60" y2="55" stroke="white" strokeWidth="1.2"/>
      {/* Base bottom */}
      <line x1="20" y1="62" x2="60" y2="62" stroke="white" strokeWidth="1.2"/>
      <line x1="20" y1="55" x2="20" y2="62" stroke="white" strokeWidth="1.2"/>
      <line x1="60" y1="55" x2="60" y2="62" stroke="white" strokeWidth="1.2"/>
      {/* Dashed inner line from apex to base center */}
      <line x1="40" y1="18" x2="40" y2="62" stroke="white" strokeWidth="1" strokeDasharray="3,3"/>
    </svg>
  );
}

const services = [
  {
    id: 1,
    icon: <IconGraphicDesign />,
    title: "Graphic Design",
    items: [
      "Logo & Brand Identity Design",
      "Marketing & Advertising Graphics",
      "Social Media Graphics",
      "Print & Packaging Design",
    ],
  },
  {
    id: 2,
    icon: <IconWebDev />,
    title: "Web Development",
    items: [
      "Custom Website Development",
      "CMS Integration",
      "SEO-Optimized Code Structure",
      "Fast Loading Performance",
    ],
  },
  {
    id: 3,
    icon: <IconUiUx />,
    title: "UI/UX Design",
    items: [
      "User-Centered Design Approach",
      "Interactive Design Solutions",
      "Usability Testing",
      "High-Fidelity Visual Designs",
    ],
  },
];

function ServiceColumn({ service, isLast }) {
  return (
    <div
      className={`flex flex-col ${
        !isLast
          ? "border-b border-white/10 pb-10 sm:pb-0 sm:border-b-0 sm:border-r sm:border-white/10 sm:pr-12 lg:pr-16"
          : ""
      }`}
    >
      {/* Icon */}
      <div className="mb-8">{service.icon}</div>

      {/* Title */}
      <h2 className="text-white text-xl sm:text-2xl font-light tracking-wide mb-8">
        {service.title}
      </h2>

      {/* Divider */}
      <div className="w-full h-px bg-white/15 mb-6" />

      {/* Items */}
      <ul className="flex flex-col gap-5">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-3 group cursor-default">
            <span className="text-white/60 text-sm group-hover:text-white transition-colors duration-200 select-none">
              →
            </span>
            <span className="text-white/80 text-sm font-light tracking-wide group-hover:text-white transition-colors duration-200">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  return (
    // FIX: Removed min-h-screen, flex, items-center, and justify-center.
    // Added py-16 sm:py-24 to provide natural, balanced vertical padding.
    <div
      className="w-full py-16 sm:py-12"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      {/* Removed py-8 from here since the outer div now handles vertical spacing */}
      <div className="w-full px-6 sm:px-10 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0">
          {services.map((service, index) => (
            <div key={service.id} className={index !== 0 ? "sm:pl-12 lg:pl-16" : ""}>
              <ServiceColumn
                service={service}
                isLast={index === services.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}