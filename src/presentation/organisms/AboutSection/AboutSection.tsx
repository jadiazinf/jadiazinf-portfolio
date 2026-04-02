import { Text } from "@/presentation/atoms/Text";
import { SectionHeader } from "@/presentation/molecules/SectionHeader";

type TAboutSectionProps = {
  readonly title: string;
  readonly paragraphs: string[];
};

export function AboutSection({ title, paragraphs }: TAboutSectionProps) {
  return (
    <section className="relative pt-24 pb-12 px-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Vertical line */}
      <div className="absolute top-0 left-[55%] w-px h-24 bg-linear-to-b from-transparent via-default-300/30 to-transparent pointer-events-none hidden md:block" />

      <div className="relative z-10 max-w-3xl flex flex-col gap-10">
        <SectionHeader number="01" title={title} />

        <div className="flex flex-col gap-6">
          {paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              variant="body"
              className="text-default-400 leading-loose"
            >
              {paragraph}
            </Text>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="flex items-center gap-3 mt-2">
          <div className="w-2 h-2 rounded-full bg-primary/30" />
          <div className="w-20 h-px bg-default-200/40" />
        </div>
      </div>
    </section>
  );
}
