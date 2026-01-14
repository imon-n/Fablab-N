import AboutMissionHistory from "../components/About/AboutMissionHistory";
import AboutPic from "../components/About/AboutPic";
import LeadershipMessages from "../components/About/LeadershipMessages";
import PeopleNetwork from "../components/About/PeopleNetwork";

export default function About() {
  return (
    <section className="py-16 max-w-7xl mx-auto space-y-1">
      <div className="container grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">About Fab Lab CU</h2>
          <p className="mt-3 text-slate-700">
            Fab Lab CU is part of a global network of digital fabrication labs. The platform is open and
            fosters interactions between makers, designers, engineers, educators, and students providing
            shared resources that can be accessed by a global community.
          </p>
          <p className="mt-3 text-slate-700">
            Initiatives emphasize human-centered design and the role of technology in society to scale
            projects without moving products globally. We connect local needs to global knowledge and tools.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-1">
            <div className="glass rounded-xl p-2">
              <div className="font-semibold">Open Source</div>
              <div className="text-sm text-slate-600">Community-driven innovation built on open standards and shared knowledge. Encouraging transparency, collaboration, and global accessibility through open-source principles.</div>
            </div>
            <div className="glass rounded-xl p-2">
              <div className="font-semibold">Education First</div>
              <div className="text-sm text-slate-600">Hands-on learning through workshops, bootcamps, certifications, and mentoring programs designed to build practical skills and real-world problem-solving.</div>
            </div>
            <div className="glass rounded-xl p-2">
              <div className="font-semibold">Collaboration</div>
              <div className="text-sm text-slate-600">Connecting academia, industry, startups, and innovators to co-create solutions. Supporting partnerships and integrations that accelerate research and product development.</div>
            </div>
            <div className="glass rounded-xl p-2">
              <div className="font-semibold">Community</div>
              <div className="text-sm text-slate-600">A diverse ecosystem of makers, engineers, designers, educators, and students working together to turn ideas into impactful solutions.</div>
            </div>
          </div>
        </div>
        <div >
          <AboutPic />
        </div>
      </div>

      {/* vision and histor  */}
      <AboutMissionHistory />

      {/* people and network */}
      <PeopleNetwork />

      {/* message  */}
      <LeadershipMessages />
    </section>
  );
}
