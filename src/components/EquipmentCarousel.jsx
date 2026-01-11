import { useEffect, useState } from "react";

const items = [
  {
    title: "Laser Cutter",
    spec: "Bed 1000×700 mm • Acrylic, MDF, Cardboard, etc.",
    image: "/equipment/laser-cutting.jpg",
  },
  {
    title: "Metal Laser Cutter",
    spec: "Bed 1200×1200 mm • Metals & thick materials",
    image: "/equipment/metal-laser-cutting.jpeg",
  },
  {
    title: "FDM 3D Printer",
    spec: "Build 256×256×256 mm • PLA, PETG",
    image: "/equipment/fdm-3d-printing.jpg",
  },
  {
    title: "SLA Resin Printer",
    spec: "Up to 335×200×300 mm • High-detail resin",
    image: "/equipment/sla-resin-printing.jpg",
  },
  {
    title: "CNC Router",
    spec: "3-axis 2400×1200×100 mm • Wood & composites",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function EquipmentCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section bg-slate-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Equipment</h2>
        <p className="mt-2 text-slate-700">Industry-standard tools for cutting, printing and machining.</p>
        <div className="mt-6 relative">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={items[index].image}
              alt={items[index].title}
              className="w-full h-[280px] md:h-[420px] object-cover"
            />
          </div>
          <div className="glass rounded-xl p-4 absolute bottom-4 left-4 max-w-xs">
            <div className="font-semibold">{items[index].title}</div>
            <div className="text-xs text-slate-600">{items[index].spec}</div>
          </div>
          <div className="flex gap-2 mt-4 justify-center">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${index === i ? "bg-cuGreen" : "bg-slate-300"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
