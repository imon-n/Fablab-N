const equipment = [
  {
    title: "3D Printer",
    image: "https://i.ibb.co.com/dsPTHkXP/3d.jpg",
  },
  {
    title: "CNC Milling Machine",
    image: "https://i.ibb.co.com/QvdfgCKQ/cnc.jpg",
  },
  {
    title: "PCB Prototyping Machine",
    image: "https://i.ibb.co.com/hxqd1tMN/pcb.webp",
  },
  {
    title: "Laser Cutting Machine",
    image: "https://i.ibb.co.com/xSnFDckk/laser.jpg",
  },
  {
    title: "Laser Cutting Machine",
    image: "https://i.ibb.co.com/xSnFDckk/laser.jpg",
  },
  {
    title: "Robotics & IoT Equipment",
    image: "https://i.ibb.co.com/XxykDhG7/eq1.jpg",
  },
];

export default function Equipment() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">
          Available Equipment
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-64 flex flex-col justify-end p-5"
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
                <h3 className="font-semibold text-xl">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
