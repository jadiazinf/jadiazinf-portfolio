"use client";

import { Button as HeroButton } from "@heroui/react";
import type { ButtonProps as HeroButtonProps } from "@heroui/react";
import { cn } from "@/lib/cn";

type TButtonProps = Pick<
  HeroButtonProps,
  "variant" | "color" | "size" | "isDisabled" | "startContent" | "endContent"
> & {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly onPress?: () => void;
};

export function Button({ className, ...props }: TButtonProps) {
  return <HeroButton className={cn(className)} {...props} />;
}
