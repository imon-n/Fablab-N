export default function Banner() {
  return (
    <div
      id="banner-section"
      className="h-[420px] sm:h-[500px] lg:h-[620px] bg-cover bg-center relative px-3 md:px-10"
      style={{
        backgroundImage: `url(https://i.ibb.co.com/XfLHWTFS/applie-Lab.jpg)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-5xl mx-auto left-0 top-20 text-white space-y-6">
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80">
            Innovation • Automation • Intelligent Systems
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold uppercase leading-snug lg:leading-tight">
            <span className="text-cyan-400">Applied Robotics</span> Laboratory{" "}
            <br />
            Where Ideas Become Intelligent Machines
          </h1>

          <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            The Applied Robotics Laboratory is a center of excellence dedicated
            to hands-on learning, research, and innovation in robotics,
            automation, and intelligent systems. We focus on robotics, embedded
            systems, AI, IoT, and industrial automation bridging theory with
            real world applications.
          </p>
        </div>
      </div>
    </div>
  );
}
