import { Text } from "@/presentation/atoms/Text";

type TSectionHeaderProps = {
  readonly number: string;
  readonly title: string;
};

export function SectionHeader({ number, title }: TSectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
      <div className="flex items-center gap-6">
        <Text variant="overline" className="text-primary">
          {number}
        </Text>
        <div className="w-12 h-px bg-primary/40" />
      </div>
      <Text variant="h2">{title}</Text>
    </div>
  );
}
