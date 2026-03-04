import type { IProject } from "@/domain/entities";

export interface IProjectRepository {
  getAll(): IProject[];
}
