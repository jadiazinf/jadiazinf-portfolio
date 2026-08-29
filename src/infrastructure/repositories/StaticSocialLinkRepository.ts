import type { ISocialLink } from "@/domain/entities";
import { ESocialPlatform } from "@/domain/entities";
import type { ISocialLinkRepository } from "@/domain/ports";

const SOCIAL_LINKS: ISocialLink[] = [
  {
    platform: ESocialPlatform.GitHub,
    url: "https://github.com/jadiazinf",
    label: "GitHub",
  },
  {
    platform: ESocialPlatform.LinkedIn,
    url: "https://www.linkedin.com/in/jadiazinf",
    label: "LinkedIn",
  },
  {
    platform: ESocialPlatform.Email,
    url: "mailto:jadiaz.inf@gmail.com",
    label: "Email",
  },
];

export const staticSocialLinkRepository: ISocialLinkRepository = {
  getAll: () => SOCIAL_LINKS,
};
