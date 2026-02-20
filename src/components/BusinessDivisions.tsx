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
    <section id="divisions" className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-16 sm:py-20 md:py-24 lg:py-[7rem]">
      <div className="section-container text-center">
        <header className="section-header">
          <h2 className="section-title">{t("divisions.title")}</h2>
          <p className="section-lead">{t("divisions.subtitle")}</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {DIVISION_KEYS.map(({ slug, titleKey, descKey }) => (
            <div
              key={slug}
              className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 text-center transition hover:border-[var(--green-muted)] sm:p-6 lg:p-7"
            >
              <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
                {t(titleKey)}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)] sm:mt-3">
                {t(descKey)}
              </p>
              <Link
                href={`/divisions/${slug}`}
                className="mt-4 inline-flex items-center justify-center text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] sm:mt-5"
              >
                {t("divisions.learnMore")}
                <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
