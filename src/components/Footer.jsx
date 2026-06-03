// Social icon SVGs
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0a"/>
    </svg>
  );
}

function IconX() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  );
}

const pages = ["About us", "Works", "Services", "Blogs", "Contact us"];
const resources = ["Privacy Policy", "Cookie Policy", "Terms & Conditions", "Licensing"];
const socials = [
  { name: "Instagram", icon: <IconInstagram /> },
  { name: "Facebook",  icon: <IconFacebook /> },
  { name: "YouTube",   icon: <IconYouTube /> },
  { name: "Twitter",   icon: <IconX /> },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full relative overflow-hidden">

      {/* ── Top section ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10">
        
        {/* Main grid - responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-white/10 pb-10">

          {/* Column 1: Pages */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Pages</p>
            <ul className="flex flex-col gap-3.5">
              {pages.map((p) => (
                <li key={p}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        {/* Column 2: Offices */}
<div>
  <p className="text-white text-xs font-bold tracking-widest uppercase mb-5 ">Offices</p>
  
  {/* Kathmandu - Head Office */}
  <div className="mb-6">
    <p className="text-white text-sm font-semibold mb-2">Kathmandu</p>
    <p className="text-white/50 text-xs mb-2">Head Office</p>
    <ul className="flex flex-col gap-2">
      <li>
        <a href="tel:+9771234567" className="text-white/60 hover:text-white text-sm transition-colors">
          +977 1-234567
        </a>
      </li>
      <li>
        <a href="tel:+9771234568" className="text-white/60 hover:text-white text-sm transition-colors">
          +977 1-234568
        </a>
      </li>
    </ul>
  </div>

  {/* Pokhara - Branch Office */}
  <div>
    <p className="text-white text-sm font-semibold mb-2">Pokhara</p>
    <p className="text-white/50 text-xs mb-2">Branch Office</p>
    <ul className="flex flex-col gap-2">
      <li>
        <a href="tel:+97761234567" className="text-white/60 hover:text-white text-sm transition-colors">
          +977 61-234567
        </a>
      </li>
      <li>
        <a href="tel:+97761234568" className="text-white/60 hover:text-white text-sm transition-colors">
          +977 61-234568
        </a>
      </li>
    </ul>
  </div>
</div>

{/* Column 2: Offices */}
{/* <div>
  <p className="text-white text-xs font-bold tracking-widest uppercase mb-5 flex items-center gap-2">Offices</p>
  
  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
    
    <div className="flex-1">
      <p className="text-white text-sm font-semibold mb-2">Kathmandu</p>
      <p className="text-white/50 text-xs mb-2">Head Office</p>
      <ul className="flex flex-col gap-2">
        <li>
          <a href="tel:+9771234567" className="text-white/60 hover:text-white text-sm transition-colors">
            +977 1-234567
          </a>
        </li>
        <li>
          <a href="tel:+9771234568" className="text-white/60 hover:text-white text-sm transition-colors">
            +977 1-234568
          </a>
        </li>
      </ul>
    </div>

    <div className="flex-1">
      <p className="text-white text-sm font-semibold mb-2">Pokhara</p>
      <p className="text-white/50 text-xs mb-2">Branch Office</p>
      <ul className="flex flex-col gap-2">
        <li>
          <a href="tel:+97761234567" className="text-white/60 hover:text-white text-sm transition-colors">
            +977 61-234567
          </a>
        </li>
        <li>
          <a href="tel:+97761234568" className="text-white/60 hover:text-white text-sm transition-colors">
            +977 61-234568
          </a>
        </li>
      </ul>
    </div>

  </div>
</div> */}


          {/* Column 3: Contact Info */}
          <div>
            {/* Send Us A Message */}
            <div className="mb-8">
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Send Us A Message</p>
              <a href="mailto:info@sait.com.np" className="text-white text-sm underline underline-offset-2 hover:text-white/70 transition-colors block mb-4">
                info@sait.com.np
              </a>
              <p className="text-white/50 text-sm leading-relaxed">
                Get updates and exclusive offers straight to your inbox!
              </p>
            </div>

            {/* Give Us A Call */}
            <div>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Give Us A Call</p>
              <a href="tel:+977 061-501368" className="text-white text-sm underline underline-offset-2 hover:text-white/70 transition-colors block mb-4">
                +977 061-501368
              </a>
              <p className="text-white/50 text-sm leading-relaxed">
                Give us a call and our team will be happy to help!
              </p>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-5">Follow Us</p>
            <ul className="flex flex-col gap-3.5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href="#"
                    className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md text-white group-hover:bg-white/20 transition-colors flex-shrink-0">
                      {s.icon}
                    </span>
                    <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                      {s.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Giant ZINLE watermark ── */}
      <div className="relative h-36 sm:h-44 lg:h-52 overflow-hidden select-none pointer-events-none">
        <p
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/[0.07] font-black leading-none tracking-tighter whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 22vw, 240px)" }}
        >
          SANDIP
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-8">
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© 2026 S.A I.T Solution Trade and Concern</p>
          <p className="text-white/40 text-xs">
            Crafted by S.A I.T Solution Trade and Concern{" "}
            <a href="https://sait.com.np/" className="underline underline-offset-2 text-white/60 hover:text-white transition-colors">
        
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}