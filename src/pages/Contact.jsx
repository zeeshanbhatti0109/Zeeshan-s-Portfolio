import { useState } from "react";
import { Mail, MapPin, Code2, Briefcase, Phone, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

const projectTypes = [
  "Business Website",
  "WordPress Website",
  "React / Next.js",
  "Laravel / PHP",
  "Custom Web Application",
  "Website Redesign",
  "Performance Optimization",
  "Other",
];

const budgets = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    budget: budgets[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:zeeshanbhatti0109@gmail.com?subject=${encodeURIComponent(
      "New project inquiry — " + form.projectType
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch to start a web development project — business websites, WordPress, React, Laravel and custom applications."
      />
      <header className="page-hero">
        <div className="container">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="page-hero__heading">Have a project in mind?</h1>
            <p className="contact-sub">
              Tell me what you're working on, what you need, and where you'd
              like to take it.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container contact-grid">
          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required value={form.name} onChange={update("name")} autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required value={form.email} onChange={update("email")} autoComplete="email" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="projectType">Project type</label>
                <select id="projectType" value={form.projectType} onChange={update("projectType")}>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="budget">Budget</label>
                <select id="budget" value={form.budget} onChange={update("budget")}>
                  {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={6} required value={form.message} onChange={update("message")} />
            </div>
            <button type="submit" className="btn btn--primary">Start a project</button>
            {sent && (
              <p className="contact-form__note" role="status">
                Opening your email client to send this — if it didn't open,
                write to me directly at{" "}
                <a href="mailto:zeeshanbhatti0109@gmail.com">zeeshanbhatti0109@gmail.com</a>.
              </p>
            )}
          </Reveal>

          <Reveal as="aside" delay={100} className="contact-info">
            <div className="contact-info__item">
              <Mail size={18} />
              <div>
                <p className="contact-info__label">Email</p>
                <a href="mailto:zeeshanbhatti0109@gmail.com">zeeshanbhatti0109@gmail.com</a>
              </div>
            </div>
            <div className="contact-info__item">
              <Phone size={18} />
              <div>
                <p className="contact-info__label">Phone</p>
                <a href="tel:+923113629211">0311-3629211</a>
              </div>
            </div>
            <div className="contact-info__item">
              <MapPin size={18} />
              <div>
                <p className="contact-info__label">Location</p>
                <p>Multan, Pakistan</p>
              </div>
            </div>
            <div className="contact-info__item">
              <Code2 size={18} />
              <div>
                <p className="contact-info__label">GitHub</p>
                <a href="https://github.com/zeeshanbhatti0109/" target="_blank" rel="noreferrer">
                  github.com/zeeshanbhatti0109 <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
            <div className="contact-info__item">
              <Briefcase size={18} />
              <div>
                <p className="contact-info__label">LinkedIn</p>
                <a href="https://linkedin.com/in/zeeshanbhatti-45aa02378/" target="_blank" rel="noreferrer">
                  linkedin.com/in/zeeshanbhatti <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
