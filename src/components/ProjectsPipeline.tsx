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
    <section id="pipeline" className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
      <div className="section-container text-center">
        <header className="section-header">
          <h2 className="section-title">{t("pipeline.title")}</h2>
          <p className="section-lead">{t("pipeline.subtitle")}</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {PIPELINE_KEYS.map(({ titleKey, descKey }) => (
            <div
              key={titleKey}
              className="card text-center"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                {t(titleKey)}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-[1.7]">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
