import Reveal from "@/components/Reveal";
import { MapPin, Clock, Instagram, ArrowUpRight, Trees } from "lucide-react";
import parkImg from "@/assets/cismigiu-park.jpg";

const Footer = () => {
  return (
    <>
      {/* Location */}
      <section id="location" className="py-28 md:py-36 bg-sage">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <span className="section-label">Location</span>
            <h2 className="section-heading text-3xl md:text-5xl lg:text-[3.5rem] mb-16 max-w-lg">
              Find us next to
              <br />
              <em className="italic text-primary">Cișmigiu Gardens</em>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Info card */}
            <Reveal className="md:col-span-5" direction="left">
              <div className="card-premium p-8 md:p-10 space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary font-medium mb-2">
                      Address
                    </p>
                    <p className="font-serif text-lg text-foreground leading-relaxed">
                      Bulevardul Regina Elisabeta,
                      <br />
                      nr. 59, Bucharest, Romania 050014
                    </p>
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-border" />

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary font-medium mb-2">
                      Hours
                    </p>
                    <div className="font-sans text-sm text-muted-foreground space-y-1">
                      <p>Mon – Fri: 7:00 – 23:00</p>
                      <p>Sat – Sun: 9:00 – 00:00</p>
                    </div>
                  </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-border" />

                {/* Instagram */}
                <a
                  href="https://instagram.com/greencaffe.bucharest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between hover:bg-sage/60 -mx-3 px-3 py-2 rounded-xl transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center shrink-0">
                      <Instagram size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary font-medium mb-0.5">
                        Instagram
                      </p>
                      <p className="font-sans text-sm text-foreground font-medium">
                        @greencaffe.bucharest
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              </div>
            </Reveal>

            {/* Park image card */}
            <Reveal className="md:col-span-7" direction="right">
              <div className="card-premium overflow-hidden">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={parkImg}
                    alt="Cișmigiu Gardens, lush green trees and sunlight"
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                    <Trees size={18} className="text-primary" />
                    <p className="font-serif text-lg text-foreground">
                      Steps from Grădina Cișmigiu
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-background">
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-muted-foreground">
            © 2024 Green Caffe. All rights reserved.
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
