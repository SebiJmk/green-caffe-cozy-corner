import Reveal from "@/components/Reveal";
import { Camera } from "lucide-react";

const SnapGrid = () => {
  return (
    <section className="py-24 md:py-32 bg-sage">
      <div className="container mx-auto px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label">Instagram</span>
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-3">
              Snapshots
            </h2>
            <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
              Concept de feed — An ideal display of your real-time community.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <Reveal>
          <div className="relative max-w-4xl mx-auto">
            {/* Floating label */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-card px-5 py-2 rounded-full shadow-sm">
              <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground font-medium whitespace-nowrap">
                Visual Placeholder for Live Feed
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-foreground/[0.03] border border-foreground/[0.04] flex items-center justify-center transition-colors duration-300 hover:bg-foreground/[0.06]"
                >
                  <Camera size={20} className="text-foreground/15" />
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
