import { NeonCard } from "./NeonCard";
import { Section } from "./Section";

const projects = [
  {
    title: "Eye Creatures Merch",
    href: "https://eye-creatures-merch.vercel.app",
    description: "A full-stack e-commerce site for selling band merch",
    tags: [
      "SvelteKit",
      "TypeScript",
      "Postgres / Drizzle",
      "Better-auth",
      "Stripe",
      "Sanity CMS",
    ],
  },
  {
    title: "Dungeon Tools",
    href: "https://dungeon-tools.luke-randolph.com",
    description:
      "A toolkit for Dungeons and Dragons (role playing game) — spell lists, dice rolls, and AI chat. This is a web preview of the native app.",
    tags: [
      "Expo",
      "React Native",
      "Turbo",
      "SQLite",
      "Vercel AI SDK",
      "Gemini",
    ],
  },
];

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      subtitle="portfolio"
      title="Selected works."
      description="These apps are built to explore ideas/tools + demonstrate my skills (not live products serving real customers)."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <NeonCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
