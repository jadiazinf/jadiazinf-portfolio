export interface IAchievement {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly date: string;
  readonly url?: string;
  readonly repoUrl?: string;
  readonly technologies?: string[];
}
