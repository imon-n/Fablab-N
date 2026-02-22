import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import Btn from "../utlis/Btn";

const facilities = [
  {
    to: "/facilities/3dlab",
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

// Duplicate for infinite illusion
const sliderItems = [...facilities, ...facilities];

export default function FacilitiesSection() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  const [currentX, setCurrentX] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;

      let cards = 2; // default mobile

      if (width < 640) {
        cards = 2; // Mobile = 2
      } else if (width < 1024) {
        cards = 2; // Tablet = 2
      } else if (width < 1280) {
        cards = 3; // Laptop = 3
      } else {
        cards = 4; // Desktop = 4
      }

      setVisibleCards(cards);

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = width < 640 ? 16 : 32;

        const calculatedWidth =
          (containerWidth - gap * (cards - 1)) / cards;

        setCardWidth(calculatedWidth + gap);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const maxScroll = cardWidth * facilities.length;

  const scroll = async (direction) => {
    const moveAmount = cardWidth * visibleCards;

    let newX =
      direction === "left"
        ? currentX + moveAmount
        : currentX - moveAmount;

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
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-10">

          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Facilities
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Explore our advanced innovation labs and fabrication spaces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

            <Link to="facilities">
              <Btn className="w-full sm:w-auto">
                Explore All Facilities
              </Btn>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-gray-300 flex items-center justify-center text-blue-900 hover:bg-gray-100 transition"
              >
                <MdChevronLeft size={24} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-gray-300 flex items-center justify-center text-blue-900 hover:bg-gray-100 transition"
              >
                <MdChevronRight size={24} />
              </button>
            </div>

          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-1 sm:gap-8 cursor-grab active:cursor-grabbing"
            drag="x"
            animate={controls}
            dragConstraints={{ left: -maxScroll, right: 0 }}
            dragElastic={0.05}
            onDragEnd={(e, info) => {
              setCurrentX(info.offset.x + currentX);
            }}
          >
            {sliderItems.map((item, index) => (
              <motion.div
                key={index}
                style={{ minWidth: cardWidth - (window.innerWidth < 640 ? 16 : 32) }}
                whileHover={{ scale: 1.03 }}
              >
                <Link
                  to={item.to}
                  className="group relative h-64 w-[165px] sm:w-full lg:h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 block"
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

                    <h3 className="text-lg sm:text-xl font-semibold pr-12">
                      {item.label}
                    </h3>
                  </div>

                  <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-start justify-start p-2 shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-blue-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                      <MdArrowOutward size={24} />
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