import Btn from "../utlis/Btn";

const services = [
  {
    title: "Laser Cutting",
    desc: "High-powered laser cutting and etching for 2D shapes and surface patterns.",
    detail: "Bed 1000×700 mm, approx $1/min + materials.",
    image: "/services/laser-cutting.jpeg",
  },
  {
    title: "FDM 3D Printing",
    desc: "Fast and affordable prototyping with PLA/PETG filaments.",
    detail: "Build 256×256×256 mm, approx $0.10/g.",
    image: "/services/fdm-3d-printing.jpg",
  },
  {
    title: "SLA 3D Printing",
    desc: "High-detail resin printing with polished surface finish.",
    detail: "Build up to 335×200×300 mm; $0.40/mL standard resin.",
    image: "/services/sla-3d-printing.jpg",
  },
  {
    title: "CNC Routing",
    desc: "Precision cutting and milling of wood, plastics, composites, aluminium.",
    detail: "3-axis 2400×1200×100 mm; $1/min setup + $0.50/min machining.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

          {/* Title + Description */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-4xl font-extrabold uppercase">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl">
              Explore our advanced fabrication facilities operated by trained technicians.
            </p>
          </div>


          <Btn>Explore More Facilities</Btn>

         

        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-80 flex flex-col justify-end p-6"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <h3 className="font-semibold text-lg mb-2">
                  {s.title}
                </h3>

                <p className="text-sm text-slate-200 mb-2 line-clamp-2">
                  {s.desc}
                </p>

                <p className="text-xs text-slate-300 font-mono">
                  {s.detail}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}