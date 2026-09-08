import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Wraps content in a subtle reveal-on-scroll transition.
 * `delay` is in milliseconds, applied via CSS transition-delay.
 * `direction` controls animation direction: up, down, left, right, scale, fade
 */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {}, direction = "up", ...rest }) {
  const [ref, visible] = useScrollReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${direction} ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
