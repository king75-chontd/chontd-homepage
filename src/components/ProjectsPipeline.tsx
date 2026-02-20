import { getTranslations } from "next-intl/server";

const PIPELINE_KEYS = [
  { titleKey: "pipeline.patent.title", descKey: "pipeline.patent.description" },
  { titleKey: "pipeline.rnd.title", descKey: "pipeline.rnd.description" },
  { titleKey: "pipeline.partnerships.title", descKey: "pipeline.partnerships.description" },
  { titleKey: "pipeline.expansion.title", descKey: "pipeline.expansion.description" },
] as const;

export default async function ProjectsPipeline() {
  const t = await getTranslations();

  return (
    <section id="pipeline" className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-16 sm:py-20 md:py-24 lg:py-[7rem]">
      <div className="section-container text-center">
        <header className="section-header">
          <h2 className="section-title">{t("pipeline.title")}</h2>
          <p className="section-lead">{t("pipeline.subtitle")}</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {PIPELINE_KEYS.map(({ titleKey, descKey }) => (
            <div
              key={titleKey}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 text-center sm:p-6 lg:p-7"
            >
              <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
                {t(titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)] sm:mt-3">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
