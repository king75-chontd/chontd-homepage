import { getTranslations } from "next-intl/server";

const VALUE_KEYS = ["valueConnection", "valuePrecision", "valueLongTerm", "valueInnovation"] as const;

export default async function About() {
  const t = await getTranslations("about");

  return (
    <section id="about" className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-16 sm:py-20 md:py-24 lg:py-[7rem]">
      <div className="section-container text-center">
        <header className="section-header">
          <h2 className="section-title">{t("title")}</h2>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="prose-width mx-auto lg:max-w-none">
            <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
              {t("philosophyTitle")}
            </h3>
            <p className="mt-3 text-[var(--text-secondary)] leading-relaxed sm:mt-4">
              {t("philosophyBody")}
            </p>
          </div>
          <div className="prose-width mx-auto lg:max-w-none">
            <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
              {t("missionTitle")}
            </h3>
            <p className="mt-3 text-[var(--text-secondary)] leading-relaxed sm:mt-4">
              {t("missionBody")}
            </p>
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
            {t("valuesTitle")}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-6 lg:grid-cols-4">
            {VALUE_KEYS.map((key) => (
              <li
                key={key}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4 text-sm font-medium text-[var(--text-primary)]"
              >
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center sm:mt-20 sm:p-8 lg:p-10">
          <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
            {t("founderTitle")}
          </h3>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed sm:mt-5">
            {t("founderBody")}
          </p>
        </div>
      </div>
    </section>
  );
}
