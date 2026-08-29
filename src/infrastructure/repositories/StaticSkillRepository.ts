import type { ISkill } from "@/domain/entities";
import { ESkillCategory } from "@/domain/entities";
import type { ISkillRepository } from "@/domain/ports";

const SKILLS: ISkill[] = [
  { name: "TypeScript", category: ESkillCategory.Languages },
  { name: "Go", category: ESkillCategory.Languages },
  { name: "JavaScript", category: ESkillCategory.Languages },
  { name: "SQL", category: ESkillCategory.Languages },

  { name: "React", category: ESkillCategory.Frontend },
  { name: "Next.js", category: ESkillCategory.Frontend },
  { name: "Tailwind CSS", category: ESkillCategory.Frontend },
  { name: "React Query", category: ESkillCategory.Frontend },
  { name: "ShadCN UI", category: ESkillCategory.Frontend },
  { name: "Expo", category: ESkillCategory.Frontend },

  { name: "Node.js", category: ESkillCategory.Backend },
  { name: "Bun", category: ESkillCategory.Backend },
  { name: "Hono", category: ESkillCategory.Backend },
  { name: "Fiber", category: ESkillCategory.Backend },
  { name: "Ruby on Rails", category: ESkillCategory.Backend },
  { name: "tRPC", category: ESkillCategory.Backend },
  { name: "REST APIs", category: ESkillCategory.Backend },
  { name: "microservices", nameKey: "microservices", category: ESkillCategory.Backend },

  { name: "PostgreSQL", category: ESkillCategory.Database },
  { name: "Drizzle ORM", category: ESkillCategory.Database },
  { name: "pg-boss", category: ESkillCategory.Database },
  { name: "schemaDesign", nameKey: "schemaDesign", category: ESkillCategory.Database },

  { name: "Docker", category: ESkillCategory.Infrastructure },
  { name: "CI/CD", category: ESkillCategory.Infrastructure },
  { name: "GitHub Actions", category: ESkillCategory.Infrastructure },
  { name: "Turborepo", category: ESkillCategory.Infrastructure },
  { name: "mTLS", category: ESkillCategory.Infrastructure },
  { name: "OAuth", category: ESkillCategory.Infrastructure },
  { name: "Firebase Auth", category: ESkillCategory.Infrastructure },

  { name: "llmIntegration", nameKey: "llmIntegration", category: ESkillCategory.AI },
  { name: "modelEvaluation", nameKey: "modelEvaluation", category: ESkillCategory.AI },
  { name: "agentAssisted", nameKey: "agentAssisted", category: ESkillCategory.AI },

  { name: "TDD", category: ESkillCategory.Practices },
  { name: "testing", nameKey: "testing", category: ESkillCategory.Practices },
  { name: "hexagonal", nameKey: "hexagonal", category: ESkillCategory.Practices },
  { name: "monorepos", nameKey: "monorepos", category: ESkillCategory.Practices },
  { name: "Git", category: ESkillCategory.Practices },
  { name: "agile", nameKey: "agile", category: ESkillCategory.Practices },
];

export const staticSkillRepository: ISkillRepository = {
  getAll: () => SKILLS,
};
