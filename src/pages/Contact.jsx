export default function Contact() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="mt-3 text-slate-700">
            Reach out for training, workshops, collaborations, and job submissions.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <div><span className="font-medium">Email:</span> fablab@cu.edu.bd</div>
            <div><span className="font-medium">Phone:</span> +880-XXX-XXXXXX</div>
            <div><span className="font-medium">Location:</span> University of Chittagong Campus</div>
          </div>
        </div>
        <div className="glass rounded-xl p-5">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cuGreen" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cuGreen" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea rows={6} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cuGreen" />
            </div>
            <button className="btn-primary">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
