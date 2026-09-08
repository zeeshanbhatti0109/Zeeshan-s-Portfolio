import SEO from "../components/SEO";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import ProjectShowcase from "../components/ProjectShowcase";
import { getSeoConfig, getPageHeading } from "../data/config";

export default function Work() {
  const seoConfig = getSeoConfig("work");
  const pageHeading = getPageHeading("work");
  return (
    <>
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
      />
      <header className="page-hero">
        <div className="container">
          <Reveal>
            <SectionLabel>Work</SectionLabel>
            <h1 className="page-hero__heading">
              {pageHeading}
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
