"use client";

import { Chip } from "@heroui/react";
import type { ChipProps } from "@heroui/react";
import { cn } from "@/lib/cn";

type TBadgeProps = Pick<ChipProps, "variant" | "color" | "size"> & {
  readonly children: React.ReactNode;
  readonly className?: string;
};

export function Badge({ className, ...props }: TBadgeProps) {
  return <Chip className={cn(className)} {...props} />;
}
