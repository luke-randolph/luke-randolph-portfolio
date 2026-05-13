export type Section = {
  id: string;
  label: string;
  shortLabel?: string;
};

export const sections: Section[] = [
  { id: "intro", label: "intro" },
  { id: "about", label: "about" },
  { id: "portfolio", label: "portfolio", shortLabel: "work" },
  { id: "principles", label: "principles", shortLabel: "ethos" },
  { id: "contact", label: "contact" },
];

export const sectionIds = sections.map((s) => s.id);
