import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import MagneticWrap from "@/components/MagneticWrap";
import { Instagram, Phone, MapPin, ArrowUpRight } from "lucide-react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1!2d26.0888!3d44.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff43b6a6a4e7%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1700000000000";

const ActionTile = ({
  label,
  children,
  href,
}: {
  label: string;
  children: React.ReactNode;
  href?: string;
}) => {
  const Tag = href ? "a" : "div";
  return (
    <MagneticWrap strength={0.15}>
      <Tag
        {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
        data-cursor-hover
        className="group block bg-[#F4F1EA]/[0.04] border border-[#F4F1EA]/10 rounded-sm px-8 py-8 md:py-10
          transition-all duration-500 hover:bg-[#F4F1EA]/[0.08] hover:border-[#F4F1EA]/20
          hover:shadow-[0_8px_40px_-12px_rgba(244,241,234,0.08)]"
      >
        <p className="font-sans text-[9px] font-medium uppercase tracking-[0.35em] text-[#F4F1EA]/40 mb-5">
          {label}
        </p>
        {children}
      </Tag>
    </MagneticWrap>
  );
};

const SiteFooter = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "start 0.4"],
  });
  const mapOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const mapScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <footer id="footer" className="relative bg-[#0A1A12]">
      {/* ── Ambient Map ── */}
      <div ref={mapRef} className="relative">
        <motion.div style={{ opacity: mapOpacity, scale: mapScale }} className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
          <iframe
            src={MAP_SRC}
            title="Green Caffe location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0 grayscale invert-[0.92] contrast-[1.15] brightness-[0.7] hue-rotate-[120deg]"
          />
          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A1A12] via-transparent to-[#0A1A12]/40" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0A1A12]/30 via-transparent to-[#0A1A12]/30" />

          {/* Floating directions pill */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <MagneticWrap strength={0.25}>
              <a
                href="https://maps.google.com/?q=Bulevardul+Regina+Elisabeta+59,+Bucharest"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group flex items-center gap-3 bg-[#0A1A12]/60 backdrop-blur-xl border border-[#F4F1EA]/15
                  rounded-full px-8 py-4 transition-all duration-500
                  hover:bg-[#0A1A12]/80 hover:border-[#F4F1EA]/30 hover:shadow-[0_0_40px_-8px_rgba(244,241,234,0.1)]"
              >
                <MapPin size={14} className="text-[#F4F1EA]/60 group-hover:text-[#F4F1EA] transition-colors duration-500" />
                <span className="font-serif italic text-sm text-[#F4F1EA]/80 group-hover:text-[#F4F1EA] transition-colors duration-500">
                  Get Directions
                </span>
                <ArrowUpRight size={12} className="text-[#F4F1EA]/40 group-hover:text-[#F4F1EA]/70 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </MagneticWrap>
          </div>
        </motion.div>

        {/* ── Concierge Console (glassmorphism, floating over map) ── */}
        <div className="relative z-10 -mt-16 md:-mt-24 max-w-5xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="bg-[#0A1A12]/80 backdrop-blur-2xl border border-[#F4F1EA]/10 rounded-sm p-8 md:p-14">
              <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F4F1EA]/90 leading-tight mb-3">
                Să bem o cafea.
                <br />
                <span className="text-[#F4F1EA]/50">Sau un vin.</span>
              </h2>
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#F4F1EA]/30 mb-12">
                Next to Cișmigiu Gardens — Bucharest
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <ActionTile label="Reservations & Contact">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#F4F1EA]/15 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#F4F1EA]/50" />
                    </div>
                    <span className="font-serif text-xl sm:text-2xl text-[#F4F1EA]/80 group-hover:text-[#F4F1EA] transition-colors duration-500">
                      0723 508 244
                    </span>
                  </div>
                </ActionTile>

                <ActionTile label="Join the Community" href="https://www.instagram.com/greencaffe.bucharest">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#F4F1EA]/15 flex items-center justify-center shrink-0">
                      <Instagram size={16} className="text-[#F4F1EA]/50" />
                    </div>
                    <span className="font-serif text-xl sm:text-2xl text-[#F4F1EA]/80 group-hover:text-[#F4F1EA] transition-colors duration-500">
                      @greencaffe.bucharest
                    </span>
                  </div>
                </ActionTile>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Footer Sign-off ── */}
        <div className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-14">
          <Reveal>
            <div className="border-t border-[#F4F1EA]/8 mb-10" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F4F1EA]/25">
                © 2026 Green Caffe
              </p>

              <p className="font-sans text-xs tracking-[0.2em] text-[#F4F1EA]/30">
                Bulevardul Regina Elisabeta, nr. 59, București
              </p>

              <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#F4F1EA]/20">
                Made with ❤️ by Bit & Form
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
