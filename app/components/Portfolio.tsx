import { NeonCard } from "./NeonCard";
import { Section } from "./Section";

const apps = [
  {
    title: "Yap",
    href: "https://yap.luke-randolph.com",
    repoHref: "https://github.com/luke-randolph/yap",
    description:
      "A real-time chat app with direct and group messaging over WebSockets, plus passwordless email OTP Authentication.",
    tags: ["TypeScript", "Vue.js", "Nuxt", "Nest.js", "Postgres / Prisma", "Tailwind"],
  },
  {
    title: "Eye Creatures Merch",
    href: "https://eye-creatures-merch.vercel.app",
    repoHref: "https://github.com/luke-randolph/eye-creatures-merch",
    description: "A full-stack e-commerce site for selling band merch",
    tags: ["TypeScript", "SvelteKit", "Postgres / Drizzle", "Better-auth", "Stripe", "Sanity CMS"],
  },
  {
    title: "Dungeon Tools 5e",
    href: "https://dungeon-tools.luke-randolph.com",
    repoHref: "https://github.com/luke-randolph/dungeon-tools",
    description:
      "A DnD toolkit including spell lists, feats, dice rolls, and a goblin-themed AI chat. This is a web preview of the native app.",
    tags: [
      "TypeScript",
      "React Native",
      "Expo",
      "Turbo",
      "SQLite",
      "Vercel AI SDK",
      "Gemini",
      "Vitest",
    ],
  },
  {
    title: "Price Pulse",
    href: "https://price-pulse.luke-randolph.com",
    repoHref: "https://github.com/luke-randolph/price-pulse",
    description:
      "A quick reference for U.S. cost of living: a dashboard tracking consumer prices across groceries, energy, housing, and healthcare from Federal Reserve (FRED) data.",
    tags: ["Blazor", "C#", "ASP.NET Core", "EF Core / SQLite"],
  },
  {
    title: "Portfolio",
    href: "https://luke-randolph.com",
    repoHref: "https://github.com/luke-randolph/luke-randolph-portfolio",
    description: "The site you're viewing right now :)",
    tags: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
];

export function Portfolio() {
  return (
    <Section id="portfolio" subtitle="portfolio" title="Selected works:">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {apps.map((app) => (
          <NeonCard key={app.title} {...app} />
        ))}
      </div>
    </Section>
  );
}
