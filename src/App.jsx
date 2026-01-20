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

import AppliedRoboticsLab from "./pages/Facilities/AppliedRoboticsLab/AppliedRoboticsLab.jsx";
import AutomationLab from "./pages/Facilities/AutomationLab.jsx";
import CybarLab from "./pages/Facilities/CybarLab.jsx";
import DesignMediaStudio from "./pages/Facilities/DesignMediaStudio.jsx";
import Notice from "./pages/Bulletin/Notice.jsx";
import Blog from "./pages/Bulletin/Blog.jsx";
import GalleryMedia from "./pages/Bulletin/GalleryMedia.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />

          {/* facilities routes */}
          <Route
            path="/facilities/applied-robotics-lab"
            element={<AppliedRoboticsLab />}
          />
          <Route
            path="/facilities/advanced-automation-lab"
            element={<AutomationLab />}
          />
          <Route
            path="/facilities/cyber-physical-systems-lab"
            element={<CybarLab />}
          />
          <Route
            path="/facilities/design-media-studio"
            element={<DesignMediaStudio />}
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
