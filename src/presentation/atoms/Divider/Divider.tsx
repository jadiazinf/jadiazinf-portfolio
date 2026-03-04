"use client";

import { Divider as HeroDivider } from "@heroui/react";
import { cn } from "@/lib/cn";

type TDividerProps = {
  readonly className?: string;
};

export function Divider({ className }: TDividerProps) {
  return <HeroDivider className={cn(className)} />;
}
