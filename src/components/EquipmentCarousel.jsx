import {
  FaPrint,
  FaBurn,
  FaCogs,
  FaMicrochip,
  FaHammer,
  FaWrench,
  FaTools,
  FaCube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Btn from "../utlis/Btn";

export default function EquipmentSection() {
  const equipment = [
    {
      icon: <FaPrint />,
      title: "3D Printing",
      desc: "FDM & SLA prototyping with multiple materials.",
      gradient: "from-violet-500 to-purple-600",
      bgGlow: "bg-violet-500/10",
    },
    {
      icon: <FaBurn />,
      title: "Laser Cutting",
      desc: "High precision cutting & engraving systems.",
      gradient: "from-orange-500 to-red-600",
      bgGlow: "bg-orange-500/10",
    },
    {
      icon: <FaCogs />,
      title: "CNC Machining",
      desc: "3-axis milling for wood, plastic & metal.",
      gradient: "from-cyan-500 to-blue-600",
      bgGlow: "bg-cyan-500/10",
    },
    {
      icon: <FaMicrochip />,
      title: "Electronics Lab",
      desc: "PCB fabrication, soldering & testing.",
      gradient: "from-emerald-500 to-teal-600",
      bgGlow: "bg-emerald-500/10",
    },
    {
      icon: <FaHammer />,
      title: "Wood Workshop",
      desc: "Professional cutting & shaping tools.",
      gradient: "from-amber-500 to-yellow-600",
      bgGlow: "bg-amber-500/10",
    },
    {
      icon: <FaWrench />,
      title: "Metal Workshop",
      desc: "Welding, grinding & fabrication area.",
      gradient: "from-slate-500 to-gray-700",
      bgGlow: "bg-slate-500/10",
    },
    {
      icon: <FaTools />,
      title: "Finishing Area",
      desc: "Surface finishing & spray systems.",
      gradient: "from-pink-500 to-rose-600",
      bgGlow: "bg-pink-500/10",
    },
    {
      icon: <FaCube />,
      title: "Plastic Lab",
      desc: "Injection molding & recycling system.",
      gradient: "from-indigo-500 to-blue-600",
      bgGlow: "bg-indigo-500/10",
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

            <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-extrabold text-center md:text-left">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Available Equipment
              </span>
            </h2>

            <div className="w-full md:w-auto">
              <Btn className="w-full md:w-auto">
                Book Equipment Time
              </Btn>
            </div>

          </div>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid 
            grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-5 
            gap-4 sm:gap-5
          "
        >
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden"
            >
              {/* Gradient Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Glow */}
              <div
                className={`absolute -top-16 -right-16 w-32 sm:w-40 h-40 sm:h-72 ${item.bgGlow} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}
              />

              <div className="relative z-10">

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white text-xl sm:text-2xl mb-3 shadow-lg`}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {item.desc}
                </p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}