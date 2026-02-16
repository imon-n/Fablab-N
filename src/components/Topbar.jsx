import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="sticky top-0 z-50 item-center">
      <div className="bg-white border-b shadow-sm">
        <nav className="bg-blue-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-12">
              
              {/* Left Info */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MdEmail className="text-lg" />
                  <p className="text-sm">fablab@cu.ac.bd</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaClock className="text-md" />
                  <p className="text-sm">Sun - Thu, 9:00AM - 5:00PM</p>
                </div>

                <div className="flex items-center gap-1">
                  <FaLocationDot className="text-md" />
                  <p className="text-sm">Chittagong University</p>
                </div>
              </div>

              {/* Right Marquee Text */}
              <div className="hidden md:block w-1/2 overflow-hidden">
                <div className="whitespace-nowrap animate-marquee text-sm">
                  🚀 Welcome to FABLAB CU – Innovate • Create • Prototype • Build the Future with Us! 
                </div>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}