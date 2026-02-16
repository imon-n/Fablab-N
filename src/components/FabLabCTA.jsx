import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Btn from "../utlis/Btn";

export default function FabLabCTA() {
  const logos = [
    "https://i.ibb.co.com/GgDpW6Z/cu-Logo.png",
    "https://i.ibb.co.com/rR03SFzZ/bd-govt.png",
    "https://i.ibb.co.com/5XHNkTMT/heat.png",
    "https://i.ibb.co.com/YTdntPxm/manjuri-Commision.png",
    "https://i.ibb.co.com/vvcV6b1t/world-Bank.png",
  ];

  return (
    <section className="bg-slate-100 py-16 px-6 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Icon Area */}
        <div className="flex justify-center items-center mb-8 relative">

          {/* Lightbulb */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaLightbulb className="text-blue-500 text-8xl md:text-9xl" />
          </motion.div>

          {/* Wrench */}
          <motion.div
            className="absolute translate-x-10 translate-y-6"
            animate={{
              y: [0, -12, 0],
              rotate: [0, -4, 4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaWrench className="text-sky-400 text-8xl md:text-9xl" />
          </motion.div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-6">
          READY TO START BUILDING AT FABLAB CU?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Join FabLab CU and get hands-on access to 3D printers, laser cutters,
          CNC machines, and advanced digital fabrication tools to turn your
          ideas into real prototypes.
        </p>

        {/* Button */}
        <Btn>Let's Connect</Btn>
      </motion.div>

      {/* ================= LOGO MARQUEE ================= */}
      <div className="mt-16 relative w-full overflow-hidden">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-100 to-transparent z-10" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-100 to-transparent z-10" />

        {/* Moving Logos */}
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px]"
            >
              <img
                src={logo}
                alt="Sponsor Logo"
                className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}