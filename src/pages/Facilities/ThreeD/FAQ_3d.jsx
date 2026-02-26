import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What 3D printing technologies are available in the lab?",
      answer:
        "Our 3D Fabrication Lab provides FDM and SLA 3D printing technologies. FDM is ideal for rapid prototyping with materials like PLA and ABS, while SLA is used for high-detail resin-based printing.",
    },
    {
      question: "Do I need prior experience to use the 3D printers?",
      answer:
        "No prior experience is required. However, all users must attend a short orientation session covering safety guidelines, slicing software, and printer operation before independent use.",
    },
    {
      question: "How long does a typical 3D print take?",
      answer:
        "Printing time depends on model size, layer height, and infill density. Small prototypes may take 1–2 hours, while larger or highly detailed models can take several hours to complete.",
    },
    {
      question: "Can the lab help with 3D model design?",
      answer:
        "Yes, we provide guidance on 3D modeling software such as SolidWorks. Our mentors assist with design optimization, file preparation, and print troubleshooting.",
    },
    {
      question: "How do I book the 3D Fabrication Lab?",
      answer:
        "You can reserve a time slot through the FabLab CU booking system. Make sure to upload your STL file in advance for review before your scheduled session.",
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
