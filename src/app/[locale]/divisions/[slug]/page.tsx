import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const SLUG_KEYS: Record<string, { titleKey: string; descKey: string }> = {
  "medical-practice": { titleKey: "divisions.medicalPractice.title", descKey: "divisions.medicalPractice.description" },
  "global-patient-network": { titleKey: "divisions.globalPatient.title", descKey: "divisions.globalPatient.description" },
  "medical-device-oem": { titleKey: "divisions.medicalDevice.title", descKey: "divisions.medicalDevice.description" },
  "digital-healthcare": { titleKey: "divisions.digitalHealth.title", descKey: "divisions.digitalHealth.description" },
};

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const keys = slug ? SLUG_KEYS[slug] : null;
  const title = keys ? t(keys.titleKey) : null;
  const description = keys ? t(keys.descKey) : null;

  if (!title || !description) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-16">
        <div className="section-container py-24 text-center">
          <h1 className="section-title">
            {t("divisionPage.notFound")}
          </h1>
          <Link href="/#divisions" className="mt-6 inline-block text-[var(--accent)] hover:underline">
            {t("divisionPage.back")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-16 lg:pb-24">
      <div className="section-container text-center">
        <div className="mx-auto max-w-[75ch]">
          <Link
            href="/#divisions"
            className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            ← {t("divisionPage.back")}
          </Link>
          <h1 className="mt-6 section-title sm:mt-8">
            {title}
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] leading-[1.65] sm:mt-5 sm:leading-[1.7]">
            {description}
          </p>
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            {t("divisionPage.expandNote")}
          </p>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const locales = ["en", "ko"];
  return locales.flatMap((locale) =>
    Object.keys(SLUG_KEYS).map((slug) => ({ locale, slug }))
  );
}
