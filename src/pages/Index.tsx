import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialSplit from "@/components/EditorialSplit";
import IGGrid from "@/components/IGGrid";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <EditorialSplit />
    <IGGrid />
    <SiteFooter />
  </div>
);

export default Index;
