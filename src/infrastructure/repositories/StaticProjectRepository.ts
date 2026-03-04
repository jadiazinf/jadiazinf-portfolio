import type { IProject } from "@/domain/entities";
import type { IProjectRepository } from "@/domain/ports";

const PROJECTS: IProject[] = [
  {
    id: "portfolio",
    titleKey: "projectData.portfolio.title",
    descriptionKey: "projectData.portfolio.description",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "HeroUI"],
    sourceUrl: "https://github.com/jadiazinf/portfolio",
  },
  {
    id: "ecommerce",
    titleKey: "projectData.ecommerce.title",
    descriptionKey: "projectData.ecommerce.description",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    sourceUrl: "https://github.com/jadiazinf",
  },
  {
    id: "api-gateway",
    titleKey: "projectData.apiGateway.title",
    descriptionKey: "projectData.apiGateway.description",
    technologies: ["Go", "gRPC", "Redis", "Kubernetes"],
    sourceUrl: "https://github.com/jadiazinf",
  },
];

export const staticProjectRepository: IProjectRepository = {
  getAll: () => PROJECTS,
};
