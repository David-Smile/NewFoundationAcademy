import { useEffect, useState } from "react";
import campusHero from "../assets/campus-hero.png";
import {
  admissionSteps,
  events,
  highlights,
  lifeFeatures,
  navItems,
  programs,
  quickLinks,
  schoolInfo,
  staff,
  testimonials,
} from "./content";

function getInitials(name) {
  return name
    .replace(/^(Mrs\.|Mr\.|Miss)\s+/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled || menuOpen ? "is-solid" : ""}`}>
        <a className="brand" href="#top" aria-label="New Foundation Academy home">
          <span className="brand-mark">NFA</span>
          <span>
            <strong>New Foundation</strong>
            <small>Academy</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <img src={campusHero} alt="Students arriving at a welcoming academy campus" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">Nursery, Primary and Junior Secondary</p>
            <h1>Building strong foundations for bright futures.</h1>
            <p>
              New Foundation Academy blends disciplined academics, attentive teachers, character
              formation and clear parent communication in a modern learning environment.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#admissions">
                Apply Now
              </a>
              <a className="btn btn-light" href="#contact">
                Book a Visit
              </a>
            </div>
          </div>
          <div className="hero-stats" aria-label="School highlights">
            {highlights.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="quick-strip" aria-label="Quick school links">
          {quickLinks.map(({ title, text, href }) => (
            <a href={href} key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </a>
          ))}
        </section>

        <section className="section intro" id="about">
          <div>
            <p className="eyebrow">Why families choose NFA</p>
            <h2>A calm, ambitious school for steady growth.</h2>
          </div>
          <div className="intro-copy">
            <p>
              We keep learning personal, organized and measurable. Pupils are supported by teachers
              who understand their pace, stretch their ability and guide their behaviour.
            </p>
            <p>
              The result is a school experience that feels structured for parents and encouraging
              for children: clear routines, strong academics, values, creativity and confidence.
            </p>
          </div>
        </section>

        <section className="section blue-section" id="academics">
          <div className="section-title">
            <p className="eyebrow">Academics</p>
            <h2>Learning paths with clear progression</h2>
          </div>
          <div className="program-grid">
            {programs.map((program, index) => (
              <article className="program-card" key={program.level}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{program.tag}</p>
                <h3>{program.level}</h3>
                <small>{program.text}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section admissions" id="admissions">
          <div>
            <p className="eyebrow">Admissions</p>
            <h2>Simple enrolment, personal guidance.</h2>
            <p>
              Families can begin with a visit, a conversation with the school team and a simple
              review of the child&apos;s current learning level.
            </p>
            <a className="btn btn-primary" href="#contact">
              Start Admission
            </a>
          </div>
          <div className="steps">
            {admissionSteps.map((step, index) => (
              <article key={step.title}>
                <span>{index + 1}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section life">
          <div className="section-title">
            <p className="eyebrow">School life</p>
            <h2>More than classroom work</h2>
          </div>
          <div className="life-grid">
            {lifeFeatures.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section staff" id="staff">
          <div className="section-title">
            <p className="eyebrow">Our staff</p>
            <h2>Teachers who know every child by name</h2>
          </div>
          <div className="staff-grid">
            {staff.map(({ name, role, text }) => (
              <article className="staff-card" key={name}>
                <div className="staff-photo" aria-hidden="true">
                  {getInitials(name)}
                </div>
                <h3>{name}</h3>
                <strong>{role}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="section-title">
            <p className="eyebrow">Testimonials</p>
            <h2>Trusted by families who value structure and care</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(({ quote, parent }) => (
              <figure key={parent}>
                <blockquote>{quote}</blockquote>
                <figcaption>{parent}, Parent</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section calendar" id="calendar">
          <div>
            <p className="eyebrow">News and dates</p>
            <h2>Upcoming at NFA</h2>
          </div>
          <div className="event-list">
            {events.map(({ date, datetime, title, text }) => (
              <article key={title}>
                <time dateTime={datetime}>{date}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-panel" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ready to visit New Foundation Academy?</h2>
            <p>Book a visit, ask about fees or begin admission for the next school term.</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href={schoolInfo.phoneHref}>
              Call School Office
            </a>
            <a className="btn btn-light" href={schoolInfo.emailHref}>
              Send Email
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">NFA</span>
          <div>
            <strong>{schoolInfo.name}</strong>
            <p>Building character, confidence and academic excellence.</p>
          </div>
        </div>
        <nav aria-label="Footer links">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div>
          <p>School Office: {schoolInfo.phone}</p>
          <p>Email: {schoolInfo.email}</p>
          <a href="#top">Back to top</a>
        </div>
        <p className="copyright">&copy; 2026 {schoolInfo.name}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
