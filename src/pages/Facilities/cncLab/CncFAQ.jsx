import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function CncFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What materials can be machined in the CNC Lab?",
      answer:
        "Our CNC machines can process wood, MDF, acrylic, aluminum, plastics, and selected composite materials depending on tooling and machine configuration.",
    },
    {
      question: "Do I need experience with CAD/CAM software?",
      answer:
        "Basic knowledge of CAD is recommended. However, we provide guidance on CAD modeling and CAM toolpath generation before machine operation.",
    },
    {
      question: "Is CNC machining safe for beginners?",
      answer:
        "Yes, but all users must complete a safety briefing and supervised training session before operating the machine independently.",
    },
    {
      question: "How precise are the CNC machines?",
      answer:
        "Our CNC systems provide high repeatability and accuracy, typically within ±0.1 mm depending on material and tool selection.",
    },
    {
      question: "How do I book the CNC Lab?",
      answer:
        "You can reserve a machining slot through the FabLab CU booking system. Submit your CAD file in advance for review and approval.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-12 px-6">
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
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
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