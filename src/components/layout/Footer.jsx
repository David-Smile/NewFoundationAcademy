import { Camera, Globe2, Send, Video } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const quickLinks = ["About", "Admissions", "News", "Gallery", "Staff", "Contact"];
  const programs = ["Nursery School", "Primary School", "Secondary School"];

  return (
    <footer className="bg-[--color-primary-900] text-white">
      <div className="container-nfa grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[--color-primary-500] font-display text-xl">NFA</span>
            <strong>New Foundation Academy</strong>
          </div>
          <p className="text-sm leading-7 text-white/70">Building character, confidence, and academic excellence from nursery through secondary school.</p>
          <div className="mt-6 flex gap-3 text-white/70">
            {[Globe2, Send, Camera, Video].map((Icon, index) => (
              <a className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:text-white" href="#" key={index} aria-label="Social link">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-body text-sm font-bold uppercase tracking-[0.05em] text-white">Quick Links</h3>
          <div className="grid gap-3 text-sm text-white/70">
            {quickLinks.map((item) => <Link className="hover:text-white" key={item} to={`/${item.toLowerCase()}`}>{item}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-body text-sm font-bold uppercase tracking-[0.05em] text-white">Programs</h3>
          <div className="grid gap-3 text-sm text-white/70">
            {programs.map((item) => <Link className="hover:text-white" key={item} to="/programs">{item}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-body text-sm font-bold uppercase tracking-[0.05em] text-white">Contact Info</h3>
          <div className="grid gap-3 text-sm leading-7 text-white/70">
            <p>NFA Campus, Lagos, Nigeria</p>
            <p>+234 000 000 0000</p>
            <p>info@newfoundationacademy.edu</p>
            <p>Mon-Fri: 8:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-nfa flex flex-col gap-3 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 New Foundation Academy. All rights reserved.</p>
          <p>Privacy Policy · Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}
