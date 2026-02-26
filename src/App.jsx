import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";
import Equipment from "./pages/Equipment.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Bulletin/Blog.jsx";
import GalleryMedia from "./pages/Bulletin/GalleryMedia.jsx";
import Notice from "./pages/Bulletin/Notice.jsx";
import FacilitiesPage from "./pages/FacilitiesPage.jsx";

import T3DPrintinglab from "./pages/Facilities/ThreeD/T3DPrintinglab.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import ElectronicRoboticLab from "./pages/Facilities/electronicRoboticLab/electronicRoboticLab.jsx";
import LaserLab from "./pages/Facilities/laserLab/LaserLab.jsx";
import CncLab from "./pages/Facilities/cncLab/CncLab.jsx";
import GraphicsLab from "./pages/Facilities/graphicsLab/GraphicsLab.jsx";
import TextileLab from "./pages/Facilities/textilelab/TextileLab.jsx";
import CompetencyLab from "./pages/Facilities/competency/CompetencyLab.jsx";
import BrainLab from "./pages/Facilities/brainLab/BrainLab.jsx";
import NeedleLab from "./pages/Facilities/needleLab/NeedleLab.jsx";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/facilities" element={<FacilitiesPage />} />

          {/* facilities routes */}
            <Route
              path="/facilities/3dlab"
              element={<T3DPrintinglab />}
            />
            <Route
              path="/facilities/electronics-robotics-lab"
              element={<ElectronicRoboticLab />}
            />
            <Route
              path="/facilities/laser-cutting-lab"
              element={<LaserLab />}
            />
            <Route
              path="/facilities/cnc-woodworking-lab"
              element={<CncLab />}
            />
            <Route
              path="/facilities/graphics-print-lab"
              element={<GraphicsLab />}
            />
            <Route
              path="/facilities/digital-textile-lab"
              element={<TextileLab />}
            />
            <Route
              path="/facilities/competency-development-lab"
              element={<CompetencyLab />}
            />
            <Route
              path="/facilities/brain-computing-lab"
              element={<BrainLab />}
            />
            <Route
              path="/facilities/needle-thread-lab"
              element={<NeedleLab />}
            />

          {/* Bulletin  */}
          <Route path="/bulletin/notice" element={<Notice />} />
          <Route path="/bulletin/gallery" element={<GalleryMedia />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
