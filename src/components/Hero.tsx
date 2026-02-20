import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-in text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            {t("headline")}
          </h1>
          <p className="animate-fade-in animate-fade-in-delay-1 mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:mt-7 sm:text-lg md:text-xl md:max-w-2xl">
            {t("subheadline")}
          </p>
          <div className="animate-fade-in animate-fade-in-delay-2 mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)] sm:px-7 sm:py-3.5"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="#divisions"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--green-muted)] hover:bg-[var(--bg-card)] sm:px-7 sm:py-3.5"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
