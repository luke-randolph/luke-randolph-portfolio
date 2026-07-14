import { Section } from "./Section";

const principles = [
  {
    title: "Clean Architecture & Separation of Concerns",
    body: "I architect human-readable, highly maintainable codebases by strictly adhering to DRY principles and modular design. I don't stop at the first working solution; I refine until the code is performant, scalable, and intuitive for the next developer.",
  },
  {
    title: "AI-Augmented Engineering",
    body: "I leverage AI tooling to accelerate prototyping, automate boilerplate, and maximize productivity. However, all generated code is subject to rigorous code review, testing, and critical analysis to ensure security and reliability.",
  },
  {
    title: "Accessibility by Default",
    body: "Details like keyboard navigation, screen reader compatibility, and semantic HTML matter. A site that only works for the 'median user' is fundamentally broken; high-quality software is measured by how accessible it is.",
  },
  {
    title: "Boy Scout Principle",
    body: `I treat codebases as living ecosystems that require constant upkeep. I proactively pay down technical debt, refactor legacy code, and leave every module cleaner and more stable than I found it.`,
  },
  {
    title: "Pragmatic Delivery",
    body: "Businesses win by shipping. I balance engineering excellence with commercial realities, prioritizing fast deployment and rapid iteration.",
  },
];

export function Principles() {
  return (
    <Section
      id="principles"
      subtitle="principles"
      shortSubtitle="ethos"
      title="How I work:"
      className="pb-0 lg:pb-12"
    >
      <ol className="space-y-8">
        {principles.map((p, i) => (
          <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4">
            <span aria-hidden="true" className="pt-1.5 font-mono text-sm text-cyan">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="mb-2 font-mono text-lg font-semibold text-fg">{p.title}</h3>
              <p className="leading-relaxed text-fg-muted">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
