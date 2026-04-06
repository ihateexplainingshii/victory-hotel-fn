import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BookingModal({
  isBookingOpen,
  setIsBookingOpen,
  bookingForm,
  setBookingForm,
  handleBookingSubmit,
  totalPrice,
  rooms = [],
}) {
  const field = (label, children) => (
    <div className="flex flex-col gap-2">
      <label className="text-[9px] tracking-[0.35em] uppercase text-[#C9A84C] font-light">{label}</label>
      {children}
    </div>
  );

  const inputClass =
    "w-full bg-transparent border-b border-white/10 py-2.5 text-sm font-light text-white outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder:text-white/20";

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsBookingOpen(false)}
            className="fixed inset-0 bg-[#0C0C0A]/85 z-[100] backdrop-blur-md cursor-pointer"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0C0C0A] border border-white/8 z-[101] overflow-hidden"
          >
            {/* Top gold rule */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

            <div className="p-8 overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-light mb-2">Reserve</p>
                  <h2 className="font-serif text-2xl font-light text-white">Your Stay</h2>
                </div>
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="text-white/30 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer p-1 -mr-1 -mt-1"
                >
                  <X size={18} strokeWidth={1} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleBookingSubmit} className="flex flex-col gap-7">
                {field("Full Name",
                  <input
                    type="text"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                )}
                {field("Email Address",
                  <input
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                    required
                  />
                )}
                {field("Phone Number",
                  <input
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+250 700 000 000"
                    required
                  />
                )}
                {field("Room Type",
                  <select
                    value={bookingForm.roomType}
                    onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" className="bg-[#0C0C0A]">Select a room</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.name} className="bg-[#0C0C0A]">
                        {room.name} — ${room.price}/night
                      </option>
                    ))}
                  </select>
                )}

                <div className="grid grid-cols-2 gap-5">
                  {field("Check-in",
                    <input
                      type="date"
                      value={bookingForm.checkIn}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                      className={inputClass}
                    />
                  )}
                  {field("Check-out",
                    <input
                      type="date"
                      value={bookingForm.checkOut}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                      className={inputClass}
                    />
                  )}
                </div>

                {/* Price */}
                <div className="border-t border-white/5 pt-6 flex justify-between items-end">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white/30 font-light">Total per night</span>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-light text-[#C9A84C]">${totalPrice}</span>
                    <span className="text-[9px] text-white/30 ml-1">USD</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-[10px] tracking-[0.3em] uppercase font-light text-[#0C0C0A] bg-[#C9A84C] hover:bg-[#E8D5A3] border-none cursor-pointer transition-colors duration-300 mt-1"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}