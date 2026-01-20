import { MdCheckCircle } from "react-icons/md";

export default function Focusareas() {
  const areas = [
  "Sensors, Actuators & Advanced Mechatronic Systems",
  "Rapid Prototyping, Testing & Experimental Robotics Platforms",
  "Artificial Intelligence & Machine Learning in Robotics Applications",
  "Autonomous Robots, Navigation & Path Planning Systems",
  "Embedded Systems Design & Control for Robotics",
  "Sensors, Actuators & Advanced Mechatronic Systems",
  "Rapid Prototyping, Testing & Experimental Robotics Platforms",
];

  return (
    <div className="space-y-3">
      {areas.map((area, index) => (
        <div
          key={index}
          className="flex items-center gap-4 px-2 py-3 border-l-4 border-blue-500 hover:border-blue-600 transition-colors duration-200"
        >
          <MdCheckCircle size={22} className="text-blue-500 flex-shrink-0" />
          <span className="text-gray-800 font-medium">{area}</span>
        </div>
      ))}
    </div>
  );
}