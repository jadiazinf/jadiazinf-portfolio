import type { IExperience } from "@/domain/entities";
import type { IExperienceRepository } from "@/domain/ports";

const EXPERIENCES: IExperience[] = [
  {
    id: "senior-dev",
    companyKey: "experienceData.seniorDev.company",
    roleKey: "experienceData.seniorDev.role",
    descriptionKey: "experienceData.seniorDev.description",
    startDate: "2022-01",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    id: "fullstack-dev",
    companyKey: "experienceData.fullstackDev.company",
    roleKey: "experienceData.fullstackDev.role",
    descriptionKey: "experienceData.fullstackDev.description",
    startDate: "2020-03",
    endDate: "2022-01",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    id: "junior-dev",
    companyKey: "experienceData.juniorDev.company",
    roleKey: "experienceData.juniorDev.role",
    descriptionKey: "experienceData.juniorDev.description",
    startDate: "2018-06",
    endDate: "2020-03",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];

export const staticExperienceRepository: IExperienceRepository = {
  getAll: () => EXPERIENCES,
};
