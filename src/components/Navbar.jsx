import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { getNavigation, getPersonalInfo } from "../data/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = getNavigation();
  const personal = getPersonalInfo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="container nav__inner">
          <NavLink to="/" className="nav__logo" aria-label={`${personal.name} — home`}>
            {personal.name}
          </NavLink>

          <nav className="nav__links" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `nav__link ${isActive ? "nav__link--active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__cta">
            <Button to="/contact" variant="primary">
              Let's talk
            </Button>
          </div>

          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className={`nav-mobile ${open ? "nav-mobile--open" : ""}`}>
        <nav className="nav-mobile__links" aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="nav-mobile__link"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span>{l.label}</span>
              <ArrowUpRight size={22} />
            </NavLink>
          ))}
        </nav>
        <div className="nav-mobile__footer">
          <Button to="/contact" variant="primary">Let's talk</Button>
          <a href={`mailto:${personal.email}`} className="nav-mobile__email">
            {personal.email}
          </a>
        </div>
      </div>
    </>
  );
}
