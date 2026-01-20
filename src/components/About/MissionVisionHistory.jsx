import {
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaUsers,
  FaCogs,
  FaHistory,
} from "react-icons/fa";

export default function MissionVisionHistory() {
  const missionGoals = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Advance robotics research through AI, mechatronics, and autonomous systems.",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description:
        "Encourage teamwork among students, researchers, and industry partners.",
    },
    {
      icon: FaCogs,
      title: "Real-World Impact",
      description:
        "Develop practical robotic solutions for real-life challenges.",
    },
  ];

  const visionGoals = [
    {
      icon: FaLightbulb,
      title: "Global Excellence",
      description:
        "Become a recognized center of excellence in applied robotics research.",
    },
    {
      icon: FaUsers,
      title: "Future Talent",
      description:
        "Shape skilled researchers and engineers for next-generation robotics.",
    },
    {
      icon: FaCogs,
      title: "Human–Robot Synergy",
      description:
        "Enable seamless collaboration between humans and intelligent machines.",
    },
  ];

  const milestones = [
    "Established with a focus on applied and autonomous robotics",
    "Successfully completed AI-based robotics research projects",
    "Expanded into industrial automation and smart systems",
    "Built collaboration with academic and industry partners",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-6">

        {/* Mission */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <FaBullseye className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Mission</h2>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            To advance applied robotics research by integrating intelligent
            systems, automation, and engineering innovation.
          </p>

          <div className="space-y-3">
            {missionGoals.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 border border-gray-200"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="text-blue-600" />
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md p-6 border border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaEye className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            To be a leading hub of robotics innovation, shaping the future of
            intelligent and autonomous systems.
          </p>

          <div className="space-y-3">
            {visionGoals.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 border border-gray-200"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="text-purple-600" />
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* History */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md p-6 border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 p-3 rounded-full">
              <FaHistory className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">History</h2>
          </div>

          <div className="space-y-3">
            {milestones.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
