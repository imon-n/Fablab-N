import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/hero-bg.png'), url('https://images.unsplash.com/photo-1574149501304-9eb7931b08ff?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
            Fab Lab – University of Chittagong
          </h1>
          <p className="mx-auto lg:mx-0 max-w-2xl text-lg md:text-xl text-slate-100 mb-8 drop-shadow-md">
            A global-inspired digital fabrication workshop enabling anyone to learn, create, and prototype.
            Access laser cutters, 3D printers, CNC machines, and open resources — a distributed education
            and manufacturing network for Bangladesh.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              to="/booking" 
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-lg font-medium text-white bg-cuGreen/80 backdrop-blur-md shadow-lg hover:bg-cuGreen/90 hover:shadow-xl transform hover:-translate-y-1 transition-all border border-white/20"
            >
              Book a Slot
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 backdrop-blur-sm px-8 py-3 font-medium text-white hover:bg-white hover:text-slate-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Services
            </Link> 
          </div> */}
        </div>

        {/* Right Stats - Vertically Aligned */}
        <div className="flex flex-col gap-6 w-full max-w-sm lg:w-auto transform md:translate-x-4 md:-translate-y-6 lg:translate-x-8 lg:-translate-y-10">
          {[
            { label: "Users", value: "25k+" },
            { label: "Fab Labs", value: "1,800+" },
            { label: "Countries", value: "75+" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg transform hover:scale-105 transition-transform text-center lg:text-right min-w-[200px]">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-slate-200 uppercase tracking-wider font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
