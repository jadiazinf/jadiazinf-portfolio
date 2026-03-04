import type { ISkill } from "@/domain/entities";

export interface ISkillRepository {
  getAll(): ISkill[];
}
