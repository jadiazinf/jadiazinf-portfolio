import type { ISocialLink } from "@/domain/entities";

export interface ISocialLinkRepository {
  getAll(): ISocialLink[];
}
