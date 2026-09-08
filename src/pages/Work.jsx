import SEO from "../components/SEO";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import ProjectShowcase from "../components/ProjectShowcase";

export default function Work() {
  return (
    <>
      <SEO
        title="Work"
        description="Websites and web applications built for business, content and operational use cases — ERP systems, WordPress sites and task management tools."
      />
      <header className="page-hero">
        <div className="container">
          <Reveal>
            <SectionLabel>Work</SectionLabel>
            <h1 className="page-hero__heading">
              A selection of websites and web applications I've built across
              business, content and operational use cases.
            </h1>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container project-list">
          {projects.map((p) => (
            <ProjectShowcase key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
