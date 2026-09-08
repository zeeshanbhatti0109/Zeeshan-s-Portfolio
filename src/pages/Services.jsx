import SEO from "../components/SEO";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Business websites, WordPress development, React and Next.js, Laravel and PHP, custom web applications, redesigns, performance and SEO."
      />
      <header className="page-hero">
        <div className="container">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h1 className="page-hero__heading">
              Development services built around what your business actually needs.
            </h1>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="services-list">
            {services.map((s, i) => (
              <Reveal as="article" delay={(i % 3) * 60} key={s.name} className="service-row">
                <div className="service-row__head">
                  <span className="service-row__index">{s.index}</span>
                  <h2 className="service-row__name">{s.name}</h2>
                </div>
                <div className="service-row__cols">
                  <div>
                    <p className="service-row__label">What I do</p>
                    <p className="service-row__text">{s.what}</p>
                  </div>
                  <div>
                    <p className="service-row__label">Who it's for</p>
                    <p className="service-row__text">{s.who}</p>
                  </div>
                  <div>
                    <p className="service-row__label">What you get</p>
                    <p className="service-row__text">{s.get}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <Reveal as="div">
            <h2 className="cta-banner__heading">Not sure which service fits?</h2>
            <p className="cta-banner__text">
              Tell me what you're trying to achieve and I'll tell you what actually makes sense to build.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Button to="/contact" variant="primary">Get in touch</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
