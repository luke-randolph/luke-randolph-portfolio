"use client";

import { Fragment, useEffect, useRef, type Ref } from "react";
import { SmokeLayer } from "./SmokeLayer";
import { cn } from "../lib/cn";

type Slot =
  | { kind: "building"; w: number; h: number; lift: number; fade: number }
  | { kind: "pole"; w: number; h: number; lift: number }
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
  // Chance a given window cell is lit
  windowChance: number;
};

type SmokeConfig = {
  bottom: number;
  width: number;
  height: number;
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
  { kind: "space", w: 18 },
  { kind: "pole", w: 26, h: 95, lift: 0 },
  { kind: "space", w: 22 },
  { kind: "building", w: 44, h: 160, lift: -20, fade: 20 },
  { kind: "building", w: 28, h: 260, lift: 35, fade: 40 },
  { kind: "space", w: 10 },
  { kind: "building", w: 52, h: 170, lift: 50, fade: 34 },
  { kind: "space", w: 40 },
  { kind: "building", w: 70, h: 180, lift: 20, fade: 32 },
  { kind: "space", w: 40 },
  { kind: "building", w: 56, h: 180, lift: 0, fade: 28 },
  { kind: "space", w: 20 },
  { kind: "building", w: 36, h: 240, lift: 20, fade: 36 },
  { kind: "space", w: 35 },
  { kind: "building", w: 26, h: 260, lift: 35, fade: 40 },
  { kind: "building", w: 48, h: 170, lift: 0, fade: 30 },
];

const midSlots: Slot[] = [
  { kind: "space", w: 35 },
  { kind: "building", w: 60, h: 130, lift: 20, fade: 30 },
  { kind: "space", w: 55 },
  { kind: "building", w: 80, h: 170, lift: 10, fade: 50 },
  { kind: "space", w: 30 },
  { kind: "building", w: 25, h: 280, lift: 30, fade: 38 },
  { kind: "space", w: 25 },
  { kind: "building", w: 50, h: 100, lift: -25, fade: 30 },
  { kind: "space", w: 40 },
  { kind: "pole", w: 30, h: 115, lift: 0 },
  { kind: "space", w: 30 },
  { kind: "building", w: 90, h: 160, lift: 10, fade: 46 },
  { kind: "space", w: 70 },
  { kind: "building", w: 80, h: 110, lift: 20, fade: 42 },
];

const frontSlots: Slot[] = [
  { kind: "building", w: 65, h: 130, lift: 10, fade: 30 },
  { kind: "space", w: 18 },
  { kind: "building", w: 110, h: 90, lift: 25, fade: 35 },
  { kind: "space", w: 25 },
  { kind: "building", w: 48, h: 160, lift: 5, fade: 48 },
  { kind: "space", w: 40 },
  { kind: "building", w: 90, h: 70, lift: 0, fade: 65 },
  { kind: "space", w: 65 },
  { kind: "building", w: 88, h: 110, lift: 5, fade: 40 },
  { kind: "space", w: 10 },
  { kind: "building", w: 70, h: 100, lift: 40, fade: 55 },
  { kind: "space", w: 20 },
  { kind: "pole", w: 34, h: 130, lift: 0 },
  { kind: "space", w: 20 },
  { kind: "building", w: 60, h: 90, lift: 2, fade: 50 },
];

// Rows in z-order, back to front. Index 0 sits deepest.
const rows: RowConfig[] = [
  {
    slots: farBackSlots,
    bottom: 210,
    opacityClass: "opacity-35",
    gapClass: "gap-px",
    fillRgba: "rgba(10,10,15,0.7)",
    parallaxY: 0.04,
    scaleRate: 0.012,
    baseLift: 30,
    windowChance: 0.08,
  },
  {
    slots: backSlots,
    bottom: 120,
    opacityClass: "opacity-50",
    gapClass: "gap-px",
    fillRgba: "rgba(10,10,15,0.85)",
    parallaxY: 0.03,
    scaleRate: 0.025,
    baseLift: 0,
    windowChance: 0.13,
  },
  {
    slots: midSlots,
    bottom: 60,
    opacityClass: "opacity-75",
    gapClass: "gap-1",
    fillRgba: "rgba(10,10,15,0.92)",
    parallaxY: 0.02,
    scaleRate: 0.045,
    baseLift: 0,
    windowChance: 0.16,
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
    windowChance: 0.18,
  },
];

