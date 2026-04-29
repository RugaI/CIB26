export default function MolecularVisual() {
  const nodes = [
    { cx: 200, cy: 160, r: 10, color: '#0EA5A5' },
    { cx: 320, cy: 118, r:  8, color: '#0284C7' },
    { cx: 385, cy: 222, r: 13, color: '#0EA5A5' },
    { cx: 278, cy: 294, r:  7, color: '#1F6F8B' },
    { cx: 158, cy: 262, r:  9, color: '#0284C7' },
    { cx: 445, cy: 312, r:  8, color: '#0EA5A5' },
    { cx: 342, cy: 374, r: 10, color: '#0284C7' },
    { cx: 198, cy: 382, r:  6, color: '#0EA5A5' },
    { cx:  98, cy: 182, r:  7, color: '#1F6F8B' },
    { cx: 462, cy: 158, r:  6, color: '#1F6F8B' },
    { cx: 138, cy: 334, r:  8, color: '#0284C7' },
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
    [2, 5], [5, 6], [6, 3], [3, 7], [7, 4],
    [0, 8], [1, 9], [5, 9], [7, 10], [4, 10],
  ];

  const dnaLeft:  { x: number; y: number }[] = [];
  const dnaRight: { x: number; y: number }[] = [];
  const dnaRings: { x1: number; y1: number; x2: number; y2: number }[] = [];

  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    const y = 55 + t * 350;
    const amp  = 28;
    const freq = Math.PI * 3.2;
    const xL = 555 + amp * Math.sin(freq * t);
    const xR = 598 + amp * Math.sin(freq * t + Math.PI);
    dnaLeft.push({ x: xL, y });
    dnaRight.push({ x: xR, y });
    if (i % 2 === 0) dnaRings.push({ x1: xL, y1: y, x2: xR, y2: y });
  }

  return (
    <svg
      viewBox="0 0 660 460"
      width="560"
      height="420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      {/* Glow rings */}
      <circle cx="230" cy="240" r="205" fill="rgba(14,165,165,0.04)" />
      <circle cx="230" cy="240" r="148" stroke="rgba(14,165,165,0.09)" strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="230" cy="240" r="88"  stroke="rgba(2,132,199,0.09)"  strokeWidth="1" strokeDasharray="3 5" />

      {/* Network edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="rgba(14,165,165,0.22)"
          strokeWidth="1.2"
        />
      ))}

      {/* Network nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r + 6} fill={n.color} opacity="0.10" />
          <circle cx={n.cx} cy={n.cy} r={n.r + 2} fill={n.color} opacity="0.18" />
          <circle cx={n.cx} cy={n.cy} r={n.r}     fill={n.color} opacity="0.88" />
        </g>
      ))}

      {/* Bar chart */}
      {[0, 1, 2, 3, 4].map((i) => {
        const h = [55, 88, 40, 72, 98][i];
        return (
          <rect
            key={i}
            x={58 + i * 22} y={418 - h}
            width={14} height={h}
            fill={i % 2 === 0 ? '#0EA5A5' : '#0284C7'}
            opacity="0.20"
            rx="2"
          />
        );
      })}

      {/* Divider */}
      <line x1="512" y1="48" x2="512" y2="418" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* DNA helix — strand L */}
      <polyline
        points={dnaLeft.map((p) => `${p.x},${p.y}`).join(' ')}
        stroke="#0EA5A5"
        strokeWidth="2.2"
        fill="none"
        opacity="0.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* DNA helix — strand R */}
      <polyline
        points={dnaRight.map((p) => `${p.x},${p.y}`).join(' ')}
        stroke="#0284C7"
        strokeWidth="2.2"
        fill="none"
        opacity="0.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base pairs */}
      {dnaRings.map((r, i) => (
        <line
          key={i}
          x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.8"
        />
      ))}
      {dnaLeft.map((p, i)  => <circle key={i} cx={p.x} cy={p.y} r={3.2} fill="#0EA5A5" opacity="0.85" />)}
      {dnaRight.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={3.2} fill="#0284C7" opacity="0.85" />)}

      {/* Labels */}
      <text x="96"  y="452" fill="rgba(255,255,255,0.22)" fontSize="8" fontFamily="Inter" letterSpacing="2.5">BIOMARKER NETWORK</text>
      <text x="520" y="452" fill="rgba(255,255,255,0.22)" fontSize="8" fontFamily="Inter" letterSpacing="2.5">DNA HELIX</text>
    </svg>
  );
}
