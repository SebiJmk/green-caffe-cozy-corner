import { motion } from "framer-motion";
import botanicalImg from "@/assets/botanical-shadow.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-[72px]"
    >
      {/* Botanical background — subtle, right-aligned */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <img
          src={botanicalImg}
          alt="Botanical leaf shadows"
          className="w-full h-full object-cover"
          width={1400}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 py-20 md:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-label mb-6"
          >
            Specialty Coffee · Wine Bar · Bucharest
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-foreground mb-8"
          >
            A cup of coffee
            <br />
            for mind,{" "}
            <em className="italic font-light text-primary">
              glass of
              <br />
              wine
            </em>{" "}
            for the body,
            <br />
            a place for the soul.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-lg font-sans text-muted-foreground mb-10"
          >
            We are Green 💚
          </motion.p>

          <motion.a
            href="#location"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="btn-organic"
          >
            Visit Us
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
