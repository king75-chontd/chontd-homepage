import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in section-kicker">
            {t("kicker")}
          </p>
          <h1 className="animate-fade-in text-[clamp(2.125rem,3.2vw,3.375rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)]">
            {t("headline")}
          </h1>
          <p className="animate-fade-in animate-fade-in-delay-1 mx-auto mt-6 max-w-[75ch] text-base leading-[1.65] text-[var(--text-secondary)] sm:mt-7 sm:text-[1.0625rem] sm:leading-[1.7]">
            {t("subheadline")}
          </p>
          <div className="animate-fade-in animate-fade-in-delay-2 mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4">
            <Link
              href="#contact"
              className="btn-primary px-6 py-3 text-base sm:px-8 sm:py-3.5"
            >
              {t("ctaPrimary")} <span className="ml-1.5">→</span>
            </Link>
            <Link
              href="#divisions"
              className="btn-secondary"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
