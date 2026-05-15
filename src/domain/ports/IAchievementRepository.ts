import type { IAchievement } from "@/domain/entities";

export interface IAchievementRepository {
  getAll(): IAchievement[];
}
