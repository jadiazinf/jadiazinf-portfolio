"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

type TProvidersProps = {
  readonly children: React.ReactNode;
};

export function Providers({ children }: TProvidersProps) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
}
