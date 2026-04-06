import { motion } from "motion/react";

export default function Gallery({ galleryImages = [] }) {
  return (
    <section id="gallery" className="py-36 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-light">
                Visual Journey
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.1]">
              Capturing<br />
              <em className="italic text-[#E8D5A3]">timeless moments</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-sm font-light leading-[1.9] text-white/35 max-w-xs md:text-right"
          >
            From our elegant lobby to sweeping stadium views — a glimpse into Victory Hotel.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`relative overflow-hidden group
                ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}
                aspect-square
              `}
            >
              <img
                loading="lazy"
                src={url}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0C0C0A]/0 group-hover:bg-[#0C0C0A]/30 transition-colors duration-500" />
              {/* Bottom gold line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  );
}