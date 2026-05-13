export function Intro() {
  return (
    <section
      id="intro"
      className="relative mx-auto flex min-h-screen max-w-5xl scroll-mt-16 flex-col justify-center px-6 sm:px-10"
    >
      <h1 className="font-mono text-5xl leading-none font-bold tracking-tight sm:text-7xl md:text-8xl">
        LUKE
        <br />
        RANDOLPH
      </h1>

      <p className="mt-8 font-mono text-lg text-fg-muted">
        <span className="text-cyan">{">"}</span> full-stack developer
        <span className="ml-1 inline-block h-5 w-2.5 animate-pulse bg-cyan align-middle" />
      </p>

      <p id="intro-claim" className="mt-6 max-w-xl text-lg leading-relaxed text-cyan">
        I build resilient, accessible web applications:
      </p>
      <ul aria-labelledby="intro-claim" className="list-inside list-disc text-fg/90">
        <li>UIs that are vibrant and fast on all devices</li>
        <li>APIs and data layers that are efficient and secure</li>
      </ul>
    </section>
  );
}
