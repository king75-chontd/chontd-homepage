import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const DIVISION_KEYS = [
  { slug: "medical-practice", titleKey: "divisions.medicalPractice.title", descKey: "divisions.medicalPractice.description" },
  { slug: "global-patient-network", titleKey: "divisions.globalPatient.title", descKey: "divisions.globalPatient.description" },
  { slug: "medical-device-oem", titleKey: "divisions.medicalDevice.title", descKey: "divisions.medicalDevice.description" },
  { slug: "digital-healthcare", titleKey: "divisions.digitalHealth.title", descKey: "divisions.digitalHealth.description" },
] as const;

export default async function BusinessDivisions() {
  const t = await getTranslations();

  return (
    <section id="divisions" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
      <div className="section-container text-center">
        <header className="section-header">
          <h2 className="section-title">{t("divisions.title")}</h2>
          <p className="section-lead">{t("divisions.subtitle")}</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {DIVISION_KEYS.map(({ slug, titleKey, descKey }) => (
            <div
              key={slug}
              className="card group flex flex-col text-center"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                {t(titleKey)}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-[1.7]">
                {t(descKey)}
              </p>
              <Link
                href={`/divisions/${slug}`}
                className="mt-5 inline-flex items-center justify-center text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
              >
                {t("divisions.learnMore")}
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