// Smoke bands sit in the gaps between rows. Index N renders between row N and row N+1.
const smokes: SmokeConfig[] = [
  {
    bottom: 160,
    width: 600,
    height: 260,
    parallaxY: 0.045,
    opacityBase: 0.01,
    opacityRange: 0.02,
    id: "top",
    seed: 17,
    baseFrequency: "0.009 0.018",
    rgb: [0.5, 0.6, 0.75],
  },
  {
    bottom: 120,
    width: 760,
    height: 280,
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
    parallaxY: 0.01125,
    opacityBase: 0.04,
    opacityRange: 0.08,
    id: "lower",
    seed: 11,
    baseFrequency: "0.014 0.025",
    rgb: [0.6, 0.6, 0.7],
  },
];

// Small deterministic PRNG so windows land in the same spots on server and
// client (no hydration mismatch) and stay put across renders.
function mulberry32(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Window = { x: number; y: number; size: number };

// Lay a grid of window cells over the solid (non-faded) upper part of a
// building and light a seeded subset of them.
function buildingWindows(seed: number, slot: Extract<Slot, { kind: "building" }>, chance: number) {
  const rand = mulberry32(seed);
  const inset = 5;
  const colStep = 11;
  const rowStep = 15;
  // The gradient fades to transparent below `fade`%, so only the top part is
  // opaque enough to carry windows.
  const solidH = slot.h * (1 - slot.fade / 100);
  const windows: Window[] = [];
  for (let x = inset; x <= slot.w - inset; x += colStep) {
    for (let y = inset; y <= solidH; y += rowStep) {
      if (rand() < chance) {
        windows.push({ x, y, size: rand() < 0.25 ? 3 : 2 });
      }
    }
  }
  return windows;
}

function SlotItem({ slot, config, seed }: { slot: Slot; config: RowConfig; seed: number }) {
  if (slot.kind === "space") {
    return <div style={{ width: `${slot.w}px`, flexShrink: 0 }} />;
  }

  if (slot.kind === "pole") {
    const post = 3;
    return (
      <div
        style={{
          position: "relative",
          width: `${slot.w}px`,
          height: `${slot.h}px`,
          marginBottom: `${slot.lift}px`,
          flexShrink: 0,
        }}
      >
        {/* vertical post */}
        <div
          style={{
            position: "absolute",
            left: `${(slot.w - post) / 2}px`,
            bottom: 0,
            width: `${post}px`,
            height: "100%",
            background: config.fillRgba,
          }}
        />
        {/* two crossarms near the top */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "12%",
            width: "100%",
            height: `${post}px`,
            background: config.fillRgba,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "18%",
            top: "22%",
            width: "64%",
            height: `${post}px`,
            background: config.fillRgba,
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: `${slot.w}px`,
        height: `${slot.h}px`,
        marginBottom: `${slot.lift}px`,
        flexShrink: 0,
        background: `linear-gradient(to top, rgba(10,10,15,0) 0%, ${config.fillRgba} ${slot.fade}%, ${config.fillRgba} 100%)`,
      }}
    >
      {buildingWindows(seed, slot, config.windowChance).map((win, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${win.x}px`,
            top: `${win.y}px`,
            width: `${win.size}px`,
            height: `${win.size}px`,
            background: "rgba(235, 200, 120, 0.5)",
            boxShadow: "0 0 3px 0 rgba(255, 200, 90, 0.35)",
          }}
        />
      ))}
    </div>
  );
}

function Row({
  config,
  rowIndex,
  rowRef,
}: {
  config: RowConfig;
  rowIndex: number;
  rowRef: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={rowRef}
      style={{ bottom: config.bottom }}
      className={cn(
        "absolute left-0 flex origin-bottom-left items-end will-change-transform",
        config.gapClass,
        config.opacityClass,
      )}
    >
      {config.slots.map((slot, i) => (
        <SlotItem key={i} slot={slot} config={config} seed={rowIndex * 100 + i} />
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
      className="absolute left-0 will-change-transform"
    >
      <SmokeLayer
        ref={smokeRef}
        id={config.id}
        seed={config.seed}
        baseFrequency={config.baseFrequency}
        rgb={config.rgb}
        width={config.width}
        height={config.height}
        className="block"
      />
    </div>
  );
}

export function Cityscape() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const smokeWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const smokeRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
        el.style.opacity = String(smoke.opacityBase + progress * smoke.opacityRange);
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
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden">
      {rows.map((row, i) => (
        <Fragment key={i}>
          <Row
            config={row}
            rowIndex={i}
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
