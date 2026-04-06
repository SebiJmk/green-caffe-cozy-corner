import Reveal from "@/components/Reveal";
import { Camera } from "lucide-react";

const SnapGrid = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label">#Snapshots</span>
            <h2 className="section-heading text-3xl md:text-5xl lg:text-6xl mb-4">
              #SNAPSHOTS
            </h2>
            <p className="text-muted-foreground font-sans text-xs md:text-sm tracking-[0.12em] max-w-lg mx-auto leading-relaxed">
              An ideal display of your real-time community feed.
            </p>
            <p className="text-brass/60 font-sans text-[10px] tracking-[0.2em] uppercase mt-2">
              Integrate your Instagram feed here.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative">
            {/* Floating label */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 glass-pill px-5 py-2">
              <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-brass/70 font-medium whitespace-nowrap">
                Visual Placeholder for the Upcoming Live IG Feed
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="glass aspect-square flex items-center justify-center hover:bg-foreground/[0.04]"
                >
                  <Camera size={20} className="text-foreground/10" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SnapGrid;
