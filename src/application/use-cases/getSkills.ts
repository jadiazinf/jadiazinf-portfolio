import type { ISkillRepository } from "@/domain/ports";
import type { TSkillDTO } from "@/application/dto";

export function getSkills(repository: ISkillRepository): TSkillDTO[] {
  return repository.getAll().map((skill) => ({
    name: skill.name,
    nameKey: skill.nameKey,
    category: skill.category,
    icon: skill.icon,
  }));
}
