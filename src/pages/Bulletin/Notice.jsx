import { FaBell, FaCalendarAlt } from "react-icons/fa";

const notices = [
  {
    id: 1,
    title: "Applied Robotics Lab Orientation Program",
    date: "15 March 2026",
    description:
      "Orientation session for newly enrolled students of the Applied Robotics Lab.",
    isNew: true,
  },
  {
    id: 2,
    title: "Robotics Project Proposal Submission",
    date: "20 March 2026",
    description:
      "All student teams must submit their initial robotics project proposals.",
    isNew: true,
  },
  {
    id: 3,
    title: "Workshop on Autonomous Mobile Robots",
    date: "05 April 2026",
    description:
      "Hands-on workshop covering sensors, navigation, and control systems.",
    isNew: false,
  },
  {
    id: 4,
    title: "Robotics Lab Maintenance Notice",
    date: "10 April 2026",
    description:
      "The lab will remain closed from 10:00 AM to 4:00 PM for maintenance.",
    isNew: false,
  },
];

export default function Notice() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 pb-16">
      <div className="">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
            <FaBell className="text-xl" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Notice Board
            </h2>
            <p className="text-slate-600">
              Latest updates from the Applied Robotics Lab
            </p>
          </div>
        </div>

        {/* Notices */}
        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-l-4 border-blue-600"
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {notice.title}
                  </h3>
                  {notice.isNew && (
                    <span className="text-xs font-semibold bg-red-500 text-white px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600">
                  {notice.description}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-2 text-sm text-slate-500 whitespace-nowrap">
                <FaCalendarAlt className="text-blue-600" />
                {notice.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
