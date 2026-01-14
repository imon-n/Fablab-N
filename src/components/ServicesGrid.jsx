const services = [
  {
    title: "Laser Cutting",
    desc: "High-powered laser cutting and etching for 2D shapes and surface patterns.",
    detail: "Bed 1000×700 mm, approx $1/min + materials.",
    image: "/services/laser-cutting.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M2 12h20v2H2zm4-6h12v2H6zm2 12h8v2H8z"/>
      </svg>
    ),
  },
  {
    title: "FDM 3D Printing",
    desc: "Fast and affordable prototyping with PLA/PETG filaments.",
    detail: "Build 256×256×256 mm, approx $0.10/g.",
    image: "/services/fdm-3d-printing.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M4 4h16v6H4zM6 12h12v8H6z"/>
      </svg>
    ),
  },
  {
    title: "SLA 3D Printing",
    desc: "High-detail resin printing with polished surface finish.",
    detail: "Build up to 335×200×300 mm; $0.40/mL standard resin.",
    image: "/services/sla-3d-printing.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 2l7 7-7 13L5 9l7-7z"/>
      </svg>
    ),
  },
  {
    title: "CNC Routing",
    desc: "Precision cutting and milling of wood, plastics, composites, aluminium.",
    detail: "3-axis 2400×1200×100 mm; $1/min setup + $0.50/min machining.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M3 3h18v4H3zm2 6h14v12H5z"/>
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
        <p className="mt-2 text-slate-700">
          Operates as a bureau service with trained technicians. Book a consultation for complex jobs.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-80 flex flex-col justify-end p-5">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const fallback = {
                      "Laser Cutting": "https://images.unsplash.com/photo-1581092921141-2a4b88e7a0d2?q=80&w=1200&auto=format&fit=crop",
                      "FDM 3D Printing": "https://images.unsplash.com/photo-1582571352032-448f7928eca6?q=80&w=1200&auto=format&fit=crop",
                      "SLA 3D Printing": "https://images.unsplash.com/photo-1541625602330-2277a1a48d85?q=80&w=1200&auto=format&fit=crop",
                      "CNC Routing": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
                    }[s.title];
                    e.currentTarget.src = fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-cuBlue bg-white/20 p-2 rounded-full backdrop-blur-sm">{s.icon}</div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-200 line-clamp-2 mb-1">{s.desc}</p>
                <p className="text-xs text-slate-400 font-mono">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
