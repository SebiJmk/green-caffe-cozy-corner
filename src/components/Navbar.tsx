import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/green-caffe-logo.png";

const navLinks = [
  { label: "Despre", href: "#about" },
  { label: "Vibe", href: "#vibe" },
  { label: "Locație", href: "#location" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    setVisible(y < 80 || y < lastY);
    setLastY(y);
  }, [lastY]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-pill px-3 py-2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 md:gap-5">
        <a href="#home" className="shrink-0">
          <img src={logo} alt="Green Caffe" className="h-9 w-9 rounded-full object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link-glass">{l.label}</a>
          ))}
        </div>

        <a href="#location" className="hidden md:inline-flex btn-brass-outline ml-1">
          Find Us
        </a>

        <button className="md:hidden text-foreground/50 ml-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 pt-3 border-t border-foreground/10 flex flex-col gap-3 pb-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link-glass text-sm">{l.label}</a>
          ))}
          <a href="#location" onClick={() => setOpen(false)} className="btn-brass-outline text-center mt-1">Find Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
