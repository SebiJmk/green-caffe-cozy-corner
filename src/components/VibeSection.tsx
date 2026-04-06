import Reveal from "@/components/Reveal";
import { Coffee, Wine } from "lucide-react";
import coffeeImg from "@/assets/coffee-crema-macro.jpg";
import wineImg from "@/assets/wine-minimalist.jpg";

const VibeSection = () => {
  return (
    <>
      {/* About */}
      <section id="about" className="py-24 md:py-32 bg-sage">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label">Despre Noi</span>
              <h2 className="section-heading text-3xl md:text-5xl lg:text-[3.25rem] mb-8">
                Unde ritualul dimineții
                <br />
                <em className="italic">întâlnește calmul serii</em>
              </h2>
              <p className="text-muted-foreground font-sans text-base md:text-lg leading-[1.9] max-w-xl mx-auto">
                Lângă Grădina Cișmigiu, Green Caffé e un sanctuar pentru cei care
                apreciază cafeaua de specialitate și eleganța unui pahar de vin curatoriat.
                Două stări, un singur suflet — unde Bucureștiul respiră.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Vibe */}
      <section id="vibe" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-label">The Vibe</span>
              <h2 className="section-heading text-3xl md:text-5xl lg:text-[3.25rem]">
                Two moods. <em className="italic text-primary">One soul.</em>
              </h2>
            </div>
          </Reveal>

          {/* Staggered grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-start">
            {/* Coffee */}
            <Reveal>
              <div className="card-premium group">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={coffeeImg}
                    alt="Specialty coffee crema macro"
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
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal mb-3">
                    Specialty Coffee
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-[1.85]">
                    Single-origin beans from Ethiopian and Colombian farms, brewed
                    with precision. Pour-overs, espressos, and flat whites — each cup
                    an invitation to slow down and think clearly.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Wine */}
            <Reveal delay={0.1}>
              <div className="card-premium group md:mt-16">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={wineImg}
                    alt="Minimalist glass of red wine"
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Wine size={16} className="text-primary" />
                    <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary font-medium">
                      Evening · Unwind
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal mb-3">
                    Curated Wines
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-[1.85]">
                    Romanian Fetească Neagră and European terroirs. As the sun sets
                    behind the gardens, the candles come out and the conversation deepens.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default VibeSection;
