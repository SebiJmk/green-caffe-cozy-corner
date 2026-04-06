const segments = [
  { text: "COFFEE FOR THE MIND", italic: false },
  { text: "WINE FOR THE BODY", italic: true },
  { text: "THE GREEN VIBE", italic: false },
];

const Strip = () => (
  <>
    {segments.map((s, i) => (
      <span key={i} className="flex items-center shrink-0">
        {i > 0 && <span className="mx-10 md:mx-14 text-[#F4F1EA]/25 font-light">—</span>}
        <span className={s.italic ? "italic" : ""}>{s.text}</span>
      </span>
    ))}
    <span className="mx-10 md:mx-14 text-[#F4F1EA]/25 font-light">—</span>
  </>
);

const Marquee = () => (
  <section className="bg-[#0A1A12] py-8 md:py-10 overflow-hidden select-none">
    <div className="marquee-track">
      <div className="flex items-center whitespace-nowrap font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F4F1EA] tracking-wide">
        <Strip />
        <Strip />
      </div>
    </div>
  </section>
);

export default Marquee;
