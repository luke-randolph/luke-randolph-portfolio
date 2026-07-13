import { NeonCard } from "./NeonCard";
import { Section } from "./Section";

const projects = [
  {
    title: "Yap",
    href: "https://yap.luke-randolph.com",
    repoHref: "https://github.com/luke-randolph/yap",
    description:
      "A real-time chat app with direct and group messaging over WebSockets, plus passwordless email OTP Authentication.",
    tags: ["Nuxt", "Vue", "NestJS", "TypeScript", "Postgres / Prisma", "Tailwind"],
  },
  {
    title: "Eye Creatures Merch",
    href: "https://eye-creatures-merch.vercel.app",
    repoHref: "https://github.com/luke-randolph/eye-creatures-merch",
    description: "A full-stack e-commerce site for selling band merch",
    tags: ["SvelteKit", "TypeScript", "Postgres / Drizzle", "Better-auth", "Stripe", "Sanity CMS"],
  },
  {
    title: "Dungeon Tools 5e",
    href: "https://dungeon-tools.luke-randolph.com",
    repoHref: "https://github.com/luke-randolph/dungeon-tools",
    description:
      "A DnD toolkit including spell lists, feats, dice rolls, and a goblin-themed AI chat. This is a web preview of the native app.",
    tags: ["Expo", "React Native", "Turbo", "SQLite", "Vercel AI SDK", "Gemini", "Vitest"],
  },
  {
    title: "Price Pulse",
    href: "https://price-pulse.luke-randolph.com",
    repoHref: "https://github.com/luke-randolph/price-pulse",
    description:
      "A quick reference for U.S. cost of living: a dashboard tracking consumer prices across groceries, energy, housing, and healthcare from Federal Reserve (FRED) data.",
    tags: ["Blazor", "C#", ".NET", "EF Core / SQLite"],
  },
  {
    title: "Portfolio",
    href: "https://luke-randolph.com",
    repoHref: "https://github.com/luke-randolph/luke-randolph-portfolio",
    description: "The site you're viewing right now :)",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
];

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      subtitle="portfolio"
      title="Selected works:"
      description="Apps built to explore ideas/tools + demonstrate my skills (not live products serving real customers)."
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <NeonCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
