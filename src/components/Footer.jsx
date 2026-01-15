import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container pt-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link
              to="/"
              className="inline-block flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="/fab-lab-logo.png"
                alt="Fab Lab CU"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-600">
              A distributed education and prototyping hub at University of
              Chittagong, connecting people with tools, training, and open
              communities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-cuBlue">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="hover:text-cuBlue">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cuBlue">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-cuBlue">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-cuBlue">
                  About
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-cuBlue">
                  Job
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cuBlue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div>
              <p className="text-sm text-slate-600">
                Fab Lab CU, University of Chittagong, <br /> Chattogram 4331, Bangladesh
              </p>
              <p className="text-sm text-slate-600">fablab@cu.ac.bd</p>
              <p className="text-sm text-slate-600">+8801816305787</p>
            </div>
            <div>
              {/* Social icons */}
              <div className="flex gap-2 mt-1">
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 text-lg border border-gray-300 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-110 bg-blue-600 text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-8 h-8 text-lg border border-gray-300 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-110 bg-red-600 text-white"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center transition duration-300 w-8 h-8 text-lg border border-gray-300 rounded-full shadow-md  transform hover:scale-110 bg-sky-600 text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <hr />
        </div>
        <div className="mt-4 text-xs text-slate-500 text-center">
          <p>
            Inspired by the global Fab Lab network (fablabs.io) and university
            Fab Labs that operate as bureau services offering laser cutting, 3D
            printing (FDM & SLA), and CNC machining.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Fab Lab – University of Chittagong
          </p>
        </div>

        <div className="flex justify-around items-center mt-2 mb-3">
          <div className="flex items-center justify-center transition duration-300 w-10 h-10 shadow-md  transform hover:scale-110">
            <img src="services/Government_Seal.svg" alt="" />
          </div>
          <div className="flex items-center justify-center transition duration-300 w-14 h-10 shadow-md  transform hover:scale-110">
            <img src="services/worldBank.webp" alt="" />
          </div>
          <div className="flex items-center justify-center transition duration-300 w-10 h-10 shadow-md  transform hover:scale-110">
            <img src="services/manjuriCommision.png" alt="" />
          </div>
          <div className="flex items-center justify-center transition duration-300 w-8 h-10 shadow-md  transform hover:scale-110">
            <img src="services/heat.png" alt="" />
          </div>
          <div className="flex items-center justify-center transition duration-300 w-6 h-6 shadow-md  transform hover:scale-110">
            <img src="services/cuLogo.png" alt="" />
          </div>
        </div>

      </div>
    </footer>
  );
}
