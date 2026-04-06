import Reveal from "@/components/Reveal";
import { Coffee, Wine } from "lucide-react";
import coffeeDark from "@/assets/coffee-dark.jpg";
import wineDark from "@/assets/wine-dark.jpg";

const VibeSection = () => {
  return (
    <>
      {/* About */}
      <section id="about" className="py-32 md:py-44 relative">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <Reveal>
            <div className="text-center">
              <span className="section-label">About</span>
              <h2 className="section-heading text-3xl md:text-5xl lg:text-6xl mb-10">
                Where morning ritual
                <br />
                <span className="text-champagne italic">meets evening elegance</span>
              </h2>
              <p className="text-muted-foreground font-sans text-base md:text-lg leading-[2] max-w-2xl mx-auto">
                Green Caffé lives in two worlds. By day, a specialty coffee sanctuary — single-origin
                beans, pour-overs, and the quiet hum of focused minds. By night, the lights dim,
                candles flicker, and we become Bucharest's most intimate wine bar.
                Same soul, different rhythm.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Vibe — Bento Grid */}
      <section id="vibe" className="py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <Reveal>
            <span className="section-label">The Vibe</span>
            <h2 className="section-heading text-3xl md:text-5xl lg:text-6xl mb-14">
              Two moods.{" "}
              <span className="text-champagne italic">One soul.</span>
            </h2>
          </Reveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Coffee — large card */}
            <Reveal className="md:col-span-7" direction="left">
              <div className="glass-card overflow-hidden group h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={coffeeDark}
                    alt="Specialty coffee latte art"
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Coffee size={16} className="text-champagne" />
                      <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-champagne">
                        Daytime Focus
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                      Specialty Coffee
                    </h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-muted-foreground font-sans text-sm leading-[1.9]">
                    Single-origin Ethiopian and Colombian beans, brewed with precision.
                    Pour-overs, espressos, and the quiet focus of a morning ritual.
                    Every cup is an invitation to slow down and think clearly.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right column — stacked */}
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
              {/* Wine card */}
              <Reveal direction="right">
                <div className="glass-card overflow-hidden group">
                  <div className="relative aspect-[16/12] overflow-hidden">
                    <img
                      src={wineDark}
                      alt="Wine glass in candlelight"
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center gap-3 mb-2">
                        <Wine size={16} className="text-champagne" />
                        <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-champagne">
                          Evening Unwind
                        </span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground">
                        Curated Wines
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-muted-foreground font-sans text-sm leading-[1.9]">
                      Romanian Fetească Neagră, European terroirs. Candlelight, conversation,
                      and a glass that tells a story.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Green accent card */}
              <Reveal direction="right" delay={0.1}>
                <div className="glass-card p-8 md:p-10 flex flex-col items-center justify-center text-center">
                  <p className="text-4xl mb-4">💚</p>
                  <p className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                    We are <span className="text-gradient-green">Green</span>
                  </p>
                  <p className="text-muted-foreground font-sans text-xs tracking-[0.2em] uppercase">
                    Bucharest · Est. 2019
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VibeSection;
