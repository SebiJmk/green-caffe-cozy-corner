import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/green-caffe-logo.png";

const links = [
  { label: "Acasă", href: "#home" },
  { label: "Vibe", href: "#coffee" },
  { label: "Locație", href: "#footer" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroRef.current = document.getElementById("home");
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.5, 0.85], [0, -32]);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-10">
        {/* Logo */}
        <a href="#home" className="shrink-0 flex items-center gap-3" data-cursor-hover>
          <img
            src={logo}
            alt="Green Caffe"
            className="h-12 w-12 md:h-14 md:w-14 rounded-full object-contain"
          />
          <span className="hidden sm:block font-serif text-lg text-charcoal tracking-wide">
            Green Caffe
          </span>
        </a>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor-hover
              className="label-editorial hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#footer"
          data-cursor-hover
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-[10px] font-sans font-medium uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors duration-300"
        >
          Find Us
        </a>

        <button className="md:hidden text-foreground/50" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="pointer-events-auto md:hidden bg-background px-6 pb-6 pt-2 border-t border-border">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 label-editorial text-sm">
              {l.label}
            </a>
          ))}
          <a href="#footer" onClick={() => setOpen(false)} className="block mt-2 py-3 text-center rounded-full bg-primary text-primary-foreground label-editorial text-sm">
            Find Us
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
