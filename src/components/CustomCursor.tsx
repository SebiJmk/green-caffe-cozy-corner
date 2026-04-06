import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 400 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 400 });

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) {
      setHidden(true);
      return;
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], [data-cursor-hover]")) {
        setHovering(true);
      }
    };

    const onOut = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  const size = hovering ? 48 : 10;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference rounded-full"
      style={{
        x: springX,
        y: springY,
        width: size,
        height: size,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: hovering ? "rgba(244,241,234,0.15)" : "#F4F1EA",
        border: hovering ? "1px solid rgba(244,241,234,0.4)" : "none",
        transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border 0.3s ease",
      }}
    />
  );
};

export default CustomCursor;
