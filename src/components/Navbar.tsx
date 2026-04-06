import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/green-caffe-logo.png";

const navLinks = [
  { label: "Acasă", href: "#home" },
  { label: "Despre Noi", href: "#about" },
  { label: "Locație", href: "#location" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-500 ${scrolled ? "shadow-sm" : ""}`}>
      <div className="container mx-auto flex items-center justify-between h-[72px] px-6 md:px-8">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Green Caffe" className="h-11 w-11 rounded-full object-contain" />
          <span className="font-serif text-xl font-medium text-foreground hidden sm:inline">Green Caffé</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link-organic">{l.label}</a>
          ))}
          <a href="#location" className="btn-organic text-xs ml-2">Află unde suntem</a>
        </div>

        <button className="md:hidden text-foreground/60" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background px-6 pb-6 pt-2 border-t border-border">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="nav-link-organic text-base">{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#location" onClick={() => setOpen(false)} className="btn-organic text-center w-full">Află unde suntem</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
