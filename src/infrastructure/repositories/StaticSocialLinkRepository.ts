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
    url: "https://linkedin.com/in/jadiazinf",
    label: "LinkedIn",
  },
{
    platform: ESocialPlatform.Email,
    url: "mailto:jadiazinf@gmail.com",
    label: "Email",
  },
];

export const staticSocialLinkRepository: ISocialLinkRepository = {
  getAll: () => SOCIAL_LINKS,
};
