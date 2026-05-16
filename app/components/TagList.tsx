import { cn } from "../lib/cn";

type TagListProps = {
  items: string[];
  className?: string;
};

export function TagList({ items, className }: TagListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-sm border border-cyan/20 px-2 py-1 font-mono text-xs text-cyan/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
