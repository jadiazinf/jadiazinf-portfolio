export enum ESkillCategory {
  Frontend = "frontend",
  Backend = "backend",
  Database = "database",
  DevOps = "devops",
  Tools = "tools",
}

export interface ISkill {
  readonly name: string;
  readonly category: ESkillCategory;
  readonly icon?: string;
}
