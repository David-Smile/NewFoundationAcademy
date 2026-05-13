import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/Button";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Admissions", "/admissions"],
  ["News", "/news"],
  ["Gallery", "/gallery"],
  ["Staff", "/staff"],
  ["Contact", "/contact"],
];

function Logo() {
  return (
    <Link className="flex items-center gap-3" to="/" aria-label="New Foundation Academy home">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[--color-primary-600] font-display text-xl text-white shadow-sm">
        NFA
      </span>
      <span className="hidden text-sm font-extrabold leading-tight text-[--color-primary-900] sm:block">
        New Foundation
        <span className="block text-neutral-500">Academy</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-semibold transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[--color-primary-500] after:transition-all ${
      isActive
        ? "text-[--color-primary-500] after:w-full"
        : `${scrolled ? "text-neutral-700" : "text-white/90"} hover:text-[--color-primary-500] after:w-0 hover:after:w-full`
    }`;

  return (
    <>
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold" href="#main-content">
        Skip to main content
      </a>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"}`}>
        <div className="container-nfa flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {links.map(([label, to]) => (
              <NavLink className={linkClass} key={to} to={to}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button className="px-5 py-2.5" to="/portal">Student Portal</Button>
          </div>
          <button
            className={`grid h-11 w-11 place-items-center rounded-xl border lg:hidden ${scrolled || open ? "border-neutral-200 text-[--color-primary-900]" : "border-white/40 text-white"}`}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="fixed inset-x-0 top-20 z-40 bg-white px-6 pb-8 shadow-soft lg:hidden">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {links.map(([label, to]) => (
                <NavLink className="rounded-xl px-4 py-3 text-base font-semibold text-neutral-700 hover:bg-[--color-primary-50]" key={to} to={to} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              ))}
              <Button className="mt-3 w-full" to="/portal" onClick={() => setOpen(false)}>Student Portal</Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
