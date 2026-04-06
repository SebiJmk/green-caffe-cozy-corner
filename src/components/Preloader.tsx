import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 1500);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-xl sm:text-2xl text-charcoal tracking-wide"
          >
            Pouring…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
