import { motion } from "motion/react";
import { Globe } from "lucide-react";

const features = [
  "High-resolution 360° panoramas",
  "Interactive hotspots with information",
  "Works on desktop, tablet & mobile",
];

export default function Virtual({ openTour, hotelTourUrl }) {
  return (
    <section id="tour" className="py-36 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative group overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
                alt="Hotel Virtual Tour Preview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Overlay with CTA */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0A]/80 via-transparent to-transparent flex items-end p-8">
              {openTour && (
                <button
                  onClick={() => openTour(hotelTourUrl, "Victory Hotel — Full Virtual Tour")}
                  className="flex items-center gap-3 text-[10px] font-light tracking-[0.25em] uppercase text-[#0C0C0A] bg-[#C9A84C] hover:bg-[#E8D5A3] border-none px-7 py-4 cursor-pointer transition-colors duration-300"
                >
                  <Globe size={14} strokeWidth={1.5} />
                  Launch 360° Tour
                </button>
              )}
            </div>

            {/* Offset border frame */}
            <div className="absolute -bottom-4 -right-4 inset-0 border border-[#C9A84C]/12 pointer-events-none translate-x-4 translate-y-4" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-light">
                Explore Before You Arrive
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.1] mb-8">
              Immersive<br />
              <em className="italic text-[#E8D5A3]">virtual tour</em>
            </h2>

            <p className="text-sm font-light leading-[1.9] text-white/45 mb-12 max-w-md">
              Step inside Victory Hotel from anywhere. Explore the grand lobby,
              signature restaurants, rooftop infinity pool, and every room category
              — all in stunning 360° detail.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-5 border-t border-white/8 pt-10">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-4">
                  <div className="w-1 h-1 bg-[#C9A84C] rounded-full shrink-0" />
                  <span className="text-sm font-light text-white/50">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  );
}