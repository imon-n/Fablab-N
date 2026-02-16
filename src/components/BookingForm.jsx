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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        setSubmitted(true);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Book a Slot</h2>
        <p className="mt-2 text-slate-700">
          Submit your slot details. Technicians will review and contact you with confirmation and lead times.
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
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {["Laser Cutting", "Metal Laser Cutting", "FDM 3D Printing", "SLA 3D Printing", "CNC Routing"].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Design file URL</label>
              <input
                type="url"
                name="fileUrl"
                placeholder="Link to STL/DXF/STEP on cloud"
                value={form.fileUrl}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="btn-primary mt-4 self-start" disabled={loading}>
              {loading ? "Submitting..." : "Submit Request"}
            </button>
            {submitted && (
              <div className="mt-4 text-sm text-blue-500">
                Request submitted. We’ll get back to you by email with next steps.
              </div>
            )}
            {error && <div className="mt-4 text-sm text-red-500">{error}</div>}
          </div>
        </form>
      </div>
    </section>
  );
}
