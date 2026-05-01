"use client";

import { Fragment, useEffect, useRef, type Ref } from "react";
import { SmokeLayer } from "./SmokeLayer";

type Slot =
  | { kind: "building"; w: number; h: number; lift: number; fade: number }
  | { kind: "space"; w: number };

type RowConfig = {
  slots: Slot[];
  bottom: number;
  opacityClass: string;
  gapClass: string;
  fillRgba: string;
  parallaxY: number;
  scaleRate: number;
  baseLift: number;
};

type SmokeConfig = {
  bottom: number;
  width: number;
  height: number;
  driftClass: string;
  parallaxY: number;
  opacityBase: number;
  opacityRange: number;
  id: string;
  seed: number;
  baseFrequency: string;
  rgb: [number, number, number];
};

const farBackSlots: Slot[] = [
  { kind: "space", w: 15 },
  { kind: "building", w: 55, h: 250, lift: 15, fade: 40 },
  { kind: "space", w: 15 },
  { kind: "building", w: 42, h: 320, lift: 0, fade: 42 },
  { kind: "space", w: 75 },
  { kind: "building", w: 65, h: 280, lift: 10, fade: 38 },
  { kind: "space", w: 70 },
  { kind: "building", w: 75, h: 220, lift: 30, fade: 32 },
];

const backSlots: Slot[] = [
  { kind: "building", w: 32, h: 180, lift: 0, fade: 32 },
  { kind: "space", w: 5 },
  { kind: "building", w: 22, h: 220, lift: 30, fade: 38 },
  { kind: "space", w: 40 },
  { kind: "building", w: 44, h: 160, lift: 5, fade: 30 },
  { kind: "building", w: 28, h: 260, lift: 35, fade: 40 },
  { kind: "space", w: 10 },
  { kind: "building", w: 52, h: 170, lift: 60, fade: 34 },
  { kind: "space", w: 50 },
  { kind: "building", w: 30, h: 290, lift: 40, fade: 42 },
  { kind: "building", w: 40, h: 200, lift: 15, fade: 32 },
  { kind: "space", w: 50 },
  { kind: "building", w: 56, h: 180, lift: 0, fade: 28 },
  { kind: "space", w: 20 },
  { kind: "building", w: 36, h: 240, lift: 20, fade: 36 },
  { kind: "space", w: 35 },
  { kind: "building", w: 26, h: 260, lift: 35, fade: 40 },
  { kind: "building", w: 48, h: 170, lift: 0, fade: 30 },
];

const midSlots: Slot[] = [
  { kind: "space", w: 35 },
  { kind: "building", w: 60, h: 130, lift: 40, fade: 44 },
  { kind: "space", w: 55 },
  { kind: "building", w: 80, h: 170, lift: 40, fade: 50 },
  { kind: "space", w: 35 },
  { kind: "building", w: 50, h: 100, lift: 10, fade: 40 },
  { kind: "space", w: 25 },
  { kind: "building", w: 25, h: 280, lift: 30, fade: 38 },
  { kind: "space", w: 80 },
  { kind: "building", w: 90, h: 160, lift: 40, fade: 46 },
  { kind: "space", w: 60 },
  { kind: "building", w: 70, h: 110, lift: 20, fade: 42 },
];

const frontSlots: Slot[] = [
  { kind: "building", w: 65, h: 120, lift: 0, fade: 50 },
  { kind: "space", w: 5 },
  { kind: "building", w: 96, h: 80, lift: 10, fade: 60 },
  { kind: "space", w: 30 },
  { kind: "building", w: 48, h: 160, lift: 5, fade: 48 },
  { kind: "space", w: 40 },
  { kind: "building", w: 100, h: 70, lift: 0, fade: 65 },
  { kind: "space", w: 55 },
  { kind: "building", w: 88, h: 110, lift: 5, fade: 58 },
  { kind: "space", w: 10 },
  { kind: "building", w: 70, h: 100, lift: 40, fade: 55 },
  { kind: "space", w: 40 },
  { kind: "building", w: 60, h: 90, lift: 2, fade: 50 },
];

// Rows in z-order, back to front. Index 0 sits deepest.
const rows: RowConfig[] = [
  {
    slots: farBackSlots,
    bottom: 220,
    opacityClass: "opacity-35",
    gapClass: "gap-px",
    fillRgba: "rgba(10,10,15,0.7)",
    parallaxY: 0.08,
    scaleRate: 0.012,
    baseLift: 30,
  },
  {
    slots: backSlots,
    bottom: 150,
    opacityClass: "opacity-50",
    gapClass: "gap-px",
    fillRgba: "rgba(10,10,15,0.85)",
    parallaxY: 0.055,
    scaleRate: 0.025,
    baseLift: 0,
  },
  {
    slots: midSlots,
    bottom: 60,
    opacityClass: "opacity-75",
    gapClass: "gap-1",
    fillRgba: "rgba(10,10,15,0.92)",
    parallaxY: 0.019,
    scaleRate: 0.045,
    baseLift: 0,
  },
  {
    slots: frontSlots,
    bottom: 0,
    opacityClass: "",
    gapClass: "gap-1",
    fillRgba: "rgba(10,10,15,0.97)",
    parallaxY: 0.0006,
    scaleRate: 0.1,
    baseLift: 0,
  },
];

