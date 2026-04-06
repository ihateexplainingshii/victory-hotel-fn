import { motion } from "motion/react";

export default function About() {
  const stats = [
    { value: "150+", label: "Luxury Rooms" },
    { value: "4.8", label: "Guest Rating" },
    { value: "2023", label: "Established" },
    { value: "24/7", label: "Concierge" },
  ];

  return (
    <section id="about" className="py-36 bg-[#0C0C0A] relative overflow-hidden">
      {/* Subtle background rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1000"
                alt="Hotel Lobby"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Offset border frame */}
            <div className="absolute -bottom-5 -right-5 inset-0 border border-[#C9A84C]/15 pointer-events-none translate-x-5 translate-y-5" />
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
                Our Story
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.1] mb-8">
              A landmark of elegance<br />
              <em className="italic text-[#E8D5A3]">in Bugesera</em>
            </h2>

            <p className="text-sm font-light leading-[1.9] text-white/45 mb-14 max-w-md">
              Victory Hotel combines modern architecture with warm Rwandan hospitality.
              Overlooking the iconic Bugesera Stadium, we offer an unmatched experience
              for both business and leisure travellers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 border-t border-white/8 pt-10">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-serif text-3xl font-light text-[#C9A84C] leading-none mb-2">
                    {value}
                  </p>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/35 font-light">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  );
}