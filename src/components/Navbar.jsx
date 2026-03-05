import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const facilitiesItems = [
  { to: "/facilities/applied-robotics-lab", label: "Applied Robotics Lab" },
  { to: "/facilities/advanced-automation-lab", label: "Advanced Automation Lab" },
  { to: "/facilities/cyber-physical-systems-lab", label: "Cyber Physical Systems Lab" },
  { to: "/facilities/design-media-studio", label: "Design & Media Studio" },
];

const bulletinItems = [
  { to: "/bulletin/notice", label: "Notice" },
  { to: "/bulletin/gallery", label: "Gallery & Media" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${isActive
      ? "text-cuBlue bg-slate-100"
      : "text-slate-700 hover:bg-slate-50 hover:text-cuBlue"
    }`;

  const Dropdown = ({ label, items }) => (
    <div className="relative group">
      <button className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-1">
        {label}
        <svg
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

      <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border border-slate-200 rounded-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-cuBlue transition"
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
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/fab-lab-logo.png"
            alt="Fab Lab CU"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">

          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/facilities" className={navLinkClass}>Facilities</NavLink>
          <NavLink to="/engagment" className={navLinkClass}>Engagment</NavLink>

          <Dropdown label="Bulletin" items={bulletinItems} />

          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          <Link
            to="/booking"
            className="ml-3 inline-flex items-center justify-center rounded-lg bg-cuBlue px-4 py-2 text-white text-sm font-medium hover:bg-cuBlue-dark transition"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-2">

            <NavLink to="/" onClick={() => setOpen(false)} className="block">Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className="block">About</NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)} className="block">Services</NavLink>
            <NavLink to="/equipment" onClick={() => setOpen(false)} className="block">Equipment</NavLink>
            <NavLink to="/pricing" onClick={() => setOpen(false)} className="block">Pricing</NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)} className="block">Projects</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="block">Contact</NavLink>

            <div className="pt-2 border-t">
              <div className="text-xs uppercase text-slate-400 font-semibold">Facilities</div>
              {facilitiesItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block pl-3 py-1"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 border-t">
              <div className="text-xs uppercase text-slate-400 font-semibold">Bulletin</div>
              {bulletinItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block pl-3 py-1"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center bg-cuBlue text-white py-2 rounded-lg"
            >
              Book Now
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
