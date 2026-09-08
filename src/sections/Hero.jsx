import { motion, useReducedMotion } from "framer-motion";
import Button from "../components/Button";

const capabilities = [
  "Business Websites",
  "Web Applications",
  "Modern Frontend",
  "Performance & SEO",
];

export default function Hero() {
  const reduced = useReducedMotion();

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
            Websites that make businesses look better, work better, and grow.
          </motion.h1>

          <motion.p
            className="hero__sub"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            I design and build business websites, WordPress sites, React
            interfaces and Laravel applications — for companies that need a
            web presence that actually works for them.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button to="/work" variant="primary">View my work</Button>
            <Button to="/contact" variant="secondary">Let's work together</Button>
          </motion.div>
        </div>

        <motion.div
          className="hero__panel"
          initial={reduced ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero__panel-kicker">What that looks like</p>
          <ul className="hero__panel-list">
            {capabilities.map((c, i) => (
              <li key={c} style={{ transitionDelay: `${0.4 + i * 0.08}s` }}>
                <span className="hero__panel-dot" />
                {c}
              </li>
            ))}
          </ul>
          <div className="hero__panel-footer">
            <span>Based in Multan, working with clients everywhere</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
