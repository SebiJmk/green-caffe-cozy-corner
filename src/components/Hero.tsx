import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background pt-20"
    >
      <div className="container mx-auto px-6 md:px-8 text-center max-w-4xl">
        {/* Decorative icon — combined coffee cup and wine glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex justify-center"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            {/* Coffee cup (left) */}
            <path
              d="M8 22h18v4a12 12 0 01-12 12h-2A8 8 0 014 30v-4a4 4 0 014-4z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M26 24h4a4 4 0 010 8h-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="17" y1="14" x2="17" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="22" y1="16" x2="22" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            {/* Wine glass (right) */}
            <path
              d="M40 18c0 6 4 10 8 12v10M56 18c0 6-4 10-8 12"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <ellipse cx="48" cy="18" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="44" y1="40" x2="52" y2="40" stroke="currentColor" strokeWidth="1.5" />
            {/* Center divider */}
            <line x1="32" y1="12" x2="32" y2="48" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.15] text-foreground mb-8"
        >
          A cup of coffee for mind,
          <br className="hidden sm:block" />{" "}
          <em className="italic">glass of wine for the body,</em>
          <br className="hidden sm:block" />{" "}
          a place for the soul.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-lg md:text-xl font-sans text-muted-foreground tracking-wide mb-12"
        >
          We are Green 💚
        </motion.p>

        <motion.a
          href="#location"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="btn-cta text-base px-10 py-3"
        >
          Find Us
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
