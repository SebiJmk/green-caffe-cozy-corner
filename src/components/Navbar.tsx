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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-[72px] px-6 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Green Caffe"
            className="h-11 w-11 rounded-full object-contain"
          />
          <span className="font-serif text-xl font-medium text-foreground hidden sm:inline">
            Green Caffé
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link-organic">
              {l.label}
            </a>
          ))}
          <a href="#location" className="btn-organic text-xs ml-2">
            Find Us
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-foreground/60"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background px-6 pb-6 pt-2 border-t border-border">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="nav-link-organic text-base"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#location"
                onClick={() => setOpen(false)}
                className="btn-organic text-center w-full"
              >
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
