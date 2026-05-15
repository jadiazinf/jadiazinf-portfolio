import { Text } from "@/presentation/atoms/Text";
import { Badge } from "@/presentation/atoms/Badge";
import { cn } from "@/lib/cn";

type TAchievementCardProps = {
  readonly title: string;
  readonly description: string;
  readonly date: string;
  readonly technologies?: string[];
  readonly repoUrl?: string;
  readonly demoUrl?: string;
  readonly sourceLabel: string;
  readonly demoLabel: string;
  readonly className?: string;
};

export function AchievementCard({
  title,
  description,
  date,
  technologies,
  repoUrl,
  demoUrl,
  sourceLabel,
  demoLabel,
  className,
}: TAchievementCardProps) {
  return (
    <article
      className={cn(
        "group py-8 border-b border-default-100 last:border-b-0",
        "hover:bg-content1/20 -mx-4 px-4 rounded-lg transition-colors duration-300",
        className,
      )}
    >
      <div className="flex flex-col gap-3">
        <Text variant="overline">{date}</Text>

        <Text
          variant="h3"
          className="group-hover:text-primary transition-colors"
        >
          {title}
        </Text>

        <Text
          variant="body"
          className="text-default-400 text-sm leading-relaxed max-w-lg"
        >
          {description}
        </Text>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech) => (
              <Badge key={tech} variant="flat" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {(repoUrl || demoUrl) && (
          <div className="flex items-center gap-3 mt-2">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-default-400 hover:text-primary transition-colors whitespace-nowrap"
              >
                {sourceLabel}
                <ArrowUpRightIcon />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-default-400 hover:text-primary transition-colors whitespace-nowrap"
              >
                {demoLabel}
                <ArrowUpRightIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}
