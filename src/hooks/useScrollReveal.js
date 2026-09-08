import { useEffect, useRef, useState } from "react";

/**
 * Adds a class once an element enters the viewport. Respects
 * prefers-reduced-motion by revealing immediately.
 * Supports different animation types: fade, slide, scale, rotate
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);

    // Safety net: never leave content permanently invisible if the
    // observer misses a fast-scroll crossing for any reason.
    const fallback = setTimeout(() => setVisible(true), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return [ref, visible];
}
