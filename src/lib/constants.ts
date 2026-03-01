// Active locales: EN, KO, JA (used by next-intl in i18n/routing.ts)
export const LOCALES = ["en", "ko", "ja"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ko";
