export interface IExperience {
  readonly id: string;
  readonly companyKey: string;
  readonly roleKey: string;
  readonly descriptionKey: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly technologies: string[];
}
