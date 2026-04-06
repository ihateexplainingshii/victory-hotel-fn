import { motion } from "motion/react";

const HOTEL_IMAGE = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800";

export default function Hero({ setIsBookingOpen, openTour, hotelTourUrl }) {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] flex items-end justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.05] animate-[slowzoom_20s_ease-out_forwards]"
        style={{ backgroundImage: `url('${HOTEL_IMAGE}')` }}
      />

      {/* Overlay — dark at bottom, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0A] via-[#0C0C0A]/55 to-[#0C0C0A]/20" />

      {/* Scroll indicator — left edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-10 z-20 flex items-center gap-3"
      >
        <div className="w-px h-10 bg-[#C9A84C] animate-pulse" />
        <span
          className="text-[9px] tracking-[0.4em] uppercase text-white"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Scroll
        </span>
      </motion.div>

      {/* Location label — right edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute top-1/2 right-10 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          Bugesera, Rwanda
        </span>
        <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
      </motion.div>

      {/* Main content — two column, anchored to bottom */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-8 lg:px-12 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-6">

        {/* Left — Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-light">
              Established 2023
            </span>
          </div>
          <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-light text-white leading-[1.0] tracking-tight">
            Where calm<br />
            meets{" "}
            <em className="italic text-[#E8D5A3]">luxury</em>
          </h1>
        </motion.div>

        {/* Right — Description + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-start lg:items-end gap-8"
        >
          <p className="text-sm font-light leading-[1.9] text-white/45 max-w-xs lg:text-right">
            A sanctuary of refined comfort overlooking Bugesera Stadium. Understated elegance for the discerning traveller.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="text-[10px] font-light tracking-[0.25em] uppercase text-[#0C0C0A] bg-[#C9A84C] hover:bg-[#E8D5A3] border-none px-8 py-4 cursor-pointer transition-colors duration-300"
            >
              Reserve Now
            </button>

            {openTour && (
              <button
                onClick={() => openTour(hotelTourUrl, "Victory Hotel — Virtual Tour")}
                className="group flex items-center gap-2 text-[10px] font-light tracking-[0.25em] uppercase text-white/45 hover:text-white bg-transparent border-none cursor-pointer transition-colors duration-300 p-0"
              >
                360° Tour
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="1"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M2 7h10M8 3l4 4-4 4" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Keyframe for slow zoom — add to your global CSS or tailwind config */}
      <style>{`
        @keyframes slowzoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.00); }
        }
      `}</style>
    </section>
  );
}