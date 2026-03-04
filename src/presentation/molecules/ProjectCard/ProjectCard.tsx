import { Text } from "@/presentation/atoms/Text";
import { cn } from "@/lib/cn";

type TProjectCardProps = {
  readonly index: number;
  readonly title: string;
  readonly description: string;
  readonly technologies: string[];
  readonly sourceUrl?: string;
  readonly demoUrl?: string;
  readonly sourceLabel: string;
  readonly demoLabel: string;
  readonly className?: string;
};

export function ProjectCard({
  index,
  title,
  description,
  technologies,
  sourceUrl,
  demoUrl,
  sourceLabel,
  demoLabel,
  className,
}: TProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "group grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start py-8",
        "border-b border-default-100 last:border-b-0",
        "hover:bg-content1/20 -mx-4 px-4 rounded-lg transition-colors duration-300",
        className
      )}
    >
      {/* Number */}
      <span className="text-3xl md:text-4xl font-bold text-default-200 group-hover:text-primary/40 transition-colors leading-none pt-1">
        {number}
      </span>

      {/* Content */}
      <div className="flex flex-col gap-3 min-w-0">
        <Text variant="h3" className="group-hover:text-primary transition-colors">
          {title}
        </Text>

        <Text variant="body" className="text-default-400 text-sm leading-relaxed max-w-lg">
          {description}
        </Text>

        <div className="flex flex-wrap gap-2 mt-1">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-default-500 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-2 pt-1">
        {sourceUrl && (
          <a
            href={sourceUrl}
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
    </article>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}
