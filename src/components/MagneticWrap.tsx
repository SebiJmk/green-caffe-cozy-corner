import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

const MagneticWrap = ({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrap;
