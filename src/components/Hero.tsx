import { motion } from "framer-motion";
import heroImg from "@/assets/hero-dark-moody.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Green Caffe moody interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-28 md:pb-36 pt-40">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          {/* Oversized cinematic headline */}
          <div className="space-y-1 md:space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-foreground"
            >
              A cup of{" "}
              <span className="text-gradient-green italic">coffee</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-foreground/60 md:pl-16 lg:pl-24"
            >
              for the mind,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-foreground"
            >
              glass of{" "}
              <span className="text-gradient-green italic">wine</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-foreground/60 md:pl-8 lg:pl-16"
            >
              for the body,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.0 }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-champagne md:pl-4"
            >
              a place for the soul.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-foreground/30">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default Hero;
