import type { IExperience } from "@/domain/entities";

export interface IExperienceRepository {
  getAll(): IExperience[];
}
