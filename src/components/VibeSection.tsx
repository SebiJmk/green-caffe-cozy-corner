import { motion, type Easing } from "framer-motion";
import baristaImg from "@/assets/barista-editorial.jpg";

const ease: Easing = "easeOut";

const VibeSection = () => {
  return (
    <>
      {/* About */}
      <section id="about" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="section-label">About</span>
            <h2 className="section-heading mb-8">
              Where morning ritual
              <br />
              meets evening elegance
            </h2>
            <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed">
              Green Caffé lives in two worlds. By day, we're a specialty coffee sanctuary —
              single-origin beans, pour-overs, and the quiet hum of focused minds. By night,
              the lights dim, candles flicker, and we become Bucharest's most intimate wine bar.
              Same soul, different rhythm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Vibe — 50/50 Editorial Split */}
      <section id="vibe" className="bg-cream">
        <div className="grid md:grid-cols-2 min-h-[80vh]">
          {/* Left — Editorial text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center px-8 md:px-16 lg:px-24 py-20 md:py-0"
          >
            <div className="max-w-md">
              <span className="section-label">The Vibe</span>
              <h2 className="section-heading mb-8">
                Two moods.
                <br />
                <em className="italic font-light">One soul.</em>
              </h2>

              <div className="space-y-6 text-muted-foreground font-sans text-base leading-[1.8]">
                <p>
                  <span className="text-foreground font-medium">Morning.</span>{" "}
                  Sunlight pours through tall windows. The espresso machine hisses softly.
                  You wrap your hands around a ceramic cup of single-origin Ethiopian,
                  and the world slows down. This is where ideas begin.
                </p>
                <p>
                  <span className="text-foreground font-medium">Evening.</span>{" "}
                  The playlist shifts. Candlelight replaces daylight. A carefully curated
                  Romanian Fetească Neagră fills your glass. Conversations deepen.
                  The city outside fades. You're exactly where you need to be.
                </p>
              </div>

              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-serif text-foreground">7 AM</p>
                  <p className="text-xs font-sans text-muted-foreground uppercase tracking-widest mt-1">Coffee opens</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-serif text-foreground">6 PM</p>
                  <p className="text-xs font-sans text-muted-foreground uppercase tracking-widest mt-1">Wine hour</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-serif text-foreground">11 PM</p>
                  <p className="text-xs font-sans text-muted-foreground uppercase tracking-widest mt-1">Last pour</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Editorial image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative overflow-hidden"
          >
            <img
              src={baristaImg}
              alt="Barista pouring latte art at Green Caffé"
              loading="lazy"
              width={800}
              height={1100}
              className="w-full h-full object-cover min-h-[500px] md:min-h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VibeSection;
