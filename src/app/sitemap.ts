import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/constants";

const BASE_URL = "https://jesusdiaz.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
}
