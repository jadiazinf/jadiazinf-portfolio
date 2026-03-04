export enum ESectionId {
  Hero = "hero",
  About = "about",
  Skills = "skills",
  Projects = "projects",
  Experience = "experience",
  Contact = "contact",
}

export const SECTION_ORDER: ESectionId[] = [
  ESectionId.Hero,
  ESectionId.About,
  ESectionId.Skills,
  ESectionId.Projects,
  ESectionId.Experience,
  ESectionId.Contact,
];

export const ANIMATION_DURATION_MS = 300;

export const LOCALES = ["en", "es"] as const;
export type TLocale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: TLocale = "es";
