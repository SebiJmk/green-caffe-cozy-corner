import Reveal from "@/components/Reveal";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";
import ig7 from "@/assets/ig-7.jpg";
import ig8 from "@/assets/ig-8.jpg";

const images = [
  { src: ig1, alt: "Latte art close-up" },
  { src: ig2, alt: "Wine glass with red wine" },
  { src: ig3, alt: "V60 pour over setup" },
  { src: ig4, alt: "Botanical cafe interior" },
  { src: ig5, alt: "Coffee beans macro" },
  { src: ig6, alt: "Wine being poured" },
  { src: ig7, alt: "Espresso on travertine" },
  { src: ig8, alt: "Wine cellar with candles" },
];

const IGGrid = () => (
  <section className="py-24 md:py-32">
    <Reveal>
      <p className="label-editorial text-center mb-16">Live from the Shop</p>
    </Reveal>

    <Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {images.map((img, i) => (
          <a
            key={i}
            href="https://www.instagram.com/greencaffe.bucharest"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square overflow-hidden group"
            data-cursor-hover
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={768}
              height={768}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </Reveal>
  </section>
);

export default IGGrid;
