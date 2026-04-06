import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import coffeeImg from "@/assets/coffee-crema-macro.jpg";
import wineImg from "@/assets/wine-minimalist.jpg";

type MenuItem = { name: string; desc: string; price: string };

const dayMenu: MenuItem[] = [
  { name: "V60 Pour Over", desc: "Single-origin Ethiopian Yirgacheffe, bright citrus notes", price: "22 RON" },
  { name: "Flat White", desc: "Double ristretto, velvety microfoam, house blend", price: "18 RON" },
  { name: "Cold Brew", desc: "16-hour steep, Colombian beans, served over ice", price: "20 RON" },
  { name: "Matcha Latte", desc: "Ceremonial grade, oat milk, lightly sweetened", price: "24 RON" },
  { name: "Espresso Tonic", desc: "Double shot over tonic water, lemon zest", price: "22 RON" },
];

const nightMenu: MenuItem[] = [
  { name: "Fetească Neagră", desc: "Glass — Budureasca, Dealu Mare 2021, dark berry", price: "35 RON" },
  { name: "Orange Wine", desc: "Bottle — Cramele Recaș, Solara, skin-contact", price: "180 RON" },
  { name: "Prosecco", desc: "Glass — Extra Dry, fine bubbles, green apple finish", price: "30 RON" },
  { name: "Pinot Noir", desc: "Glass — Domeniul Bogdan, Murfatlar, silky tannins", price: "38 RON" },
  { name: "Negroni", desc: "Campari, gin, sweet vermouth, orange peel", price: "42 RON" },
];

const MenuLine = ({ item, index }: { item: MenuItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="group py-5 border-b border-foreground/[0.06] last:border-0"
  >
    <div className="flex items-baseline justify-between gap-3">
      <span className="font-serif text-lg sm:text-xl text-charcoal shrink-0">{item.name}</span>
      <span className="flex-1 border-b border-dotted border-foreground/15 translate-y-[-4px] mx-2 min-w-[40px]" />
      <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground shrink-0">{item.price}</span>
    </div>
    <p className="font-sans text-xs text-muted-foreground/60 tracking-wide mt-1.5">{item.desc}</p>
  </motion.div>
);

const DayNightMenu = () => {
  const [tab, setTab] = useState<"day" | "night">("day");
  const menu = tab === "day" ? dayMenu : nightMenu;
  const img = tab === "day" ? coffeeImg : wineImg;
  const imgAlt = tab === "day" ? "Specialty coffee crema macro" : "Red wine in glass, moody light";

  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="label-editorial text-center mb-4">The Offering</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-charcoal text-center leading-[1.1] mb-16">
            Day <span className="text-muted-foreground/40">&</span> Night
          </h2>
        </Reveal>

        {/* Toggle */}
        <Reveal>
          <div className="flex justify-center gap-1 mb-16">
            {(["day", "night"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                data-cursor-hover
                className={`relative font-sans text-[10px] font-medium uppercase tracking-[0.3em] px-8 py-3 transition-colors duration-300 ${
                  tab === t
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                {tab === t && (
                  <motion.div
                    layoutId="menu-tab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {t === "day" ? "Day — Coffee" : "Night — Wine"}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Menu list */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {menu.map((item, i) => (
                  <MenuLine key={item.name} item={item} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image */}
          <Reveal className="hidden md:block sticky top-24">
            <AnimatePresence mode="wait">
              <motion.img
                key={tab}
                src={img}
                alt={imgAlt}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default DayNightMenu;
