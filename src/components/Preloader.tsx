import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0); // 0 = fade in text, 1 = hold, 2 = wipe out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 800);
    }, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center gap-6"
        >
          {/* Thin line grows */}
          <motion.span
            className="block w-px bg-charcoal/20 origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: phase >= 1 ? 1 : 0.4 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: 40 }}
          />

          {/* Text */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: phase >= 2 ? -20 : 0,
                opacity: phase >= 2 ? 0 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-lg sm:text-xl text-charcoal/70 tracking-[0.15em]"
            >
              Pouring…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
