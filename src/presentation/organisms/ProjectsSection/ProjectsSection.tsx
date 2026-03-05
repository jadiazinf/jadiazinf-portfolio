import { Text } from "@/presentation/atoms/Text";
import { SectionHeader } from "@/presentation/molecules/SectionHeader";
import { ProjectCard } from "@/presentation/molecules/ProjectCard";
import type { TProjectDTO } from "@/application/dto";

type TProjectsSectionProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly projects: TProjectDTO[];
  readonly projectTranslations: Record<string, { title: string; description: string }>;
  readonly sourceLabel: string;
  readonly demoLabel: string;
};

export function ProjectsSection({
  title,
  subtitle,
  projects,
  projectTranslations,
  sourceLabel,
  demoLabel,
}: TProjectsSectionProps) {
  return (
    <section className="relative pt-24 pb-12 px-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Angled line */}
      <div className="absolute top-16 right-24 w-36 h-px bg-foreground/15 rotate-45 pointer-events-none hidden lg:block" />

      {/* Diamond */}
      <div className="absolute bottom-20 right-28 w-8 h-8 border border-primary/20 rotate-45 pointer-events-none hidden md:block" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-64 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col gap-10">
        <SectionHeader number="03" title={title} />

        <Text variant="body" className="text-default-400">
          {subtitle}
        </Text>

        <div className="flex flex-col">
          {projects.map((project, index) => {
            const translation = projectTranslations[project.id];
            return (
              <ProjectCard
                key={project.id}
                index={index}
                title={translation?.title ?? project.id}
                description={translation?.description ?? ""}
                technologies={project.technologies}
                sourceUrl={project.sourceUrl}
                demoUrl={project.demoUrl}
                sourceLabel={sourceLabel}
                demoLabel={demoLabel}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
