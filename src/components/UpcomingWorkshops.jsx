import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const workshopCategories = [
  {
    title: "Machine Training",
    desc: "Hands-on machine enrollment sessions several times a week. Free access for FabLab CU members.",
    btn: "Information & Registration",
    icon: "⚙️",
    glow: "hover:shadow-cyan-500/20",
    border: "hover:border-cyan-500/40",
    bg: "hover:bg-cyan-500/5",
    text: "text-cyan-400",
  },
  {
    title: "Individual Training",
    desc: "Private 1:1 training on CNC, 3D Printing or Fusion 360 design tools.",
    btn: "Book an Appointment",
    icon: "🎯",
    glow: "hover:shadow-orange-500/20",
    border: "hover:border-orange-500/40",
    bg: "hover:bg-orange-500/5",
    text: "text-orange-400",
  },
  {
    title: "Summer Innovation Camp",
    desc: "Holiday programs focused on DIY, prototyping and digital fabrication.",
    btn: "Learn More",
    icon: "🚀",
    glow: "hover:shadow-amber-500/20",
    border: "hover:border-amber-500/40",
    bg: "hover:bg-amber-500/5",
    text: "text-amber-400",
  },
  {
    title: "Guided Lab Tours",
    desc: "Guided experience for schools and groups to explore FabLab CU machines.",
    btn: "Book a Tour",
    icon: "🔬",
    glow: "hover:shadow-pink-500/20",
    border: "hover:border-pink-500/40",
    bg: "hover:bg-pink-500/5",
    text: "text-pink-400",
  },
];

const upcomingDates = [
  {
    day: "Mon, May 20",
    events: [
      { name: "3D Printing Basics", time: "3:00 PM", dot: "bg-cyan-400", text: "text-cyan-400" },
      { name: "Laser Cutter Safety", time: "5:00 PM", dot: "bg-orange-400", text: "text-orange-400" },
    ],
  },
  {
    day: "Wed, May 22",
    events: [
      { name: "Arduino Workshop", time: "2:00 PM", dot: "bg-purple-400", text: "text-purple-400" },
      { name: "CNC Milling Intro", time: "4:00 PM", dot: "bg-emerald-400", text: "text-emerald-400" },
    ],
  },
  {
    day: "Sat, May 25",
    events: [
      { name: "Robotics for Beginners", time: "10:00 AM", dot: "bg-amber-400", text: "text-amber-400" },
    ],
  },
];

function WorkshopCard({ item }) {
  return (
    <div
      className={`group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6
        transition-all duration-300 cursor-pointer
        hover:-translate-y-2 hover:shadow-2xl
        ${item.glow} ${item.border} ${item.bg}`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl
          transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          {item.icon}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <h3 className="font-bold text-base text-slate-100 mb-2 tracking-tight">
        {item.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {item.desc}
      </p>

      <Link
        to="/workshops"
        className={`inline-flex items-center gap-2 text-sm font-semibold ${item.text} group/btn`}
      >
        {item.btn}
        <FaArrowRight className="text-xs transition-transform duration-200 group-hover/btn:translate-x-1" />
      </Link>
    </div>
  );
}

export default function UpcomingWorkshops() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="relative bg-[#07071a] py-10 px-4 overflow-hidden">

      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/25 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              FabLab CU · Spring 2026
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-50 tracking-tight leading-tight mb-5">
            Workshops &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Events
            </span>
          </h2>

          <p className="text-slate-400 text- max-w-xl mx-auto leading-relaxed font-light">
            Hands-on training, expert consultations, innovation camps and guided lab tours
            designed to empower every maker.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

          {/* LEFT — CARDS */}
          <div className="grid sm:grid-cols-2 gap-5">
            {workshopCategories.map((item, i) => (
              <WorkshopCard key={i} item={item} />
            ))}
          </div>

          {/* RIGHT — PANEL */}
          <div className="sticky top-6 bg-white/[0.03] border border-white/10 rounded-3xl p-8 shadow-2xl">

            <div className="mb-7">
              <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">Coming Up</p>
              <h3 className="text-2xl font-extrabold text-slate-50 tracking-tight">Upcoming Sessions</h3>
            </div>

            {/* Day Tabs */}
            <div className="flex gap-1 bg-white/5 p-1 rounded-xl mb-7">
              {upcomingDates.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  className={`flex-1 py-2 px-1 rounded-lg text-xs font-bold transition-all duration-200
                    ${activeDay === i
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-slate-100 ring-1 ring-white/10"
                      : "text-slate-500 hover:text-slate-300"
                    }`}
                >
                  {d.day}
                </button>
              ))}
            </div>

            {/* Events */}
            <div className="space-y-3 mb-7">
              {upcomingDates[activeDay].events.map((event, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]
                    hover:bg-white/[0.05] hover:border-white/10 hover:translate-x-1
                    transition-all duration-200 cursor-pointer"
                >
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${event.dot}`} />
                  <div className="flex-1">
                    <p className="text-slate-200 text-sm font-semibold">{event.name}</p>
                    <p className={`text-xs font-medium mt-0.5 ${event.text}`}>{event.time}</p>
                  </div>
                  <FaArrowRight className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors" />
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-7" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-7">
              {[["6", "Workshop Types"], ["3", "Days/Week"], ["Free", "For Members"]].map(([val, label]) => (
                <div key={label} className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-cyan-400 font-extrabold text-xl leading-none">{val}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/workshops"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm text-white
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:from-cyan-400 hover:to-blue-500
                hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30
                transition-all duration-200"
            >
              View All Workshops
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
