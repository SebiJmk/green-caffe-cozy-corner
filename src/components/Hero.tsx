import { motion } from "framer-motion";
import botanicalImg from "@/assets/botanical-shadow.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background pt-[72px] overflow-hidden">
      {/* Botanical frame — both sides */}
      <div className="absolute inset-y-0 left-0 w-40 md:w-72 opacity-20 pointer-events-none">
        <img src={botanicalImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background" />
      </div>
      <div className="absolute inset-y-0 right-0 w-40 md:w-72 opacity-20 pointer-events-none">
        <img src={botanicalImg} alt="" className="w-full h-full object-cover scale-x-[-1]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 py-20 md:py-0">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label mb-6"
          >
            Specialty Coffee · Wine Bar
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.12] tracking-tight text-foreground mb-8"
          >
            A cup of coffee for mind,{" "}
            <em className="italic text-primary">glass of wine</em> for the body,
            a place for the soul.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-lg md:text-xl font-sans text-muted-foreground mb-3"
          >
            Suntem Green 💚
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-sm font-sans text-muted-foreground/70 tracking-wide mb-12"
          >
            Next to Cișmigiu Gardens — Bucharest
          </motion.p>

          <motion.a
            href="#location"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="btn-organic"
          >
            Află unde suntem
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
