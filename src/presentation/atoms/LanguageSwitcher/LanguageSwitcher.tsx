"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/infrastructure/i18n/navigation";
import type { TLocale } from "@/lib/constants";

export function LanguageSwitcher() {
  const locale = useLocale() as TLocale;
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale: TLocale = locale === "es" ? "en" : "es";
  const label = locale === "es" ? "EN" : "ES";

  function handleSwitch() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className="w-8 h-8 flex items-center justify-center rounded-lg font-mono text-xs text-default-400 hover:text-foreground hover:bg-content1/50 transition-colors"
    >
      {label}
    </button>
  );
}
