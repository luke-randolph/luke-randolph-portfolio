import { CatsPopover } from "./CatsPopover";
import { Headshot } from "./Headshot";
import { Section } from "./Section";
import { TagList } from "./TagList";

const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "PHP", "C#", "SQL"],
  Frontend: [
    "React",
    "React Native",
    "Next.js",
    "SvelteKit",
    "Flutter",
    "Vue.js",
    "Nuxt.js",
    "Blazor",
  ],
  Backend: ["Node.js", "Express.js", "NestJS", "FastAPI", "Laravel", "ASP.NET Core"],
  "Database & ORM": [
    "SQLite",
    "MySQL",
    "PostgresQL",
    "SQLAlchemy",
    "TypeORM",
    "Drizzle",
    "Prisma",
    "EF Core",
  ],
  Marketing: ["SEO/AEO", "Hubspot CMS", "Sanity CMS", "Wordpress", "Contentful"],
  DevOps: ["CI/CD", "Git + Github Actions", "Github", "Docker", "GCP", "Terraform"],
};

export function About() {
  return (
    <Section id="about" subtitle="about" title="Who I am:" className="pt-0 lg:pt-0">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[200px_1fr]">
        <Headshot />

        <div className="relative space-y-5 text-lg leading-relaxed text-fg/90">
          <p>
            I&apos;m a software engineer with over 6 years of experience working full-stack with web
            and mobile apps. I have a passion for learning and creating! I have collaborated across
            numerous agile Scrum teams, ensuring continuous process improvement.
          </p>
          <p>
            I have a consistent history of driving projects to successful, on-time delivery that
            predates AI-assisted development. I do not hesitate to harness the efficiency of agentic
            tools, backed by my understanding of fundamentals and best practices. Quality is my
            priority, enforced by manual and automated testing.
          </p>
          <p>
            Outside of code: I&apos;m usually playing music, making art, video editing, exercising
            or spending time with my wife + <CatsPopover />
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="mb-6 font-mono text-sm tracking-wider text-cyan">
          <span className="text-fg-muted">{"// "}</span>
          skills
        </p>
        <dl className="space-y-8">
          {Object.entries(skills).map(([area, items]) => (
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
