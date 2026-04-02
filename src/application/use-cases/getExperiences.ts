import type { IExperienceRepository } from "@/domain/ports";
import type { TExperienceDTO } from "@/application/dto";

export function getExperiences(
  repository: IExperienceRepository,
): TExperienceDTO[] {
  return repository.getAll().map((experience) => ({
    id: experience.id,
    companyKey: experience.companyKey,
    roleKey: experience.roleKey,
    descriptionKey: experience.descriptionKey,
    startDate: experience.startDate,
    endDate: experience.endDate,
    technologies: experience.technologies,
  }));
}
