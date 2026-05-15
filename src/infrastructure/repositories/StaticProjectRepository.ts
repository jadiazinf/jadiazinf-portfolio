import type { IProject } from "@/domain/entities";
import type { IProjectRepository } from "@/domain/ports";

const PROJECTS: IProject[] = [
  {
    id: "diaz-tech-consulting",
    titleKey: "projectData.diazTechConsulting.title",
    descriptionKey: "projectData.diazTechConsulting.description",
    technologies: [],
  },
  {
    id: "la-torre",
    titleKey: "projectData.laTorre.title",
    descriptionKey: "projectData.laTorre.description",
    technologies: [
      "Next.js",
      "Hono",
      "TypeScript",
      "PostgreSQL",
      "Bun",
      "Turborepo",
      "Drizzle ORM",
      "Zustand",
      "Firebase",
      "Tailwind CSS",
    ],
    sourceUrl: "https://github.com/jadiazinf/condominio-platform",
    demoUrl: "https://condominio-platform-web.vercel.app/",
  },
  {
    id: "kompii",
    titleKey: "projectData.kompii.title",
    descriptionKey: "projectData.kompii.description",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "ShadCN UI",
      "Expo",
      "Turborepo",
    ],
  },
  {
    id: "carshop",
    titleKey: "projectData.carshop.title",
    descriptionKey: "projectData.carshop.description",
    technologies: ["Next.js", "Ruby on Rails", "PostgreSQL", "TypeScript"],
  },
  {
    id: "eddu",
    titleKey: "projectData.eddu.title",
    descriptionKey: "projectData.eddu.description",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Google Cloud Functions",
      "PostgreSQL",
    ],
  },
  {
    id: "ministerios-id",
    titleKey: "projectData.ministeriosId.title",
    descriptionKey: "projectData.ministeriosId.description",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "React Hook Form",
      "Zod",
      "Resend",
    ],
    demoUrl: "https://www.ministeriosid.com",
  },
  {
    id: "portfolio",
    titleKey: "projectData.portfolio.title",
    descriptionKey: "projectData.portfolio.description",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "HeroUI", "Resend"],
    sourceUrl: "https://github.com/jadiazinf/portfolio",
  },
];

export const staticProjectRepository: IProjectRepository = {
  getAll: () => PROJECTS,
};
