import { Section } from "./Section";

const principles = [
  {
    title: "DRY and legible code",
    body: 'I strive to write code that is human-readable, but with consistency and properly separated concerns. I look for the best solution, not just "a solution"',
  },
  {
    title: "Embrace AI tooling",
    body: "I utilize AI to plan, expedite prototyping, and boost productivity. I also read, test and think critically about the results it generates to get the most reliable and refined features. Speed without understanding produces unnecessary tech debt.",
  },
  {
    title: "Accessibility matters",
    body: "Keyboard navigation, screen reader compatibility, visible focus, proper color contrast etc. A site that only works for the median user is broken — it just hasn't been measured yet.",
  },
  {
    title: "Leave it better than you found it",
    body: "I pay attention to detail for continuous improvement. Add missing tests, prune dead code, fix poorly typed variables etc. A codebase is like a living organism that requires upkeep. The next person to touch the code doesn't need to be me to find their footing.",
  },
  {
    title: "Ship the thing",
    body: "Perfectionism has its limitations; businesses need results. Shipping and iterating is the key to consistent results and improvement.",
  },
];

export function Principles() {
  return (
    <Section
      id="principles"
      subtitle="principles"
      shortSubtitle="ethos"
      title="How I work:"
    >
      <ol className="space-y-8">
        {principles.map((p, i) => (
          <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4">
            <span
              aria-hidden="true"
              className="font-mono text-cyan text-sm pt-1.5"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-mono text-lg font-semibold text-fg mb-2">
                {p.title}
              </h3>
              <p className="text-fg-muted leading-relaxed">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
