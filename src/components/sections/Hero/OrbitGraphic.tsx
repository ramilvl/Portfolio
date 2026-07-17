import styles from './OrbitGraphic.module.scss';

const RING_2_NODES = [
  { x: 240, y: 90, label: 'UI' },
  { x: 369.9, y: 315, label: 'API' },
  { x: 110.1, y: 315, label: 'DB' },
];

const RING_3_NODES = [
  { x: 421.9, y: 135, label: 'AUTH' },
  { x: 240, y: 450, label: 'MONITOR' },
  { x: 58.1, y: 135, label: 'CI/CD' },
];

const CENTER = 240;

export function OrbitGraphic() {
  return (
    <svg
      viewBox="0 0 480 480"
      className={styles.graphic}
      role="img"
      aria-label="Diagram of interconnected enterprise system layers orbiting a central core"
    >
      <defs>
        <filter id="node-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="core-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0057b8" />
        </radialGradient>
      </defs>

      {/* Ring 2 — mid orbit */}
      <g className={styles.ringSlow} style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}>
        <circle cx={CENTER} cy={CENTER} r={150} className={styles.ringPath} />
        {RING_2_NODES.map((node) => (
          <g key={node.label}>
            <line
              x1={CENTER}
              y1={CENTER}
              x2={node.x}
              y2={node.y}
              className={styles.spoke}
            />
            <circle cx={node.x} cy={node.y} r={5} className={styles.node} filter="url(#node-glow)" />
            <text
              x={node.x}
              y={node.y + (node.y > CENTER ? 20 : -14)}
              className={styles.nodeLabel}
              textAnchor="middle"
            >
              {node.label}
            </text>
          </g>
        ))}
      </g>

      {/* Ring 3 — outer orbit, opposite direction */}
      <g className={styles.ringFast} style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}>
        <circle cx={CENTER} cy={CENTER} r={210} className={styles.ringPath} />
        {RING_3_NODES.map((node) => (
          <g key={node.label}>
            <line
              x1={CENTER}
              y1={CENTER}
              x2={node.x}
              y2={node.y}
              className={styles.spoke}
            />
            <circle cx={node.x} cy={node.y} r={5} className={styles.node} filter="url(#node-glow)" />
            <text
              x={node.x}
              y={node.y + (node.y > CENTER ? 20 : -14)}
              className={styles.nodeLabel}
              textAnchor="middle"
            >
              {node.label}
            </text>
          </g>
        ))}
      </g>

      {/* Static innermost ring for depth */}
      <circle cx={CENTER} cy={CENTER} r={80} className={styles.ringPath} />

      {/* Core */}
      <circle
        cx={CENTER}
        cy={CENTER}
        r={9}
        fill="url(#core-gradient)"
        filter="url(#node-glow)"
        className={styles.core}
      />
    </svg>
  );
}
