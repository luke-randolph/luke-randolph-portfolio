const stack = {
  Frontend: [
    "TypeScript",
    "Next.js",
    "SvelteKit",
    "React Native",
    "Flutter",
    "Vue.js",
    "Tailwind",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "PHP / Laravel",
    "Postgres",
    "Drizzle",
    "Jest",
  ],
  "Tooling / Integrations": [
    "Stripe",
    "Sanity CMS",
    "Playwright",
    "Cypress",
    "Storybook",
    "Vercel",
    "Ci/CD",
    "Git + Github Actions",
    "Wordpress",
  ],
};

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 sm:px-10 max-w-5xl mx-auto scroll-mt-16"
    >
      <p className="font-mono text-sm text-cyan mb-3 tracking-wider">
        <span className="text-fg-muted">{"// "}</span>
        about
      </p>
      <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-12">
        Who I am.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start">
        <div className="relative aspect-square w-48 md:w-full neon-border rounded-sm overflow-hidden bg-bg-elev">
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-fg-muted">
            [headshot]
          </div>
        </div>

        <div className="space-y-5 text-fg/90 leading-relaxed text-lg">
          <p>
            I&apos;m a full-stack developer with over six years of experience
            shipping production software. I move swiftly across the stack — from
            frontend to backend to the infrastructure that holds it all
            together.
          </p>
          <p>
            Good software is a balance between shipping fast and shipping
            carefully. My workflow utilizes modern AI tools — to move quickly,
            but is backed by a deep understanding of fundamentals and best
            practices. I am committed to thorough testing and quality.
          </p>
          <p>
            Outside of code: I&apos;m usually playing music, painting,
            designing, video editing, exercising or spending time with my fiance
            and my 3 cats ₍^..^₎⟆
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="font-mono text-sm text-cyan mb-6 tracking-wider">
          <span className="text-fg-muted">{"// "}</span>
          stack
        </p>

        <p className="text-fg-muted text-lg max-w-2xl mb-12">
          Technologies I&apos;ve worked with. Anything not on this list is just
          something I look forward to learning in the future!
        </p>
        <dl className="space-y-4">
          {Object.entries(stack).map(([area, items]) => (
            <div
              key={area}
              className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-3 sm:gap-6 items-start"
            >
              <dt className="font-mono text-sm text-fg-muted pt-1">
                <span className="text-cyan">{">"}</span> {area.toLowerCase()}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs text-cyan/80 border border-cyan/20 px-2 py-1 rounded-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
