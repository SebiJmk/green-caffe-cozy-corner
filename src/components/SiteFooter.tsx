import Reveal from "@/components/Reveal";
import { Instagram, Facebook } from "lucide-react";

const SiteFooter = () => (
  <footer id="footer" className="bg-[#0A1A12] text-[#F4F1EA]">
    {/* Grand Sign-off */}
    <div className="pt-32 pb-16">
      <Reveal>
        <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[#F4F1EA]/80 leading-tight">
          A place for the soul.
        </p>
      </Reveal>
    </div>

    {/* Hairline Divider */}
    <div className="border-t border-[#F4F1EA]/20 mx-auto w-[90%]" />

    {/* Precision Grid */}
    <Reveal>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {/* Location */}
        <div>
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#F4F1EA]/50 mb-4">
            Visit Us
          </p>
          <p className="font-sans text-sm tracking-wide text-[#F4F1EA]/70 leading-relaxed">
            Bulevardul Regina Elisabeta, nr. 59,
            <br />
            Bucharest, Romania 050014
          </p>
        </div>

        {/* Social */}
        <div className="md:text-center">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#F4F1EA]/50 mb-4">
            Follow the Journey
          </p>
          <div className="flex items-center gap-3 md:justify-center">
            <a
              href="https://instagram.com/greencaffe.bucharest"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F4F1EA]/70 hover:text-[#F4F1EA] transition-opacity duration-300"
            >
              <Instagram size={16} />
              <span className="font-sans text-sm tracking-wide">@greencaffe.bucharest</span>
            </a>
          </div>
          <a
            href="#"
            className="inline-block mt-3 text-[#F4F1EA]/40 hover:text-[#F4F1EA]/70 transition-opacity duration-300"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>
        </div>

        {/* Signature */}
        <div className="md:text-right">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#F4F1EA]/50 mb-4">
            &nbsp;
          </p>
          <p className="font-sans text-sm tracking-wide text-[#F4F1EA]/40 leading-relaxed">
            © 2026 Green Caffe.
            <br />
            Made with ❤️ by Bit & Form
          </p>
        </div>
      </div>
    </Reveal>
  </footer>
);

export default SiteFooter;
