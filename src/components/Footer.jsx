import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link to="/contact" className="footer__cta">
            <span className="footer__cta-label">Currently open to new projects</span>
            <span className="footer__cta-link">Let's talk <ArrowUpRight size={18} strokeWidth={2} /></span>
          </Link>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <p className="footer__logo">Zeeshan</p>
            <p className="footer__role">Web Developer</p>
            <p className="footer__desc">
              Building thoughtful websites and web applications with a focus
              on design, performance and functionality.
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Navigation</p>
            <ul className="footer__list">
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Connect</p>
            <ul className="footer__list">
              <li>
                <a href="https://github.com/zeeshanbhatti0109/" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/zeeshanbhatti-45aa02378/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:zeeshanbhatti0109@gmail.com">
                  zeeshanbhatti0109@gmail.com
                </a>
              </li>
              <li className="footer__muted">Multan, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Zeeshan. All rights reserved.</p>
          <p className="footer__muted">Designed &amp; built from scratch.</p>
        </div>
      </div>
    </footer>
  );
}
