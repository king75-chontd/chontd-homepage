// Active locales: EN, KO (used by next-intl in i18n/routing.ts)
export const LOCALES = ["en", "ko"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ko";
