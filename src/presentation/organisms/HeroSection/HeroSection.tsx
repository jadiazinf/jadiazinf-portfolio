import { Text } from "@/presentation/atoms/Text";
import { ESectionId } from "@/lib/constants";

type THeroSectionProps = {
  readonly greeting: string;
  readonly name: string;
  readonly role: string;
  readonly tagline: string;
  readonly ctaLabel: string;
  readonly onNavigate: (sectionId: ESectionId) => void;
};

export function HeroSection({
  greeting,
  name,
  role,
  tagline,
  ctaLabel,
  onNavigate,
}: THeroSectionProps) {
  return (
    <section className="relative flex items-center min-h-screen px-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute top-20 right-28 opacity-30 pointer-events-none hidden lg:block">
        <DotGrid rows={6} cols={6} />
      </div>

      {/* Corner lines */}
      <div className="absolute bottom-28 right-36 pointer-events-none hidden md:block opacity-20">
        <div className="w-28 h-px bg-foreground" />
        <div className="w-px h-28 bg-foreground -mt-7 ml-28" />
      </div>

      {/* Floating rings */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-primary/15 rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute top-[28%] right-[23%] w-24 h-24 border border-primary/10 rounded-full pointer-events-none hidden lg:block" />

      {/* Main content */}
      <div className="relative z-10 max-w-3xl flex flex-col gap-5">
        <Text variant="overline" className="text-primary">{greeting}</Text>

        <Text variant="h1">
          <span className="bg-linear-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            {name}
          </span>
        </Text>

        <div className="flex items-center gap-4 mt-2">
          <div className="w-12 h-0.5 bg-primary" />
          <Text variant="h3" className="text-default-500 font-light">
            {role}
          </Text>
        </div>

        <Text variant="body" className="text-default-400 max-w-lg mt-2">
          {tagline}
        </Text>

        <button
          type="button"
          onClick={() => onNavigate(ESectionId.Projects)}
          className="group flex items-center gap-3 mt-6 text-sm font-medium text-primary hover:text-primary-400 transition-colors"
        >
          <span className="w-8 h-px bg-primary group-hover:w-12 transition-all duration-300" />
          {ctaLabel}
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        aria-label="Scroll down"
        onClick={() => onNavigate(ESectionId.About)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-default-400 hover:text-primary transition-colors">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}

function DotGrid({ rows, cols }: { readonly rows: number; readonly cols: number }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex gap-3">
          {Array.from({ length: cols }).map((_, c) => (
            <div key={c} className="w-1 h-1 rounded-full bg-foreground" />
          ))}
        </div>
      ))}
    </div>
  );
}
