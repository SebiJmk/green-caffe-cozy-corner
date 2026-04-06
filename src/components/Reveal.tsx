import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const Reveal = ({ children, className = "", delay = 0, direction = "up" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.35 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], direction === "up" ? [50, 0] : [0, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [-30, 0] : direction === "right" ? [30, 0] : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, x }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
