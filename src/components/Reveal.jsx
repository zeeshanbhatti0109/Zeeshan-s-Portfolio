import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Wraps content in a subtle reveal-on-scroll transition.
 * `delay` is in milliseconds, applied via CSS transition-delay.
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {}, ...rest }) {
  const [ref, visible] = useScrollReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
