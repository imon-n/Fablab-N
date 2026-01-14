import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaLandmark } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function AboutMissionHistory() {
  return (
    <section className="py-6 bg-slate-50  border-red-500">
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Mission, Vision & Journey
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mission */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="glass rounded-2xl p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-center items-center gap-3 mb-3">
              <div className=" flex items-center justify-center rounded-full">
                <FaBullseye className="text-blue-700 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To empower students, researchers, and innovators by providing open
              access to digital fabrication tools, hands-on learning, and
              collaborative environments that transform ideas into impact.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="glass rounded-2xl p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-center items-center gap-3 mb-3">
              <div className=" flex items-center justify-center rounded-full">
                <FaEye className="text-blue-700 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              To become a leading innovation hub connecting local challenges
              with global knowledge, fostering sustainable solutions through
              technology, creativity, and interdisciplinary collaboration.
            </p>
          </motion.div>

          {/* History */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="glass rounded-2xl p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-center items-center gap-3 mb-3">
              <div className=" flex items-center justify-center rounded-full">
                <FaLandmark className="text-purple-700 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">History & Establishment</h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Fab Lab CU was established to support innovation-driven education
              and research at Chittagong University, aligned with the global Fab
              Lab network and supported through national and international
              development initiatives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
