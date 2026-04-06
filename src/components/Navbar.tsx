import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/green-caffe-logo.png";

const links = [
  { label: "Acasă", href: "#home" },
  { label: "Despre", href: "#coffee" },
  { label: "Locație", href: "#footer" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-10">
        <a href="#home" className="shrink-0">
          <img src={logo} alt="Green Caffe" className="h-10 w-10 rounded-full object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-editorial hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#footer" className="hidden md:inline-flex text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-primary hover:text-forest-light transition-colors duration-300">
          Find Us →
        </a>

        <button className="md:hidden text-foreground/50" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background px-6 pb-6 pt-2 border-t border-border">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 label-editorial text-sm">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
