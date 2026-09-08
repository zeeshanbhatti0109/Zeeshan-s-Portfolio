import { projects } from "../data/projects";
import ProjectShowcase from "../components/ProjectShowcase";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function SelectedWorkPreview() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <div className="section__heading-row">
            <h2 className="section__heading">
              A selection of websites and web applications I've built across
              business, content and operational use cases.
            </h2>
          </div>
        </Reveal>

        <div className="project-list" style={{ marginTop: 56 }}>
          {projects.map((p) => (
            <ProjectShowcase key={p.slug} project={p} />
          ))}
        </div>

        <Reveal className="section__footer-link">
          <Button to="/work" variant="ghost">View all work</Button>
        </Reveal>
      </div>
    </section>
  );
}
