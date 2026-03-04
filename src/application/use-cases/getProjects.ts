import type { IProjectRepository } from "@/domain/ports";
import type { TProjectDTO } from "@/application/dto";

export function getProjects(repository: IProjectRepository): TProjectDTO[] {
  return repository.getAll().map((project) => ({
    id: project.id,
    titleKey: project.titleKey,
    descriptionKey: project.descriptionKey,
    technologies: project.technologies,
    sourceUrl: project.sourceUrl,
    demoUrl: project.demoUrl,
    imageUrl: project.imageUrl,
  }));
}
