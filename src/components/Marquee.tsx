const phrase = "COFFEE FOR THE MIND ✦ WINE FOR THE BODY ✦ THE GREEN VIBE ✦ ";

const textStyle: React.CSSProperties = {
  color: "transparent",
  WebkitTextStroke: "1px rgba(244,241,234,0.45)",
};

const Marquee = () => (
  <section className="bg-[#0A1A12] py-8 md:py-10 overflow-hidden select-none">
    <div className="marquee-track">
      <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-wide whitespace-nowrap" style={textStyle}>
        {phrase}
      </span>
      <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-wide whitespace-nowrap" style={textStyle}>
        {phrase}
      </span>
    </div>
  </section>
);

export default Marquee;
