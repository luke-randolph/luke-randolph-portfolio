import { NeonCard } from "./NeonCard";

const projects = [
  {
    title: "Eye Creatures Merch",
    href: "#",
    description: "A full-stack e-commerce site for a selling band merch",
    tags: [
      "SvelteKit",
      "TypeScript",
      "Postgres / Drizzle",
      "Better-auth",
      "Stripe",
      "Sanity",
    ],
  },
  {
    title: "Dungeon Tools",
    href: "#",
    description:
      "A toolkit for Dungeons and Dragons (role playing game) — spell lists, dice rolls, and AI chat. This is a web preview of the native app.",
    tags: ["Expo", "React Native", "Turbo"],
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="relative py-32 px-6 sm:px-10 max-w-5xl mx-auto scroll-mt-16"
    >
      <p className="font-mono text-sm text-cyan mb-3 tracking-wider">
        <span className="text-fg-muted">{"// "}</span>
        portfolio
      </p>
      <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-4">
        Selected Works.
      </h2>
      <p className="font-mono text-sm text-fg-muted max-w-2xl mb-12 leading-relaxed">
        <span className="text-magenta">{"!"}</span> These apps are built to
        explore ideas/tools + demonstrate my skills, not live products serving
        real customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <NeonCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
