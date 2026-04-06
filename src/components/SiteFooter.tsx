import Reveal from "@/components/Reveal";
import { Instagram, Facebook } from "lucide-react";

const SiteFooter = () => (
  <footer id="footer" className="pt-24 md:pt-32 pb-12 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      {/* Oversized title */}
      <Reveal>
        <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-normal text-charcoal leading-[0.9] tracking-tight mb-20 md:mb-28">
          GREEN
          <br />
          CAFFE
        </h2>
      </Reveal>

      {/* 3-column grid */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Address */}
          <div>
            <p className="label-editorial mb-4">Adresă</p>
            <p className="font-serif text-lg text-charcoal leading-relaxed">
              Bulevardul Regina Elisabeta,
              <br />
              nr. 59
            </p>
            <p className="font-sans text-xs text-muted-foreground tracking-wide mt-1">
              Bucharest, Romania 050014
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="label-editorial mb-4">Social</p>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://instagram.com/greencaffe.bucharest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <a
              href="https://instagram.com/greencaffe.bucharest"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide"
            >
              @greencaffe.bucharest
            </a>
          </div>

          {/* Legal */}
          <div className="md:text-right">
            <p className="label-editorial mb-4">Legal</p>
            <p className="font-sans text-xs text-muted-foreground tracking-wide leading-relaxed">
              © 2026 Green Caffe.
              <br />
              Made with ❤️ by Bit & Form
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </footer>
);

export default SiteFooter;
