import { getTranslations } from "next-intl/server";
import { PortfolioTemplate } from "@/presentation/templates/PortfolioTemplate";
import { ESectionId } from "@/lib/constants";
import { getProjects, getSkills, getExperiences, getSocialLinks } from "@/application/use-cases";
import {
  staticProjectRepository,
  staticSkillRepository,
  staticExperienceRepository,
  staticSocialLinkRepository,
} from "@/infrastructure/repositories";

export default async function HomePage() {
  const [t, tProjects, tExperience, tSkillCategories] = await Promise.all([
    getTranslations(),
    getTranslations("projectData"),
    getTranslations("experienceData"),
    getTranslations("skillCategories"),
  ]);

  const projects = getProjects(staticProjectRepository);
  const skills = getSkills(staticSkillRepository);
  const experiences = getExperiences(staticExperienceRepository);
  const socialLinks = getSocialLinks(staticSocialLinkRepository);

  const projectTranslations: Record<string, { title: string; description: string }> = {
    portfolio: { title: tProjects("portfolio.title"), description: tProjects("portfolio.description") },
    ecommerce: { title: tProjects("ecommerce.title"), description: tProjects("ecommerce.description") },
    "api-gateway": { title: tProjects("apiGateway.title"), description: tProjects("apiGateway.description") },
  };

  const experienceTranslations: Record<string, { company: string; role: string; description: string }> = {
    "senior-dev": { company: tExperience("seniorDev.company"), role: tExperience("seniorDev.role"), description: tExperience("seniorDev.description") },
    "fullstack-dev": { company: tExperience("fullstackDev.company"), role: tExperience("fullstackDev.role"), description: tExperience("fullstackDev.description") },
    "junior-dev": { company: tExperience("juniorDev.company"), role: tExperience("juniorDev.role"), description: tExperience("juniorDev.description") },
  };

  const categoryLabels: Record<string, string> = {
    frontend: tSkillCategories("frontend"),
    backend: tSkillCategories("backend"),
    database: tSkillCategories("database"),
    devops: tSkillCategories("devops"),
    tools: tSkillCategories("tools"),
  };

  return (
    <PortfolioTemplate
      translations={{
        hero: {
          greeting: t("hero.greeting"),
          name: t("hero.name"),
          role: t("hero.role"),
          tagline: t("hero.tagline"),
          cta: t("hero.cta"),
        },
        about: {
          title: t("about.title"),
          paragraphs: [t("about.paragraph1"), t("about.paragraph2"), t("about.paragraph3")],
        },
        skills: {
          title: t("skills.title"),
          subtitle: t("skills.subtitle"),
          categoryLabels,
        },
        projects: {
          title: t("projects.title"),
          subtitle: t("projects.subtitle"),
          sourceLabel: t("projects.viewCode"),
          demoLabel: t("projects.viewDemo"),
          translations: projectTranslations,
        },
        experience: {
          title: t("experience.title"),
          subtitle: t("experience.subtitle"),
          presentLabel: t("experience.present"),
          translations: experienceTranslations,
        },
        contact: {
          title: t("contact.title"),
          subtitle: t("contact.subtitle"),
          orConnect: t("contact.orConnect"),
        },
        footer: {
          builtWith: t("footer.builtWith"),
          rights: t("footer.rights"),
        },
        sectionLabels: {
          [ESectionId.Hero]: t("nav.hero"),
          [ESectionId.About]: t("nav.about"),
          [ESectionId.Skills]: t("nav.skills"),
          [ESectionId.Projects]: t("nav.projects"),
          [ESectionId.Experience]: t("nav.experience"),
          [ESectionId.Contact]: t("nav.contact"),
        },
      }}
      projects={projects}
      skills={skills}
      experiences={experiences}
      socialLinks={socialLinks}
    />
  );
}
