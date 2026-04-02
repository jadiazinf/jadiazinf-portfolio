import type { MetadataRoute } from "next";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/constants";

const BASE_URL = "https://jadiazinf.com";

function localeUrl(locale: string): string {
  return locale === DEFAULT_LOCALE ? BASE_URL : `${BASE_URL}/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: localeUrl(locale),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l)])),
    },
  }));
}
