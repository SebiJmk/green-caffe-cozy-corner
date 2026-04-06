import { motion } from "framer-motion";

const lines = [
  { text: "A cup of coffee for mind,", italic: false },
  { text: "glass of wine for the body,", italic: true },
  { text: "a place for the soul.", italic: false },
];

const maskVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-16 relative">
    <div className="max-w-4xl w-full text-center">
      <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] font-normal leading-[1.15] tracking-tight text-charcoal mb-12">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="label-editorial"
      >
        Next to Cișmigiu Gardens — Bucharest
      </motion.p>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    >
      <span className="label-editorial text-[8px] tracking-[0.4em]">Scroll to taste</span>
      <motion.span
        className="block w-px bg-charcoal/30 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
        style={{ height: 48 }}
      />
    </motion.div>
  </section>
);

export default Hero;
