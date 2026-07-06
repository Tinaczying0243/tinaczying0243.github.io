import { Link } from "react-router-dom";
import { journalist } from "../content";
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
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${journalist.email}`} className="footer__contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {journalist.email}
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Tina Chen. All rights reserved.</span>
      </div>
    </footer>
  );
}
