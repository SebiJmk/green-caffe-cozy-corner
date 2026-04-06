import Reveal from "@/components/Reveal";

const images = [
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600", alt: "Latte art close-up" },
  { src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600", alt: "Wine glass with red wine" },
  { src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600", alt: "Espresso pour" },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600", alt: "Cozy cafe interior with greenery" },
  { src: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600", alt: "Coffee beans macro texture" },
  { src: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600", alt: "Wine being poured into glass" },
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600", alt: "Latte art detail" },
  { src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600", alt: "Red wine close-up" },
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
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </Reveal>
  </section>
);

export default IGGrid;
