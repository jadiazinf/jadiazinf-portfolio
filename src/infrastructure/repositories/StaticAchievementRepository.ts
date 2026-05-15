import type { IAchievement } from "@/domain/entities";
import type { IAchievementRepository } from "@/domain/ports";

const ACHIEVEMENTS: IAchievement[] = [
  {
    id: "diaz-tech-consulting",
    titleKey: "achievementData.diaz-tech-consulting.title",
    descriptionKey: "achievementData.diaz-tech-consulting.description",
    date: "2025",
  },
  {
    id: "la-torre",
    titleKey: "achievementData.la-torre.title",
    descriptionKey: "achievementData.la-torre.description",
    date: "2025",
    technologies: [
      "Next.js",
      "Hono",
      "TypeScript",
      "PostgreSQL",
      "Bun",
      "Turborepo",
      "Drizzle ORM",
      "Zustand",
      "Firebase",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/jadiazinf/condominio-platform",
    url: "https://condominio-platform-web.vercel.app/",
  },
];

export const staticAchievementRepository: IAchievementRepository = {
  getAll: () => ACHIEVEMENTS,
};
