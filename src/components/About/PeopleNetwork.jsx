const people = [
  {
    title: "Management Team",
    image: "about/ra.jpg",
  },
  {
    title: "Research Team",
    image: "about/man.jpg",
  },
  {
    title: "Partners & Collaborators",
    image: "about/col.jpg",
  },
];

export default function PeopleNetwork() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">
          People & Network
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
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
