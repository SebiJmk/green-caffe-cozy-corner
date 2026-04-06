import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/green-caffe-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Vibe", href: "#vibe" },
  { label: "Locate", href: "#location" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <nav
      className={`floating-pill transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2 md:gap-6">
        {/* Logo badge */}
        <a href="#home" className="shrink-0">
          <img
            src={logo}
            alt="Green Caffe"
            className="h-9 w-9 rounded-full object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link-dark">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#location" className="hidden md:inline-flex btn-find ml-2">
          Find Us
        </a>

        {/* Mobile */}
        <button
          className="md:hidden text-neutral-600 ml-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-3 pt-3 border-t border-neutral-200 flex flex-col gap-3 pb-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-link-dark text-sm"
            >
              {l.label}
            </a>
          ))}
          <a href="#location" onClick={() => setOpen(false)} className="btn-find text-center mt-1">
            Find Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
