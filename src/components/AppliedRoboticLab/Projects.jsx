const projects = [
  {
    title: "Autonomous Mobile Robot",
    desc: "Design and development of a self-navigating robot using sensors, mapping, and path planning algorithms.",
    detail: "Technologies: ROS, LiDAR, Ultrasonic Sensors, Embedded Control",
    image: "/projects/autonomous-robot.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M4 4h16v6H4zM3 12h18v8H3z"/>
      </svg>
    ),
  },
  {
    title: "Robotic Arm & Manipulation",
    desc: "Multi-DOF robotic arm for pick-and-place, assembly tasks, and industrial automation experiments.",
    detail: "Technologies: Servo Motors, Inverse Kinematics, Microcontrollers",
    image: "/projects/robotic-arm.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M6 2h12v4H6zm2 6h8v14H8z"/>
      </svg>
    ),
  },
  {
    title: "AI-Based Vision System",
    desc: "Computer vision system for object detection, tracking, and quality inspection in robotics.",
    detail: "Technologies: OpenCV, Deep Learning, Camera Sensors",
    image: "/projects/robot-vision.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 2l9 6v8l-9 6-9-6V8z"/>
      </svg>
    ),
  },
  {
    title: "Smart Automation System",
    desc: "Industrial automation project integrating sensors, PLCs, and IoT-based monitoring.",
    detail: "Technologies: PLC, SCADA, IoT, Industrial Sensors",
    image: "/projects/automation.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M3 3h18v4H3zm4 6h10v12H7z"/>
      </svg>
    ),
  },
];


export default function Projects() {
  return (
    <section className="">
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold">
          Applied Robotics Projects
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-80 flex flex-col justify-end p-5"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                    {p.icon}
                  </div>
                  <h3 className="font-semibold text-lg">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-200 line-clamp-2 mb-1">
                  {p.desc}
                </p>

                <p className="text-xs text-slate-400 font-mono">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
