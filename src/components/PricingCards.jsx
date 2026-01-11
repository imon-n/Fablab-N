const tiers = [
  {
    name: "Laser Cutting",
    price: "$1/min",
    details: "Materials additional",
  },
  {
    name: "Metal Laser Cutting",
    price: "$2.5/min",
    details: "Materials additional",
  },
  {
    name: "FDM 3D Printing",
    price: "$0.10/g",
    details: "PLA/PETG available",
  },
  {
    name: "SLA Resin Printing",
    price: "$0.40/mL",
    details: "Standard resin; specialty resins via consultation",
  },
  {
    name: "CNC Routing",
    price: "$1/min setup + $0.50/min machining",
    details: "Tooling and sheets billed separately",
  },
];

export default function PricingCards() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
        <p className="mt-2 text-slate-700">
          Estimates only; excludes weekends. Book a consultation for complex jobs.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="glass rounded-xl p-5">
              <div className="font-semibold">{t.name}</div>
              <div className="mt-2 text-cuBlue text-xl">{t.price}</div>
              <div className="mt-1 text-sm text-slate-600">{t.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
