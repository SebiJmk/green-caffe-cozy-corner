import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-dark-moody.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img src={heroImg} alt="" className="w-full h-full object-cover" width={1920} height={1080} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full pb-24 md:pb-32 pt-48">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="space-y-0">
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ y: y1 }}
              className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-foreground"
            >
              A cup of{" "}
              <span className="text-gradient-forest italic">coffee</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ y: y2 }}
              className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-foreground/50 md:pl-12 lg:pl-20"
            >
              for the mind,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{ y: y1 }}
              className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-foreground"
            >
              glass of{" "}
              <span className="text-gradient-forest italic">wine</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ y: y2 }}
              className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-foreground/50 md:pl-6 lg:pl-12"
            >
              for the body,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.0 }}
              style={{ y: y3 }}
              className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-brass md:pl-3"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-foreground/25">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent"
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
