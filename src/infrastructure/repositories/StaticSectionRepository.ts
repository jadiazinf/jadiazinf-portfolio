import type { ISection } from "@/domain/entities";
import type { ISectionRepository } from "@/domain/ports";
import { ESectionId, SECTION_ORDER } from "@/lib/constants";

const SECTIONS: ISection[] = SECTION_ORDER.map((id, index) => ({
  id,
  translationKey: `nav.${id}`,
  order: index,
}));

export const staticSectionRepository: ISectionRepository = {
  getAll: () => SECTIONS,
};
