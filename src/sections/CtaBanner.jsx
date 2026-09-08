import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <Reveal as="div">
          <h2 className="cta-banner__heading">Let's build something worth visiting.</h2>
          <p className="cta-banner__text">
            Tell me what you're working on, what you need, and where you'd
            like to take it.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Button to="/contact" variant="primary">Start a project</Button>
        </Reveal>
      </div>
    </section>
  );
}
