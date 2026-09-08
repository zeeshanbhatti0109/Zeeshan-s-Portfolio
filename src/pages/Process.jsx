import SEO from "../components/SEO";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { processSteps } from "../data/process";

export default function Process() {
  return (
    <>
      <SEO
        title="Process"
        description="How a project moves from first conversation to launch — discover, plan, design, build, test and launch."
      />
      <header className="page-hero">
        <div className="container">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
            <h1 className="page-hero__heading">
              How a project actually moves from idea to something live.
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
            <h2 className="cta-banner__heading">Ready to start with step one?</h2>
            <p className="cta-banner__text">A short conversation is all it takes to get moving.</p>
          </Reveal>
          <Reveal delay={100}>
            <Button to="/contact" variant="primary">Start a project</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
