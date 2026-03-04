import type { ISkill } from "@/domain/entities";
import { ESkillCategory } from "@/domain/entities";
import type { ISkillRepository } from "@/domain/ports";

const SKILLS: ISkill[] = [
  { name: "TypeScript", category: ESkillCategory.Frontend },
  { name: "React", category: ESkillCategory.Frontend },
  { name: "Next.js", category: ESkillCategory.Frontend },
  { name: "Tailwind CSS", category: ESkillCategory.Frontend },
  { name: "HTML/CSS", category: ESkillCategory.Frontend },
  { name: "Node.js", category: ESkillCategory.Backend },
  { name: "Python", category: ESkillCategory.Backend },
  { name: "Go", category: ESkillCategory.Backend },
  { name: "REST APIs", category: ESkillCategory.Backend },
  { name: "GraphQL", category: ESkillCategory.Backend },
  { name: "PostgreSQL", category: ESkillCategory.Database },
  { name: "MongoDB", category: ESkillCategory.Database },
  { name: "Redis", category: ESkillCategory.Database },
  { name: "Docker", category: ESkillCategory.DevOps },
  { name: "Kubernetes", category: ESkillCategory.DevOps },
  { name: "AWS", category: ESkillCategory.DevOps },
  { name: "CI/CD", category: ESkillCategory.DevOps },
  { name: "Git", category: ESkillCategory.Tools },
  { name: "Linux", category: ESkillCategory.Tools },
  { name: "Figma", category: ESkillCategory.Tools },
];

export const staticSkillRepository: ISkillRepository = {
  getAll: () => SKILLS,
};
