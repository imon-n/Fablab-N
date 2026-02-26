import {
  FaRobot,
  FaLaptopCode,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function BrainEQP() {
  const equipment = [
    {
      icon: <FaRobot />,
      title: "AI Workstations",
      desc: "High-performance systems for AI development.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: <FaLaptopCode />,
      title: "Programming Stations",
      desc: "Coding environments for ML and data science.",
      gradient: "from-cyan-500 to-blue-400",
    },
    {
      icon: <FaBrain />,
      title: "Design Thinking Zone",
      desc: "Collaborative innovation workspace.",
      gradient: "from-blue-500 to-sky-400",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Research & Simulation Tools",
      desc: "Modeling and analytical platforms.",
      gradient: "from-sky-500 to-cyan-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="max-w-6xl mx-auto bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Available Facilities
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white text-xl md:text-2xl mb-3 shadow-md`}
              >
                {item.icon}
              </div>

              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}