import { cn } from "@/lib/cn";

type TSkillBadgeProps = {
  readonly name: string;
  readonly className?: string;
};

export function SkillBadge({ name, className }: TSkillBadgeProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-lg bg-content1/60 border border-default-100",
        "text-sm font-medium text-default-600",
        "hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200",
        className
      )}
    >
      {name}
    </div>
  );
}
