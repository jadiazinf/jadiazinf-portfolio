import { getTranslations } from "next-intl/server";
import { PortfolioTemplate } from "@/presentation/templates/PortfolioTemplate";
import { ESectionId } from "@/lib/constants";
import {
  getProjects,
  getSkills,
  getExperiences,
  getAchievements,
  getSocialLinks,
} from "@/application/use-cases";
import {
  staticProjectRepository,
  staticSkillRepository,
  staticExperienceRepository,
  staticAchievementRepository,
  staticSocialLinkRepository,
} from "@/infrastructure/repositories";

export default async function HomePage() {
  const [t, tProjects, tExperience, tAchievements, tSkillCategories] =
    await Promise.all([
      getTranslations(),
      getTranslations("projectData"),
      getTranslations("experienceData"),
      getTranslations("achievementData"),
      getTranslations("skillCategories"),
    ]);

  const projects = getProjects(staticProjectRepository);
  const skills = getSkills(staticSkillRepository);
  const experiences = getExperiences(staticExperienceRepository);
  const achievements = getAchievements(staticAchievementRepository);
  const socialLinks = getSocialLinks(staticSocialLinkRepository);

  const projectTranslations: Record<
    string,
    { title: string; description: string }
  > = {
    "diaz-tech-consulting": {
      title: tProjects("diazTechConsulting.title"),
      description: tProjects("diazTechConsulting.description"),
    },
    "la-torre": {
      title: tProjects("laTorre.title"),
      description: tProjects("laTorre.description"),
    },
    kompii: {
      title: tProjects("kompii.title"),
      description: tProjects("kompii.description"),
    },
    carshop: {
      title: tProjects("carshop.title"),
      description: tProjects("carshop.description"),
    },
    eddu: {
      title: tProjects("eddu.title"),
      description: tProjects("eddu.description"),
    },
    "ministerios-id": {
      title: tProjects("ministeriosId.title"),
      description: tProjects("ministeriosId.description"),
    },
    portfolio: {
      title: tProjects("portfolio.title"),
      description: tProjects("portfolio.description"),
    },
  };

  const experienceTranslations: Record<
    string,
    { company: string; role: string; description: string }
  > = {
    kompii: {
      company: tExperience("kompii.company"),
      role: tExperience("kompii.role"),
      description: tExperience("kompii.description"),
    },
    gma: {
      company: tExperience("gma.company"),
      role: tExperience("gma.role"),
      description: tExperience("gma.description"),
    },
    eddu: {
      company: tExperience("eddu.company"),
      role: tExperience("eddu.role"),
      description: tExperience("eddu.description"),
    },
  };

  const achievementTranslations: Record<
    string,
    { title: string; description: string }
  > = {
    "diaz-tech-consulting": {
      title: tAchievements("diaz-tech-consulting.title"),
      description: tAchievements("diaz-tech-consulting.description"),
    },
    "la-torre": {
      title: tAchievements("la-torre.title"),
      description: tAchievements("la-torre.description"),
    },
  };

  const categoryLabels: Record<string, string> = {
    frontend: tSkillCategories("frontend"),
    backend: tSkillCategories("backend"),
    database: tSkillCategories("database"),
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
          paragraphs: [
            t("about.paragraph1"),
            t("about.paragraph2"),
            t("about.paragraph3"),
          ],
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
        achievements: {
          title: t("achievements.title"),
          subtitle: t("achievements.subtitle"),
          sourceLabel: t("achievements.viewCode"),
          demoLabel: t("achievements.viewDemo"),
          translations: achievementTranslations,
        },
        contact: {
          title: t("contact.title"),
          subtitle: t("contact.subtitle"),
          orConnect: t("contact.orConnect"),
          nameLabel: t("contact.nameLabel"),
          emailLabel: t("contact.emailLabel"),
          messageLabel: t("contact.messageLabel"),
          sendButton: t("contact.sendButton"),
          modalTitle: t("contact.modalTitle"),
          successMessage: t("contact.successMessage"),
          errorMessage: t("contact.errorMessage"),
          downloadCv: t("contact.downloadCv"),
          validation: {
            nameRequired: t("contact.nameRequired"),
            nameMin: t("contact.nameMin"),
            emailRequired: t("contact.emailRequired"),
            emailInvalid: t("contact.emailInvalid"),
            messageRequired: t("contact.messageRequired"),
            messageMin: t("contact.messageMin"),
          },
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
          [ESectionId.Achievements]: t("nav.achievements"),
          [ESectionId.Contact]: t("nav.contact"),
        },
      }}
      projects={projects}
      skills={skills}
      experiences={experiences}
      achievements={achievements}
      socialLinks={socialLinks}
    />
  );
}
