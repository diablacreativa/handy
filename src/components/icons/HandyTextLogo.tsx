import React from "react";

const HandyTextLogo = ({
  width = 200,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 300 88"
    role="img"
    aria-label="Handy"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="handy-metal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f4e7bb" />
        <stop offset="0.45" stopColor="var(--color-logo-primary)" />
        <stop offset="1" stopColor="#8b672a" />
      </linearGradient>
    </defs>
    <rect x="2" y="9" width="68" height="68" rx="18" fill="var(--color-logo-stroke)" />
    <path d="M20 24v38m32-38v38M20 43h32" fill="none" stroke="url(#handy-metal)" strokeWidth="6" strokeLinecap="round" />
    <circle cx="58" cy="21" r="3" fill="#a8b77b" />
    {/* The brand name is intentionally fixed across locales. */}
    {/* eslint-disable-next-line i18next/no-literal-string */}
    <text x="84" y="59" fill="var(--color-text)" fontFamily="Palatino Linotype, Book Antiqua, Georgia, serif" fontSize="55" letterSpacing="-3">Handy</text>
  </svg>
);

export default HandyTextLogo;
