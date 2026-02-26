import { useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const workshopCategories = [
  { title: "Apparel & Merch Brand", icon: "👕" },
  { title: "POD Sticker Shop", icon: "🏷️" },
  { title: "Custom Engraving", icon: "🖋️" },
  { title: "Rapid Prototyping", icon: "⚙️" },
  { title: "Custom Signage", icon: "🪧" },
  { title: "Flat-Pack Furniture", icon: "🪑" },
  { title: "Event Decor Studio", icon: "🎉" },
  { title: "Cosplay Props", icon: "🎭" },
  { title: "Smart IoT Products", icon: "📡" },
  { title: "Architectural Models", icon: "🏗️" },
  { title: "Custom Packaging", icon: "📦" },
  { title: "Laser Craft Works", icon: "🔥" },
  { title: "3D Print Service", icon: "🖨️" },
  { title: "Product Design Lab", icon: "🧩" },
  { title: "Drone Assembly", icon: "🚁" },
  { title: "Robotics Studio", icon: "🤖" },
  { title: "PCB Design Hub", icon: "🔋" },
  { title: "Wood & Metal Works", icon: "🪵" },
  { title: "DIY Maker Camp", icon: "🚀" },
  { title: "Innovation Bootcamp", icon: "🌟" },
  { title: "Startup Fabrication", icon: "🏭" },
];

const events = [
  {
    title: "CNC Intro Session",
    venue: "FabLab CU — CNC Room",
    tag: "Beginner",
    color: "cyan",
  },
  {
    title: "3D Printing Basics",
    venue: "FabLab CU — Print Studio",
    tag: "Hands-On",
    color: "violet",
  },
  {
    title: "Robotics Starter Lab",
    venue: "FabLab CU — Robotics Bay",
    tag: "Advanced",
    color: "emerald",
  },
];

const tagColors = {
  cyan: {
    pill: "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30",
    dot: "bg-cyan-400",
    arrow: "text-cyan-400",
    hover: "hover:border-cyan-400/30",
  },
  violet: {
    pill: "bg-violet-500/15 text-violet-300 border border-violet-400/30",
    dot: "bg-violet-400",
    arrow: "text-violet-400",
    hover: "hover:border-violet-400/30",
  },
  emerald: {
    pill: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30",
    dot: "bg-emerald-400",
    arrow: "text-emerald-400",
    hover: "hover:border-emerald-400/30",
  },
};

function WorkshopCard({ item }) {
  return (
    <div
      className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4
        transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.07]
        hover:border-white/20 cursor-pointer"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl leading-none">{item.icon}</span>
        <h3 className="text-sm font-semibold text-slate-200 truncate leading-tight">
          {item.title}
        </h3>
      </div>
      <div className="flex items-center text-[11px] text-cyan-400 font-medium
        opacity-100 transition-opacity duration-200">
        Explore <FaArrowRight className="ml-1 text-[9px] mt-px" />
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="relative sticky top-6">
      {/* Multi-layer glow background */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br
        from-cyan-500/30 via-violet-500/20 to-emerald-500/20 blur-xl opacity-60" />
      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br
        from-cyan-400/10 via-violet-500/10 to-blue-600/10 blur-2xl" />

      {/* Card shell */}
      <div className="relative rounded-3xl overflow-hidden
        border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

        {/* Frosted top band with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br
          from-[#0d1a2e]/95 via-[#0a1020]/95 to-[#0d0d1f]/95
          backdrop-blur-2xl" />

        {/* Decorative top shimmer strip */}
        <div className="absolute top-0 left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {/* Inner highlight */}
        <div className="absolute top-0 left-0 right-0 h-32
          bg-gradient-to-b from-cyan-500/[0.06] to-transparent pointer-events-none" />

        <div className="relative p-6">

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl blur-md" />
              <div className="relative p-3 rounded-xl
                
                border border-cyan-400/25">
                <FaCalendarAlt className="text-cyan-300 text-sm" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Upcoming Sessions
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Live at FabLab CU Innovation Lab
              </p>
            </div>

            {/* Live badge */}
            <div className="ml-auto flex items-center gap-1.5
              bg-emerald-500/10 border border-emerald-400/25
              px-2.5 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[10px] font-semibold text-emerald-300">LIVE</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

          {/* Event Cards */}
          <div className="space-y-3 mb-6">
            {events.map((event, i) => {
              const c = tagColors[event.color];
              return (
                <div
                  key={i}
                  className={`group/item relative flex items-center justify-between
                    bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4
                    hover:bg-white/[0.07] ${c.hover}
                    transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full ${c.dot}`} />

                  <div className="pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold text-slate-100">
                        {event.title}
                      </p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.pill}`}>
                        {event.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-[10px] text-slate-500" />
                      <span className="text-[11px] text-slate-400">
                        {event.venue}
                      </span>
                    </div>
                  </div>

                  <FaChevronRight className={`text-[11px] ${c.arrow} opacity-60
                    group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================= */
/*  MAIN COMPONENT               */
/* ============================= */

export default function UpcomingWorkshops() {
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll
    ? workshopCategories
    : workshopCategories.slice(0, 10);

  return (
    <section className="relative bg-[#07071a] py-10 px-4 overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px]
        bg-gradient-radial from-cyan-500/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px]
        bg-gradient-radial from-violet-500/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2
            bg-white/[0.04] border border-white/10 rounded-full
            px-4 py-1.5 mb-4">
            <span className="text-[11px] font-semibold text-cyan-400 tracking-widest uppercase">
              FabLab CU Innovation Lab
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-50 leading-tight">
            All Events  
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500
              bg-clip-text text-transparent pl-2">
               & Workshop
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Explore 21+ business concepts powered by cutting-edge fabrication and
            rapid prototyping technology.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

          {/* LEFT: CARDS GRID */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-3">
              {visibleCourses.map((item, i) => (
                <WorkshopCard key={i} item={item} />
              ))}
            </div>

            {/* SHOW MORE */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group px-6 py-2.5 rounded-full text-sm font-semibold
                  bg-white/[0.04] border border-white/10
                  text-slate-300 hover:bg-white/[0.08] hover:border-white/20
                  transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                {showAll ? "Show Less" : `Show More`}
                <FaChevronRight className={`text-[10px] text-slate-400
                  transition-transform duration-200
                  ${showAll ? "rotate-90" : ""}`} />
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <RightPanel />

        </div>
      </div>
    </section>
  );
}