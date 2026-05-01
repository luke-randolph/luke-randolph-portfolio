"use client";

import { useEffect, useRef } from "react";
import { SmokeLayer } from "./SmokeLayer";

type Slot =
  | { kind: "building"; w: number; h: number; lift: number; fade: number }
  | { kind: "space"; w: number };

const farBack: Slot[] = [
  { kind: "space", w: 15 },
  { kind: "building", w: 55, h: 250, lift: 15, fade: 40 },
  { kind: "space", w: 15 },
  { kind: "building", w: 42, h: 320, lift: 0, fade: 42 },
  { kind: "space", w: 75 },
  { kind: "building", w: 65, h: 280, lift: 10, fade: 38 },
  { kind: "space", w: 70 },
  { kind: "building", w: 75, h: 220, lift: 30, fade: 32 },
];

const back: Slot[] = [
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

const mid: Slot[] = [
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

const front: Slot[] = [
  { kind: "building", w: 65, h: 120, lift: 0, fade: 50 },
  { kind: "space", w: 5 },
  { kind: "building", w: 96, h: 80, lift: 10, fade: 60 },
  { kind: "space", w: 30 },
  { kind: "building", w: 48, h: 160, lift: 4, fade: 48 },
  { kind: "space", w: 40 },
  { kind: "building", w: 80, h: 100, lift: 0, fade: 55 },
  { kind: "space", w: 5 },
  { kind: "building", w: 100, h: 70, lift: 20, fade: 65 },
  { kind: "space", w: 50 },
  { kind: "building", w: 88, h: 110, lift: 11, fade: 58 },
  { kind: "space", w: 35 },
  { kind: "building", w: 72, h: 90, lift: 2, fade: 50 },
];

function renderSlot(s: Slot, i: number, fillRgba: string) {
  if (s.kind === "space") {
    return <div key={i} style={{ width: `${s.w}px`, flexShrink: 0 }} />;
  }
  return (
    <div
      key={i}
      style={{
        width: `${s.w}px`,
        height: `${s.h}px`,
        marginBottom: `${s.lift}px`,
        flexShrink: 0,
        background: `linear-gradient(to top, rgba(10,10,15,0) 0%, ${fillRgba} ${s.fade}%, ${fillRgba} 100%)`,
      }}
    />
  );
}

export function Cityscape() {
  const farBackRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const topSmokeRef = useRef<SVGSVGElement>(null);
  const upperSmokeRef = useRef<SVGSVGElement>(null);
  const lowerSmokeRef = useRef<SVGSVGElement>(null);
  const topSmokeWrapperRef = useRef<HTMLDivElement>(null);
  const upperSmokeWrapperRef = useRef<HTMLDivElement>(null);
  const lowerSmokeWrapperRef = useRef<HTMLDivElement>(null);

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
        if (farBackRef.current) {
          const baseLift = 30 * (1 - progress);
          const scale = 1 + progress * 0.012;
          farBackRef.current.style.transform = `translate3d(0, ${-y * 0.08 - baseLift}px, 0) scale(${scale})`;
        }
        if (backRef.current) {
          const scale = 1 + progress * 0.025;
          backRef.current.style.transform = `translate3d(0, ${-y * 0.055}px, 0) scale(${scale})`;
        }
        if (midRef.current) {
          const scale = 1 + progress * 0.045;
          midRef.current.style.transform = `translate3d(0, ${-y * 0.019}px, 0) scale(${scale})`;
        }
        if (frontRef.current) {
          const scale = 1 + progress * 0.07;
          frontRef.current.style.transform = `translate3d(0, ${-y * 0.0006}px, 0) scale(${scale})`;
        }
      }
      if (topSmokeRef.current) {
        topSmokeRef.current.style.opacity = String(0.02 + progress * 0.04);
      }
      if (topSmokeWrapperRef.current && !reduce) {
        topSmokeWrapperRef.current.style.transform = `translate3d(0, ${-y * 0.045}px, 0)`;
      }
      if (upperSmokeRef.current) {
        upperSmokeRef.current.style.opacity = String(0.03 + progress * 0.05);
      }
      if (upperSmokeWrapperRef.current && !reduce) {
        upperSmokeWrapperRef.current.style.transform = `translate3d(0, ${-y * 0.0225}px, 0)`;
      }
      if (lowerSmokeRef.current) {
        lowerSmokeRef.current.style.opacity = String(0.04 + progress * 0.08);
      }
      if (lowerSmokeWrapperRef.current && !reduce) {
        lowerSmokeWrapperRef.current.style.transform = `translate3d(0, ${-y * 0.01125}px, 0)`;
      }
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
      <div
        ref={farBackRef}
        className="absolute bottom-[220px] left-0 flex items-end gap-px opacity-35 origin-bottom-left will-change-transform"
      >
        {farBack.map((s, i) => renderSlot(s, i, "rgba(10,10,15,0.7)"))}
      </div>

      <div
        ref={topSmokeWrapperRef}
        className="absolute bottom-[180px] left-[-30px] will-change-transform"
      >
        <SmokeLayer
          ref={topSmokeRef}
          id="top"
          seed={17}
          baseFrequency="0.009 0.018"
          rgb={[0.5, 0.6, 0.75]}
          viewBoxHeight={260}
          className="smoke-drift-c block h-[260px] w-[600px]"
        />
      </div>

      <div
        ref={backRef}
        className="absolute bottom-[150px] left-0 flex items-end gap-px opacity-50 origin-bottom-left will-change-transform"
      >
        {back.map((s, i) => renderSlot(s, i, "rgba(10,10,15,0.85)"))}
      </div>

      <div
        ref={upperSmokeWrapperRef}
        className="absolute bottom-[120px] left-[-30px] will-change-transform"
      >
        <SmokeLayer
          ref={upperSmokeRef}
          id="upper"
          seed={5}
          baseFrequency="0.011 0.022"
          rgb={[0.55, 0.65, 0.78]}
          viewBoxHeight={280}
          className="smoke-drift-a block h-[280px] w-[760px]"
        />
      </div>

      <div
        ref={midRef}
        className="absolute bottom-[60px] left-0 flex items-end gap-1 opacity-75 origin-bottom-left will-change-transform"
      >
        {mid.map((s, i) => renderSlot(s, i, "rgba(10,10,15,0.92)"))}
      </div>

      <div
        ref={lowerSmokeWrapperRef}
        className="absolute bottom-0 left-[-30px] will-change-transform"
      >
        <SmokeLayer
          ref={lowerSmokeRef}
          id="lower"
          seed={11}
          baseFrequency="0.014 0.025"
          rgb={[0.6, 0.6, 0.7]}
          viewBoxHeight={180}
          className="smoke-drift-b block h-[180px] w-[820px]"
        />
      </div>

      <div
        ref={frontRef}
        className="absolute bottom-0 left-0 flex items-end gap-1 origin-bottom-left will-change-transform"
      >
        {front.map((s, i) => renderSlot(s, i, "rgba(10,10,15,0.97)"))}
      </div>
    </div>
  );
}
