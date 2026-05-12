import Image from "next/image";
import { CatsPopover } from "./CatsPopover";
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
    "Cypress",
    "Storybook",
    "Playwright",
    "Vitest",
  ],
  Backend: [
    "Node.js",
    "Express.js",
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
    "Jest",
    "Stripe",
    "Hubspot CMS",
    "Sanity CMS",
    "Wordpress",
  ],
};

export function About() {
  return (
    <Section id="about" subtitle="about" title="Who I am:">
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start">
        <div className="group relative aspect-square w-56 md:w-full neon-border rounded-sm overflow-hidden bg-bg-elev">
          <Image
            src="/headshot.jpg"
            alt="Luke Randolph"
            fill
            sizes="(min-width: 768px) 200px, 192px"
            className="object-cover group-hover:animate-headshot-base"
            priority
          />
          <Image
            src="/headshot-glitch-1.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 768px) 200px, 192px"
            className="object-cover opacity-0 group-hover:animate-headshot-glitch-1"
          />
          <Image
            src="/headshot-glitch-2.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 768px) 200px, 192px"
            className="object-cover opacity-0 group-hover:animate-headshot-glitch-2"
          />
        </div>

        <div className="relative space-y-5 text-fg/90 leading-relaxed text-lg">
          <p>
            I&apos;m a developer with over 6 years of experience working
            full-stack with web and mobile apps. I have a passion for learning
            and creating!
          </p>
          <p>
            I utilize the power of agentic coding tools, but I also have a deep
            understanding of fundamentals and best practices. I am committed to
            quality through both manual and automated testing.
          </p>
          <p>
            Outside of code: I&apos;m usually playing music, painting,
            designing, video editing, exercising or spending time with my
            fiancée + <CatsPopover />
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
        <dl className="space-y-8">
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
