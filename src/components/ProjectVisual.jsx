/**
 * Abstract, bespoke visual identity per project — built from line
 * work rather than stock imagery or screenshots, so each project
 * reads distinctly without needing real product photography.
 */
const variants = {
  "multi-factory-erp": (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="300" fill="var(--ink)" />
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={20 + c * 46}
            y={20 + r * 44}
            width={34}
            height={30}
            fill={(r + c) % 5 === 0 ? "var(--accent)" : "none"}
            stroke="rgba(250,248,243,0.35)"
            strokeWidth="1"
          />
        ))
      )}
    </svg>
  ),
  "flexfit-rehab-center": (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="300" fill="var(--paper-dim)" />
      <circle cx="120" cy="150" r="90" stroke="var(--ink)" strokeWidth="1.4" />
      <circle cx="120" cy="150" r="55" stroke="var(--accent)" strokeWidth="1.4" />
      <path d="M240 60 Q 330 150 240 240" stroke="var(--ink)" strokeWidth="1.4" fill="none" />
      <path d="M270 90 Q 340 150 270 210" stroke="var(--ink-faint)" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  "task-management-system": (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="300" fill="var(--ink)" />
      {[60, 120, 180, 240].map((y, i) => (
        <g key={y}>
          <rect x="60" y={y} width="18" height="18" stroke={i === 1 ? "var(--accent)" : "rgba(250,248,243,0.5)"} strokeWidth="1.4" fill={i === 1 ? "var(--accent)" : "none"} />
          <line x1="96" y1={y + 9} x2="320" y2={y + 9} stroke="rgba(250,248,243,0.25)" strokeWidth="1.4" />
        </g>
      ))}
    </svg>
  ),
};

export default function ProjectVisual({ slug, className = "" }) {
  return (
    <div className={`project-visual ${className}`}>
      {variants[slug] || (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="400" height="300" fill="var(--paper-dim)" />
        </svg>
      )}
    </div>
  );
}
