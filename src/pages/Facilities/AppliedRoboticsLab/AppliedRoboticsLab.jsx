import Banner from "../../../components/AppliedRoboticLab/Banner";
import Equipment from "../../../components/AppliedRoboticLab/Equipment";
import FocusArea from "../../../components/AppliedRoboticLab/FocusArea";
import Projects from "../../../components/AppliedRoboticLab/projects";
import Subtitle from "../../../utils/Subtitle";

export default function AppliedRoboticsLab() {
  return (
    <div>
      <Banner />

      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="">
          <div className="flex justify-between items-cente gap-8 py-4">
            {/* LEFT : Theory + Buttons */}

            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold text-slate-800 mb-4">
                Focusing areas
              </h1>
              <FocusArea />
            </div>

            {/* RIGHT : Images */}
            <div className="flex justify-around gap-3 w-1/2">
              <img
                src="/about/ab2.jpg"
                className="rounded-xl shadow-lg w-72 h-auto"
                alt="img1"
              />
              <div className="flex flex-col gap-2">
                <img
                  src="/about/ab1.jpg"
                  className="rounded-xl shadow-lg w-full h-full"
                  alt="img1"
                />
                <img
                  src="/about/ab1.jpg"
                  className="rounded-xl shadow-lg w-full h-full"
                  alt="img1"
                />
              </div>
            </div>
          </div>
        </div>

        <Equipment />

        <Projects />
      </section>
    </div>
  );
}
