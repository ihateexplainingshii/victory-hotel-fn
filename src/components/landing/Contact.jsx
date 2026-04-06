import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

const contactItems = [
  { icon: Phone, label: "Call Us", value: "+250 788 123 456" },
  { icon: Mail,  label: "Email Us", value: "stay@victoryhotel.rw" },
  { icon: MapPin, label: "Location", value: "Bugesera, Rwanda" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-36 bg-[#0C0C0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-light">Contact Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.1] mb-8">
              Reach<br />
              <em className="italic text-[#E8D5A3]">out</em>
            </h2>
            <p className="text-sm font-light leading-[1.9] text-white/40 mb-16 max-w-sm">
              Our team is ready to assist with reservations, events, or any inquiries — day or night.
            </p>

            <div className="flex flex-col gap-10">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Icon size={15} strokeWidth={1} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/25 font-light mb-1.5">{label}</p>
                    <p className="font-serif text-base font-light text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* offset frame */}
            <div className="absolute -top-4 -left-4 inset-0 border border-[#C9A84C]/8 pointer-events-none -translate-x-4 -translate-y-4" />

            <div className="bg-[#080808] border border-white/5 p-10">
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                {[
                  { label: "Full Name", type: "text", placeholder: "Your name" },
                  { label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map(({ label, type, placeholder }) => (
                  <div key={label} className="flex flex-col gap-2">
                    <label className="text-[9px] tracking-[0.35em] uppercase text-[#C9A84C] font-light">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full bg-transparent border-b border-white/8 py-3 text-sm font-light text-white outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder:text-white/20"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] tracking-[0.35em] uppercase text-[#C9A84C] font-light">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your stay..."
                    className="w-full bg-transparent border-b border-white/8 py-3 text-sm font-light text-white outline-none focus:border-[#C9A84C] transition-colors duration-300 resize-none placeholder:text-white/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 text-[10px] tracking-[0.3em] uppercase font-light text-[#0C0C0A] bg-[#C9A84C] hover:bg-[#E8D5A3] border-none cursor-pointer transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  );
}