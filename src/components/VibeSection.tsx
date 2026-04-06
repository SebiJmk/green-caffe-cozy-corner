import { motion, type Easing } from "framer-motion";
import { Coffee, Wine } from "lucide-react";
import coffeeImg from "@/assets/coffee-vibe.jpg";
import wineImg from "@/assets/wine-vibe.jpg";

const ease: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease },
  }),
};

const VibeSection = () => {
  return (
    <section id="vibe" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans mb-3">
            Two moods, one soul
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
            Our Vibe
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Coffee card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md">
              <img
                src={coffeeImg}
                alt="Specialty coffee brewing"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <Coffee size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Daytime · Coffee & Mindfulness</h3>
            </div>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Start your morning with carefully sourced single-origin beans, brewed to perfection.
              A calm space to think, create, and recharge — where every cup is an invitation to slow down.
            </p>
          </motion.div>

          {/* Wine card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeUp}
            className="group md:mt-12"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md">
              <img
                src={wineImg}
                alt="Wine bar evening ambiance"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/20">
                <Wine size={20} className="text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">Evening · Wine & Relaxation</h3>
            </div>
            <p className="text-muted-foreground font-sans leading-relaxed">
              As the sun sets, we transform into a cozy wine bar. Curated wines from Romanian and
              European vineyards, paired with good company and warm candlelight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VibeSection;
