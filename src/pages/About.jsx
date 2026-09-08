import SEO from "../components/SEO";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { techGroups } from "../data/tech";
import { getSeoConfig, getAboutContent, getCtaContent } from "../data/config";

export default function About() {
  const seoConfig = getSeoConfig("about");
  const aboutContent = getAboutContent();
  const ctaContent = getCtaContent("about");
  return (
    <>
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
      />
      <header className="page-hero">
        <div className="container">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h1 className="page-hero__heading">
              {aboutContent.heroHeading}
            </h1>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container about-grid">
          <Reveal as="div" className="about-block">
            <h2>Introduction</h2>
            <p>
              {aboutContent.introduction}
            </p>
          </Reveal>

          <Reveal as="div" className="about-block" delay={80}>
            <h2>My development journey</h2>
            <p>
              {aboutContent.journey}
            </p>
          </Reveal>

          <Reveal as="div" className="about-block" delay={140}>
            <h2>My experience</h2>
            <p>
              {aboutContent.experience}
            </p>
          </Reveal>

          <Reveal as="div" className="about-block" delay={200}>
            <h2>My approach</h2>
            <ul className="about-approach">
              {aboutContent.approach.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Reveal>

          <Reveal as="div" className="about-block about-block--wide" delay={260}>
            <h2>Other experience</h2>
            <p>
              {aboutContent.otherExperience}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--dim">
        <div className="container">
          <Reveal>
            <SectionLabel>Technology</SectionLabel>
            <h2 className="section__heading">{aboutContent.techHeading}</h2>
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
            <h2 className="cta-banner__heading">{ctaContent.heading}</h2>
            <p className="cta-banner__text">{ctaContent.text}</p>
          </Reveal>
          <Reveal delay={100}>
            <Button to={ctaContent.buttonTo} variant="primary">{ctaContent.buttonText}</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
