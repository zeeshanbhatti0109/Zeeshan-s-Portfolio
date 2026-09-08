import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

export default function ProjectShowcase({ project }) {
  const { slug, index, name, tagline, category, tech, layout } = project;

  if (layout === "featured") {
    return (
      <Reveal as="article" className="project project--featured">
        <Link to={`/work/${slug}`} className="project__link">
          <div className="project__visual project__visual--large">
            <ProjectVisual slug={slug} />
          </div>
          <div className="project__meta">
            <div className="project__meta-top">
              <span className="project__index">{index}</span>
              <span className="project__category">{category}</span>
            </div>
            <h3 className="project__name project__name--xl">{name}</h3>
            <p className="project__tagline">{tagline}</p>
            <div className="project__tech">
              {tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <span className="project__cta">
              View case study <ArrowUpRight size={18} />
            </span>
          </div>
        </Link>
      </Reveal>
    );
  }

  if (layout === "split") {
    return (
      <Reveal as="article" className="project project--split">
        <Link to={`/work/${slug}`} className="project__link project__link--split">
          <div className="project__visual">
            <ProjectVisual slug={slug} />
          </div>
          <div className="project__meta">
            <div className="project__meta-top">
              <span className="project__index">{index}</span>
              <span className="project__category">{category}</span>
            </div>
            <h3 className="project__name">{name}</h3>
            <p className="project__tagline">{tagline}</p>
            <div className="project__tech">
              {tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <span className="project__cta">
              View case study <ArrowUpRight size={18} />
            </span>
          </div>
        </Link>
      </Reveal>
    );
  }

  // compact
  return (
    <Reveal as="article" className="project project--compact">
      <Link to={`/work/${slug}`} className="project__link project__link--compact">
        <div className="project__visual project__visual--small">
          <ProjectVisual slug={slug} />
        </div>
        <div className="project__meta">
          <div className="project__meta-top">
            <span className="project__index">{index}</span>
            <span className="project__category">{category}</span>
          </div>
          <h3 className="project__name project__name--sm">{name}</h3>
          <p className="project__tagline">{tagline}</p>
          <span className="project__cta">
            View case study <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
