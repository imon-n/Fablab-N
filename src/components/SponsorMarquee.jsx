import { motion } from "framer-motion";

export default function SponsorMarquee() {
  const logos = [
    "https://i.ibb.co.com/GgDpW6Z/cu-Logo.png",
    "https://i.ibb.co.com/rR03SFzZ/bd-govt.png",
    "https://i.ibb.co.com/5XHNkTMT/heat.png",
    "https://i.ibb.co.com/YTdntPxm/manjuri-Commision.png",
    "https://i.ibb.co.com/vvcV6b1t/world-Bank.png",
  ];

  return (
    <section className="relative bg-white py-8 overflow-hidden border-t border-b border-blue-50">

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />

        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        {/* Moving Track */}
        <motion.div
          className="flex gap-1"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {/* Duplicate logos for infinite effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px]"
            >
              <img
                src={logo}
                alt="Sponsor Logo"
                className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}