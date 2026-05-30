interface BatLogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export default function BatLogo({ size = 60, className = "", glow = false }: BatLogoProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${glow ? "logo-pulse" : ""} ${className}`}
    >
      <path
        d="M50 8 C50 8, 42 2, 30 4 C18 6, 8 14, 2 20 C8 18, 16 20, 20 24 C14 26, 10 32, 10 38 C16 32, 24 30, 28 34 C26 38, 26 44, 30 48 C32 42, 38 38, 50 36 C62 38, 68 42, 70 48 C74 44, 74 38, 72 34 C76 30, 84 32, 90 38 C90 32, 86 26, 80 24 C84 20, 92 18, 98 20 C92 14, 82 6, 70 4 C58 2, 50 8, 50 8Z"
        fill="#f5c518"
      />
      <ellipse cx="50" cy="52" rx="8" ry="4" fill="#f5c518" />
    </svg>
  );
}
