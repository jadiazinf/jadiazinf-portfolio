import type { IAchievement } from "@/domain/entities";
import type { IAchievementRepository } from "@/domain/ports";

const ACHIEVEMENTS: IAchievement[] = [
  {
    id: "artitek",
    titleKey: "achievementData.artitek.title",
    descriptionKey: "achievementData.artitek.description",
    date: "2026",
    url: "https://artitek.dev",
  },
  {
    id: "artitek-payments",
    titleKey: "achievementData.artitek-payments.title",
    descriptionKey: "achievementData.artitek-payments.description",
    date: "2026",
    technologies: ["Go", "Fiber", "PostgreSQL", "mTLS", "OWASP ASVS L2"],
    url: "https://artitekpayments.com",
  },
  {
    id: "la-torre",
    titleKey: "achievementData.la-torre.title",
    descriptionKey: "achievementData.la-torre.description",
    date: "2025",
    technologies: [
      "TypeScript",
      "Next.js 15",
      "Hono",
      "Bun",
      "PostgreSQL",
      "Drizzle ORM",
      "Turborepo",
      "pg-boss",
    ],
    url: "https://latorreapp.com",
  },
];

export const staticAchievementRepository: IAchievementRepository = {
  getAll: () => ACHIEVEMENTS,
};
