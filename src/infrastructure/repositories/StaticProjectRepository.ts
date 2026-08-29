import type { IProject } from "@/domain/entities";
import type { IProjectRepository } from "@/domain/ports";

const PROJECTS: IProject[] = [
  {
    id: "la-torre",
    titleKey: "projectData.laTorre.title",
    descriptionKey: "projectData.laTorre.description",
    technologies: [
      "TypeScript",
      "Next.js 15",
      "Hono",
      "Bun",
      "PostgreSQL",
      "Drizzle ORM",
      "Turborepo",
      "pg-boss",
    ],
    demoUrl: "https://latorreapp.com",
  },
  {
    id: "artitek-payments",
    titleKey: "projectData.artitekPayments.title",
    descriptionKey: "projectData.artitekPayments.description",
    technologies: [
      "Go",
      "Fiber",
      "PostgreSQL",
      "mTLS",
      "Docker",
      "SvelteKit",
    ],
    demoUrl: "https://artitekpayments.com",
  },
  {
    id: "artitek-extraction",
    titleKey: "projectData.artitekExtraction.title",
    descriptionKey: "projectData.artitekExtraction.description",
    technologies: ["Go", "PostgreSQL", "LLM", "Docker"],
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
    demoUrl: "https://kompii.com",
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
    demoUrl: "https://eddu.app",
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
