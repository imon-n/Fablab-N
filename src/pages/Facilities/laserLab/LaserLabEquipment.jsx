import {
  FaFire,
  FaDraftingCompass,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function LaserLabEquipment() {
  const equipment = [
    {
      icon: <FaFire />,
      title: "CO₂ Laser Cutter",
      desc: "High-precision cutting for acrylic, wood, MDF, and leather.",
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Vector Design Station",
      desc: "Workstations equipped with CorelDRAW & Illustrator.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: <FaLayerGroup />,
      title: "Material Preparation Area",
      desc: "Measurement and alignment tools for accurate cutting.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: <FaTools />,
      title: "Finishing & Assembly Tools",
      desc: "Post-cut cleaning, polishing, and assembly equipment.",
      gradient: "from-emerald-500 to-teal-600",
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
    <section className="max-w-6xl mx-auto bg-gradient-to-br from-slate-50 via-white to-red-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
              Available Equipment
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
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