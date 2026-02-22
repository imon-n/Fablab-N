import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPencilRuler, FaTools, FaRocket } from "react-icons/fa";
import { FaGear, FaMicrochip } from "react-icons/fa6";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import Btn from "../utlis/Btn";

/* ── Floating Particle ──────────────────────────────────────── */
function Particle({ x, y, delay, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-400/25 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y: [0, -80, 0],
        opacity: [0, 0.8, 0],
        scale: [0.4, 1.4, 0.4],
      }}
      transition={{
        duration: 4 + size / 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ── Spinning Background Gear ───────────────────────────────── */
function FloatingGear({ Icon, className, duration = 30, reverse = false }) {
  return (
    <motion.div
      className={`absolute pointer-events-none text-blue-500/[0.06] ${className}`}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <Icon />
    </motion.div>
  );
}

/* ── Accent Map ───────────────────────────────────────────── */
const accentMap = {
  blue: {
    wrapper:
      "hover:shadow-blue-500/30 border-blue-500/20 hover:border-blue-500/40",
    icon: "bg-blue-500/10 text-blue-400 border-blue-500/25",
  },
  sky: {
    wrapper:
      "hover:shadow-sky-500/30 border-sky-500/20 hover:border-sky-500/40",
    icon: "bg-sky-500/10 text-sky-400 border-sky-500/25",
  },
  indigo: {
    wrapper:
      "hover:shadow-indigo-500/30 border-indigo-500/20 hover:border-indigo-500/40",
    icon: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25",
  },
};

/* ── Process Card ───────────────────────────────────────────── */
function ProcessCard({ icon: Icon, title, index, accent = "blue" }) {
  const a = accentMap[accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.35 + index * 0.15,
        type: "spring",
        stiffness: 200,
        damping: 14,
      }}
      whileHover={{ scale: 1.07, y: -4 }}
      className="cursor-pointer"
    >
      <div
        className={`bg-white/[0.04] backdrop-blur-md border rounded-2xl
        px-4 py-3 text-center w-20 sm:w-24 lg:w-64
        shadow-lg transition-all duration-300
        hover:bg-white/[0.07] hover:shadow-xl
        ${a.wrapper}`}
      >
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 flex items-center justify-center border ${a.icon}`}
        >
          <Icon className="text-lg sm:text-xl" />
        </div>
        <p className="text-[10px] sm:text-xs font-bold text-slate-200 tracking-widest uppercase">
          {title}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Particles Data ─────────────────────────────────────────── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  x: 3 + (i * 4.3) % 93,
  y: 3 + (i * 16.7) % 92,
  delay: i * 0.25,
  size: 4 + (i % 4) * 2.5,
}));

/* ── Hero ───────────────────────────────────────────────────── */
export default function FabLabHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-screen flex items-center overflow-hidden bg-slate-950">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Glow Orbs (responsive) */}
      <div className="absolute -top-20 -right-20 w-[350px] sm:w-[520px] h-[350px] sm:h-[520px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-500/[0.08] rounded-full blur-[140px]" />

      {/* Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Spinning Gears */}
      <FloatingGear Icon={() => <FaGear style={{ fontSize: 120 }} />} className="top-6 left-4 sm:top-4 sm:left-2" duration={50} />
      <FloatingGear Icon={() => <FaMicrochip style={{ fontSize: 100 }} />} className="bottom-8 right-4" duration={35} reverse />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-4 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
              Now Open for Bookings
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1] mb-4">
            <span className="whitespace-nowrap">
              <Typewriter
                words={["Fab Lab"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent whitespace-nowrap">
              University of Chittagong
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-md text-sm sm:text-base md:text- text-slate-400 leading-relaxed mb-7 mx-auto lg:mx-0">
            A digital fabrication lab empowering CU students to design, build,
            and prototype using modern tools like{" "}
            <span className="text-blue-400 font-semibold">3D printers</span>,{" "}
            <span className="text-sky-400 font-semibold">laser cutters</span>, and{" "}
            <span className="text-indigo-400 font-semibold">CNC machines</span>.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
            <Link to="/booking">
              <Btn>Join with Us</Btn>
            </Link>

            <Link to="/services">
              <div className="inline-flex items-center gap-2 justify-center px-5 py-3 rounded-full font-bold text-base text-slate-200 border border-slate-600 hover:bg-blue-500/[0.08] hover:border-blue-500/50 transition-all duration-300">
                Learn More
                <MdArrowForward className="text-lg" />
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-6 sm:gap-10 mt-8 justify-center lg:justify-start">
            {[
              ["10+", "Machines"],
              ["500+", "Students"],
              ["24/7", "Access"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {num}
                </div>
                <div className="text-[0.6rem] text-slate-500 tracking-widest uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PROCESS FLOW */}
        <div className="shrink-0">
          <div className="flex flex-row lg:flex-col items-center gap-4">
            <ProcessCard icon={FaPencilRuler} title="Design" index={0} accent="blue" />
            <MdArrowForward className="text-slate-600 lg:hidden" />
            <MdArrowDownward className="text-slate-600 hidden lg:block" />
            <ProcessCard icon={FaTools} title="Build" index={1} accent="sky" />
            <MdArrowForward className="text-slate-600 lg:hidden" />
            <MdArrowDownward className="text-slate-600 hidden lg:block" />
            <ProcessCard icon={FaRocket} title="Test" index={2} accent="indigo" />
          </div>
        </div>

      </div>
    </section>
  );
}