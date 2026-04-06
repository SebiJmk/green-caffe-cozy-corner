import Reveal from "@/components/Reveal";
import { Camera } from "lucide-react";

const IGGrid = () => (
  <section className="py-24 md:py-32">
    <Reveal>
      <p className="label-editorial text-center mb-16">Live from the Shop</p>
    </Reveal>

    <Reveal>
      <div className="relative">
        {/* Floating badge */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-background/90 backdrop-blur-sm px-5 py-2 rounded-full border border-border">
          <p className="text-[9px] font-sans font-medium uppercase tracking-[0.25em] text-primary whitespace-nowrap">
            IG Feed Integration Ready
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-foreground/[0.03] flex items-center justify-center border-[0.5px] border-foreground/[0.04] hover:bg-foreground/[0.05] transition-colors duration-300"
            >
              <Camera size={20} className="text-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default IGGrid;
