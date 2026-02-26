import { Link, useLocation } from "react-router-dom";
import { MdArrowForward, MdAdd } from "react-icons/md";
import Btn from "../../../utlis/Btn";
import { FiCalendar } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { facilities } from "../dataFacilities";
import LaserLabEquipment from "./LaserLabEquipment";
import LaserLabFAQ from "./LaserLabFAQ";

export default function LaserLab() {
  const location = useLocation();

  const currentLab =
    facilities.find((lab) => lab.to === location.pathname) || facilities[0];

  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center overflow-hidden">
        <img
          src={currentLab.image}
          alt={currentLab.label}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white px-6 max-w-4xl">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="opacity-70">Fablab</span>
            <MdArrowForward />
            <span className="opacity-70">Facilities</span>
            <MdArrowForward />
            <span className="font-semibold">{currentLab.label}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            <Typewriter
              words={["Laser Cutting Lab"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={8000}
            />
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            {currentLab.subtitle}
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
          {/* ===== LEFT CONTENT ===== */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl uppercase font-extrabold leading-tight mb-3">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Precision Fabrication Hub
              </span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Our {currentLab.label} enables high-precision cutting and engraving
              for acrylic, wood, MDF, leather, and other compatible materials.
              Students and innovators can transform digital designs into
              accurate physical components using advanced laser systems.
            </p>

            <img
              src={currentLab.image}
              alt="Laser Lab"
              className="w-full h-[300px] object-cover rounded-2xl shadow-lg mb-8"
            />

            {/* Process Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {["Design File", "Laser Cutting", "Assembly & Finish"].map(
                (step, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-6 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      0{index + 1} {step}
                    </h3>
                    <p className="text-sm text-slate-600">
                      From vector design preparation to final precision
                      fabrication.
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Equipment Section */}
            <LaserLabEquipment />

            {/* FAQ Section */}
            <LaserLabFAQ />
          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Facilities List */}
              <div className="bg-slate-100 rounded-2xl p-6 pb-4">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="text-cyan-600">*</span>
                  Other Facilities
                </h3>

                <ul className="divide-y divide-slate-200">
                  {facilities.map((lab, index) => {
                    const isActive = lab.to === location.pathname;
                    return (
                      <li key={index}>
                        <Link
                          to={lab.to}
                          className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-all
                          ${
                            isActive
                              ? "text-white bg-gradient-to-r from-blue-600 to-cyan-400"
                              : "text-slate-600 hover:bg-white hover:shadow-sm"
                          }`}
                        >
                          <span>{lab.label}</span>
                          {isActive && <MdAdd className="text-lg" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Book Slot Card */}
              <div className="relative overflow-hidden rounded-2xl bg-black text-white p-6 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <FiCalendar className="text-white text-4xl" />
                  </div>

                  <p className="text-sm text-gray-300 mb-6">
                    Reserve your session in this lab and start precision cutting
                    today.
                  </p>

                  <Link to="/booking">
                    <Btn>Book a Slot</Btn>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
