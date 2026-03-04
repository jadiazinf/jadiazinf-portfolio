import { Text } from "@/presentation/atoms/Text";

type TFooterProps = {
  readonly builtWith: string;
  readonly rights: string;
};

export function Footer({ builtWith, rights }: TFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 px-12 md:px-20 lg:px-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-t border-default-100 pt-4">
        <Text variant="caption" className="text-default-400 text-xs">{builtWith}</Text>
        <Text variant="caption" className="text-default-400 text-xs">
          &copy; {currentYear} Jesús Díaz. {rights}.
        </Text>
      </div>
    </footer>
  );
}
