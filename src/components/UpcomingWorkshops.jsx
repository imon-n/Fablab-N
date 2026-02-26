import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

/* ============================= */
/*  21 BUSINESS IDEAS (YOUR DATA) */
/* ============================= */

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
    { title: "CNC Intro Session", venue: "FabLab CU - CNC Room" },
    { title: "3D Printing Basics", venue: "FabLab CU - Print Studio" },
    { title: "Robotics Starter Lab", venue: "FabLab CU - Robotics Bay" },
  ];

/* ============================= */
/*  RIGHT PANEL DATA */
/* ============================= */

const upcomingDates = [
  {
    day: "Mon",
    events: [
      { name: "3D Printing", time: "3:00 PM", dot: "bg-cyan-400" },
      { name: "Laser Safety", time: "5:00 PM", dot: "bg-orange-400" },
    ],
  },
  {
    day: "Wed",
    events: [
      { name: "Arduino", time: "2:00 PM", dot: "bg-purple-400" },
      { name: "CNC Intro", time: "4:00 PM", dot: "bg-emerald-400" },
    ],
  },
  {
    day: "Sat",
    events: [
      { name: "Robotics", time: "10:00 AM", dot: "bg-amber-400" },
    ],
  },
];

/* ============================= */
/*  COMPACT CARD */
/* ============================= */


function WorkshopCard({ item }) {
  return (
    <div className="group bg-white/[0.03] border border-white/10 rounded-xl p-4
      transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.06]
      hover:border-white/20 cursor-pointer">

      <div className="flex items-center gap-2">
        <span className="text-base">{item.icon}</span>
        <h3 className="text-sm font-semibold text-slate-200 truncate">
          {item.title}
        </h3>
      </div>

      <div className="mt-2 flex items-center text-xs text-cyan-400 opacity-0 opacity-100 transition">
        View <FaArrowRight className="ml-1 text-[10px]" />
      </div>
    </div>
  );
}


/* ============================= */
/*  MAIN COMPONENT */
/* ============================= */

export default function UpcomingWorkshops() {
  const [activeDay, setActiveDay] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll
    ? workshopCategories
    : workshopCategories.slice(0, 10);

  return (
    <section className="relative bg-[#07071a] py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-50">
            Business &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Innovation Ideas
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            All programs and workshops are powered by FabLab CU Innovation Lab.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

          {/* LEFT SIDE */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {visibleCourses.map((item, i) => (
                <WorkshopCard key={i} item={item} />
              ))}
            </div>

            {/* SHOW MORE / LESS */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-5 py-2 rounded-full text-sm font-semibold
                  bg-white/5 border border-white/10
                  text-slate-300 hover:bg-white/10 transition"
              >
                {showAll ? "Show Less" : "Show others"}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE PANEL */}
           <div className="relative group sticky top-6">

      {/* Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 
        rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />

      {/* Card */}
      <div className="relative bg-white/[0.04] backdrop-blur-xl 
        border border-white/10 rounded-3xl p-6 shadow-2xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20">
            <FaCalendarAlt className="text-cyan-400 text-sm" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Upcoming Sessions
            </h3>
            <p className="text-xs text-slate-400">
              Upcoming workshops at FabLab CU
            </p>
          </div>
        </div>

        {/* Event Cards */}
        <div className="space-y-4 mb-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="group/item flex items-center justify-between
              bg-white/[0.03] border border-white/5 rounded-xl p-4
              hover:bg-white/[0.06] hover:border-white/10
              transition-all duration-300 cursor-pointer"
            >
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  {event.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <FaMapMarkerAlt className="text-xs text-slate-500" />
                  <span className="text-xs text-slate-400">
                    {event.venue}
                  </span>
                </div>
              </div>

              <FaArrowRight className="text-xs text-slate-500 group-hover/item:translate-x-1 transition" />
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className="w-full py-3 rounded-xl text-sm font-semibold text-white
          bg-gradient-to-r from-cyan-500 to-blue-600
          hover:from-cyan-400 hover:to-blue-500
          transition-all duration-300"
        >
          Explore All Programs →
        </button>

        {/* Footer Note */}
        <p className="text-[11px] text-slate-500 text-center mt-4">
          All events and workshops are powered by FabLab CU.
        </p>
      </div>
    </div>
  

        </div>
      </div>
    </section>
  );
}