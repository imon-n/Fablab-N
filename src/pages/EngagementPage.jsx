import { Link } from "react-router-dom";
import { MdArrowOutward, MdArrowForward } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { facilities } from "./Engagment/dataEngagment";

export default function EngagementPage() {

  const [category, setCategory] = useState("Education");

  const filteredFacilities = facilities.filter(
    (item) => item.category === category
  );

  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[320px] md:h-[460px] flex items-center justify-center text-center overflow-hidden">

        <img
          src="https://i.ibb.co.com/yFCbjnm3/makers-lab-outils.webp"
          alt="Engagement Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>

        <div className="relative z-10 max-w-3xl px-4 md:px-6 text-white">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs md:text-sm tracking-widest bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
            <span className="opacity-80">Fablab</span>
            <MdArrowForward className="text-white/70 text-base" />
            <span className="font-semibold">Engagement</span>
          </span>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 uppercase">
            <Typewriter
              words={["Our Engagement"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={8000}
            />
          </h1>

          <p className="text-xs md:text-lg text-gray-300">
            Explore our educational and research engagement programs designed
            to empower innovation and collaborative learning.
          </p>
        </div>
      </section>


      {/* ================= ENGAGEMENT GRID ================= */}
      <section className="py-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-8">

          {/* LEFT FILTER */}
          <div className="lg:w-52 w-full lg:sticky lg:top-24 h-fit">

            <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">
              Filter
            </h3>

            {/* <div className="lg:w-52 w-full lg:sticky lg:top-24 h-fit"></div> */}

            <div className="flex lg:flex-col gap-3 justify-center lg:justify-start">
              <button
                onClick={() => setCategory("Education")}
                className={`px-4 py-2 rounded-lg text-sm transition ${
                  category === "Education"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Education
              </button>

              <button
                onClick={() => setCategory("Research")}
                className={`px-4 py-2 rounded-lg text-sm transition ${
                  category === "Research"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Research
              </button>

            </div>
          </div>


          {/* GRID */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredFacilities.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="group relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >

                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent"></div>

                <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-slate-300 mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="text-sm font-semibold pr-6">
                    {item.label}
                  </h3>
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-900 shadow-md group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                  <MdArrowOutward size={16} />
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}