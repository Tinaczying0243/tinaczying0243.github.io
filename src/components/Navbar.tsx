import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { journalist } from "../data/portfolioData";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/multimedia", label: "Multimedia" },
  { to: "/writing", label: "Writing" },
  { to: "/photography", label: "Photography" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-name">{journalist.name}</span>
          <span className="navbar__logo-title">Journalist</span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={`mailto:${journalist.email}`}
          className="btn btn-primary navbar__cta"
        >
          Get in Touch
        </a>

        <button
          className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
