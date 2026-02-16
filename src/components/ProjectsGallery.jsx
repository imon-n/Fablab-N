const projects = [
  {
    title: "Parametric Pavilion",
    tags: ["CNC", "Wood"],
    image: "/projects/parametric-pavilion.jpg",
  },
  {
    title: "Robotics Enclosure",
    tags: ["Laser", "Acrylic"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Topographic Model",
    tags: ["CNC", "Foam"],
    image: "/projects/topographic-model.jpg",
  },
  {
    title: "Wearable Prototype",
    tags: ["SLA", "Resin"],
    image: "/projects/wearable-prototype.jpg",
  },
];

export default function ProjectsGallery() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
            <p className="mt-2 text-slate-700">Open sharing to scale ideas without moving products globally.</p>
          </div>
          {/* <a
            href="https://fablabs.io"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Explore fablabs.io
          </a> */}
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src={p.image}
                alt={p.title}
                className="h-44 w-full object-cover"
                onError={(e) => {
                  const fallback = {
                    "Parametric Pavilion": "https://images.unsplash.com/photo-1529101091764-4e24e78b8c07?q=80&w=1200&auto=format&fit=crop",
                    "Topographic Model": "https://images.unsplash.com/photo-1519332978332-21b7d610d395?q=80&w=1200&auto=format&fit=crop",
                    "Wearable Prototype": "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200&auto=format&fit=crop",
                  }[p.title];
                  if (fallback) e.currentTarget.src = fallback;
                }}
              />
              <div className="p-4 bg-white">
                <div className="font-semibold">{p.title}</div>
                <div className="mt-1 flex gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
