
export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[300]">
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 border-4 border-brand-gold/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-brand-gold rounded-full animate-spin"></div>
        </div>
        <div className="text-center">
          <div className="flex flex-wrap justify-center text-4xl md:text-6xl font-serif font-bold tracking-wider">
            {letters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.3 }}
                className="text-[#d4af37]"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-white/60 text-sm uppercase tracking-wider mt-4"
          >
            Preparing your luxury experience...
          </motion.p>
        </div>
      </div>
  )
}