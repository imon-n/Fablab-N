import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Laser Cutting",
    details: "",
    fileUrl: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Book a Job</h2>
        <p className="mt-2 text-slate-700">
          Submit your job details. Technicians will review and contact you with
          confirmation and lead times.
        </p>
        <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cuBlue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cuBlue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cuBlue"
              >
                {[
                  "Laser Cutting",
                  "Metal Laser Cutting",
                  "FDM 3D Printing",
                  "SLA 3D Printing",
                  "CNC Routing",
                ].map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Design file URL
              </label>
              <input
                type="url"
                name="fileUrl"
                placeholder="Link to STL/DXF/STEP on cloud"
                value={form.fileUrl}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cuBlue"
              />
            </div>
          </div>
          <div className="glass rounded-xl p-5 flex flex-col">
            <label className="block text-sm font-medium">Details</label>
            <textarea
              name="details"
              rows={10}
              placeholder="Materials, quantities, tolerances, finish, deadlines..."
              value={form.details}
              onChange={onChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cuBlue"
            />
            <button
              type="submit"
              className="mt-1 inline-fle items-center justify-center 
             bg-blue-600 hover:bg-blue-700 
             text-white font-semibold 
             px-4 py-2 w-36
             rounded-lg 
             shadow-md hover:shadow-lg 
             transition-all duration-300 ease-in-out whitespace-nowrap h-10"
            >
              Submit Request
            </button>

            {submitted && (
              <div className="mt-4 text-sm text-cuBlue">
                Request submitted. We’ll get back to you by email with next
                steps.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
