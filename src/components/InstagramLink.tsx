const IG_GRADIENT = "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)";

interface Props {
  href: string;
  handle: string;
  size?: "sm" | "md";
}

export function InstagramLink({ href, handle, size = "md" }: Props) {
  const iconSize = size === "sm" ? 13 : 15;
  const textClass = size === "sm" ? "text-xs" : "text-sm";
  const gradientId = `ig-${handle.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2 transition-opacity duration-300 hover:opacity-80 ${textClass}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="40%" stopColor="#dc2743" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke={`url(#${gradientId})`} />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke={`url(#${gradientId})`} />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke={`url(#${gradientId})`} />
      </svg>
      <span
        style={{
          background: IG_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "0.04em",
        }}
      >
        {handle}
      </span>
    </a>
  );
}
