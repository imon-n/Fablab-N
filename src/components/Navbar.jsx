import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Topbar from "./Topbar";

const educationItems = [
  { to: "/education/courses", label: "Courses & Training Programs" },
  { to: "/education/workshops", label: "Workshops & Seminars" },
  { to: "/education/competitions", label: "Competitions & Hackathons" },
];

const researchItems = [
  { to: "/research/digital-fabrication", label: "Digital Fabrication" },
  { to: "/research/robotics-automation", label: "Robotics & Automation" },
  { to: "/research/ai-ml", label: "AI & Machine Learning" },
  { to: "/research/smart-manufacturing", label: "Smart Manufacturing" },
];

const facilitiesItems = [
  { to: "/facilities/3d-fabrication-lab", label: "3D Fabrication Lab" },
  { to: "/facilities/electronics-robotics-lab", label: "Electronics & Robotics Lab" },
  { to: "/facilities/laser-cutting-lab", label: "Laser Cutting Lab" },
  { to: "/facilities/cnc-woodworking-lab", label: "CNC & Woodworking Lab" },
  { to: "/facilities/graphics-print-lab", label: "Graphics & Print Lab" },
  { to: "/facilities/digital-textile-lab", label: "Digital Textile Lab" },
  { to: "/facilities/competency-development-lab", label: "Competency Development Lab" },
  { to: "/facilities/needle-thread-lab", label: "Needle & Thread Lab" },
  { to: "/facilities/brain-computing-media-lab", label: "Brain Computing & Media Lab" },
];

const bulletinItems = [
  { to: "/bulletin/notice", label: "Notice" },
  { to: "/bulletin/gallery", label: "Gallery & Media" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavDropdown = ({ label, items }) => (
    <div className="relative group">
      <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-cuBlue">
        {label}
      </button>

      <div className="absolute left-0 top-full mt-2 w-64 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-cuBlue"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Topbar MUST be normal (no sticky inside Topbar.jsx) */}
      <Topbar />

      {/* ONLY THIS IS STICKY */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
          
          {/* Logo */}
          <Link to="/">
            <img
              src="/fab-lab-logo.png"
              alt="Fab Lab CU"
              className="h-12 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-cuBlue" : "text-slate-700 hover:text-cuBlue"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-cuBlue" : "text-slate-700 hover:text-cuBlue"
                }`
              }
            >
              About
            </NavLink>

            <NavDropdown label="Education" items={educationItems} />
            <NavDropdown label="Research" items={researchItems} />
            <NavDropdown label="Facilities" items={facilitiesItems} />
            <NavDropdown label="Bulletin" items={bulletinItems} />

            <Link
              to="/booking"
              className="ml-4 px-4 py-2 bg-cuBlue text-white rounded-md hover:opacity-90 transition"
            >
              Book a Slot
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/education/courses" onClick={() => setOpen(false)}>Education</NavLink>
            <NavLink to="/research/digital-fabrication" onClick={() => setOpen(false)}>Research</NavLink>
            <NavLink to="/facilities/3d-fabrication-lab" onClick={() => setOpen(false)}>Facilities</NavLink>
            <NavLink to="/bulletin/notice" onClick={() => setOpen(false)}>Bulletin</NavLink>
            <Link to="/booking" onClick={() => setOpen(false)} className="block bg-cuBlue text-white text-center py-2 rounded">
              Book a Slot
            </Link>
          </div>
        )}
      </header>
    </>
  );
}