import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function BrainFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What projects can be developed in the Brain Lab?",
      answer:
        "AI models, machine learning systems, research prototypes, and intelligent applications can be developed.",
    },
    {
      question: "Is prior coding experience required?",
      answer:
        "Basic programming knowledge is recommended, but introductory sessions are available.",
    },
    {
      question: "Does the lab support research projects?",
      answer:
        "Yes, students can conduct research-based innovation and simulation projects.",
    },
    {
      question: "Are collaborative projects allowed?",
      answer:
        "Yes, the lab encourages teamwork and interdisciplinary collaboration.",
    },
    {
      question: "How can I book a session?",
      answer:
        "You can reserve a slot through the FabLab CU booking platform.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-3"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>

          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl font-extrabold text-cyan-500"
          >
            ?
          </motion.span>
        </motion.div>

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
                  <FaMinus className="text-blue-600" />
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