"use client";

import { ESectionId } from "@/lib/constants";
import { useSectionNavigation } from "./useSectionNavigation";
import { SectionWrapper } from "./SectionWrapper";
import { SectionIndicator } from "@/presentation/molecules/SectionIndicator";
import { ThemeToggle } from "@/presentation/atoms/ThemeToggle";
import { LanguageSwitcher } from "@/presentation/atoms/LanguageSwitcher";
import { HeroSection } from "@/presentation/organisms/HeroSection";
import { AboutSection } from "@/presentation/organisms/AboutSection";
import { SkillsSection } from "@/presentation/organisms/SkillsSection";
import { ProjectsSection } from "@/presentation/organisms/ProjectsSection";
import { ExperienceSection } from "@/presentation/organisms/ExperienceSection";
import { ContactSection } from "@/presentation/organisms/ContactSection";
import { Footer } from "@/presentation/organisms/Footer";
import type {
  TProjectDTO,
  TSkillDTO,
  TExperienceDTO,
  TSocialLinkDTO,
} from "@/application/dto";
import type { TContactFormErrors } from "@/lib/schemas/contactForm";

type TSectionNavigatorProps = {
  readonly heroProps: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    ctaLabel: string;
  };
  readonly aboutProps: { title: string; paragraphs: string[] };
  readonly skillsProps: {
    title: string;
    subtitle: string;
    skills: TSkillDTO[];
    categoryLabels: Record<string, string>;
  };
  readonly projectsProps: {
    title: string;
    subtitle: string;
    projects: TProjectDTO[];
    projectTranslations: Record<string, { title: string; description: string }>;
    sourceLabel: string;
    demoLabel: string;
  };
  readonly experienceProps: {
    title: string;
    subtitle: string;
    experiences: TExperienceDTO[];
    experienceTranslations: Record<
      string,
      { company: string; role: string; description: string }
    >;
    presentLabel: string;
  };
  readonly contactProps: {
    title: string;
    subtitle: string;
    orConnect: string;
    socialLinks: TSocialLinkDTO[];
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    modalTitle: string;
    successMessage: string;
    errorMessage: string;
    downloadCv: string;
    validation: TContactFormErrors;
  };
  readonly footerProps: { builtWith: string; rights: string };
  readonly sectionLabels: Record<ESectionId, string>;
};

export function SectionNavigator({
  heroProps,
  aboutProps,
  skillsProps,
  projectsProps,
  experienceProps,
  contactProps,
  footerProps,
  sectionLabels,
}: TSectionNavigatorProps) {
  const { activeSection, sectionStates, navigateTo } = useSectionNavigation();

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Top-right controls */}
      <div className="fixed top-4 right-3 md:top-6 md:right-8 z-50 flex items-center gap-1">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      {/* Right side section indicator */}
      <SectionIndicator
        activeSection={activeSection}
        labels={sectionLabels}
        onNavigate={navigateTo}
      />

      {/* Sections */}
      <main className="h-full">
        <SectionWrapper state={sectionStates[ESectionId.Hero]}>
          <HeroSection {...heroProps} onNavigate={navigateTo} />
        </SectionWrapper>

        <SectionWrapper state={sectionStates[ESectionId.About]}>
          <AboutSection {...aboutProps} />
        </SectionWrapper>

        <SectionWrapper state={sectionStates[ESectionId.Skills]}>
          <SkillsSection {...skillsProps} />
        </SectionWrapper>

        <SectionWrapper state={sectionStates[ESectionId.Projects]}>
          <ProjectsSection {...projectsProps} />
        </SectionWrapper>

        <SectionWrapper state={sectionStates[ESectionId.Experience]}>
          <ExperienceSection {...experienceProps} />
        </SectionWrapper>

        <SectionWrapper state={sectionStates[ESectionId.Contact]}>
          <ContactSection {...contactProps} />
        </SectionWrapper>
      </main>

      {/* Footer only on contact section */}
      {activeSection === ESectionId.Contact && (
        <div className="fixed bottom-0 left-0 right-0 z-40">
          <Footer {...footerProps} />
        </div>
      )}
    </div>
  );
}
