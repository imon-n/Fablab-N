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
    <div className="relative w-full 
                    h-auto md:h-[500px]
                    flex flex-col gap-6
                    md:block md:ml-10">

      {/* Image 1 */}
      <img
        src="about/ab1.jpg"
        alt="img1"
        className="rounded-xl shadow-lg
                   w-full sm:w-96
                   h-56 sm:h-64
                   object-cover
                   md:absolute md:left-0 md:top-0"
      />

      {/* Image 2 */}
      <motion.div
        {...floatY}
        className="md:absolute md:right-2 md:top-0"
      >
        <img
          src="about/ab2.jpg"
          alt="img2"
          className="rounded-xl shadow-lg
                     w-full sm:w-72
                     h-56 sm:h-80
                     object-cover"
        />
      </motion.div>

      {/* Image 3 */}
      <motion.div
        {...floatX}
        className="md:absolute md:left-16 md:bottom-6"
      >
        <img
          src="about/ab3.jpg"
          alt="img3"
          className="rounded-xl shadow-lg
                     w-full sm:w-96
                     h-56 sm:h-64
                     object-cover"
        />
      </motion.div>

    </div>
  );
}
