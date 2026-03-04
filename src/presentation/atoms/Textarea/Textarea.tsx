"use client";

import { Textarea as HeroTextarea } from "@heroui/react";
import type { TextAreaProps as HeroTextareaProps } from "@heroui/react";
import { cn } from "@/lib/cn";

type TTextareaProps = Pick<
  HeroTextareaProps,
  "label" | "placeholder" | "isRequired" | "variant" | "size" | "value" | "name" | "minRows"
> & {
  readonly className?: string;
  readonly onChange?: (value: string) => void;
};

export function Textarea({ className, onChange, ...props }: TTextareaProps) {
  return (
    <HeroTextarea
      className={cn(className)}
      onValueChange={onChange}
      {...props}
    />
  );
}
