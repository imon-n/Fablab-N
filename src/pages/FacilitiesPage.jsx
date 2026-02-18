import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md"

export const facilities = [
  {
    to: "/facilities/3d-fabrication-lab",
    label: "3D Fabrication Lab",
    subtitle: "Rapid Prototyping",
    image: "/services/laser-cutting.jpeg",
  },
  {
    to: "/facilities/electronics-robotics-lab",
    label: "Electronics & Robotics Lab",
    subtitle: "Smart Systems",
    image: "/services/fdm-3d-printing.jpg",
  },
  {
    to: "/facilities/laser-cutting-lab",
    label: "Laser Cutting Lab",
    subtitle: "Precision Cutting",
    image: "/services/sla-3d-printing.jpg",
  },
  {
    to: "/facilities/cnc-woodworking-lab",
    label: "CNC & Woodworking Lab",
    subtitle: "Advanced Machining",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    to: "/facilities/graphics-print-lab",
    label: "Graphics & Print Lab",
    subtitle: "Creative Media",
    image: "/services/fdm-3d-printing.jpg",
  },
  {
    to: "/facilities/digital-textile-lab",
    label: "Digital Textile Lab",
    subtitle: "Smart Fabric",
    image: "/services/sla-3d-printing.jpg",
  },
  {
    to: "/facilities/competency-development-lab",
    label: "Competency Development Lab",
    subtitle: "Skill Growth",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    to: "/facilities/needle-thread-lab",
    label: "Needle & Thread Lab",
    subtitle: "Textile Craft",
    image: "/services/laser-cutting.jpeg",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      {/* ================= HERO BANNER ================= */}
<section className="relative h-[380px] md:h-[460px] flex items-center justify-center text-center overflow-hidden">
  
  {/* Background Image */}
  <img
    src="https://i.ibb.co.com/yFCbjnm3/makers-lab-outils.webp"
    alt="Facilities Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Perfect Dark Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Extra Depth Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl px-6 text-white ">
    
    <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-sm tracking-widest  bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
  
  <span className="opacity-80">Fablab</span>
  
  <MdArrowForward className="text-white/70 text-base" />
  
  <span className="font-semibold">Facilities</span>

</span>

    <h1 className="ttext-5xl md:text-5xl font-bold tracking-tight text-white mb-4">
      <Typewriter
              words={["Our Facilities"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={8000}
            />
      {/* Our Facilities */}
    </h1>

    <p className="text-sm md:text-lg text-gray-300">
      Discover advanced labs designed for creativity, rapid prototyping,
      and real-world innovation.
    </p>

  </div>
</section>


      {/* ================= FACILITIES GRID ================= */}
      <section className="py-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {facilities.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="group relative h-52 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-slate-300 mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-sm font-semibold pr-6">
                    {item.label}
                  </h3>
                </div>

                {/* Arrow */}
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
