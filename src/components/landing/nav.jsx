import { useState, useEffect } from "react";
import { X, Menu as MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Nav({ setIsBookingOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Rooms","about", "Gallery", "Experience", "Contact",];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out
          ${scrolled
            ? "py-4 bg-[#0C0C0A]/92 backdrop-blur-xl border-b border-[#C9A84C]/10"
            : "py-8 bg-transparent"
          }`}
      >
        <div className="max-w-screen-xl mx-auto px-8 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-4 no-underline group">
            <div className="relative w-9 h-9 border border-[#C9A84C] flex items-center justify-center shrink-0">
              <div className="absolute inset-[3px] border border-[#C9A84C]/25 pointer-events-none" />
              <span className="font-serif text-xl font-light text-[#C9A84C] leading-none select-none">
                V
              </span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="font-serif text-sm font-light tracking-[0.3em] uppercase text-white leading-none">
                Victory Hotel
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#C9A84C] font-light leading-none">
                Bugesera · Rwanda
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 list-none">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] font-light tracking-[0.25em] uppercase text-white/50 hover:text-[#C9A84C] transition-colors duration-300 no-underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => setIsBookingOpen(true)}
            className="hidden md:block text-[10px] font-light tracking-[0.25em] uppercase text-[#C9A84C] border border-[#C9A84C]/70 px-6 py-3 bg-transparent hover:bg-[#C9A84C] hover:text-[#0C0C0A] transition-all duration-400 cursor-pointer"
          >
            Reserve a Stay
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-1 text-white/70 hover:text-[#C9A84C] transition-colors bg-transparent border-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} strokeWidth={1} /> : <MenuIcon size={22} strokeWidth={1} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-[#0C0C0A]/96 backdrop-blur-xl border-t border-[#C9A84C]/10 px-8 py-10 flex flex-col gap-7"
            >
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-lg font-light text-white/70 hover:text-white transition-colors no-underline"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }}
                className="mt-2 text-[10px] font-light tracking-[0.25em] uppercase text-[#0C0C0A] bg-[#C9A84C] border-none py-3.5 px-6 text-center cursor-pointer"
              >
                Reserve a Stay
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}