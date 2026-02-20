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
      <section className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-16 sm:py-20 md:py-24 lg:py-[7rem]">
        <div className="section-container text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] sm:text-[13px]">
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

      {/* Services grid – same card style as Business Divisions */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 sm:py-20 md:py-24 lg:py-[7rem]">
        <div className="section-container text-center">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {SERVICE_KEYS.map(({ slug, titleKey, descKey }, i) => (
              <div
                key={slug}
                className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 text-center transition hover:border-[var(--green-muted)] sm:p-6 lg:p-7"
              >
                <span className="text-[13px] font-semibold tracking-wide text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
                  {t(titleKey)}
                </h2>
                <p className="mx-auto mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)] sm:mt-3 max-w-[65ch]">
                  {t(descKey)}
                </p>
                <Link
                  href={`/divisions/${slug}`}
                  className="mt-4 inline-flex items-center justify-center text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] sm:mt-5"
                >
                  {t("services.learnMore")}
                  <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-[var(--border)] my-0" />

      {/* CTA strip – same button style as Hero / Contact */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-16 sm:py-20 md:py-24 lg:py-[7rem]">
        <div className="section-container text-center">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <p className="mx-auto max-w-[65ch] text-base leading-relaxed text-[var(--text-secondary)] sm:mx-0">
              {t("services.ctaText")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)]"
              >
                {t("services.ctaPrimary")}
              </Link>
              <Link
                href="/#divisions"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--green-muted)] hover:bg-[var(--bg-card)]"
              >
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
