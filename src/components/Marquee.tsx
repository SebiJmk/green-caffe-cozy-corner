import { motion } from "framer-motion";

const phrase = "COFFEE FOR THE MIND ✦ WINE FOR THE BODY ✦ THE GREEN VIBE ✦ ";
const doubled = phrase + phrase;

const Marquee = () => (
  <section className="bg-[#0A1A12] py-8 md:py-10 overflow-hidden select-none">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, ease: "linear", repeat: Infinity }}
    >
      <span
        className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-wide"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px rgba(244,241,234,0.45)",
        }}
      >
        {doubled}
      </span>
    </motion.div>
  </section>
);

export default Marquee;
