import type { IAchievementRepository } from "@/domain/ports";
import type { TAchievementDTO } from "@/application/dto";

export function getAchievements(
  repository: IAchievementRepository,
): TAchievementDTO[] {
  return repository.getAll().map((achievement) => ({
    id: achievement.id,
    titleKey: achievement.titleKey,
    descriptionKey: achievement.descriptionKey,
    date: achievement.date,
    url: achievement.url,
    repoUrl: achievement.repoUrl,
    technologies: achievement.technologies,
  }));
}
