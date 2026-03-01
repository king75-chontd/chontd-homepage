import { getTranslations } from "next-intl/server";

const VALUE_KEYS = ["valueConnection", "valuePrecision", "valueLongTerm", "valueInnovation"] as const;

export default async function About() {
  const t = await getTranslations("about");

  return (
    <section id="about" className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-20 sm:py-24 md:py-28 lg:py-[7.5rem]">
      <div className="section-container text-center">
        <header className="section-header">
          <h2 className="section-title">{t("title")}</h2>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto max-w-[65ch] lg:max-w-none">
            <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
              {t("philosophyTitle")}
            </h3>
            <p className="mt-3 text-[var(--text-secondary)] leading-[1.65] sm:mt-4 sm:leading-[1.7]">
              {t("philosophyBody")}
            </p>
          </div>
          <div className="mx-auto max-w-[65ch] lg:max-w-none">
            <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
              {t("missionTitle")}
            </h3>
            <p className="mt-3 text-[var(--text-secondary)] leading-[1.65] sm:mt-4 sm:leading-[1.7]">
              {t("missionBody")}
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-20">
          {(["metric1", "metric2", "metric3", "metric4"] as const).map((key) => (
            <div key={key} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-[var(--accent)] sm:text-4xl">
                {t(`${key}Value`)}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {t(`${key}Label`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            {t("valuesTitle")}
          </h3>
          <ul className="mx-auto mt-4 grid max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-6 lg:grid-cols-4">
            {VALUE_KEYS.map((key) => (
              <li
                key={key}
                className="card text-center"
              >
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {t(key)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-[75ch] card text-center sm:mt-20">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            {t("founderTitle")}
          </h3>
          <p className="mt-4 text-[var(--text-secondary)] leading-[1.65] sm:mt-5 sm:leading-[1.7]">
            {t("founderBody")}
          </p>
        </div>
      </div>
    </section>
  );
}
