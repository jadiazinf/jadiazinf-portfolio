import { Text } from "@/presentation/atoms/Text";
import { ExperienceItem } from "@/presentation/molecules/ExperienceItem";
import type { TExperienceDTO } from "@/application/dto";

type TExperienceSectionProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly experiences: TExperienceDTO[];
  readonly experienceTranslations: Record<string, { company: string; role: string; description: string }>;
  readonly presentLabel: string;
};

export function ExperienceSection({
  title,
  subtitle,
  experiences,
  experienceTranslations,
  presentLabel,
}: TExperienceSectionProps) {
  return (
    <section className="relative pt-24 pb-12 px-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Bracket shape */}
      <div className="absolute top-20 right-20 pointer-events-none opacity-15 hidden lg:block">
        <div className="w-10 h-px bg-foreground" />
        <div className="w-px h-20 bg-foreground" />
        <div className="w-10 h-px bg-foreground" />
      </div>

      {/* Glow */}
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/4 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot pair */}
      <div className="absolute top-36 right-36 hidden gap-3 pointer-events-none md:flex">
        <div className="w-2 h-2 rounded-full bg-primary/25" />
        <div className="w-2 h-2 rounded-full bg-primary/15" />
      </div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col gap-10">
        <div className="flex items-center gap-6">
          <Text variant="overline" className="text-primary">04</Text>
          <div className="w-12 h-px bg-primary/40" />
          <Text variant="h2">{title}</Text>
        </div>

        <Text variant="body" className="text-default-400">
          {subtitle}
        </Text>

        <div className="flex flex-col">
          {experiences.map((experience) => {
            const translation = experienceTranslations[experience.id];
            return (
              <ExperienceItem
                key={experience.id}
                company={translation?.company ?? ""}
                role={translation?.role ?? ""}
                description={translation?.description ?? ""}
                startDate={experience.startDate}
                endDate={experience.endDate}
                presentLabel={presentLabel}
                technologies={experience.technologies}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
