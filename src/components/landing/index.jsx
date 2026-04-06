import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Experience from "./Experience";
import VirtualTour from "./Virtual";
import Rooms from "./Rooms";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import BookingModal from "./BookingModal";
import Tour from "./Tour";
import Footer from "./Footer";
import { HOTEL_CONFIG } from "../../hotelConfig";

export const rooms = [
  {
    id: 1, name: "King Suite",
    description: "Luxury suite with panoramic city views, king-size bed, and private terrace.",
    price: 250, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
    category: "Suites", capacity: 2, size: "65 m²",
  },
  {
    id: 2, name: "Queen Room",
    description: "Elegant room with queen-size bed, work desk, and city skyline view.",
    price: 180, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
    category: "Classic", capacity: 2, size: "45 m²",
  },
  {
    id: 3, name: "Twin Deluxe",
    description: "Two single beds, modern design, perfect for friends or family.",
    price: 200, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    category: "Classic", capacity: 2, size: "48 m²",
  },
  {
    id: 4, name: "Presidential Penthouse",
    description: "Top-floor luxury with private jacuzzi, dining area, and 360° city view.",
    price: 500, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    category: "Suites", capacity: 4, size: "120 m²",
  },
  {
    id: 5, name: "Garden View Room",
    description: "Ground floor with direct access to the hotel gardens and terrace.",
    price: 160, image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    category: "Standard", capacity: 2, size: "40 m²",
  },
  {
    id: 6, name: "Family Suite",
    description: "Two connecting bedrooms, living area, perfect for families.",
    price: 320, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    category: "Suites", capacity: 4, size: "85 m²",
  },
];

// --- Gallery Images ---
const galleryImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
];

// --- Testimonials ---
const testimonials = [
  { id: 1, name: "John M.", role: "Business Traveler", rating: 5, text: "Incredible service and stunning views. The 360 tour helped me choose the perfect room.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sarah K.", role: "Family Guest", rating: 5, text: "The Family Suite was spacious and clean. The staff went above and beyond.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "David L.", role: "Tourist", rating: 4, text: "Great location near Bugesera Stadium. The top bar experience is unforgettable!", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emily R.", role: "Event Planner", rating: 5, text: "Hosted a conference here — flawless execution and beautiful amenities.", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
];

const roomCategories = ["All", "Suites", "Classic", "Standard"];

const BLANK_FORM = { name: "", email: "", phone: "", roomType: "", checkIn: "", checkOut: "" };

// --- Page Loader ---
function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#0C0C0A] z-[300] flex flex-col items-center justify-center gap-10"
    >
      {/* Logo mark */}
      <div className="relative w-14 h-14 border border-[#C9A84C]/40 flex items-center justify-center">
        <div className="absolute inset-[4px] border border-[#C9A84C]/15 pointer-events-none" />
        <span className="font-serif text-3xl font-light text-[#C9A84C] leading-none select-none">V</span>
      </div>

      {/* Hotel name — staggered letters */}
      <div className="flex items-center gap-[0.15em] overflow-hidden">
        {"Victory Hotel".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className={`font-serif font-light text-2xl tracking-[0.2em] ${char === " " ? "w-3" : "text-white"}`}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Thin animated progress line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 2.2, ease: "easeInOut" }}
        style={{ originX: 0 }}
        className="w-24 h-px bg-[#C9A84C]/60"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-[9px] tracking-[0.4em] uppercase text-white/25 font-light"
      >
        Bugesera · Rwanda
      </motion.p>
    </motion.div>
  );
}

// --- Root ---
export default function Index() {
  const [isBookingOpen, setIsBookingOpen]   = useState(false);
  const [bookingForm, setBookingForm]       = useState(BLANK_FORM);
  const [tourModal, setTourModal]           = useState({ isOpen: false, url: "", title: "" });
  const [iframeLoading, setIframeLoading]   = useState(false);
  const [activeRoomCategory, setActiveRoomCategory] = useState("All");
  const [isPageLoading, setIsPageLoading]   = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsPageLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const filteredRooms =
    activeRoomCategory === "All"
      ? rooms
      : rooms.filter((r) => r.category === activeRoomCategory);

  const totalPrice = rooms.find((r) => r.name === bookingForm.roomType)?.price ?? 0;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, roomType } = bookingForm;
    if (!name || !email || !phone || !roomType) {
      alert("Please fill all required fields.");
      return;
    }
    alert(`Booking confirmed for ${roomType}! Total: $${totalPrice}/night. We'll be in touch shortly.`);
    setIsBookingOpen(false);
    setBookingForm(BLANK_FORM);
  };

  const openTour = (url, title) => {
    setTourModal({ isOpen: true, url, title });
    setIframeLoading(true);
  };
  const closeTour = () => {
    setTourModal({ isOpen: false, url: "", title: "" });
    setIframeLoading(false);
  };

  return (
    <>
      <AnimatePresence>{isPageLoading && <Loader />}</AnimatePresence>

      {!isPageLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-[#0C0C0A] text-white font-sans selection:bg-[#C9A84C] selection:text-[#0C0C0A]"
        >
          <Nav setIsBookingOpen={setIsBookingOpen} />

          <Hero
            setIsBookingOpen={setIsBookingOpen}
            openTour={openTour}
            hotelTourUrl={HOTEL_CONFIG.hotelTourUrl}
          />

          <About />

          <Gallery galleryImages={galleryImages} />

          <Experience
            openTour={openTour}
            stadiumTourUrl={HOTEL_CONFIG.stadiumTourUrl}
          />

          <VirtualTour
            openTour={openTour}
            hotelTourUrl={HOTEL_CONFIG.hotelTourUrl}
          />

          <Rooms
            roomCategories={roomCategories}
            activeRoomCategory={activeRoomCategory}
            setActiveRoomCategory={setActiveRoomCategory}
            filteredRooms={filteredRooms}
            openTour={openTour}
            roomTours={HOTEL_CONFIG.roomTours}
            bookingForm={bookingForm}
            setBookingForm={setBookingForm}
            setIsBookingOpen={setIsBookingOpen}
          />

          <Testimonials testimonials={testimonials} />

          <Contact />
          <BookingModal
            isBookingOpen={isBookingOpen}
            setIsBookingOpen={setIsBookingOpen}
            bookingForm={bookingForm}
            setBookingForm={setBookingForm}
            handleBookingSubmit={handleBookingSubmit}
            totalPrice={totalPrice}
            rooms={rooms}
          />

          <Tour
            isOpen={tourModal.isOpen}
            closeTour={closeTour}
            iframeLoading={iframeLoading}
            setIframeLoading={setIframeLoading}
            tourModal={tourModal}
          />

          <Footer />
        </motion.div>
      )}
    </>
  );
}