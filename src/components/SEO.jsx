import { useEffect } from "react";

/**
 * Lightweight SEO helper — sets document title & meta description
 * per page without pulling in a routing-head dependency.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Zeeshan` : "Zeeshan — Web Developer";
    document.title = fullTitle;

    const setMeta = (name, content, attr = "name") => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
  }, [title, description]);

  return null;
}
