import { FaUserTie } from "react-icons/fa";

const leaders = [
  {
    title: "SPM’s Message",
    name: "Senior Project Manager",
    message:
      "Providing strategic leadership, ensuring project excellence, innovation, and sustainable growth.",
  },
  {
    title: "ASPM’s Message",
    name: "Assistant Senior Project Manager",
    message:
      "Supporting execution, coordination, and operational efficiency across all project activities.",
  },
];

export default function LeadershipMessages() {
  return (
    <section className="py-2 bg-slate-50">
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Leadership Messages
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {leaders.map((l) => (
            <div
              key={l.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-3">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition">
                  <FaUserTie size={22} />
                </div>

                <div>
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-800">
                    {l.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{l.name}</p>
                </div>
              </div>

              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                {l.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
