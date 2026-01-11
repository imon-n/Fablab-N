export default function About() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">About Fab Lab CU</h2>
          <p className="mt-3 text-slate-700">
            Fab Lab CU is part of a global network of digital fabrication labs. The platform is open and
            fosters interactions between makers, designers, engineers, educators, and students — providing
            shared resources that can be accessed by a global community.
          </p>
          <p className="mt-3 text-slate-700">
            Initiatives emphasize human-centered design and the role of technology in society to scale
            projects without moving products globally. We connect local needs to global knowledge and tools.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <div className="font-semibold">Open Source</div>
              <div className="text-sm text-slate-600">Community-driven, AGPL-friendly ethos.</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="font-semibold">Education First</div>
              <div className="text-sm text-slate-600">Workshops, training, mentoring, and certifications.</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="font-semibold">Collaboration</div>
              <div className="text-sm text-slate-600">White-label integrations to accelerate projects.</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="font-semibold">Community</div>
              <div className="text-sm text-slate-600">A creative mix of fabricators and professionals.</div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1527195572781-0f841b6831cc?q=80&w=1200&auto=format&fit=crop"
            alt="Fab Lab community"
            className="rounded-2xl shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}
