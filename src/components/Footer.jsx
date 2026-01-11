import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity">
              <img src="/fab-lab-logo.png" alt="Fab Lab CU" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm text-slate-600">
              A distributed education and prototyping hub at University of Chittagong,
              connecting people with tools, training, and open communities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-cuGreen">Services</Link></li>
              <li><Link to="/equipment" className="hover:text-cuGreen">Equipment</Link></li>
              <li><Link to="/projects" className="hover:text-cuGreen">Projects</Link></li>
              <li><Link to="/pricing" className="hover:text-cuGreen">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-cuGreen">About</Link></li>
              <li><Link to="/booking" className="hover:text-cuGreen">Job</Link></li>
              <li><Link to="/contact" className="hover:text-cuGreen">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-slate-600">Chittagong University Campus, Bangladesh</p>
            <p className="text-sm text-slate-600">fablab@cu.edu.bd</p>
            <p className="text-sm text-slate-600">+880-XXX-XXXXXX</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">
          <p>
            Inspired by the global Fab Lab network (fablabs.io) and university Fab Labs that operate
            as bureau services offering laser cutting, 3D printing (FDM & SLA), and CNC machining.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Fab Lab – University of Chittagong</p>
        </div>
      </div>
    </footer>
  );
}
