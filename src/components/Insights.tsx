import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const CATEGORIES = [
  { slug: "industry-insights", key: "insights.industry" },
  { slug: "press-releases", key: "insights.press" },
  { slug: "global-healthcare-trends", key: "insights.trends" },
] as const;

export default async function Insights() {
  const t = await getTranslations();

  return (
    <section id="insights" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
      <div className="section-container text-center">
        <header className="section-header">
          <h2 className="section-title">{t("insights.title")}</h2>
          <p className="section-lead">{t("insights.subtitle")}</p>
        </header>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {CATEGORIES.map(({ slug, key }) => (
            <Link
              key={slug}
              href={`/insights?category=${slug}`}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[rgba(11,15,20,0.18)] hover:shadow-[0_6px_20px_var(--shadow)]"
            >
              {t(key)}
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[65ch] text-sm text-[var(--text-muted)] sm:mt-12">
          {t("insights.comingSoon")}
        </p>
      </div>
    </section>
  );
}
