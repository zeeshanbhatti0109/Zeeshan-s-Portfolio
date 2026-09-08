import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import ProjectVisual from "../components/ProjectVisual";
import Button from "../components/Button";
import { getProjectBySlug, projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/work" replace />;

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <>
      <SEO title={project.name} description={project.summary} />

      <header className="proj-hero">
        <div className="container">
          <Reveal>
            <Link to="/work" className="proj-hero__back">
              <ArrowLeft size={16} /> All work
            </Link>
            <div className="proj-hero__top">
              <span className="proj-hero__index">{project.index}</span>
              <span className="proj-hero__category">{project.category} · {project.year}</span>
            </div>
            <h1 className="proj-hero__heading">{project.name}</h1>
            <p className="proj-hero__tagline">{project.tagline}</p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="proj-hero__visual container">
            <ProjectVisual slug={project.slug} />
          </div>
        </Reveal>
      </header>

      <section className="section">
        <div className="container proj-body">
          <div className="proj-body__main">
            <Reveal as="div" className="proj-block">
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>Approach</h2>
              <p>{project.approach}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>Key features</h2>
              <ul className="proj-features">
                {project.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>Visual gallery</h2>
              <div className="proj-gallery">
                {project.gallery.map((g) => (
                  <div className="proj-gallery__item" key={g.label}>
                    <ProjectVisual slug={project.slug} />
                    <span>{g.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>Development details</h2>
              <p>{project.development}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </Reveal>
          </div>

          <aside className="proj-body__side">
            <Reveal as="div" className="proj-side-card">
              <p className="proj-side-card__label">Technology</p>
              <div className="proj-side-card__tech">
                {project.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="proj-side-card__divider" />
              <p className="proj-side-card__label">Category</p>
              <p className="proj-side-card__value">{project.category}</p>
              <p className="proj-side-card__label">Year</p>
              <p className="proj-side-card__value">{project.year}</p>
              <div className="proj-side-card__divider" />
              <Button to="/contact" variant="primary" style={{ width: "100%", justifyContent: "center" }}>
                Start a similar project
              </Button>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--dim">
        <div className="container proj-next">
          <p className="proj-next__label">Next project</p>
          <Link to={`/work/${next.slug}`} className="proj-next__link">
            {next.name} <ArrowUpRight size={26} />
          </Link>
        </div>
      </section>
    </>
  );
}