// Smoke bands sit in the gaps between rows. Index N renders between row N and row N+1.
const smokes: SmokeConfig[] = [
  {
    bottom: 180,
    width: 600,
    height: 260,
    driftClass: "smoke-drift-c",
    parallaxY: 0.045,
    opacityBase: 0.02,
    opacityRange: 0.04,
    id: "top",
    seed: 17,
    baseFrequency: "0.009 0.018",
    rgb: [0.5, 0.6, 0.75],
  },
  {
    bottom: 120,
    width: 760,
    height: 280,
    driftClass: "smoke-drift-a",
    parallaxY: 0.0225,
    opacityBase: 0.03,
    opacityRange: 0.05,
    id: "upper",
    seed: 5,
    baseFrequency: "0.011 0.022",
    rgb: [0.55, 0.65, 0.78],
  },
  {
    bottom: 0,
    width: 820,
    height: 180,
    driftClass: "smoke-drift-b",
    parallaxY: 0.01125,
    opacityBase: 0.04,
    opacityRange: 0.08,
    id: "lower",
    seed: 11,
    baseFrequency: "0.014 0.025",
    rgb: [0.6, 0.6, 0.7],
  },
];

function SlotItem({ slot, fillRgba }: { slot: Slot; fillRgba: string }) {
  if (slot.kind === "space") {
    return <div style={{ width: `${slot.w}px`, flexShrink: 0 }} />;
  }
  return (
    <div
      style={{
        width: `${slot.w}px`,
        height: `${slot.h}px`,
        marginBottom: `${slot.lift}px`,
        flexShrink: 0,
        background: `linear-gradient(to top, rgba(10,10,15,0) 0%, ${fillRgba} ${slot.fade}%, ${fillRgba} 100%)`,
      }}
    />
  );
}

function Row({
  config,
  rowRef,
}: {
  config: RowConfig;
  rowRef: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={rowRef}
      style={{ bottom: config.bottom }}
      className={`absolute left-0 flex items-end origin-bottom-left will-change-transform ${config.gapClass} ${config.opacityClass}`}
    >
      {config.slots.map((slot, i) => (
        <SlotItem key={i} slot={slot} fillRgba={config.fillRgba} />
      ))}
    </div>
  );
}

function SmokeBand({
  config,
  wrapperRef,
  smokeRef,
}: {
  config: SmokeConfig;
  wrapperRef: Ref<HTMLDivElement>;
  smokeRef: Ref<SVGSVGElement>;
}) {
  return (
    <div
      ref={wrapperRef}
      style={{ bottom: config.bottom }}
      className="absolute left-[-30px] will-change-transform"
    >
      <SmokeLayer
        ref={smokeRef}
        id={config.id}
        seed={config.seed}
        baseFrequency={config.baseFrequency}
        rgb={config.rgb}
        width={config.width}
        height={config.height}
        className={`block ${config.driftClass}`}
      />
    </div>
  );
}

export function Cityscape() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const smokeWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const smokeRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const docMax = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docMax > 0 ? Math.min(1, Math.max(0, y / docMax)) : 0;

      if (!reduce) {
        rows.forEach((row, i) => {
          const el = rowRefs.current[i];
          if (!el) return;
          const baseLift = row.baseLift * (1 - progress);
          const scale = 1 + progress * row.scaleRate;
          el.style.transform = `translate3d(0, ${-y * row.parallaxY - baseLift}px, 0) scale(${scale})`;
        });
        smokes.forEach((smoke, i) => {
          const el = smokeWrapperRefs.current[i];
          if (!el) return;
          el.style.transform = `translate3d(0, ${-y * smoke.parallaxY}px, 0)`;
        });
      }

      smokes.forEach((smoke, i) => {
        const el = smokeRefs.current[i];
        if (!el) return;
        el.style.opacity = String(
          smoke.opacityBase + progress * smoke.opacityRange,
        );
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden"
    >
      {rows.map((row, i) => (
        <Fragment key={i}>
          <Row
            config={row}
            rowRef={(el) => {
              rowRefs.current[i] = el;
            }}
          />
          {smokes[i] ? (
            <SmokeBand
              config={smokes[i]}
              wrapperRef={(el) => {
                smokeWrapperRefs.current[i] = el;
              }}
              smokeRef={(el) => {
                smokeRefs.current[i] = el;
              }}
            />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
