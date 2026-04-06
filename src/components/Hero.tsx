import { motion } from "framer-motion";

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-16">
    <div className="max-w-4xl w-full text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] font-normal leading-[1.15] tracking-tight text-charcoal mb-12"
      >
        A cup of coffee for mind,
        <br />
        <em className="italic">glass of wine for the body,</em>
        <br />
        a place for the soul.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="label-editorial"
      >
        Next to Cișmigiu Gardens — Bucharest
      </motion.p>
    </div>
  </section>
);

export default Hero;
