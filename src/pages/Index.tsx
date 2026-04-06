import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialSplit from "@/components/EditorialSplit";
import DayNightMenu from "@/components/DayNightMenu";
import IGGrid from "@/components/IGGrid";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Preloader onComplete={onComplete} />}
      <CustomCursor />
      <SmoothScroll>
        <div className={`min-h-screen bg-background ${loaded ? "" : "invisible"}`}>
          <Navbar />
          <Hero />
          <EditorialSplit />
          <DayNightMenu />
          <IGGrid />
          <SiteFooter />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Index;
