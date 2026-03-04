"use client";

import { cn } from "@/lib/cn";
import { SECTION_ORDER, type ESectionId } from "@/lib/constants";

type TSectionIndicatorProps = {
  readonly activeSection: ESectionId;
  readonly labels: Record<ESectionId, string>;
  readonly onNavigate: (sectionId: ESectionId) => void;
};

export function SectionIndicator({ activeSection, labels, onNavigate }: TSectionIndicatorProps) {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-5">
      {SECTION_ORDER.map((sectionId) => {
        const isActive = activeSection === sectionId;

        return (
          <button
            key={sectionId}
            type="button"
            onClick={() => onNavigate(sectionId)}
            className="group flex items-center gap-3"
            aria-label={labels[sectionId]}
          >
            <span
              className={cn(
                "text-[11px] font-medium tracking-wider uppercase transition-all duration-300 opacity-0 translate-x-2",
                "group-hover:opacity-100 group-hover:translate-x-0",
                isActive && "opacity-100 translate-x-0 text-primary"
              )}
            >
              {labels[sectionId]}
            </span>

            <span
              className={cn(
                "block transition-all duration-300",
                isActive
                  ? "w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                  : "w-1.5 h-1.5 rounded-full bg-default-300 group-hover:bg-default-500"
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
