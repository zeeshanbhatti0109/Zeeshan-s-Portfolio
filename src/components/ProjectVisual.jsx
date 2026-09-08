/**
 * Abstract, bespoke visual identity per project — built from line
 * work rather than stock imagery or screenshots, so each project
 * reads distinctly without needing real product photography.
 */
const variants = {
  "multi-factory-erp": (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="300" fill="var(--ink)" />
      {/* Header bar */}
      <rect x="20" y="20" width="360" height="32" fill="rgba(250,248,243,0.08)" />
      <circle cx="40" cy="36" r="6" fill="var(--accent)" />
      <circle cx="60" cy="36" r="6" fill="rgba(250,248,243,0.3)" />
      <circle cx="80" cy="36" r="6" fill="rgba(250,248,243,0.3)" />
      
      {/* Factory sections */}
      {[0, 1, 2].map((section) => (
        <g key={section}>
          <rect x={20 + section * 120} y="70" width="110" height="80" fill="rgba(250,248,243,0.05)" stroke="rgba(250,248,243,0.2)" strokeWidth="1" />
          <rect x={30 + section * 120} y="80" width="40" height="8" fill="var(--accent)" opacity={section === 0 ? 1 : 0.3} />
          <rect x={30 + section * 120} y="95" width="90" height="4" fill="rgba(250,248,243,0.15)" />
          <rect x={30 + section * 120} y="105" width="70" height="4" fill="rgba(250,248,243,0.15)" />
          <rect x={30 + section * 120} y="115" width="80" height="4" fill="rgba(250,248,243,0.15)" />
          
          {/* Inventory boxes */}
          {[0, 1, 2].map((box) => (
            <rect 
              key={box}
              x={30 + box * 28 + section * 120} 
              y="130" 
              width="20" 
              height="12" 
              fill={section === 0 && box === 1 ? "var(--accent)" : "rgba(250,248,243,0.1)"}
              stroke="rgba(250,248,243,0.2)"
              strokeWidth="0.5"
            />
          ))}
        </g>
      ))}
      
      {/* Dashboard stats */}
      <rect x="20" y="170" width="170" height="60" fill="rgba(250,248,243,0.05)" stroke="rgba(250,248,243,0.2)" strokeWidth="1" />
      <rect x="30" y="180" width="80" height="6" fill="var(--accent)" />
      <rect x="30" y="195" width="60" height="4" fill="rgba(250,248,243,0.15)" />
      <rect x="30" y="205" width="70" height="4" fill="rgba(250,248,243,0.15)" />
      
      <rect x="210" y="170" width="170" height="60" fill="rgba(250,248,243,0.05)" stroke="rgba(250,248,243,0.2)" strokeWidth="1" />
      <rect x="220" y="180" width="50" height="6" fill="rgba(250,248,243,0.3)" />
      <rect x="220" y="195" width="90" height="4" fill="rgba(250,248,243,0.15)" />
      <rect x="220" y="205" width="60" height="4" fill="rgba(250,248,243,0.15)" />
      
      {/* Activity feed */}
      <rect x="20" y="250" width="360" height="30" fill="rgba(250,248,243,0.03)" />
      {[0, 1, 2, 3].map((i) => (
        <circle 
          key={i}
          cx={40 + i * 90} 
          cy="265" 
          r="4" 
          fill={i < 2 ? "var(--accent)" : "rgba(250,248,243,0.2)"} 
        />
      ))}
    </svg>
  ),
  "flexfit-rehab-center": (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="300" fill="var(--paper-dim)" />
      
      {/* Medical cross */}
      <g transform="translate(200, 150)">
        <rect x="-15" y="-50" width="30" height="100" fill="var(--accent)" rx="2" />
        <rect x="-50" y="-15" width="100" height="30" fill="var(--accent)" rx="2" />
      </g>
      
      {/* Heartbeat line */}
      <path d="M50 150 L100 150 L110 130 L120 170 L130 150 L180 150" stroke="var(--ink)" strokeWidth="2" fill="none" />
      <path d="M220 150 L270 150 L280 130 L290 170 L300 150 L350 150" stroke="var(--ink)" strokeWidth="2" fill="none" />
      
      {/* Circles representing patients/services */}
      <circle cx="80" cy="80" r="30" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <circle cx="80" cy="80" r="15" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
      
      <circle cx="320" cy="80" r="30" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <circle cx="320" cy="80" r="15" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
      
      <circle cx="80" cy="220" r="25" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <circle cx="80" cy="220" r="12" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
      
      <circle cx="320" cy="220" r="25" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <circle cx="320" cy="220" r="12" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
      
      {/* Connecting lines */}
      <path d="M110 80 Q200 50 290 80" stroke="var(--ink-faint)" strokeWidth="1" fill="none" />
      <path d="M105 220 Q200 250 295 220" stroke="var(--ink-faint)" strokeWidth="1" fill="none" />
    </svg>
  ),
  "task-management-system": (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="300" fill="var(--ink)" />
      
      {/* Sidebar */}
      <rect x="20" y="20" width="60" height="260" fill="rgba(250,248,243,0.05)" stroke="rgba(250,248,243,0.1)" strokeWidth="1" />
      {[40, 80, 120, 160, 200, 240].map((y, i) => (
        <rect key={y} x="30" y={y} width="40" height="6" fill={i === 0 ? "var(--accent)" : "rgba(250,248,243,0.2)"} rx="1" />
      ))}
      
      {/* Main content area */}
      <rect x="100" y="20" width="280" height="60" fill="rgba(250,248,243,0.08)" stroke="rgba(250,248,243,0.15)" strokeWidth="1" />
      <rect x="115" y="35" width="80" height="8" fill="var(--accent)" rx="1" />
      <rect x="115" y="50" width="120" height="4" fill="rgba(250,248,243,0.2)" rx="1" />
      
      {/* Task cards */}
      {[100, 160, 220].map((y, i) => (
        <g key={y}>
          <rect x="100" y={y} width="280" height="50" fill="rgba(250,248,243,0.03)" stroke="rgba(250,248,243,0.1)" strokeWidth="1" rx="2" />
          <rect x="115" y={y + 12} width="16" height="16" stroke={i === 1 ? "var(--accent)" : "rgba(250,248,243,0.3)"} strokeWidth="1.5" fill={i === 1 ? "var(--accent)" : "none"} rx="2" />
          {i === 1 && (
            <path d="M119 {y + 20} L123 {y + 24} L127 {y + 16}" stroke="var(--paper)" strokeWidth="2" fill="none" />
          )}
          <rect x="145" y={y + 12} width="100" height="6" fill="rgba(250,248,243,0.2)" rx="1" />
          <rect x="145" y={y + 24} width="60" height="4" fill="rgba(250,248,243,0.15)" rx="1" />
          
          {/* Status badges */}
          <rect x="320" y={y + 14} width="50" height="22" fill={i === 1 ? "rgba(59, 73, 223, 0.2)" : "rgba(250,248,243,0.1)"} stroke={i === 1 ? "var(--accent)" : "rgba(250,248,243,0.2)"} strokeWidth="1" rx="4" />
          <rect x="330" y={y + 22} width="30" height="6" fill={i === 1 ? "var(--accent)" : "rgba(250,248,243,0.3)"} rx="1" />
        </g>
      ))}
      
      {/* Progress indicator */}
      <rect x="100" y="280" width="280" height="4" fill="rgba(250,248,243,0.1)" rx="2" />
      <rect x="100" y="280" width="180" height="4" fill="var(--accent)" rx="2" />
    </svg>
  ),
};

export default function ProjectVisual({ slug, className = "", image = null }) {
  return (
    <div className={`project-visual ${className}`}>
      {image ? (
        <img src={image} alt="" loading="lazy" />
      ) : variants[slug] || (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="400" height="300" fill="var(--paper-dim)" />
        </svg>
      )}
    </div>
  );
}
