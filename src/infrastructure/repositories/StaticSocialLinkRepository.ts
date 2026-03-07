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
    url: "https://www.linkedin.com/in/jesús-adolfo-díaz-centeno-66a447265",
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
