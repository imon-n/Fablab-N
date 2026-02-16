import Hero from "../components/Hero.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import EquipmentCarousel from "../components/EquipmentCarousel.jsx";
import UpcomingWorkshops from "../components/UpcomingWorkshops.jsx";
import FAQSection from "../components/FAQSection.jsx";
import FabLabCTA from "../components/FabLabCTA.jsx";
import MakersSection from "../components/MakersSection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <MakersSection />
      <ServicesGrid />
      <EquipmentCarousel />
      <UpcomingWorkshops />
      <FAQSection />
      <FabLabCTA />
    </>
  );
}
