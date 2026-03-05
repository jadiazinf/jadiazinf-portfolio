export enum ESocialPlatform {
  GitHub = "github",
  LinkedIn = "linkedin",
  Email = "email",
}

export interface ISocialLink {
  readonly platform: ESocialPlatform;
  readonly url: string;
  readonly label: string;
}
