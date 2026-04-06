import { motion, type Easing } from "framer-motion";
import { MapPin, Instagram } from "lucide-react";
import logo from "@/assets/green-caffe-logo.png";

const ease: Easing = "easeOut";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease },
  }),
};

const Footer = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans mb-3">
            Come say hi
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">
            Find Us
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start"
        >
          {/* Info */}
          <motion.div variants={fadeUp} custom={0} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mt-1 shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Bulevardul Regina Elisabeta, nr. 59,<br />
                  Bucharest, Romania 050014
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mt-1 shrink-0">
                <Instagram size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Instagram</h3>
                <a
                  href="https://instagram.com/greencaffe.bucharest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-forest-light transition-colors font-sans font-medium"
                >
                  @greencaffe.bucharest
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div variants={fadeUp} custom={1} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
            <iframe
              title="Green Caffe location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0917!3d44.4352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucharest!5e0!3m2!1sen!2sro!4v1700000000000"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Green Caffe" className="h-7 w-7 object-contain" loading="lazy" />
            <span className="font-serif text-sm text-muted-foreground">Green Caffé</span>
          </div>
          <p className="text-xs text-muted-foreground font-sans">
            © {new Date().getFullYear()} Green Caffé. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
