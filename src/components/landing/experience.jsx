import { motion } from "motion/react";
import { Globe } from "lucide-react";

export default function Experience({ openTour, stadiumTourUrl }) {
  return (
    <section id="experience" className="py-36 bg-[#0C0C0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-xl mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-light">
              The Ultimate View
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.1]">
            Top bar<br />
            <em className="italic text-[#E8D5A3]">experience</em>
          </h2>
        </motion.div>

        {/* Image feature */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative overflow-hidden group"
        >
          <div className="aspect-[16/7] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=1600"
              alt="Top Bar View"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0A]/80 via-[#0C0C0A]/20 to-transparent" />

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div>
              <p className="font-serif text-xl font-light text-white mb-1">
                Panoramic rooftop lounge
              </p>
              <p className="text-xs font-light tracking-[0.2em] text-white/40 uppercase">
                360° views of Bugesera Stadium & city skyline
              </p>
            </div>
            {openTour && (
              <button
                onClick={() => openTour(stadiumTourUrl, "Victory Hotel — Top Bar 360° Experience")}
                className="flex items-center gap-3 text-[10px] font-light tracking-[0.25em] uppercase text-[#0C0C0A] bg-[#C9A84C] hover:bg-[#E8D5A3] border-none px-7 py-4 cursor-pointer transition-colors duration-300 shrink-0"
              >
                <Globe size={14} strokeWidth={1.5} />
                Enter 360° Tour
              </button>
            )}
          </div>

          {/* Gold corner accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#C9A84C]/40 pointer-events-none" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#C9A84C]/40 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#C9A84C]/40 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#C9A84C]/40 pointer-events-none" />
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  );
}