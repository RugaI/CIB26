import { useId } from 'react';

interface CIBLogoProps {
  size?: number;
  showYear?: boolean;
  theme?: 'dark' | 'light';
}

export default function CIBLogo({ size = 44, showYear = true, theme = 'dark' }: CIBLogoProps) {
  const id = useId().replace(/:/g, '-');
  const textColor = theme === 'dark' ? '#082F49' : '#ffffff';

  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        viewBox="0 0 52 66"
        width={Math.round(size * 0.79)}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`a-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#12D8D8" />
            <stop offset="55%" stopColor="#0EA5A5" />
            <stop offset="100%" stopColor="#0878A8" />
          </linearGradient>
          <linearGradient id={`b-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0EA5A5" />
            <stop offset="55%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#082F49" />
          </linearGradient>
        </defs>

        {/* Strand A — curves right at top, left at bottom */}
        <path
          d="M 10 2 C 50 2 50 30 26 32 C 2 34 2 58 42 64"
          stroke={`url(#a-${id})`}
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Strand B — curves left at top, right at bottom */}
        <path
          d="M 42 2 C 2 2 2 30 26 32 C 50 34 50 58 10 64"
          stroke={`url(#b-${id})`}
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Base pairs — upper half */}
        <line x1="14" y1="10" x2="38" y2="10" stroke="#0EA5A5" strokeWidth="1.5" strokeLinecap="round" opacity="0.80" />
        <line x1="10" y1="17" x2="42" y2="17" stroke="#0EA5A5" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
        <line x1="10" y1="23" x2="42" y2="23" stroke="#0EA5A5" strokeWidth="1.5" strokeLinecap="round" opacity="0.50" />
        <line x1="15" y1="29" x2="37" y2="29" stroke="#0EA5A5" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />

        {/* Base pairs — lower half */}
        <line x1="15" y1="35" x2="37" y2="35" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
        <line x1="10" y1="42" x2="42" y2="42" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" opacity="0.50" />
        <line x1="11" y1="49" x2="41" y2="49" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
        <line x1="14" y1="56" x2="38" y2="56" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" opacity="0.80" />

        {/* Decorative dots — top right */}
        <circle cx="45" cy="4"  r="2.2" fill="#12D8D8" opacity="0.95" />
        <circle cx="48" cy="10" r="1.6" fill="#0EA5A5" opacity="0.80" />
        <circle cx="45" cy="15" r="1.6" fill="#0284C7" opacity="0.65" />
      </svg>

      <div className="flex items-baseline gap-1">
        <span
          className="font-sora font-extrabold leading-none tracking-tight"
          style={{ color: textColor, fontSize: size * 0.68 }}
        >
          CIB
        </span>
        {showYear && (
          <span
            className="font-sora font-bold leading-none"
            style={{ color: '#0EA5A5', fontSize: size * 0.30 }}
          >
            2026
          </span>
        )}
      </div>
    </div>
  );
}
