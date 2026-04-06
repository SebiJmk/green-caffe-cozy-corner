import { motion } from "framer-motion";

const lines = [
  { text: "A cup of coffee for mind,", italic: false },
  { text: "glass of wine for the body,", italic: true },
  { text: "a place for the soul.", italic: false },
];

const maskVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1,
      delay: 0.4 + i * 0.18,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-48 pb-32 relative"
  >
    <div className="max-w-5xl w-full text-center">
      <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-[4rem] lg:text-[5.5rem] font-normal leading-[1.1] tracking-[-0.01em] text-charcoal mb-10">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden py-1">
            <motion.span
              className={`block ${line.italic ? "italic" : ""}`}
              variants={maskVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {line.text}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        className="font-serif italic text-lg sm:text-xl text-primary/80 mb-3"
      >
        We are Green 💚
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="label-editorial"
      >
        Next to Cișmigiu Gardens — Bucharest
      </motion.p>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    >
      <span className="label-editorial text-[8px] tracking-[0.4em]">Scroll to taste</span>
      <motion.span
        className="block w-px bg-charcoal/25 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2.2, duration: 1.4, ease: "easeInOut" }}
        style={{ height: 56 }}
      />
    </motion.div>
  </section>
);

export default Hero;
