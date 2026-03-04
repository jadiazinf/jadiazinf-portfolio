import { Text } from "@/presentation/atoms/Text";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Text variant="h1">404</Text>
      <Text variant="body" className="text-default-500">
        Page not found
      </Text>
    </div>
  );
}
