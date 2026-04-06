import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials({ testimonials = [] }) {
  return (
    <section id="testimonials" className="py-36 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-light">
              Guest Reviews
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.1]">
            What our guests<br />
            <em className="italic text-[#E8D5A3]">say</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="flex flex-col gap-5 p-6 border border-white/5 hover:border-[#C9A84C]/20 transition-all duration-500 bg-[#0C0C0A]"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={11}
                    strokeWidth={1}
                    className={idx < t.rating ? "text-[#C9A84C] fill-[#C9A84C]" : "text-white/10"}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm font-light leading-[1.9] text-white/45 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover"
                  style={{ border: "0.5px solid rgba(201,168,76,0.3)" }}
                />
                <div>
                  <p className="text-xs font-light text-white leading-none mb-1">{t.name}</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/30">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  );
}