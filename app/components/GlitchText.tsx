import { cn } from "../lib/cn";

type GlitchTextProps = {
  children: string;
  className?: string;
};

export function GlitchText({ children, className }: GlitchTextProps) {
  const layerBase = "absolute inset-0 select-none pointer-events-none";

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="glitch-base">{children}</span>
      <span
        aria-hidden="true"
        className={cn(layerBase, "glitch-layer-foreground text-fg")}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          layerBase,
          "glitch-layer-cyan mix-blend-screen text-cyan",
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          layerBase,
          "glitch-layer-magenta mix-blend-screen text-magenta",
        )}
      >
        {children}
      </span>
    </span>
  );
}
