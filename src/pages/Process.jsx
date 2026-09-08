import SEO from "../components/SEO";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { processSteps } from "../data/process";
import { getSeoConfig, getPageHeading, getCtaContent } from "../data/config";

export default function Process() {
  const seoConfig = getSeoConfig("process");
  const pageHeading = getPageHeading("process");
  const ctaContent = getCtaContent("process");
  return (
    <>
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
      />
      <header className="page-hero">
        <div className="container">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
            <h1 className="page-hero__heading">
              {pageHeading}
            </h1>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="timeline">
            <div className="timeline__line" aria-hidden="true" />
            {processSteps.map((step, i) => (
              <Reveal as="div" key={step.index} delay={i * 70} className="timeline__step">
                <div className="timeline__marker">
                  <span>{step.index}</span>
                </div>
                <div className="timeline__content">
                  <h2>{step.name}</h2>
                  <p>{step.detail}</p>
                </div>
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
