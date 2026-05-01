import Image from "next/image";
import { Section } from "./Section";

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
    "SQL",
    "Postgres",
    "Drizzle",
    "Jest",
  ],
  "Tooling / Integrations": [
    "Ci/CD",
    "Git + Github Actions",
    "Stripe",
    "Sanity CMS",
    "Playwright",
    "Cypress",
    "Storybook",
    "Vercel",
    "Wordpress",
  ],
};

export function About() {
  return (
    <Section id="about" subtitle="about" title="Who I am.">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start">
        <div className="relative aspect-square w-56 md:w-full neon-border rounded-sm overflow-hidden bg-bg-elev">
          <Image
            src="/headshot.jpg"
            alt="Luke Randolph"
            fill
            sizes="(min-width: 768px) 200px, 192px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 text-fg/90 leading-relaxed text-lg">
          <p>
            I&apos;m a web dev with over 6 years of experience shipping
            production software. I move swiftly from frontend to backend to the
            infrastructure that glues it all together!
          </p>
          <p>
            My workflow utilizes modern AI tools, but is backed by a deep
            understanding of fundamentals and best practices. I am committed to
            thorough testing and quality.
          </p>
          <p>
            Outside of code: I&apos;m usually playing music, painting,
            designing, video editing, exercising or spending time with my
            fiancée + my 3 cats ₍^..^₎⟆
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
        <dl className="space-y-6">
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
    </Section>
  );
}
