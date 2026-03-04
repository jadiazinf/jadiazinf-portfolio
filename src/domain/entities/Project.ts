export interface IProject {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly technologies: string[];
  readonly sourceUrl?: string;
  readonly demoUrl?: string;
  readonly imageUrl?: string;
}
