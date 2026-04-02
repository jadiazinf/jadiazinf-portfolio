import { Text } from "@/presentation/atoms/Text";
import { Badge } from "@/presentation/atoms/Badge";
import { cn } from "@/lib/cn";

type TExperienceItemProps = {
  readonly company: string;
  readonly role: string;
  readonly description: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly presentLabel: string;
  readonly technologies: string[];
  readonly className?: string;
};

export function ExperienceItem({
  company,
  role,
  description,
  startDate,
  endDate,
  presentLabel,
  technologies,
  className,
}: TExperienceItemProps) {
  const period = `${startDate} — ${endDate ?? presentLabel}`;

  return (
    <div
      className={cn(
        "relative pl-8 pb-8 border-l border-default-100 last:pb-0",
        className,
      )}
    >
      <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-primary/80 ring-4 ring-background" />

      <div className="flex flex-col gap-2">
        <Text variant="overline">{period}</Text>
        <Text variant="h4">{role}</Text>
        <Text variant="caption" className="text-primary font-medium">
          {company}
        </Text>
        <Text variant="body" className="text-default-400 mt-1">
          {description}
        </Text>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="flat" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
