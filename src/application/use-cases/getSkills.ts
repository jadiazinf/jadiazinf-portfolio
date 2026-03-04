import type { ISkillRepository } from "@/domain/ports";
import type { TSkillDTO } from "@/application/dto";

export function getSkills(repository: ISkillRepository): TSkillDTO[] {
  return repository.getAll().map((skill) => ({
    name: skill.name,
    category: skill.category,
    icon: skill.icon,
  }));
}
