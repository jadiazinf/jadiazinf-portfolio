"use client";

import { SectionNavigator } from "@/presentation/layouts/SectionNavigator";
import type { ESectionId } from "@/lib/constants";
import type { TProjectDTO, TSkillDTO, TExperienceDTO, TSocialLinkDTO } from "@/application/dto";

type TPortfolioTranslations = {
  readonly hero: { greeting: string; name: string; role: string; tagline: string; cta: string };
  readonly about: { title: string; paragraphs: string[] };
  readonly skills: { title: string; subtitle: string; categoryLabels: Record<string, string> };
  readonly projects: { title: string; subtitle: string; sourceLabel: string; demoLabel: string; translations: Record<string, { title: string; description: string }> };
  readonly experience: { title: string; subtitle: string; presentLabel: string; translations: Record<string, { company: string; role: string; description: string }> };
  readonly contact: { title: string; subtitle: string; orConnect: string };
  readonly footer: { builtWith: string; rights: string };
  readonly sectionLabels: Record<ESectionId, string>;
};

type TPortfolioTemplateProps = {
  readonly translations: TPortfolioTranslations;
  readonly projects: TProjectDTO[];
  readonly skills: TSkillDTO[];
  readonly experiences: TExperienceDTO[];
  readonly socialLinks: TSocialLinkDTO[];
};

export function PortfolioTemplate({
  translations,
  projects,
  skills,
  experiences,
  socialLinks,
}: TPortfolioTemplateProps) {
  return (
    <SectionNavigator
      heroProps={{
        greeting: translations.hero.greeting,
        name: translations.hero.name,
        role: translations.hero.role,
        tagline: translations.hero.tagline,
        ctaLabel: translations.hero.cta,
      }}
      aboutProps={{
        title: translations.about.title,
        paragraphs: translations.about.paragraphs,
      }}
      skillsProps={{
        title: translations.skills.title,
        subtitle: translations.skills.subtitle,
        skills,
        categoryLabels: translations.skills.categoryLabels,
      }}
      projectsProps={{
        title: translations.projects.title,
        subtitle: translations.projects.subtitle,
        projects,
        projectTranslations: translations.projects.translations,
        sourceLabel: translations.projects.sourceLabel,
        demoLabel: translations.projects.demoLabel,
      }}
      experienceProps={{
        title: translations.experience.title,
        subtitle: translations.experience.subtitle,
        experiences,
        experienceTranslations: translations.experience.translations,
        presentLabel: translations.experience.presentLabel,
      }}
      contactProps={{
        title: translations.contact.title,
        subtitle: translations.contact.subtitle,
        orConnect: translations.contact.orConnect,
        socialLinks,
      }}
      footerProps={{
        builtWith: translations.footer.builtWith,
        rights: translations.footer.rights,
      }}
      sectionLabels={translations.sectionLabels}
    />
  );
}
