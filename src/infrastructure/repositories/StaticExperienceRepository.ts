import type { IExperience } from "@/domain/entities";
import type { IExperienceRepository } from "@/domain/ports";

const EXPERIENCES: IExperience[] = [
  {
    id: "kompii",
    companyKey: "experienceData.kompii.company",
    roleKey: "experienceData.kompii.role",
    descriptionKey: "experienceData.kompii.description",
    startDate: "2025-11",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "ShadCN UI",
      "Expo",
      "Turborepo",
      "pnpm",
    ],
  },
  {
    id: "gma",
    companyKey: "experienceData.gma.company",
    roleKey: "experienceData.gma.role",
    descriptionKey: "experienceData.gma.description",
    startDate: "2024-04",
    endDate: "2025-07",
    technologies: ["Next.js", "Ruby on Rails", "PostgreSQL", "TypeScript"],
  },
  {
    id: "eddu",
    companyKey: "experienceData.eddu.company",
    roleKey: "experienceData.eddu.role",
    descriptionKey: "experienceData.eddu.description",
    startDate: "2023-08",
    endDate: "2024-09",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Google Cloud Functions",
      "PostgreSQL",
    ],
  },
];

export const staticExperienceRepository: IExperienceRepository = {
  getAll: () => EXPERIENCES,
};
