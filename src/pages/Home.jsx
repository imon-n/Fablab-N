import Hero from "../components/Hero.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import EquipmentCarousel from "../components/EquipmentCarousel.jsx";
import PricingCards from "../components/PricingCards.jsx";
import ProjectsGallery from "../components/ProjectsGallery.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <EquipmentCarousel />
      {/* <PricingCards /> */}
      <ProjectsGallery />
    </>
  );
}
