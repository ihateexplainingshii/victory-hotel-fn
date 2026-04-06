export default function Footer() {
  const links = ["Rooms", "Gallery", "Experience", "Contact"];

  return (
    <footer className="bg-[#080808] relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-8 lg:px-12 py-24">

        {/* Top — Logo + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20 pb-20 border-b border-white/5">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-9 h-9 border border-[#C9A84C] flex items-center justify-center shrink-0">
              <div className="absolute inset-[3px] border border-[#C9A84C]/25 pointer-events-none" />
              <span className="font-serif text-xl font-light text-[#C9A84C] leading-none select-none">V</span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="font-serif text-sm font-light tracking-[0.3em] uppercase text-white leading-none">
                Victory Hotel
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#C9A84C] font-light leading-none">
                Bugesera · Rwanda
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-8">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[9px] tracking-[0.3em] uppercase font-light text-white/30 hover:text-[#C9A84C] transition-colors duration-300 no-underline"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Middle — Tagline */}
        <div className="mb-20">
          <p className="font-serif text-3xl md:text-4xl font-light text-white/15 leading-[1.2] max-w-lg">
            Luxury redefined.<br />
            <em className="italic text-[#C9A84C]/25">Every stay, a victory.</em>
          </p>
        </div>

        {/* Bottom — Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-light">
            © 2026 Victory Hotel. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[9px] tracking-[0.3em] uppercase text-white/20 hover:text-[#C9A84C] transition-colors duration-300 no-underline font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/10 to-transparent" />
    </footer>
  );
}