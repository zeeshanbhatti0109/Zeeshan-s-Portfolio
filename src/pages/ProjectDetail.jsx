import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import ProjectVisual from "../components/ProjectVisual";
import Button from "../components/Button";
import { getProjectBySlug, projects } from "../data/projects";
import { getProjectDetailConfig, getPersonalInfo } from "../data/config";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const projectDetailConfig = getProjectDetailConfig();
  const personal = getPersonalInfo();
  const { image } = project;

  if (!project) return <Navigate to="/work" replace />;

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <>
      <SEO title={project.name} description={`${project.summary} — ${personal.name}`} />

      <header className="proj-hero">
        <div className="container">
          <Reveal>
            <Link to="/work" className="proj-hero__back">
              <ArrowLeft size={16} /> {projectDetailConfig.backLink}
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
            <ProjectVisual slug={project.slug} image={image} />
          </div>
        </Reveal>
      </header>

      <section className="section">
        <div className="container proj-body">
          <div className="proj-body__main">
            <Reveal as="div" className="proj-block">
              <h2>{projectDetailConfig.labels.overview}</h2>
              <p>{project.overview}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>{projectDetailConfig.labels.challenge}</h2>
              <p>{project.challenge}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>{projectDetailConfig.labels.approach}</h2>
              <p>{project.approach}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>{projectDetailConfig.labels.solution}</h2>
              <p>{project.solution}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>{projectDetailConfig.labels.keyFeatures}</h2>
              <ul className="proj-features">
                {project.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>{projectDetailConfig.labels.visualGallery}</h2>
              <div className="proj-gallery">
                {project.gallery.map((g) => (
                  <div className="proj-gallery__item" key={g.label}>
                    <ProjectVisual slug={project.slug} image={g.image || image} />
                    <span>{g.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>{projectDetailConfig.labels.developmentDetails}</h2>
              <p>{project.development}</p>
            </Reveal>
            <Reveal as="div" className="proj-block">
              <h2>{projectDetailConfig.labels.outcome}</h2>
              <p>{project.outcome}</p>
            </Reveal>
          </div>

          <aside className="proj-body__side">
            <Reveal as="div" className="proj-side-card">
              <p className="proj-side-card__label">{projectDetailConfig.labels.technology}</p>
              <div className="proj-side-card__tech">
                {project.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="proj-side-card__divider" />
              <p className="proj-side-card__label">{projectDetailConfig.labels.category}</p>
              <p className="proj-side-card__value">{project.category}</p>
              <p className="proj-side-card__label">{projectDetailConfig.labels.year}</p>
              <p className="proj-side-card__value">{project.year}</p>
              <div className="proj-side-card__divider" />
              <Button to="/contact" variant="primary" style={{ width: "100%", justifyContent: "center" }}>
                {projectDetailConfig.startSimilarProject}
              </Button>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--dim">
        <div className="container proj-next">
          <p className="proj-next__label">{projectDetailConfig.nextProject}</p>
          <Link to={`/work/${next.slug}`} className="proj-next__link">
            {next.name} <ArrowUpRight size={26} />
          </Link>
        </div>
      </section>
    </>
  );
}
