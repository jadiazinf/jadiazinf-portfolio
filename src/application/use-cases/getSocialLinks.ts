import type { ISocialLinkRepository } from "@/domain/ports";
import type { TSocialLinkDTO } from "@/application/dto";

export function getSocialLinks(
  repository: ISocialLinkRepository
): TSocialLinkDTO[] {
  return repository.getAll().map((link) => ({
    platform: link.platform,
    url: link.url,
    label: link.label,
  }));
}
