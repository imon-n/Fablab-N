import { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function FAQWithTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  /* ================= SHORT FAQ ================= */
  const faqs = [
    {
      question: "What machines can I use?",
      answer:
        "Members get access to 3D printers, CNC machines, laser cutters, electronics stations and more.",
    },
    {
      question: "Do you offer technical support?",
      answer:
        "Yes, our lab instructors guide you during machine use and prototyping sessions.",
    },
    {
      question: "Do you offer technical support?",
      answer:
        "Yes, our lab instructors guide you during machine use and prototyping sessions.",
    },
    {
      question: "How do I join FabLab CU?",
      answer:
        "You can apply online through our membership page and attend a short orientation session.",
    },
  ];

  /* ================= TESTIMONIALS ================= */
  const testimonials = [
    {
      name: "Philipp Albrecht",
      role: "Startup Founder",
      text: "FabLab CU helped us rapidly prototype our first product. The facilities and guidance made everything possible. s rapidly prototype our first product. The facilities and guidance made everything poss",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ayesha Rahman",
      role: "Engineering Student",
      text: "The hands-on workshops gave me real fabrication experience beyond the classroom.s rapidly prototype our first product. The facilities and guidance made everything poss",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Tanvir Hasan",
      role: "Robotics Club Member",
      text: "Access to machines and mentors makes FabLab CU a true innovation hu s rapidly prototype our first product. The facilities and guidance made everything possb.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Nusrat Jahan",
      role: "Product Designer",
      text: "From idea to working prototype — FabLab CU makes innovation practical.s rapidly prototype our first product. The facilities and guidance made everything poss",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
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

        {/* FAQ Title */}
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
        <div className="space-y-5">
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

      {/* ================= RIGHT – TESTIMONIAL ================= */}
      <div>

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-12 text-center"
>
  <div className="flex justify-center items-center gap-1">

    {/* Animated Icon */}
    <motion.span
      animate={{ rotate: [0, -10, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="text-blue-600 text-4xl md:text-5xl"
    >
      <FaQuoteLeft />
    </motion.span>

    {/* Gradient Title */}
    <h2 className="text-4xl md:text-5xl uppercase font-extrabold leading-tight">
      <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
        Stories from Our Creators
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
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={testimonials[testimonialIndex].image}
                  alt=""
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-3xl text-slate-900">
                    {testimonials[testimonialIndex].name}
                  </h4>
                  <p className="text-md font-semibold text-blue-600">
                    {testimonials[testimonialIndex].role}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed">
                “{testimonials[testimonialIndex].text}”
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  </section>
);
}