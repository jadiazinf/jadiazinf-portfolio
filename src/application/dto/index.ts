import type { ESectionId } from "@/lib/constants";
import type { ESkillCategory } from "@/domain/entities";

export type TSectionDTO = {
  readonly id: ESectionId;
  readonly translationKey: string;
  readonly order: number;
};

export type TProjectDTO = {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly technologies: string[];
  readonly sourceUrl?: string;
  readonly demoUrl?: string;
  readonly imageUrl?: string;
};

export type TSkillDTO = {
  readonly name: string;
  readonly category: ESkillCategory;
  readonly icon?: string;
};

export type TExperienceDTO = {
  readonly id: string;
  readonly companyKey: string;
  readonly roleKey: string;
  readonly descriptionKey: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly technologies: string[];
};

export type TSocialLinkDTO = {
  readonly platform: string;
  readonly url: string;
  readonly label: string;
};
