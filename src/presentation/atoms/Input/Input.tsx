"use client";

import { Input as HeroInput } from "@heroui/react";
import type { InputProps as HeroInputProps } from "@heroui/react";
import { cn } from "@/lib/cn";

type TInputProps = Pick<
  HeroInputProps,
  | "type"
  | "label"
  | "placeholder"
  | "isRequired"
  | "variant"
  | "size"
  | "value"
  | "name"
  | "isInvalid"
  | "errorMessage"
> & {
  readonly className?: string;
  readonly onChange?: (value: string) => void;
};

export function Input({ className, onChange, ...props }: TInputProps) {
  return (
    <HeroInput className={cn(className)} onValueChange={onChange} {...props} />
  );
}
