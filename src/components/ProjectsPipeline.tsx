import { getTranslations } from "next-intl/server";

const PIPELINE_STEPS = [
  { num: "01", titleKey: "pipeline.patent.title", descKey: "pipeline.patent.description" },
  { num: "02", titleKey: "pipeline.rnd.title", descKey: "pipeline.rnd.description" },
  { num: "03", titleKey: "pipeline.partnerships.title", descKey: "pipeline.partnerships.description" },
  { num: "04", titleKey: "pipeline.expansion.title", descKey: "pipeline.expansion.description" },
] as const;

export default async function ProjectsPipeline() {
  const t = await getTranslations();

  return (
    <section id="pipeline" className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
      <div className="section-container">
        <header className="section-header text-center">
          <h2 className="section-title">{t("pipeline.title")}</h2>
          <p className="section-lead">{t("pipeline.subtitle")}</p>
        </header>

        <div className="mx-auto max-w-3xl space-y-0">
          {PIPELINE_STEPS.map(({ num, titleKey, descKey }, i) => (
            <div
              key={num}
              className={`flex gap-6 sm:gap-8 py-10 sm:py-12 ${
                i < PIPELINE_STEPS.length - 1 ? "border-b border-[var(--border)]" : ""
              }`}
            >
              <div className="shrink-0">
                <span className="text-sm font-semibold tracking-[0.1em] text-[var(--accent)]">
                  STEP {num}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl">
                  {t(titleKey)}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[var(--text-secondary)] sm:mt-3 sm:text-base sm:leading-[1.7]">
                  {t(descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
