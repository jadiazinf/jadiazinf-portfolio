export enum ESkillCategory {
  Languages = "languages",
  Frontend = "frontend",
  Backend = "backend",
  Database = "database",
  Infrastructure = "infrastructure",
  AI = "ai",
  Practices = "practices",
}

export interface ISkill {
  /** Proper nouns render as-is. Descriptive skills use `nameKey` instead. */
  readonly name: string;
  /** Key under `skillData` in the message catalog, when the name must be translated. */
  readonly nameKey?: string;
  readonly category: ESkillCategory;
  readonly icon?: string;
}
