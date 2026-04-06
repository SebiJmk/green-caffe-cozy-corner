import { motion, type Easing } from "framer-motion";
import { MapPin, Instagram, ArrowUpRight } from "lucide-react";

const ease: Easing = "easeOut";

const Footer = () => {
  return (
    <>
      {/* Location section */}
      <section id="location" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-16"
          >
            <span className="section-label">Visit</span>
            <h2 className="section-heading">Find Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Info tiles */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="space-y-6"
            >
              {/* Address tile */}
              <div className="bg-cream rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground">Address</span>
                </div>
                <p className="font-serif text-xl text-foreground leading-relaxed">
                  Bulevardul Regina Elisabeta,
                  <br />
                  nr. 59, Bucharest, Romania 050014
                </p>
              </div>

              {/* Instagram tile */}
              <a
                href="https://instagram.com/greencaffe.bucharest"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-cream rounded-2xl p-8 hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <Instagram size={16} className="text-primary" />
                  <span className="font-sans text-base text-foreground font-medium">
                    @greencaffe.bucharest
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="rounded-2xl overflow-hidden border border-border aspect-[4/3] shadow-sm"
            >
              <iframe
                title="Green Caffe location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0917!3d44.4352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucharest!5e0!3m2!1sen!2sro!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-sans text-muted-foreground">
            © 2024 Green Caffe
          </p>
          <p className="text-xs font-sans text-muted-foreground/50">
            Made with ❤️ by Bit & Form
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
