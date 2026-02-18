import { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import Btn from "../utlis/Btn";


const facilities = [
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

// duplicate for infinite illusion
const sliderItems = [...facilities, ...facilities];

export default function FacilitiesSection() {
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const [currentX, setCurrentX] = useState(0);

  const cardWidth = 320 + 32; // card width + gap
  const visibleCards = 4;
  const maxScroll = cardWidth * facilities.length;

  const scroll = async (direction) => {
    let newX =
      direction === "left"
        ? currentX + cardWidth * visibleCards
        : currentX - cardWidth * visibleCards;

    // Infinite reset logic
    if (Math.abs(newX) >= maxScroll) {
      newX = 0;
    }

    setCurrentX(newX);

    await controls.start({
      x: newX,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    });
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

{/* Header */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">

  {/* Left Side */}
  <div className="max-w-xl">
    <h2 className="text-4xl font-extrabold uppercase bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
      Facilities
    </h2>

    <p className="mt-4 text-slate-600 leading-relaxed">
      Explore our advanced innovation labs and fabrication spaces.
    </p>
  </div>

  {/* Right Side */}
  <div className="flex items-center gap-6">

    {/* Explore Button */}
    <Link to="facilities">
    <Btn>Explore All Facilities</Btn>
    </Link>
    
    {/* Navigation Buttons */}
    <div className="flex items-center gap-3">
      <button
        onClick={() => scroll("left")}
        className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center text-blue-900 hover:bg-gray-100 transition-all duration-300"
      >
        <MdChevronLeft size={26} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center text-blue-900 hover:bg-gray-100 transition-all duration-300"
      >
        <MdChevronRight size={26} />
      </button>
    </div>

  </div>
</div>
        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            drag="x"
            animate={controls}
            dragConstraints={{ left: -maxScroll, right: 0 }}
            dragElastic={0.05}
            onDragEnd={(e, info) => {
              setCurrentX(info.point.x);
            }}
          >
            {sliderItems.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[270px]"
                whileHover={{ scale: 1.03 }}
              >
                <Link
                  to={item.to}
                  className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 block"
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent"></div>

                  <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                    <span className="text-xs tracking-widest uppercase text-slate-300 mb-2">
                      {item.subtitle}
                    </span>

                    <h3 className="text-xl font-semibold pr-12">
                      {item.label}
                    </h3>
                  </div>

                  {/* Arrow circle */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white rounded-full flex items-start justify-start p-2 pr-4 shadow-lg">
                    <div className="w-12 h-12 flex items-center justify-center text-blue-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                      <MdArrowOutward size={26} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
