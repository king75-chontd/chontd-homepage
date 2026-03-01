"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALE_OPTIONS = [
  { code: "en" as const, label: "English" },
  { code: "ko" as const, label: "한국어" },
  { code: "ja" as const, label: "日本語" },
];

export default function LocaleSwitcher() {
  const t = useTranslations("locale");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "en" | "ko" | "ja") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg-card)] p-0.5">
      {LOCALE_OPTIONS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all md:px-3 md:py-1.5 md:text-sm ${
            locale === code
              ? "bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm"
              : "text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          }`}
          aria-label={label}
        >
          {t(code)}
        </button>
      ))}
    </div>
  );
}
