type SkillChipsProps = {
  items: string[];
};

export function SkillChips({ items }: SkillChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="skill-chip px-3 py-1.5 text-sm font-medium text-ink"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
