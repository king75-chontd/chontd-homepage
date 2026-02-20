import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const SERVICE_KEYS = [
  { slug: "medical-practice", titleKey: "divisions.medicalPractice.title", descKey: "divisions.medicalPractice.description" },
  { slug: "global-patient-network", titleKey: "divisions.globalPatient.title", descKey: "divisions.globalPatient.description" },
  { slug: "medical-device-oem", titleKey: "divisions.medicalDevice.title", descKey: "divisions.medicalDevice.description" },
  { slug: "digital-healthcare", titleKey: "divisions.digitalHealth.title", descKey: "divisions.digitalHealth.description" },
] as const;

type Props = { params: Promise<{ locale: string }> };

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-16 sm:pt-20">
      {/* Hero */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
        <div className="section-container text-center">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--text-muted)] sm:text-[13px]">
            {t("services.kicker")}
          </p>
          <h1 className="section-title mt-2 sm:mt-3">
            {t("services.title")}
          </h1>
          <p className="section-lead mx-auto mt-4 max-w-[75ch] sm:mt-5">
            {t("services.lead")}
          </p>
        </div>
      </section>

      <hr className="border-0 h-px bg-[var(--border)] my-0" />

      {/* Services grid */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
        <div className="section-container text-center">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            {SERVICE_KEYS.map(({ slug, titleKey, descKey }, i) => (
              <div
                key={slug}
                className="card group flex flex-col text-center"
              >
                <span className="text-[13px] font-semibold tracking-wide text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                  {t(titleKey)}
                </h2>
                <p className="mx-auto mt-3 flex-1 text-[15px] leading-[1.65] text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-[1.7]">
                  {t(descKey)}
                </p>
                <Link
                  href={`/divisions/${slug}`}
                  className="mt-5 inline-flex items-center justify-center text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                >
                  {t("services.learnMore")}
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[var(--border)] my-0" />

      {/* CTA strip */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
        <div className="section-container text-center">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <p className="max-w-[65ch] text-base leading-[1.65] text-[var(--text-secondary)] sm:leading-[1.7]">
              {t("services.ctaText")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/#contact" className="btn-primary">
                {t("services.ctaPrimary")}
              </Link>
              <Link href="/#divisions" className="btn-secondary">
                {t("services.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }];
}
