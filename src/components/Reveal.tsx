import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.35 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(6px)", "blur(0px)"]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, filter }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
