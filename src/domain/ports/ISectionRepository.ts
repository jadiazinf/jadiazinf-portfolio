import type { ISection } from "@/domain/entities";

export interface ISectionRepository {
  getAll(): ISection[];
}
