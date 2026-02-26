import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ElectronicFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What development boards are available in the lab?",
      answer:
        "Our Electronics & Robotics Lab provides Arduino, ESP32, NodeMCU, and Raspberry Pi boards for embedded systems and IoT development.",
    },
    {
      question: "Do I need prior knowledge of electronics to use the lab?",
      answer:
        "Basic knowledge is helpful but not required. All users must attend a short safety and equipment orientation before independently using lab resources.",
    },
    {
      question: "Can I build robotics projects in this lab?",
      answer:
        "Yes, the lab supports robotics prototyping including motor drivers, sensors, servo systems, and autonomous robot kits for academic and research projects.",
    },
    {
      question: "What testing equipment is available?",
      answer:
        "We provide oscilloscopes, digital multimeters, regulated power supplies, soldering stations, and signal generators for circuit testing and debugging.",
    },
    {
      question: "Does the lab support IoT and wireless communication projects?",
      answer:
        "Yes, we support WiFi, Bluetooth, and IoT-based development using ESP modules and Raspberry Pi for smart and connected systems.",
    },
    {
      question: "How can I book the Electronics & Robotics Lab?",
      answer:
        "You can reserve a time slot through the FabLab CU booking system. Ensure your project proposal or circuit plan is prepared before your session.",
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