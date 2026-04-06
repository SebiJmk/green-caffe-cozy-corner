import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/green-caffe-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Vibe", href: "#vibe" },
  { label: "Location", href: "#location" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Green Caffe logo"
            className="h-12 w-12 object-contain rounded-full"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a href="#location" className="btn-cta ml-2">
            Find Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground/70"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="nav-link text-base"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#location" onClick={() => setOpen(false)} className="btn-cta inline-block text-center">
                Find Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
