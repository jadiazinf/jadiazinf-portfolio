import { Text } from "@/presentation/atoms/Text";
import { SectionHeader } from "@/presentation/molecules/SectionHeader";
import { AchievementCard } from "@/presentation/molecules/AchievementCard";
import type { TAchievementDTO } from "@/application/dto";

type TAchievementsSectionProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly achievements: TAchievementDTO[];
  readonly achievementTranslations: Record<
    string,
    { title: string; description: string }
  >;
  readonly sourceLabel: string;
  readonly demoLabel: string;
};

export function AchievementsSection({
  title,
  subtitle,
  achievements,
  achievementTranslations,
  sourceLabel,
  demoLabel,
}: TAchievementsSectionProps) {
  return (
    <section className="relative pt-24 pb-12 px-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Diagonal line */}
      <div className="absolute top-16 left-24 w-36 h-px bg-foreground/15 -rotate-45 pointer-events-none hidden lg:block" />

      {/* Glow */}
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-primary/4 rounded-full blur-[80px] pointer-events-none" />

      {/* Diamond shape */}
      <div className="absolute bottom-20 left-28 w-8 h-8 border border-primary/20 rotate-45 pointer-events-none hidden md:block" />

      {/* Dot pair */}
      <div className="absolute top-36 right-36 hidden gap-3 pointer-events-none md:flex">
        <div className="w-2 h-2 rounded-full bg-primary/20" />
        <div className="w-2 h-2 rounded-full bg-primary/10" />
      </div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col gap-10">
        <SectionHeader number="05" title={title} />

        <Text variant="body" className="text-default-400">
          {subtitle}
        </Text>

        <div className="flex flex-col">
          {achievements.map((achievement) => {
            const translation = achievementTranslations[achievement.id];
            return (
              <AchievementCard
                key={achievement.id}
                title={translation?.title ?? ""}
                description={translation?.description ?? ""}
                date={achievement.date}
                technologies={achievement.technologies}
                repoUrl={achievement.repoUrl}
                demoUrl={achievement.url}
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
