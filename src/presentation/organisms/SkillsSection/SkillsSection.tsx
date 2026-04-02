import { Text } from "@/presentation/atoms/Text";
import { SectionHeader } from "@/presentation/molecules/SectionHeader";
import { SkillBadge } from "@/presentation/molecules/SkillBadge";
import type { TSkillDTO } from "@/application/dto";

type TSkillsSectionProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly skills: TSkillDTO[];
  readonly categoryLabels: Record<string, string>;
};

export function SkillsSection({
  title,
  subtitle,
  skills,
  categoryLabels,
}: TSkillsSectionProps) {
  const groupedSkills = groupByCategory(skills);

  return (
    <section className="relative pt-24 pb-12 px-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Cross */}
      <div className="absolute top-24 right-20 pointer-events-none opacity-20 hidden lg:block">
        <div className="w-px h-16 bg-foreground mx-auto" />
        <div className="w-16 h-px bg-foreground -mt-8" />
      </div>

      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-primary/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col gap-10">
        <SectionHeader number="02" title={title} />

        <Text variant="body" className="text-default-400">
          {subtitle}
        </Text>

        <div className="flex flex-col gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="flex flex-col gap-3">
              <Text
                variant="caption"
                className="uppercase tracking-[0.2em] text-primary/80 font-semibold text-xs"
              >
                {categoryLabels[category] ?? category}
              </Text>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function groupByCategory(skills: TSkillDTO[]): Record<string, TSkillDTO[]> {
  return skills.reduce<Record<string, TSkillDTO[]>>((groups, skill) => {
    const category = skill.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(skill);
    return groups;
  }, {});
}
