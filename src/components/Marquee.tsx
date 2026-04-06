import { motion } from "framer-motion";

const items = [
  "SPECIALTY COFFEE",
  "CURATED WINES",
  "CIȘMIGIU GARDENS",
  "GREEN CAFFE",
];

const strip = items.map((t) => `✦ ${t} `).join("");
const doubled = strip + strip;

const Marquee = () => (
  <section className="bg-[#0A1A12] py-5 overflow-hidden select-none">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
    >
      <span className="font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-[#F4F1EA]/70">
        {doubled}
      </span>
    </motion.div>
  </section>
);

export default Marquee;
