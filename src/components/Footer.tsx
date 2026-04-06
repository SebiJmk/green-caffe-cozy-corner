import Reveal from "@/components/Reveal";
import { MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Location */}
      <section id="location" className="py-28 md:py-40">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <Reveal>
            <span className="section-label">Locație</span>
            <h2 className="section-heading text-3xl md:text-5xl lg:text-6xl mb-16">
              The{" "}
              <span className="text-brass italic">Secret Spot</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-5">
            {/* Info glass panel */}
            <Reveal className="md:col-span-5">
              <div className="glass p-8 md:p-10 space-y-7 h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <MapPin size={14} className="text-brass" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-brass font-medium">
                      Adresă
                    </span>
                  </div>
                  <p className="font-serif text-xl text-foreground leading-relaxed">
                    Bulevardul Regina Elisabeta,
                    <br />nr. 59
                  </p>
                  <p className="text-muted-foreground font-sans text-xs tracking-wide mt-1">
                    Bucharest, Romania 050014
                  </p>
                </div>

                <div className="h-px bg-foreground/8" />

                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <Clock size={14} className="text-brass" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-brass font-medium">
                      Program
                    </span>
                  </div>
                  <div className="font-sans text-xs text-muted-foreground space-y-1 tracking-wide">
                    <p>Lun – Vin: 07:00 – 23:00</p>
                    <p>Sâm – Dum: 09:00 – 00:00</p>
                  </div>
                </div>

                <div className="h-px bg-foreground/8" />

                <a
                  href="https://maps.google.com/?q=Bulevardul+Regina+Elisabeta+59+Bucharest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow w-full justify-center"
                >
                  Get Directions
                </a>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal className="md:col-span-7">
              <div className="glass overflow-hidden aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]">
                <iframe
                  title="Green Caffe location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0917!3d44.4352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucharest!5e0!3m2!1sen!2sro!4v1700000000000"
                  className="w-full h-full border-0 opacity-75 hover:opacity-90 transition-opacity duration-500"
                  style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.25) brightness(0.6)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t border-foreground/6">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/greencaffe.bucharest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-brass hover:border-brass/40 hover:shadow-[0_0_16px_hsla(42,55%,62%,0.15)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-brass hover:border-brass/40 hover:shadow-[0_0_16px_hsla(42,55%,62%,0.15)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/greencaffe.bucharest"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-foreground/40 hover:text-brass transition-colors duration-300 ml-2 tracking-wide"
              >
                @greencaffe.bucharest
              </a>
            </div>

            {/* Copyright */}
            <p className="text-[11px] font-sans tracking-[0.12em] text-muted-foreground/50 text-center md:text-right">
              © 2026 Green Caffe. Made with ❤️ by Bit & Form
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
