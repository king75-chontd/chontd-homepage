import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function CTABanner() {
  const t = await getTranslations("ctaBanner");

  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-accent-subtle)] py-16 sm:py-20 md:py-24">
      <div className="section-container text-center">
        <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.01em] text-[var(--text-primary)]">
          {t("headline")}
        </h2>
        <p className="mx-auto mt-4 max-w-[60ch] text-base leading-[1.65] text-[var(--text-secondary)] sm:mt-5 sm:text-[1.0625rem]">
          {t("body")}
        </p>
        <div className="mt-8 sm:mt-10">
          <Link href="#contact" className="btn-primary">
            {t("cta")} <span className="ml-1.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
