import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";

const points = [
  { title: "SEO-friendly content", detail: "Pages structured so search engines — and readers — can actually understand them." },
  { title: "Keyword research", detail: "Content built around what your audience is searching for, not guesswork." },
  { title: "Search intent", detail: "Matching page content to what a visitor actually wants when they land on it." },
  { title: "User-focused structure", detail: "Content organised around the reader's questions, not internal site architecture." },
];

export default function SeoDifferentiator() {
  return (
    <section className="section section--dim">
      <div className="container seo-diff">
        <Reveal className="seo-diff__intro">
          <SectionLabel>Beyond the code</SectionLabel>
          <h2 className="section__heading">
            Good websites are not only about code.
          </h2>
          <p className="seo-diff__text">
            I also work with content writing and SEO, which means a site I
            build isn't just fast and functional — it's structured so people
            can find it and understand it once they do.
          </p>
        </Reveal>

        <div className="seo-diff__grid">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="seo-diff__item">
              <h3>{p.title}</h3>
              <p>{p.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
