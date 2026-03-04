import type { ReactNode } from "react";

type TRootLayoutProps = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: TRootLayoutProps) {
  return children;
}
