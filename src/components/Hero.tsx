import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Green Caffe interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-primary-foreground mb-6"
        >
          A cup of coffee for mind, glass of wine for the body, a place for the soul.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-10 font-sans"
        >
          We are Green 💚
        </motion.p>

        <motion.a
          href="#location"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-sans font-medium text-base hover:bg-forest-light transition-colors duration-200 shadow-lg"
        >
          Visit Us
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
