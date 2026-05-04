import { useId } from 'react';

interface CIBLogoProps {
  size?: number;
  showYear?: boolean;
  theme?: 'dark' | 'light';
}

export default function CIBLogo({ size = 48, showYear = true, theme = 'dark' }: CIBLogoProps) {
  const id = useId().replace(/:/g, '-');
  const textColor = theme === 'dark' ? '#0A192F' : '#ffffff';

  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        viewBox="0 0 56 72"
        width={Math.round(size * 0.78)}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`strand1-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#12D8D8" />
            <stop offset="50%" stopColor="#0EA5A5" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id={`strand2-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#0EA5A5" />
            <stop offset="100%" stopColor="#12D8D8" />
          </linearGradient>
        </defs>

        {/* DNA Strand A */}
        <path
          d="M 10 2 C 52 2 52 32 28 34 C 4 36 4 62 46 68"
          stroke={`url(#strand1-${id})`}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* DNA Strand B */}
        <path
          d="M 46 2 C 4 2 4 32 28 34 C 52 36 52 62 10 68"
          stroke={`url(#strand2-${id})`}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Base pairs */}
        {[10, 17, 24, 30].map((y, i) => (
          <line
            key={i}
            x1={12 + i * 2}
            y1={y}
            x2={44 - i * 2}
            y2={y}
            stroke="#0EA5A5"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={0.7 - i * 0.15}
          />
        ))}
        {[36, 42, 49, 56].map((y, i) => (
          <line
            key={`b-${i}`}
            x1={14 + i}
            y1={y}
            x2={42 - i}
            y2={y}
            stroke="#0284C7"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={0.35 + i * 0.15}
          />
        ))}

        {/* Decorative dots */}
        <circle cx="48" cy="4" r="2.5" fill="#12D8D8" opacity="0.9" />
        <circle cx="52" cy="10" r="1.8" fill="#0EA5A5" opacity="0.7" />
        <circle cx="49" cy="16" r="1.8" fill="#0284C7" opacity="0.5" />
      </svg>

      <div className="flex items-baseline gap-1">
        <span
          className="font-sora font-extrabold leading-none tracking-tight"
          style={{ color: textColor, fontSize: size * 0.65 }}
        >
          CIB
        </span>
        {showYear && (
          <span
            className="font-sora font-bold leading-none"
            style={{ color: '#0EA5A5', fontSize: size * 0.28 }}
          >
            2026
          </span>
        )}
      </div>
    </div>
  );
}
