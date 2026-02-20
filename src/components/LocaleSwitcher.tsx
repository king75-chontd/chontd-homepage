"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("locale");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "en" | "ko") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg-card)] p-0.5">
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all md:px-3 md:py-1.5 md:text-sm ${
          locale === "en"
            ? "bg-[var(--text-primary)] text-white shadow-sm"
            : "text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        }`}
        aria-label="English"
      >
        {t("en")}
      </button>
      <button
        type="button"
        onClick={() => switchLocale("ko")}
        className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all md:px-3 md:py-1.5 md:text-sm ${
          locale === "ko"
            ? "bg-[var(--text-primary)] text-white shadow-sm"
            : "text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        }`}
        aria-label="한국어"
      >
        {t("ko")}
      </button>
    </div>
  );
}
