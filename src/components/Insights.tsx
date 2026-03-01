import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const CATEGORIES = [
  { slug: "industry-insights", titleKey: "insights.industry", descKey: "insights.industryDesc" },
  { slug: "press-releases", titleKey: "insights.press", descKey: "insights.pressDesc" },
  { slug: "global-healthcare-trends", titleKey: "insights.trends", descKey: "insights.trendsDesc" },
] as const;

export default async function Insights() {
  const t = await getTranslations();

  return (
    <section id="insights" className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
      <div className="section-container">
        <header className="section-header text-center">
          <h2 className="section-title">{t("insights.title")}</h2>
          <p className="section-lead">{t("insights.subtitle")}</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {CATEGORIES.map(({ slug, titleKey, descKey }) => (
            <Link
              key={slug}
              href={`/insights?category=${slug}`}
              className="card group flex flex-col text-left"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                {t(titleKey)}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-[var(--text-secondary)] sm:text-base sm:leading-[1.7]">
                {t(descKey)}
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-medium text-[var(--accent)] transition-colors group-hover:text-[var(--accent-hover)]">
                Read more
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[65ch] text-center text-sm text-[var(--text-muted)] sm:mt-12">
          {t("insights.comingSoon")}
        </p>
      </div>
    </section>
  );
}
