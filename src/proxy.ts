import createMiddleware from "next-intl/middleware";
import { routing } from "@/infrastructure/i18n/config";

export const proxy = createMiddleware(routing);

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
