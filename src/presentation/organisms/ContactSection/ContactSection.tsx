import { Text } from "@/presentation/atoms/Text";
import { SocialIcon } from "@/presentation/molecules/SocialIcon";
import type { TSocialLinkDTO } from "@/application/dto";

type TContactSectionProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly orConnect: string;
  readonly socialLinks: TSocialLinkDTO[];
};

export function ContactSection({
  title,
  subtitle,
  orConnect,
  socialLinks,
}: TContactSectionProps) {
  return (
    <section className="relative pt-24 pb-12 px-12 md:px-20 lg:px-32 overflow-hidden">
      {/* Large rings */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 border border-primary/8 rounded-full pointer-events-none" />
      <div className="absolute -bottom-28 -right-28 w-72 h-72 border border-primary/12 rounded-full pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl flex flex-col gap-10">
        <div className="flex items-center gap-6">
          <Text variant="overline" className="text-primary">05</Text>
          <div className="w-12 h-px bg-primary/40" />
          <Text variant="h2">{title}</Text>
        </div>

        <div className="flex flex-col gap-6">
          <Text variant="body" className="text-default-400">
            {subtitle}
          </Text>

          <Text variant="caption" className="uppercase tracking-[0.2em] text-default-500 text-xs">
            {orConnect}
          </Text>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.platform}
                platform={link.platform}
                url={link.url}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
