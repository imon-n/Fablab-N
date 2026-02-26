import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function LaserLabFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What materials can be cut using the laser machine?",
      answer:
        "Our laser cutter supports acrylic, MDF, plywood, cardboard, leather, and certain plastics. Metal cutting is not supported in this lab.",
    },
    {
      question: "Do I need prior experience to use the laser cutter?",
      answer:
        "All users must attend a mandatory safety and machine orientation session before operating the laser cutter independently.",
    },
    {
      question: "What file formats are accepted for laser cutting?",
      answer:
        "We accept vector-based formats such as AI, DXF, SVG, and PDF. Files must be properly prepared before your session.",
    },
    {
      question: "Can I engrave designs as well as cut materials?",
      answer:
        "Yes, the machine supports both precision cutting and surface engraving depending on your design settings.",
    },
    {
      question: "How long does a laser cutting job take?",
      answer:
        "Cutting time depends on material thickness, design complexity, and engraving depth. Small jobs may take a few minutes, while larger designs take longer.",
    },
    {
      question: "How do I book the Laser Cutting Lab?",
      answer:
        "You can reserve a time slot through the FabLab CU booking system. Make sure your vector file is reviewed before your scheduled session.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-3"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>

          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl font-extrabold text-red-600"
          >
            ?
          </motion.span>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-800">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <FaMinus className="text-red-600" />
                ) : (
                  <FaPlus className="text-slate-500" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}