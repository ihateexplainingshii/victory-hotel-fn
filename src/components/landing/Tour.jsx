import { X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Tour({ isOpen, closeTour, iframeLoading, setIframeLoading, tourModal = {} }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeTour}
            className="fixed inset-0 bg-[#0C0C0A]/95 z-[200] backdrop-blur-sm cursor-pointer"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] h-[88vh] bg-[#0C0C0A] z-[201] overflow-hidden"
            style={{ border: "0.5px solid rgba(201,168,76,0.2)" }}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 z-[202] flex items-center justify-between px-6 py-4"
              style={{ background: "linear-gradient(to bottom, rgba(12,12,10,0.95), transparent)" }}
            >
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-[#C9A84C] font-light mb-0.5">360° Experience</p>
                <p className="font-serif text-sm font-light text-white">{tourModal.title}</p>
              </div>
              <button
                onClick={closeTour}
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 bg-transparent cursor-pointer"
              >
                <X size={14} strokeWidth={1} />
              </button>
            </div>

            {/* Gold top rule */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent z-[203]" />

            {/* Loading state */}
            {iframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-[203] bg-[#0C0C0A]">
                <div className="flex flex-col items-center gap-4">
                  <Loader2 size={28} strokeWidth={1} className="animate-spin text-[#C9A84C]" />
                  <p className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-light">Loading experience</p>
                </div>
              </div>
            )}

            <iframe
              src={tourModal.url}
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; fullscreen; vr"
              title="360 Tour"
              onLoad={() => setIframeLoading(false)}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}