import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VibeSection from "@/components/VibeSection";
import SnapGrid from "@/components/SnapGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <VibeSection />
      <SnapGrid />
      <Footer />
    </div>
  );
};

export default Index;
