import { useEffect, useRef, useState } from "react";

/**
 * Adds a class once an element enters the viewport. Respects
 * prefers-reduced-motion by revealing immediately.
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
      { threshold: 0, rootMargin: "0px 0px -8% 0px", ...options }
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
