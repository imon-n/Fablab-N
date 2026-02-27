import { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function FAQWithTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  /* ================= SHORT FAQ ================= */
  const faqs = [
    {
      question: "What machines and tools are available?",
      answer:
        "FabLab CU offers 3D printers, laser cutters, CNC routers, vinyl cutters, electronics workstations, soldering stations, and basic woodworking tools.",
    },
    {
      question: "Do I need prior experience to use the equipment?",
      answer:
        "No. Beginners are welcome. We provide training sessions and supervised access so you can safely learn how to use the machines.",
    },
    {
      question: "How can I join FabLab CU?",
      answer:
        "You can join by submitting an online membership form and attending an orientation session to receive your access credentials.",
    },
    {
      question: "Are there membership fees?",
      answer:
        "FabLab CU offers both free student memberships and paid access options for non-students or extended usage. Details are available on the membership page.",
    },
    {
      question: "Can I work on my own project?",
      answer:
        "Yes! Members are encouraged to bring their own ideas and work independently or collaboratively on personal or group projects.",
    },
  ];
  /* ================= TESTIMONIALS ================= */

  const testimonials = [
  {
    Name: "Nur Mohammad Imon",
    Designation: "EEE Undergraduate",
    Quote:
      "FabLab CU is where creativity meets technology. It helped me turn ideas into real solutions while strengthening my technical and problem-solving skills.",
    image: "https://i.ibb.co.com/h02QGDC/imon.png",
  },
  {
    Name: "Sadika Afrin Reha",
    Designation: "English Literature Undergraduate | Crochet Artist",
    Quote:
      "Through Fab Lab CU, I am transforming my crochet passion into a structured and growing brand. The mentorship and entrepreneurial support are helping me scale with strategy and confidence.",
    image: "",
  },
  {
    Name: "Sakin Ahmed",
    Designation: "Aspiring Photonics Researcher | Engineering Student ", 
    Quote: "With high-performance workstations and GPU support, FabLab CU reduces simulation time and enhances work efficiency for advanced engineering and photonics research.",
   
    image: "https://i.ibb.co.com/Vp0yj6tD/sakin.jpg",
  },

  {
    Name: "Mohammad Shaleh Zaed",
    Designation: "EEE Undergraduate | Founder, ANKUR",
    Quote:
      "FabLab CU is not just a workplace, it’s where creativity turns into reality. By collaborating with experts from different fields, you develop new ideas and transform them into meaningful outcomes. It helps you work more efficiently and with greater clarity.",
    image: "https://i.ibb.co.com/x8cT8sc9/shaleh.jpg",
  },
  {
    Name: "Md. Ayead Mujib Tamim",
    Designation: "Co-Founder, Perahin Digital",
    Quote:
      "FabLab CU provided the environment and technical support that helped transform Perahin Digital from an idea into a structured and scalable solution.",
    image: "",
  },
];

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* ================= LEFT – FAQ ================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-1"
          >

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                FAQs
              </span>
            </h2>

            {/* Big Red Question Mark */}
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-7xl md:text-8xl font-extrabold text-red-600 drop-shadow-lg"
            >
              ?
            </motion.span>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 Quote-left"
                >
                  <span className="font-semibold Quote-slate-800">
                    {faq.question}
                  </span>

                  {activeIndex === index ? (
                    <FaMinus className="Quote-blue-600" />
                  ) : (
                    <FaPlus className="Quote-slate-500" />
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

        {/* ================= RIGHT – TESTIMONIAL ================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 Quote-center"
          >
            <div className="flex justify-center gap-1">

              {/* Animated Icon */}
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-blue-600 text-4xl md:text-5xl "
              >
                <FaQuoteLeft />
              </motion.span>

              {/* Gradient Title */}
              <h2 className="text-4xl md:text-4xl uppercase font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  Inspiring Stories from Innovators
                </span>
              </h2>

            </div>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-blue-600 mx-auto mt-4 rounded-full"
            />
          </motion.div>

          <div className="relative bg-white rounded-3xl shadow-xl px-8 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">

                  {testimonials[testimonialIndex].image ? (
                    <img
                      src={testimonials[testimonialIndex].image}
                      alt={testimonials[testimonialIndex].Name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full flex items-center justify-center
                  bg-white/10 backdrop-blur-md
                  border border-white/20
                  Quote-gray-200 Quote-3xl shadow-lg">
                      <FaUser size={36} />
                    </div>
                  )}

                  <div>
                    <h4 className="font-bold text-xl Quote-slate-900">
                      {testimonials[testimonialIndex].Name}
                    </h4>
                    <p className="text-xm opacity-70 italic  font-semibold Quote-blue-600">
                      {testimonials[testimonialIndex].Designation}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  “
                  {testimonials[testimonialIndex].Quote.length > 160
                    ? testimonials[testimonialIndex].Quote.slice(0, 160) + "......."
                    : testimonials[testimonialIndex].Quote}
                  ”
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}