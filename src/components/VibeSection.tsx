import Reveal from "@/components/Reveal";
import { Coffee, Wine, Leaf } from "lucide-react";
import coffeeImg from "@/assets/coffee-dark.jpg";
import wineImg from "@/assets/wine-dark.jpg";

const VibeSection = () => {
  return (
    <>
      {/* About */}
      <section id="about" className="py-32 md:py-44">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <Reveal>
            <div className="text-center">
              <span className="section-label">Despre</span>
              <h2 className="section-heading text-3xl md:text-5xl lg:text-6xl mb-10">
                Where morning ritual
                <br />
                <span className="text-brass italic">meets evening elegance</span>
              </h2>
              <p className="text-muted-foreground font-sans text-sm md:text-base leading-[2] tracking-wide max-w-2xl mx-auto">
                Nestled beside the lush Cișmigiu Gardens, Green Caffé is a sanctuary
                for those who appreciate the slow craft of specialty coffee and
                the quiet elegance of a curated glass of wine. Two moods, one soul —
                where Bucharest breathes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Vibe — Glass Bento */}
      <section id="vibe" className="py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <Reveal>
            <span className="section-label">The Vibe</span>
            <h2 className="section-heading text-3xl md:text-5xl lg:text-6xl mb-14">
              Two moods.{" "}
              <span className="text-brass italic">One soul.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Coffee — large glass panel */}
            <Reveal className="md:col-span-7">
              <div className="glass glow-warm group overflow-hidden h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={coffeeImg}
                    alt="Specialty coffee crema"
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <Coffee size={14} className="text-brass" />
                      <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-brass font-medium">
                        Daytime · Focus
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">Specialty Coffee</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-muted-foreground font-sans text-xs md:text-sm leading-[2] tracking-wide">
                    Single-origin Ethiopian and Colombian beans, brewed with precision.
                    Pour-overs, espressos, and flat whites — each cup an invitation to slow down.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right stack */}
            <div className="md:col-span-5 flex flex-col gap-5">
              {/* Wine panel */}
              <Reveal>
                <div className="glass glow-cool group overflow-hidden">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={wineImg}
                      alt="Wine glass in candlelight"
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <Wine size={14} className="text-brass" />
                        <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-brass font-medium">
                          Evening · Unwind
                        </span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground">Curated Wines</h3>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-muted-foreground font-sans text-xs leading-[2] tracking-wide">
                      Romanian Fetească Neagră and European terroirs. Candlelight,
                      conversation, and a glass that tells a story.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Green accent panel */}
              <Reveal delay={0.1}>
                <div className="glass p-7 md:p-8 flex items-center gap-5">
                  <div className="w-11 h-11 rounded-full bg-forest/20 flex items-center justify-center shrink-0">
                    <Leaf size={18} className="text-forest-glow" />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground">
                      Suntem <span className="text-gradient-forest">Green</span> 💚
                    </p>
                    <p className="text-muted-foreground font-sans text-[11px] tracking-[0.15em] mt-1">
                      Next to Cișmigiu Gardens — Bucharest
                    </p>
                  </div>
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
