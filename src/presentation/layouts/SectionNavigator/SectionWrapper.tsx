"use client";

import { cn } from "@/lib/cn";

type TSectionState = "active" | "entering" | "exiting" | "inactive";

type TSectionWrapperProps = {
  readonly state: TSectionState;
  readonly children: React.ReactNode;
};

const STATE_STYLES: Record<TSectionState, string> = {
  active: "opacity-100",
  entering: "animate-fade-in",
  exiting: "animate-fade-out",
  inactive: "hidden",
};

export function SectionWrapper({ state, children }: TSectionWrapperProps) {
  if (state === "inactive") return null;

  return (
    <div
      data-section-wrapper
      className={cn("w-full h-screen overflow-y-auto", STATE_STYLES[state])}
    >
      {children}
    </div>
  );
}
