import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function UpcomingWorkshops() {
  const workshopCategories = [
    {
      title: "Machine Training",
      desc: "Hands-on machine enrollment sessions several times a week. Free access for FabLab CU members.",
      btn: "Information & Registration",
    },
    {
      title: "Individual Training",
      desc: "Private 1:1 training on CNC, 3D Printing or Fusion 360 design tools.",
      btn: "Book an Appointment",
    },
    {
      title: "Consultation Hour",
      desc: "Get expert support in developing and refining your fabrication project.",
      btn: "Book Consultation",
    },
    {
      title: "Children's Workshops",
      desc: "Creative workshops for kids including 3D printing, electronics and robotics.",
      btn: "Information & Booking",
    },
    {
      title: "Summer Innovation Camp",
      desc: "Holiday programs focused on DIY, prototyping and digital fabrication.",
      btn: "Learn More",
    },
    {
      title: "Guided Lab Tours",
      desc: "Guided experience for schools and groups to explore FabLab CU machines.",
      btn: "Book a Tour",
    },
  ];

  const upcomingDates = [
    {
      day: "Monday, May 20, 2026",
      events: [
        "3D Printing Basics – 3:00 PM",
        "Laser Cutter Safety – 5:00 PM",
      ],
    },
    {
      day: "Wednesday, May 22, 2026",
      events: [
        "Arduino Workshop – 2:00 PM",
        "CNC Milling Intro – 4:00 PM",
      ],
    },
    {
      day: "Saturday, May 25, 2026",
      events: [
        "Robotics for Beginners – 10:00 AM",
      ],
    },
  ];

  return (
    <section className="bg-blue-600 py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

        {/* LEFT SIDE – WORKSHOP TYPES */}
        <div className="lg:col-span-2 text-white">
          <h2 className="text-4xl font-extrabold mb-6 tracking-wide">
            All Events
          </h2>

          <div className="grid sm:grid-cols-2 gap-10">
            {workshopCategories.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-1 uppercase tracking-wider">
                  {item.title}
                </h3>

                <p className="text-blue-100 text-sm mb-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* Redesigned Button */}
                <Link
                  to="/workshops"
                  className="group inline-flex items-center gap-2 
                             bg-white text-blue-600 hover:bg-blue-50 text-slate-900 text-sm font-semibold 
                             px-3.5 py-1 rounded-full
                             shadow-md
                             transition-all duration-300
                             hover:shadow-xl hover:-translate-y-1"
                >
                  {item.btn}

                  <FaArrowRight
                    className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – UPCOMING DATES PANEL */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Upcoming Workshops
          </h3>

          <div className="space-y-6">
            {upcomingDates.map((day, index) => (
              <div key={index} className="border-b pb-4 last:border-none">
                <h4 className="font-semibold text-slate-800 mb-2">
                  {day.day}
                </h4>

                <ul className="space-y-1 text-sm text-blue-600">
                  {day.events.map((event, i) => (
                    <li
                      key={i}
                      className="hover:text-blue-800 transition cursor-pointer"
                    >
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <Link
            to="/workshops"
            className="mt-8 inline-flex items-center gap-2 
                       bg-blue-600 text-white px-6 py-3 
                       rounded-xl font-semibold
                       hover:bg-blue-700 
                       transition-all duration-300 w-full justify-center"
          >
            View All Workshops
            <FaArrowRight className="text-sm" />
          </Link>
        </div>

      </div>
    </section>
  );
}