import { motion } from "framer-motion";
import { FaTools, FaLightbulb, FaUsers } from "react-icons/fa";
import Btn from "../utlis/Btn";
import { Link } from "react-router-dom";


export default function MakersSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: FaTools,
      title: "Advanced Tools",
      desc: "3D printing, laser cutting & rapid prototyping.",
    },
    {
      icon: FaLightbulb,
      title: "Idea to Reality",
      desc: "Transform concepts into working solutions.",
    },
    {
      icon: FaUsers,
      title: "Maker Community",
      desc: "Collaborate and build with innovators.",
    },
  ];

  return (
    <section className="relative bg-white py-8 lg:py-12 overflow-hidden">
      
      {/* Decorative Background Icons */}
      <div className="absolute inset-0 opacity-5 pointer-events-none hidden md:block">
        <div className="absolute top-16 left-10 text-blue-600 text-6xl">
          <FaTools />
        </div>
        <div className="absolute bottom-20 left-1/4 text-blue-600 text-5xl">
          <FaLightbulb />
        </div>
        <div className="absolute top-1/3 right-16 text-blue-600 text-6xl">
          <FaUsers />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-xl space-y-4 lg:space-y-6"
          >
            <div className="flex items-center gap-3 flex-wrap">

              {/* Badge */}
              <motion.span
                variants={fadeUp}
                className="px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full"
              >
                Makers Hub
              </motion.span>

              {/* Title */}
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  From blueprint to business
                </span>
              </motion.h2>

            </div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-md text-slate-600 leading-relaxed"
            >
              A creative environment where students design, prototype,
              and turn ideas into impactful innovations. A creative
              environment where students design, prototype,
              and turn ideas into impactful innovations.
            </motion.p>

            {/* Features */}

             <motion.div className="space-y-2">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl 
                                  bg-gradient-to-br from-blue-600 to-indigo-600 
                                  text-white shadow-lg shadow-blue-500/20 
                                  group-hover:rotate-6 transition-transform duration-300">
                    <item.icon size={22} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  
                </motion.div>
              ))}

             </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center mt-10 lg:mt-0"
          >
            {/* Stacked Background Layers (Responsive Width) */}
            <div className="absolute w-[90%] sm:w-[480px] lg:w-[520px] h-[220px] sm:h-[260px] lg:h-[300px] bg-blue-200 rounded-3xl rotate-3 shadow-xl"></div>
            <div className="absolute w-[90%] sm:w-[480px] lg:w-[520px] h-[220px] sm:h-[260px] lg:h-[300px] bg-blue-400 rounded-3xl -rotate-6 shadow-xl"></div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl border border-blue-200 bg-white"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/FxEmNchDkjU"
                  title="FabLab CU Introduction"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Browser Dots */}
              <div className="absolute top-3 left-4 flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}