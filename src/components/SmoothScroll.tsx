import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Support anchor clicks
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a[href^='#']");
      if (target) {
        const href = target.getAttribute("href");
        if (href) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el as HTMLElement, { offset: -64 });
          }
        }
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
