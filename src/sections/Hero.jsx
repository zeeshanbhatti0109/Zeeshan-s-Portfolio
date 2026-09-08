import { motion, useReducedMotion } from "framer-motion";
import Button from "../components/Button";
import { getHeroContent } from "../data/config";

export default function Hero() {
  const reduced = useReducedMotion();
  const heroContent = getHeroContent();

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <motion.h1
            className="hero__headline"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            className="hero__sub"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroContent.subheading}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button to={heroContent.primaryCta.to} variant="primary">{heroContent.primaryCta.text}</Button>
            <Button to={heroContent.secondaryCta.to} variant="secondary">{heroContent.secondaryCta.text}</Button>
          </motion.div>
        </div>

        <motion.div
          className="hero__panel"
          initial={reduced ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero__panel-kicker">{heroContent.panelKicker}</p>
          <ul className="hero__panel-list">
            {heroContent.capabilities.map((c, i) => (
              <li key={c} style={{ transitionDelay: `${0.4 + i * 0.08}s` }}>
                <span className="hero__panel-dot" />
                {c}
              </li>
            ))}
          </ul>
          <div className="hero__panel-footer">
            <span>{heroContent.locationNote}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
