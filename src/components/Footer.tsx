import { Link } from "react-router-dom";
import { journalist } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__name">{journalist.name}</span>
          <p className="footer__tagline">Multimedia Journalist · Bay Area</p>
        </div>

        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/multimedia">Multimedia</Link>
          <Link to="/writing">Writing</Link>
          <Link to="/photography">Photography</Link>
          <Link to="/resume">Resume</Link>
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${journalist.email}`} className="footer__contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {journalist.email}
          </a>
          <a href={`tel:${journalist.phone}`} className="footer__contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.9a16 16 0 0 0 6.14 6.14l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {journalist.phone}
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Tina Chen. All rights reserved.</span>
      </div>
    </footer>
  );
}
