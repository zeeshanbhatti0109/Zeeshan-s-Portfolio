import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getPersonalInfo, getNavigation, getFooterContent, getCtaContent } from "../data/config";

export default function Footer() {
  const year = new Date().getFullYear();
  const personal = getPersonalInfo();
  const navigation = getNavigation();
  const footerContent = getFooterContent();
  const ctaContent = getCtaContent("footer");
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link to="/contact" className="footer__cta">
            <span className="footer__cta-label">{ctaContent.label}</span>
            <span className="footer__cta-link">{ctaContent.link} <ArrowUpRight size={18} strokeWidth={2} /></span>
          </Link>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <p className="footer__logo">{personal.name}</p>
            <p className="footer__role">{personal.role}</p>
            <p className="footer__desc">
              {footerContent.description}
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Navigation</p>
            <ul className="footer__list">
              {navigation.map((link) => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Connect</p>
            <ul className="footer__list">
              <li>
                <a href={personal.social.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${personal.email}`}>
                  {personal.email}
                </a>
              </li>
              <li className="footer__muted">{personal.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="footer__muted">{footerContent.bottomText}</p>
        </div>
      </div>
    </footer>
  );
}
