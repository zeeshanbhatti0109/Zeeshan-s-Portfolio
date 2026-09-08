import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { getCtaContent } from "../data/config";

export default function CtaBanner() {
  const ctaContent = getCtaContent("home");
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <Reveal as="div">
          <h2 className="cta-banner__heading">{ctaContent.heading}</h2>
          <p className="cta-banner__text">
            {ctaContent.text}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Button to={ctaContent.buttonTo} variant="primary">{ctaContent.buttonText}</Button>
        </Reveal>
      </div>
    </section>
  );
}
