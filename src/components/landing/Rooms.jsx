import { Globe, Users, Home } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Rooms({
  roomCategories = [],
  activeRoomCategory,
  setActiveRoomCategory,
  filteredRooms = [],
  openTour,
  roomTours = {},
  setBookingForm,
  bookingForm,
  setIsBookingOpen,
}) {
  return (
    <section id="rooms" className="py-36 bg-[#0C0C0A] relative overflow-hidden">
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
                Luxury Accommodations
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.1]">
              Rooms &amp;<br />
              <em className="italic text-[#E8D5A3]">suites</em>
            </h2>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {roomCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveRoomCategory(cat)}
                className={`text-[9px] tracking-[0.25em] uppercase font-light px-5 py-2.5 border transition-all duration-300 cursor-pointer
                  ${activeRoomCategory === cat
                    ? "bg-[#C9A84C] text-[#0C0C0A] border-[#C9A84C]"
                    : "bg-transparent text-white/40 border-white/10 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Room grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoomCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredRooms.map((room) => (
              <motion.div
                key={room.id}
                variants={itemVariants}
                className="group flex flex-col bg-[#080808] border border-white/5 hover:border-[#C9A84C]/25 transition-all duration-500 overflow-hidden"
              >
                {/* Image */}
                <div
                  className="aspect-[4/3] overflow-hidden cursor-pointer relative"
                  onClick={() => openTour(roomTours[room.name], `${room.name} — 360° Tour`)}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Tour hint on hover */}
                  <div className="absolute inset-0 bg-[#0C0C0A]/0 group-hover:bg-[#0C0C0A]/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[9px] tracking-[0.35em] uppercase text-white flex items-center gap-2">
                      <Globe size={12} strokeWidth={1.5} /> View 360°
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-lg font-light text-white leading-tight">{room.name}</h3>
                    <div className="text-right shrink-0 ml-4">
                      <span className="font-serif text-lg font-light text-[#C9A84C]">${room.price}</span>
                      <span className="text-[9px] text-white/30 block tracking-wider">/ night</span>
                    </div>
                  </div>

                  <p className="text-xs font-light leading-[1.8] text-white/40 mb-5 flex-1">{room.description}</p>

                  <div className="flex gap-5 text-[9px] tracking-[0.2em] uppercase text-white/30 mb-5 border-t border-white/5 pt-5">
                    <span className="flex items-center gap-1.5"><Users size={11} strokeWidth={1.5} /> {room.capacity} guests</span>
                    <span className="flex items-center gap-1.5"><Home size={11} strokeWidth={1.5} /> {room.size}</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => openTour(roomTours[room.name], `${room.name} — 360° Tour`)}
                      className="flex-1 py-2.5 text-[9px] tracking-[0.2em] uppercase font-light text-[#C9A84C] border border-[#C9A84C]/30 hover:border-[#C9A84C] bg-transparent cursor-pointer transition-all duration-300 flex items-center justify-center gap-1.5"
                    >
                      <Globe size={11} strokeWidth={1.5} /> 360° Tour
                    </button>
                    <button
                      onClick={() => {
                        setBookingForm({ ...bookingForm, roomType: room.name });
                        setIsBookingOpen(true);
                      }}
                      className="flex-1 py-2.5 text-[9px] tracking-[0.2em] uppercase font-light text-[#0C0C0A] bg-[#C9A84C] hover:bg-[#E8D5A3] border border-transparent cursor-pointer transition-all duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
    </section>
  );
}