"use client";

import { useTranslations } from "next-intl";

const FAQ_KEYS = ["1", "2", "3", "4", "5", "6"] as const;

export default function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
      <div className="section-container">
        <header className="section-header text-center">
          <h2 className="section-title">{t("title")}</h2>
        </header>

        <div className="mx-auto max-w-3xl">
          {FAQ_KEYS.map((key) => (
            <details key={key} className="faq-item group">
              <summary className="flex cursor-pointer items-center justify-between py-5 text-[var(--text-primary)] sm:py-6">
                <span className="pr-8 text-[15px] font-medium sm:text-base">
                  {t(`q${key}`)}
                </span>
                <span className="shrink-0 text-xl text-[var(--text-muted)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pb-5 pr-8 text-[15px] leading-[1.7] text-[var(--text-secondary)] sm:pb-6 sm:text-base">
                {t(`a${key}`)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
