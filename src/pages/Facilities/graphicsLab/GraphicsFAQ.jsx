import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function GraphicsFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What software is available in the Graphics Lab?",
      answer:
        "We provide Adobe Creative Cloud, Figma, UI/UX tools, and multimedia editing software.",
    },
    {
      question: "Can beginners use the lab?",
      answer:
        "Yes, introductory guidance is provided for students new to design tools.",
    },
    {
      question: "Is the lab suitable for UI/UX projects?",
      answer:
        "Absolutely. The lab supports web design, mobile prototyping, and user experience development.",
    },
    {
      question: "Can I export print-ready files?",
      answer:
        "Yes, the lab supports high-resolution export formats for both digital and print media.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3"
        >
          <h2 className="text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
             FAQs
            </span>
          </h2>

          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-5xl font-extrabold text-pink-600"
          >
            ?
          </motion.span>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-2xl shadow-md border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
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
                    <p className="text-sm text-slate-600">{faq.answer}</p>
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