import Reveal from "@/components/Reveal";
import { MapPin, Instagram, Facebook } from "lucide-react";
import parkImg from "@/assets/cismigiu-park.jpg";

const Footer = () => {
  return (
    <>
      {/* Location preview — light */}
      <section id="location" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-label">Locație</span>
              <h2 className="section-heading text-3xl md:text-5xl lg:text-[3.25rem]">
                Lângă <em className="italic text-primary">Grădina Cișmigiu</em>
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="card-premium overflow-hidden max-w-4xl mx-auto">
              <div className="relative aspect-[21/9] overflow-hidden">
                <img
                  src={parkImg}
                  alt="Grădina Cișmigiu, copaci și lumină naturală"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                <div className="absolute bottom-5 left-6 flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <p className="font-serif text-lg text-foreground">La doi pași de Cișmigiu</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dark footer */}
      <footer className="bg-footer-bg py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
            {/* Col 1 — Address */}
            <div>
              <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-footer-muted mb-5 font-medium">
                Adresă
              </p>
              <p className="font-serif text-xl md:text-2xl text-footer-fg leading-relaxed mb-2">
                Bulevardul Regina Elisabeta,
                <br />
                nr. 59
              </p>
              <p className="font-sans text-sm text-footer-muted">
                Bucharest, Romania 050014
              </p>
            </div>

            {/* Col 2 — Map */}
            <div className="rounded-xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-full min-h-[200px]">
              <iframe
                title="Green Caffe location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0917!3d44.4352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucharest!5e0!3m2!1sen!2sro!4v1700000000000"
                className="w-full h-full border-0 rounded-xl opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Col 3 — Social */}
            <div className="flex flex-col items-start md:items-end justify-between">
              <div>
                <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-footer-muted mb-5 font-medium md:text-right">
                  Social
                </p>
                <div className="flex items-center gap-5 mb-6">
                  <a
                    href="https://instagram.com/greencaffe.bucharest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-footer-muted/30 flex items-center justify-center text-footer-fg hover:text-primary hover:border-primary transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-footer-muted/30 flex items-center justify-center text-footer-fg hover:text-primary hover:border-primary transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={22} />
                  </a>
                </div>
                <a
                  href="https://instagram.com/greencaffe.bucharest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg text-footer-fg hover:text-primary transition-colors duration-300"
                >
                  @greencaffe.bucharest
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-footer-muted/20 text-center">
            <p className="text-xs font-sans text-footer-muted">
              © 2026 Green Caffe. Made with ❤️ by Bit & Form
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
