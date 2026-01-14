export default function AppliedRoboticsLab() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-800">
          Applied Robotics Lab
        </h1>

        <div className="flex justify-between items-center gap-12">
          {/* LEFT : Theory + Buttons */}
          <div className="w-full md:w-1/2">
            <p className="mt-4 text-slate-600 leading-relaxed">
              A hands-on laboratory focused on applied robotics, automation, and
              intelligent systems for real-world problem solving. The Applied
              Robotics Lab emphasizes practical learning and applied research in
              robotics systems, focusing on design, control, and deployment of
              robotic solutions for industry and research. A hands-on laboratory focused on applied robotics, automation, and
              intelligent systems for real-world problem solving. The Applied
              Robotics Lab emphasizes practical learning and applied research in
              robotics systems, focusing on design, control, and deployment of
              robotic solutions for industry and research. A hands-on laboratory focused on applied robotics, automation, and
              intelligent systems for real-world problem solving. The Applied
              Robotics Lab emphasizes practical learning and applied research in
              robotics systems, focusing on design, control, and deployment of
              robotic solutions for industry and research.A hands-on laboratory focused on applied robotics, automation, and
              intelligent systems for real-world problem solving. The Applied
              Robotics Lab emphasizes practical learning and applied research in
              robotics systems, focusing on design, control, and deployment of
              robotic solutions for industry and research.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-lg bg-cuBlue text-white font-medium shadow hover:bg-blue-700 transition">
                View Projects
              </button>

              <button className="px-5 py-2.5 rounded-lg border border-cuBlue text-cuBlue font-medium hover:bg-cuBlue/10 transition">
                Lab Equipment
              </button>

              <button className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
                Book Lab Access
              </button>
            </div>
          </div>

          {/* RIGHT : Images */}
          <div className="flex justify-around gap-3 w-1/2">
            <img
              src="../../../public/about/ab2.jpg"
              className="rounded-xl shadow-lg w-72 h-auto"
              alt="img1"
            />
            <div className="flex flex-col gap-2">
              <img
                src="../../../public/about/ab1.jpg"
                className="rounded-xl shadow-lg w-full h-full"
                alt="img1"
              />
              <img
                src="../../../public/about/ab1.jpg"
                className="rounded-xl shadow-lg w-full h-full"
                alt="img1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Focus Areas */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            Focus Areas
          </h2>
          <ul className="space-y-2 text-slate-600 list-disc list-inside">
            <li>Mobile & Autonomous Robotics</li>
            <li>Robotic Arm & Motion Control</li>
            <li>Industrial Automation</li>
            <li>AI & Computer Vision for Robotics</li>
          </ul>
        </div>

        {/* Equipment */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            Equipment
          </h2>
          <ul className="space-y-2 text-slate-600 list-disc list-inside">
            <li>Robotic Arms & Mobile Robot Platforms</li>
            <li>Arduino, ESP32, Raspberry Pi</li>
            <li>Sensors (Camera, IMU, Ultrasonic)</li>
            <li>Motors, Drivers & Control Modules</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            Projects
          </h2>
          <ul className="space-y-2 text-slate-600 list-disc list-inside">
            <li>Autonomous Navigation Robot</li>
            <li>Pick-and-Place Robotic Arm</li>
            <li>Line Following & Obstacle Avoidance</li>
            <li>Vision-based Robotics Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
