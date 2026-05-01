type GlitchTextProps = {
  children: string;
  className?: string;
};

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const layerBase = "absolute inset-0 select-none pointer-events-none";

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="glitch-base">{children}</span>
      <span
        aria-hidden="true"
        className={`${layerBase} glitch-layer-foreground`}
        style={{ color: "var(--color-fg)" }}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`${layerBase} glitch-layer-cyan mix-blend-screen`}
        style={{ color: "var(--color-cyan)" }}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`${layerBase} glitch-layer-magenta mix-blend-screen`}
        style={{ color: "var(--color-magenta)" }}
      >
        {children}
      </span>
    </span>
  );
}
