export enum ESocialPlatform {
  GitHub = "github",
  LinkedIn = "linkedin",
  Twitter = "twitter",
  Email = "email",
}

export interface ISocialLink {
  readonly platform: ESocialPlatform;
  readonly url: string;
  readonly label: string;
}
