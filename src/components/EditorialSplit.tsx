import Reveal from "@/components/Reveal";
import coffeeImg from "@/assets/coffee-crema-macro.jpg";
import wineImg from "@/assets/wine-minimalist.jpg";

const EditorialSplit = () => (
  <>
    {/* Coffee — image left, text right */}
    <section id="coffee" className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      <Reveal className="overflow-hidden">
        <img
          src={coffeeImg}
          alt="Specialty coffee crema macro texture"
          loading="lazy"
          width={900}
          height={1200}
          className="w-full h-full min-h-[50vh] md:min-h-full object-cover"
        />
      </Reveal>

      <Reveal className="flex items-center px-10 md:px-16 lg:px-24 py-16 md:py-0">
        <div className="max-w-sm">
          <p className="label-editorial mb-6">Daytime · Specialty Coffee</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15] mb-6">
            Daytime
            <br />
            <em className="italic">Focus.</em>
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-[2] tracking-wide">
            Single-origin Ethiopian and Colombian beans, brewed with precision.
            Pour-overs, espressos, and flat whites — each cup an invitation to
            slow down and think clearly. The morning light streams through tall
            windows while Cișmigiu unfolds outside.
          </p>
        </div>
      </Reveal>
    </section>

    {/* Wine — text left, image right */}
    <section id="wine" className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      <Reveal className="flex items-center px-10 md:px-16 lg:px-24 py-16 md:py-0 order-2 md:order-1">
        <div className="max-w-sm">
          <p className="label-editorial mb-6">Evening · Curated Wines</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15] mb-6">
            Evening
            <br />
            <em className="italic">Unwind.</em>
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-[2] tracking-wide">
            Romanian Fetească Neagră and European terroirs. As the sun sets behind
            the gardens, the playlist shifts, candles come out, and a carefully
            curated glass tells its story. Conversations deepen. You're exactly
            where you need to be.
          </p>
        </div>
      </Reveal>

      <Reveal className="overflow-hidden order-1 md:order-2">
        <img
          src={wineImg}
          alt="Minimalist glass of red wine on stone"
          loading="lazy"
          width={900}
          height={1200}
          className="w-full h-full min-h-[50vh] md:min-h-full object-cover"
        />
      </Reveal>
    </section>
  </>
);

export default EditorialSplit;
