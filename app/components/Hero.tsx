import { GlitchText } from "./GlitchText";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 max-w-5xl mx-auto scroll-mt-16"
    >
      <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold leading-none tracking-tight">
        <GlitchText>LUKE</GlitchText>
        <br />
        <GlitchText>RANDOLPH</GlitchText>
      </h1>

      <p className="mt-8 font-mono text-lg text-fg-muted">
        <span className="text-cyan">{">"}</span> full-stack developer
        <span className="ml-1 inline-block w-2.5 h-5 bg-cyan animate-pulse align-middle" />
      </p>

      <p className="mt-6 max-w-xl text-lg text-fg/90 leading-relaxed">
        I build resilient, accessible web applications.
      </p>
      <ul className="list-disc list-inside">
        <li>
          UIs that look good and function quickly on all devices even when the
          network is bad.
        </li>
        <li>APIs and data layers that are reliable and efficient.</li>
      </ul>
    </section>
  );
}
