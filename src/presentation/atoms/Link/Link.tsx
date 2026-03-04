"use client";

import { Link as HeroLink } from "@heroui/react";
import type { LinkProps as HeroLinkProps } from "@heroui/react";
import { cn } from "@/lib/cn";

type TLinkProps = Pick<HeroLinkProps, "color" | "size" | "isExternal" | "underline"> & {
  readonly children: React.ReactNode;
  readonly href: string;
  readonly className?: string;
};

export function Link({ className, ...props }: TLinkProps) {
  return <HeroLink className={cn(className)} {...props} />;
}
