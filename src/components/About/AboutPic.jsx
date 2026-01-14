import { motion } from "framer-motion";

export default function AboutPic() {
  const floatY = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatX = {
    animate: {
      x: [0, -12, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative h-[500px]  ml-10">
      {/* Main Static Image */}
      <img
        src="about/ab1.jpg"
        className="rounded-xl shadow-lg w-80 h-64 absolute left-0 top-0"
        alt="img1"
      />

      {/* Up-down floating */}
      <motion.div
        {...floatY}
        className="absolute right-2 top-0 h-96 "
      >
        <img src="about/ab2.jpg" className="rounded-xl shadow-lg w-64" alt="img2" />
      </motion.div>

      {/* Left-right floating */}
      <motion.div {...floatX} className="absolute left-16 bottom-6">
        <img
          src="about/ab3.jpg"
          className="rounded-xl shadow-lg w-80 h-64 0"
          alt="img3"
        />
      </motion.div>
    </div>
  );
}
