import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-3 transition-transform group-hover:scale-105">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <img
                    src="/fab-lab-logo.png"
                    alt="Fab Lab CU"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              A distributed education and prototyping hub at University of Chittagong,
              connecting people with tools, training and open communities.
            </p>

            {/* Email Subscribe */}
            <div className="relative mt-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent border-b border-slate-600 pb-2 pr-10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
              />
              <button className="absolute right-0 top-0 text-cyan-400 hover:text-cyan-300 transition">
                <FiSend size={20} />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4 text-slate-400">
              <a href="#" className="hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
              <li><Link to="/equipment" className="text-slate-300 hover:text-white">Equipment</Link></li>
              <li><Link to="/projects" className="text-slate-300 hover:text-white">Projects</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-white">Gallery</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Get Involved
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-300 hover:text-white">About</Link></li>
              <li><Link to="/booking" className="text-slate-300 hover:text-white">Booking</Link></li>
              <li><Link to="/membership" className="text-slate-300 hover:text-white">Membership</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Resources
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/workshops" className="text-slate-300 hover:text-white">Workshops</Link></li>
              <li><Link to="/events" className="text-slate-300 hover:text-white">Events</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-white">Blog</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>
                Fab Lab CU, University of Chittagong,<br />
                Chattogram 4331, Bangladesh
              </p>
              <p>
                <a href="mailto:fablab@cu.ac.bd" className="hover:text-white">
                  fablab@cu.ac.bd
                </a>
              </p>
              <p>+8801816305787</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Fab Lab – University of Chittagong.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}