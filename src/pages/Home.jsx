import Hero from "../components/Hero.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import UpcomingWorkshops from "../components/UpcomingWorkshops.jsx";
import FAQSection from "../components/FAQSection.jsx";
import FabLabCTA from "../components/FabLabCTA.jsx";
import MakersSection from "../components/MakersSection.jsx";
import Projects from "../components/Projects.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <MakersSection />
      <ServicesGrid />
      <UpcomingWorkshops />
      <Projects />
      <FAQSection />
      <FabLabCTA />
    </>
  );
}
