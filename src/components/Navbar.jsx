import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
  {
    to: "/facilities/applied-robotics-lab",
    label: "Applied Robotics Lab",
  },
  {
    to: "/facilities/cyber-physical-systems-lab",
    label: "Cyber Physical Systems Lab",
  },
  {
    to: "/facilities/advanced-automation-lab",
    label: "Advanced Automation Lab",
  },
  {
    to: "/facilities/design-media-studio",
    label: "Design & Media Studio",
  },
];


const bulletinItems = [
  { to: "/bulletin/notice", label: "Notice" },
  { to: "/bulletin/gallery", label: "Gallery & Media" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavDropdown = ({ label, items }) => (
    <div className="relative group h-full flex items-center">
      <button className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-1 focus:outline-none">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 opacity-50 group-hover:rotate-180 transition-transform duration-200"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-soft opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-cuBlue transition-colors"
                onClick={() => setOpen(false)}
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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/fab-lab-logo.png"
            alt="Fab Lab CU"
            className="h-12 w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "text-cuBlue bg-slate-100"
                  : "text-slate-700 hover:bg-slate-50"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "text-cuBlue bg-slate-100"
                  : "text-slate-700 hover:bg-slate-50"
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
            className="inline-flex items-center justify-center 
             bg-blue-600 hover:bg-blue-700 
             text-white font-semibold 
             px-4 py-2 ml-2 
             rounded-lg 
             shadow-md hover:shadow-lg 
             transition-all duration-300 ease-in-out"
          >
            Book a Slot
          </Link>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeWidth="1.5" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white max-h-[80vh] overflow-y-auto">
          <div className="container py-3 space-y-4">
            <NavLink
              to="/"
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            {[
              { label: "Education", items: educationItems },
              { label: "Research", items: researchItems },
              { label: "Facilities", items: facilitiesItems },
              { label: "Bulletin", items: bulletinItems },
            ].map((section) => (
              <div key={section.label}>
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {section.label}
                </div>
                <div className="mt-1 space-y-1 pl-3 border-l-2 border-slate-100 ml-3">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="block px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}

            <NavLink
              to="/about"
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <Link to="/booking" className="btn-primary w-full text-center mt-4">
              Book a Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
