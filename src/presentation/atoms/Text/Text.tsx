import { cn } from "@/lib/cn";

type TTextVariant = "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "overline";

type TTextProps = {
  readonly variant?: TTextVariant;
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly as?: keyof React.JSX.IntrinsicElements;
};

const VARIANT_STYLES: Record<TTextVariant, string> = {
  h1: "text-6xl md:text-8xl font-bold tracking-tighter leading-none",
  h2: "text-4xl md:text-6xl font-bold tracking-tight leading-tight",
  h3: "text-2xl md:text-3xl font-semibold tracking-tight",
  h4: "text-lg md:text-xl font-semibold",
  body: "text-base md:text-lg leading-relaxed",
  caption: "text-sm text-default-400",
  overline: "text-xs uppercase tracking-[0.25em] text-default-500 font-medium",
};

const VARIANT_TAGS: Record<TTextVariant, keyof React.JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  caption: "span",
  overline: "span",
};

export function Text({ variant = "body", children, className, as }: TTextProps) {
  const Tag = as ?? VARIANT_TAGS[variant];
  return <Tag className={cn(VARIANT_STYLES[variant], className)}>{children}</Tag>;
}
