import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function InsightsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="min-h-screen pt-24 pb-16 lg:pb-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <Link
            href="/#insights"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            ← {t("insightsPage.back")}
          </Link>
          <h1 className="mt-6 section-title sm:mt-8">
            {t("insights.title")}
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed sm:mt-5">
            {t("insightsPage.intro")}
          </p>
        </div>
      </div>
    </div>
  );
}
