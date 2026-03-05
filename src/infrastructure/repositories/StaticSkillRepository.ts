import type { ISkill } from "@/domain/entities";
import { ESkillCategory } from "@/domain/entities";
import type { ISkillRepository } from "@/domain/ports";

const SKILLS: ISkill[] = [
  { name: "TypeScript", category: ESkillCategory.Frontend },
  { name: "React", category: ESkillCategory.Frontend },
  { name: "Next.js", category: ESkillCategory.Frontend },
  { name: "Tailwind CSS", category: ESkillCategory.Frontend },
  { name: "ShadCN UI", category: ESkillCategory.Frontend },
  { name: "HTML/CSS", category: ESkillCategory.Frontend },
  { name: "Node.js", category: ESkillCategory.Backend },
  { name: "Hono", category: ESkillCategory.Backend },
  { name: "Bun.js", category: ESkillCategory.Backend },
  { name: "Ruby on Rails", category: ESkillCategory.Backend },
  { name: "tRPC", category: ESkillCategory.Backend },
  { name: "REST APIs", category: ESkillCategory.Backend },
  { name: "Google Cloud Functions", category: ESkillCategory.Backend },
  { name: "PostgreSQL", category: ESkillCategory.Database },
  { name: "Expo", category: ESkillCategory.Tools },
  { name: "Turborepo", category: ESkillCategory.Tools },
  { name: "Git & GitHub", category: ESkillCategory.Tools },
  { name: "pnpm", category: ESkillCategory.Tools },
  { name: "Claude Code Agent", category: ESkillCategory.Tools },
  { name: "Vibe Coding", category: ESkillCategory.Tools },
];

export const staticSkillRepository: ISkillRepository = {
  getAll: () => SKILLS,
};
