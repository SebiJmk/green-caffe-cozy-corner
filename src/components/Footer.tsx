import { useState } from "react";
import Reveal from "@/components/Reveal";
import { MapPin, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const [igHover, setIgHover] = useState(false);

  return (
    <>
      {/* Location */}
      <section id="location" className="py-28 md:py-40">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <Reveal>
            <span className="section-label">Locate</span>
            <h2 className="section-heading text-3xl md:text-5xl lg:text-6xl mb-16">
              The <span className="text-champagne italic">Secret Spot</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-5">
            {/* Address tile */}
            <Reveal className="md:col-span-5" direction="left">
              <div className="glass-card p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin size={14} className="text-champagne" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-champagne">
                      Address
                    </span>
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-2">
                    Bulevardul Regina Elisabeta,
                    <br />
                    nr. 59
                  </p>
                  <p className="text-muted-foreground font-sans text-sm">
                    Bucharest, Romania 050014
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Bulevardul+Regina+Elisabeta+59+Bucharest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow mt-8 text-xs w-full justify-center"
                >
                  Get Directions
                </a>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal className="md:col-span-7" direction="right">
              <div className="glass-card overflow-hidden aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]">
                <iframe
                  title="Green Caffe location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0917!3d44.4352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucharest!5e0!3m2!1sen!2sro!4v1700000000000"
                  className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          {/* Instagram — oversized link */}
          <Reveal>
            <div className="mt-16 md:mt-20">
              <a
                href="https://instagram.com/greencaffe.bucharest"
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card p-6 md:p-8 flex items-center justify-between cursor-pointer transition-all duration-500"
                onMouseEnter={() => setIgHover(true)}
                onMouseLeave={() => setIgHover(false)}
              >
                <div className="flex items-center gap-4">
                  <Instagram
                    size={20}
                    className={`transition-colors duration-300 ${igHover ? "text-champagne" : "text-muted-foreground"}`}
                  />
                  <span className="font-serif text-xl md:text-3xl text-foreground group-hover:text-champagne transition-colors duration-300">
                    @greencaffe.bucharest
                  </span>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-champagne group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/50">
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-sans tracking-[0.15em] uppercase text-muted-foreground">
            © 2024 Green Caffe
          </p>
          <p className="text-[11px] font-sans tracking-[0.1em] text-muted-foreground/40">
            Made with ❤️ by Bit & Form
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
