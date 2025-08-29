import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SimulationModules } from "@/components/SimulationModules";
import { RegionSelector } from "@/components/RegionSelector";
import { EmergencyResources } from "@/components/EmergencyResources";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SimulationModules />
        <RegionSelector />
        <EmergencyResources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;