import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaPencilRuler,
  FaTools,
  FaRocket,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaGear, FaMicrochip } from "react-icons/fa6";
import { MdArrowForward } from "react-icons/md";
import Btn from "../utlis/Btn";

export default function FabLabHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574149501304-9eb7931b08ff?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Floating Animated Icons */}
      <FloatingIcon Icon={FaGear} top="10%" left="5%" duration={30} />
      <FloatingIcon
        Icon={FaMicrochip}
        top="60%"
        left="50%"
        duration={18}
        reverse
      />
      <FloatingIcon Icon={FaTools} top="5%" right="25%" duration={22} />
      <FloatingIcon
        Icon={FaRocket}
        bottom="10%"
        right="8%"
        duration={20}
        reverse
      />

      {/* Green Glow */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-green-500/20 blur-[120px] rounded-full z-0"></div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            <Typewriter
              words={["Fab Lab – University of Chittagong"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={8000}
            />
          </h1>

          <p className="max-w-2xl text-l text-slate-200 mb-8 mx-auto lg:mx-0">
            A digital fabrication workshop empowering CU students to design,
            prototype, and innovate using modern tools like 3D printers,
            laser cutters, and CNC machines.and innovate using modern tools like 3D printers,
            laser cutters, and CNC machines.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-green-500 hover:scale-110 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/booking"
            >
              <Btn>Book a Slot</Btn>
            </Link>

            <Link
              to="/services"
              className="inline-flex whitespace-nowrap items-center justify-center px-5 py-1 rounded-full text-lg font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-slate-900 transition-all duration-300 min-w-[160px]"
            >
              Explore Services
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        {/* RIGHT SIDE CARDS */}
<div className="w-full lg:w-1/3">
  <motion.div
    className="flex flex-row lg:flex-col items-center justify-center gap-4"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.25,
        },
      },
    }}
  >
    <AnimatedCard icon={FaPencilRuler} title="Design" />
    <MdArrowForward className="text-white text-2xl lg:hidden" />
    <AnimatedCard icon={FaTools} title="Build" />
    <MdArrowForward className="text-white text-2xl lg:hidden" />
    <AnimatedCard icon={FaRocket} title="Prototype" />
  </motion.div>
</div>

      </div>
    </section>
  );
}


function AnimatedCard({ icon: Icon, title }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 
      rounded-xl px-6 py-5 text-center text-white shadow-lg 
      w-28 lg:w-full hover:scale-105 transition-all duration-300"
    >
      <Icon className="text-2xl mx-auto mb-2 text-white" />
      <h3 className="text-sm lg:text-lg font-semibold">
        {title}
      </h3>
    </motion.div>
  );
}

/* Floating Icon Component */
function FloatingIcon({
  Icon,
  size = 140,
  mobileSize = 80,
  duration = 20,
  reverse,
  ...position
}) {
  return (
    <motion.div
      className="absolute text-white/10 pointer-events-none"
      style={position}
      animate={{
        rotate: reverse ? -360 : 360,
        y: [0, -12, 0],
      }}
      transition={{
        rotate: { repeat: Infinity, duration, ease: "linear" },
        y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
      }}
    >
      <div className="block lg:hidden">
        <Icon size={mobileSize} />
      </div>
      <div className="hidden lg:block">
        <Icon size={size} />
      </div>
    </motion.div>
  );
}

/* Card Component */
function Card({ icon: Icon, title }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-5 text-center text-white shadow-lg w-28 lg:w-full hover:scale-105 transition-all duration-300">
      <Icon className="text-2xl mx-auto mb-2 text-white" />
      <h3 className="text-sm lg:text-lg font-semibold">{title}</h3>
    </div>
  );
}