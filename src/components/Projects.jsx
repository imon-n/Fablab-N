import { useState, useEffect, useRef } from "react";
import {
  FaLocationArrow,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Perahin Digital: Your Tech Partner",
      raName: "Md. Ayead Mujib Tamim",
      overview:
        "We help businesses get online smoothly and work smarter. Perahin Digital designs beautiful, user-friendly websites and integrates practical AI tools into your daily operations. We take care of the tech behind the scenes, so you can focus entirely on your business without the headache.",
      image:
        "/projects/perahin.jpeg",
    },
    {
      id: 2,
      title: "NeuroNest",
      raName: "Alif Al Zaman",
      overview:
        "NeuroNest is an AI-powered diabetic limb-saver ecosystem in Bangladesh, designed specifically for diabetic patients. It delivers a unique layer of protection and peace of mind through smart diabetic socks that continuously listen to the early whispers of risk, enabling timely and proactive screening alerts. With constant monitoring and early warning, NeuroNest offers something truly powerful: time to act before irreversible damage begins. By eliminating guesswork and reducing the need for frequent, costly specialist check-ups, NeuroNest removes the fear of unnoticed foot infections and complications. It seamlessly monitors foot health, generates early screening alerts, and shares real-time updates with caregivers, ensuring safe, secure, and sustainable healthcare for millions of diabetic patients.",
      image:
        "/projects/neuroNest.jpeg",
    },
    {
      id: 3,
      title: "TurfCast",
      raName: "Nur Mohammad Imon",
      overview:
        "TurfCast is an AI powered multi-camera sports streaming system that automatically tracks the ball and selects the best viewing angles in real time. It offers live streaming, highlights, match recording, and an online slot booking system. The platform supports live broadcast and sharing on social media like Facebook and YouTube, allowing matches to reach a wider audience across web and mobile devices.",
      image:
        "/projects/Turfcast.jpeg",
    },
    {
      id: 4,
      title: "Andorsajja - Your Vision, Our Design",
      raName: "Zakia Parvin",
      overview:
        "A home is more than just four walls; it’s a sanctuary where your story begins. At “Andorsajja”, we are dedicated to transforming your house or office into a space that truly reflects who you are. We believe that professional interior design shouldn’t be complicated or out of reach. That’s why we bring expert design solutions right to your fingertips through our complete online service. Whether you’re across the city or miles away, you can collaborate with us from the comfort of your couch. We take your ideas, your budget, and your specific needs to create stunning 3D designs, curated color palettes, and functional furniture layouts. Our goal is simple: to turn your everyday spaces into an elegant reality with a touch of creativity and a lot of heart.",
      image: "/projects/Andorsajja.jpeg",
    },
    {
      id: 5,
      title: "Axivo — Next Gen Branding Agency",
      raName: "Md. Mostafizur Rahaman",
      overview:
        "Axivo helps you build your brand from the ground up. We design logos and full brand identity, create clean and user-friendly UI/UX, and develop modern websites. Everything you need to build and grow a strong brand — all in one place.",
      image:
        "/projects/Axivo — Next Gen Branding Agency.jpeg",
    },
    {
      id: 6,
      title: "Adorable Crochets",
      raName: "Sadika Afrin Reha",
      overview:
        "I create small handmade crochet pieces filled with warmth and personality, including sunflower keychains, cute amigurumi, and floral bouquets. Every stitch is made with care to bring a little joy and color into everyday life. My goal is to grow this passion into a recognizable crochet brand through creative presentation, aesthetic packaging, and meaningful customer connections. I create small, handmade crochet pieces filled with warmth and personality, including keychains, cute amigurumi, and floral bouquets, as well as baby clothes. Every stitch is made with care to bring a little joy and color into everyday life. My goal is to grow this passion into a recognizable crochet brand through creative presentation, aesthetic packaging, and meaningful customer connections.",
      image:
        "/projects/AdorableCrochets.jpeg",
    },
    {
      id: 7,
      title: "Onkur - Intelligent Agriculture at your Home",
      raName: "Mohammad Shaleh Zaed",
      overview:
        "Agriculture is not just about producing necessary goods; it needs to be efficient, timely and ensuring quality so that you can produce something beneficial. It's not just another type of work. It ensures you can eat healthy, fuel your work and do something better for the world. Lack of labor, time, space and expertise should not become an obstacle for humanity to aim higher than just our basic needs. Hence, ONKUR exists to redefine the boundary between technology and nature. By integrating autonomous intelligence into the fabric of daily life, we transform any space into a high-yield asset, Our system handles the complexity of the biological cycle so that you can focus on the growth of your future, ONKUR doesn’t just grow food; it grows opportunity- providing a seamless path to passive income and sustainable living, ensuring that the future of food is as smart as the people who dream it.",
      image:
        "/projects/onkur.jpeg",
    },
  ];

  const [visible, setVisible] = useState(3);
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState({});
  const [transition, setTransition] = useState(true);
  const intervalRef = useRef(null);

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clone slides for infinite effect
  const extendedProjects = [
    ...projects.slice(-visible),
    ...projects,
    ...projects.slice(0, visible),
  ];

  useEffect(() => {
    setCurrent(visible);
  }, [visible]);

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  /* ================= FIXED AUTO SLIDE ================= */

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [visible]);

  /* ================= Infinite Reset ================= */

  useEffect(() => {
    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(projects.length);
      }, 700);
    }

    if (current === projects.length + visible) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(visible);
      }, 700);
    }

    setTimeout(() => setTransition(true), 750);
  }, [current, visible]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-6 md:py-8 px-6 bg-gradient-to-br from-slate-100 via-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2 mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            RA Projects Showcase
          </div>

        <h2 className="text-3xl md:text-5xl font-extrabold ">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent uppercase">
            Projects
          </span>
        </h2>

        <p className="text-slate-500 max-w-xl">
            Innovative research and real-world solutions developed by our brightest Research Assistants.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className="overflow-hidden">
            <div
              className={`flex ${
                transition ? "transition-transform duration-700 ease-in-out" : ""
              }`}
              style={{
                transform: `translateX(-${(100 / visible) * current}%)`,
              }}
            >
              {extendedProjects.map((project, index) => {
                const isExpanded = expanded[project.id];

                return (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 transition hover:shadow-xl overflow-hidden">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-56 w-full object-cover"
                      />

                      <div className="p-6">
                        <h3 className="flex justify-between items-center text-lg font-bold text-blue-600 transition cursor-pointer">
                          {project.title}
                          <FaLocationArrow />
                        </h3>

                        <p className="text-sm italic opacity-80 mt-1 underline">
                          {project.raName}
                        </p>

                        <p className="text-sm text-slate-600 mt-2">
                          {isExpanded
                            ? project.overview
                            : project.overview.slice(0, 120) + "..."}
                        </p>

                        {project.overview.length > 100 && (
                          <button
                            onClick={() => toggleExpand(project.id)}
                            className="mt-2 text-blue-600 text-sm font-semibold hover:underline"
                          >
                            {isExpanded ? "View Less" : "View More"}
                          </button>
                        )}

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white shadow-md w-11 h-11 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white shadow-md w-11 h-11 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}