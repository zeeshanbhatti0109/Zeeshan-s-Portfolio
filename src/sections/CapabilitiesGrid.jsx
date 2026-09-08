import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

const capabilities = [
  {
    index: "01",
    title: "Business Websites",
    detail: "Professional, responsive websites for businesses — built with WordPress or modern frontend technologies depending on what you actually need.",
  },
  {
    index: "02",
    title: "Web Applications",
    detail: "Custom applications built with PHP, Laravel, JavaScript and a properly designed database, for processes that don't fit an off-the-shelf tool.",
  },
  {
    index: "03",
    title: "Modern Frontend",
    detail: "Responsive, polished interfaces built with HTML, CSS, JavaScript, React and Next.js — fast to load and easy to maintain.",
  },
  {
    index: "04",
    title: "Performance & SEO",
    detail: "Technical optimisation, responsive implementation and SEO-aware development, so the site works as well as it looks.",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionLabel>What I do</SectionLabel>
          <h2 className="section__heading">
            Four capabilities, one goal — a website that works for your business.
          </h2>
        </Reveal>

        <div className="cap-grid">
          {capabilities.map((c, i) => (
            <Reveal key={c.index} delay={i * 80} className="cap-grid__item">
              <span className="cap-grid__index">{c.index}</span>
              <h3>{c.title}</h3>
              <p>{c.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
