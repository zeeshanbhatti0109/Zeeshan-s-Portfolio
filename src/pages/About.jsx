import SEO from "../components/SEO";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { techGroups } from "../data/tech";

const approachPoints = [
  "Clean, uncluttered interfaces over decoration for its own sake",
  "Responsive by default — not just checked at the end",
  "Practical solutions matched to the actual problem, not the trendiest stack",
  "Performance and maintainability, so a site holds up after launch",
  "Usability and business goals over technical showing-off",
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Zeeshan is a web developer working across PHP, Laravel, WordPress and modern frontend development, based in Multan, Pakistan."
      />
      <header className="page-hero">
        <div className="container">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h1 className="page-hero__heading">
              I build the parts of a business that live on the internet.
            </h1>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container about-grid">
          <Reveal as="div" className="about-block">
            <h2>Introduction</h2>
            <p>
              I'm Zeeshan, a web developer based in Multan, Pakistan, working
              across frontend development, backend development, databases and
              WordPress. I build business websites, web applications and
              custom interfaces for clients who need a web presence that
              actually does something for them — not just exists.
            </p>
          </Reveal>

          <Reveal as="div" className="about-block" delay={80}>
            <h2>My development journey</h2>
            <p>
              I moved into web development the way a lot of developers do —
              by building things and figuring out what was actually needed to
              make them work properly. That path took me from frontend
              basics into PHP and Laravel, then into WordPress and database
              design, because real projects rarely stay inside one
              discipline.
            </p>
          </Reveal>

          <Reveal as="div" className="about-block" delay={140}>
            <h2>My experience</h2>
            <p>
              I've worked hands-on across WordPress builds, Laravel
              applications, PHP backends, React interfaces, JavaScript and
              relational databases — including a multi-factory ERP system,
              a business website for a rehab center, and a full CRUD task
              management application. That range means I can move between
              the frontend and backend of a project without losing context.
            </p>
          </Reveal>

          <Reveal as="div" className="about-block" delay={200}>
            <h2>My approach</h2>
            <ul className="about-approach">
              {approachPoints.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Reveal>

          <Reveal as="div" className="about-block about-block--wide" delay={260}>
            <h2>Other experience</h2>
            <p>
              Alongside development, I have experience in content writing and
              SEO/content strategy. That means I don't only think about how a
              website is built — I think about how content, search intent and
              user experience affect whether it actually gets found and read.
              It's a practical advantage when planning site structure and
              copy, not just development.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dim">
        <div className="container">
          <Reveal>
            <SectionLabel>Technology</SectionLabel>
            <h2 className="section__heading">What I build with.</h2>
          </Reveal>
          <div className="tech-groups">
            {techGroups.map((g, i) => (
              <Reveal as="div" key={g.name} delay={i * 60} className="tech-group">
                <p className="tech-group__name">{g.name}</p>
                <ul className="tech-group__list">
                  {g.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <Reveal as="div">
            <h2 className="cta-banner__heading">Like how this sounds?</h2>
            <p className="cta-banner__text">Let's talk about what you're building.</p>
          </Reveal>
          <Reveal delay={100}>
            <Button to="/contact" variant="primary">Get in touch</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
