import { CatsPopover } from "./CatsPopover";
import { Headshot } from "./Headshot";
import { Section } from "./Section";
import { TagList } from "./TagList";

const stack = {
  Frontend: [
    "TypeScript",
    "Next.js",
    "SvelteKit",
    "React Native",
    "Flutter",
    "Vue.js",
    "Tailwind",
    "Cypress",
    "Storybook",
    "Playwright",
    "Vitest",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "PHP / Laravel",
    "SQL",
    "SQLite",
    "Postgres",
    "Drizzle",
  ],
  "Tooling / Integrations": [
    "CI/CD",
    "Git + Github Actions",
    "Claude Code",
    "Gemini",
    "Cursor",
    "Pytest",
    "Jest",
    "Stripe",
    "Hubspot CMS",
    "Sanity CMS",
    "Wordpress",
  ],
};

export function About() {
  return (
    <Section id="about" subtitle="about" title="Who I am:" className="pt-0 lg:pt-0">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[200px_1fr]">
        <Headshot />

        <div className="relative space-y-5 text-lg leading-relaxed text-fg/90">
          <p>
            I&apos;m a developer with over 6 years of experience working full-stack with web and
            mobile apps. I have a passion for learning and creating!
          </p>
          <p>
            I utilize the power of agentic coding tools, but I also have a deep understanding of
            fundamentals and best practices. I am committed to quality through both manual and
            automated testing.
          </p>
          <p>
            Outside of code: I&apos;m usually playing music, painting, designing, video editing,
            exercising or spending time with my fiancée + <CatsPopover />
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="mb-6 font-mono text-sm tracking-wider text-cyan">
          <span className="text-fg-muted">{"// "}</span>
          stack
        </p>

        <p className="mb-12 max-w-2xl text-lg text-fg-muted">
          Technologies I&apos;ve worked with. Anything not on this list is just something I look
          forward to learning in the future!
        </p>
        <dl className="space-y-8">
          {Object.entries(stack).map(([area, items]) => (
            <div
              key={area}
              className="grid grid-cols-1 items-start gap-3 sm:grid-cols-[12rem_1fr] sm:gap-6"
            >
              <dt className="pt-1 font-mono text-sm text-fg-muted">
                <span className="text-cyan">{">"}</span> {area.toLowerCase()}
              </dt>
              <dd>
                <TagList items={items} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
