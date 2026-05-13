import type { Ref } from "react";

type SmokeLayerProps = {
  ref?: Ref<SVGSVGElement>;
  id: string;
  seed: number;
  baseFrequency: string;
  rgb: [number, number, number];
  width: number;
  height: number;
  className?: string;
};

export function SmokeLayer({
  ref,
  id,
  seed,
  baseFrequency,
  rgb,
  width,
  height,
  className,
}: SmokeLayerProps) {
  const filterId = `smoke-${id}-filter`;
  const gradId = `smoke-${id}-mask-grad`;
  const maskId = `smoke-${id}-mask`;
  const [r, g, b] = rgb;

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox={`0 0 1600 ${height}`}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        opacity: 0,
        maskImage: "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, black 0%, black 65%, transparent 100%)",
      }}
    >
      <defs>
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={3}
            seed={seed}
            stitchTiles="stitch"
          />
          <feColorMatrix
            values={`0 0 0 0 ${r}
                     0 0 0 0 ${g}
                     0 0 0 0 ${b}
                     1 0 0 0 0`}
          />
        </filter>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.9" />
          <stop offset="80%" stopColor="white" stopOpacity="0.65" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect width="1600" height={height} fill={`url(#${gradId})`} />
        </mask>
      </defs>
      <rect width="1600" height={height} filter={`url(#${filterId})`} mask={`url(#${maskId})`} />
    </svg>
  );
}
