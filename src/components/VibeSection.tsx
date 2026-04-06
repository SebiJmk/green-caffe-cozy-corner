import Reveal from "@/components/Reveal";
import { Coffee, Wine, Leaf } from "lucide-react";
import coffeeImg from "@/assets/coffee-crema-macro.jpg";
import wineImg from "@/assets/wine-minimalist.jpg";

const VibeSection = () => {
  return (
    <>
      {/* About — soft sage background */}
      <section id="about" className="py-28 md:py-36 bg-sage">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label">About</span>
              <h2 className="section-heading text-3xl md:text-5xl lg:text-[3.5rem] mb-8">
                Where the ritual of morning
                <br />
                <em className="italic">meets the calm of evening</em>
              </h2>
              <p className="text-muted-foreground font-sans text-base md:text-lg leading-[1.9] max-w-xl mx-auto">
                Nestled beside the lush Cișmigiu Gardens, Green Caffé is a sanctuary
                for those who appreciate the slow craft of specialty coffee and
                the quiet elegance of a curated glass of wine. Two moods, one soul —
                where Bucharest breathes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Vibe — asymmetric cards */}
      <section id="vibe" className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <span className="section-label">The Vibe</span>
            <h2 className="section-heading text-3xl md:text-5xl lg:text-[3.5rem] mb-16 max-w-lg">
              Two moods.
              <br />
              <em className="italic text-primary">One soul.</em>
            </h2>
          </Reveal>

          {/* Asymmetric grid */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Coffee card — larger */}
            <Reveal className="md:col-span-7" direction="left">
              <div className="card-premium group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={coffeeImg}
                    alt="Specialty coffee crema macro texture"
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Coffee size={16} className="text-primary" />
                    <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary font-medium">
                      Daytime · Focus
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground font-light mb-3">
                    Specialty Coffee
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-[1.8]">
                    Single-origin beans sourced from Ethiopian and Colombian farms,
                    brewed with precision. Pour-overs, espressos, and flat whites
                    — each cup an invitation to slow down and think clearly.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right column */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 md:mt-16">
              {/* Wine card */}
              <Reveal direction="right">
                <div className="card-premium group">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={wineImg}
                      alt="Minimalist glass of red wine on stone"
                      loading="lazy"
                      width={900}
                      height={1200}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7 md:p-8">
                    <div className="flex items-center gap-2.5 mb-3">
                      <Wine size={16} className="text-primary" />
                      <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary font-medium">
                        Evening · Unwind
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-foreground font-light mb-3">
                      Curated Wines
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-[1.8]">
                      Romanian Fetească Neagră and European terroirs. As the sun sets
                      behind the gardens, the candles come out and the conversation deepens.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Green accent card */}
              <Reveal direction="right" delay={0.1}>
                <div className="card-premium p-8 md:p-10 flex items-center gap-5 bg-sage">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Leaf size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground font-medium">
                      We are <span className="text-primary">Green</span> 💚
                    </p>
                    <p className="text-muted-foreground font-sans text-xs mt-1">
                      Next to Cișmigiu Gardens · Bucharest
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
