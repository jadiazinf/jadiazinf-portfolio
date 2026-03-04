import type { ISectionRepository } from "@/domain/ports";
import type { TSectionDTO } from "@/application/dto";

export function getSections(repository: ISectionRepository): TSectionDTO[] {
  return repository.getAll().map((section) => ({
    id: section.id,
    translationKey: section.translationKey,
    order: section.order,
  }));
}
