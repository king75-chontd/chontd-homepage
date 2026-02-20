import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ko"],
  defaultLocale: "ko",
  localePrefix: "always",
  // Always land on Korean at "/" — ignore Accept-Language and cookie
  localeDetection: false,
});
