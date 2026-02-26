import {
  FaTshirt,
  FaCut,
  FaPenNib,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function TextileEQP() {
  const equipment = [
    {
      icon: <FaTshirt />,
      title: "Industrial Sewing Machines",
      desc: "High-speed machines for garment production.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: <FaCut />,
      title: "Fabric Cutting Tools",
      desc: "Precision cutters and pattern trimming tools.",
      gradient: "from-indigo-600 to-blue-500",
    },
    {
      icon: <FaPenNib />,
      title: "Digital Embroidery System",
      desc: "Computerized embroidery and textile printing.",
      gradient: "from-cyan-600 to-blue-500",
    },
    {
      icon: <FaCogs />,
      title: "Pattern Design Software",
      desc: "Software for garment and textile pattern making.",
      gradient: "from-slate-700 to-gray-900",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4 md:px-8">
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
              Available Equipment
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 text-center shadow-md hover:shadow-xl transition border"
            >
              <div
                className={`w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white text-xl mb-3`}
              >
                {item.icon}
              </div>
              <h3 className="text-sm font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}