import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const FOOTER_LINK_KEYS = ["about", "services", "divisions", "pipeline", "insights", "contact"] as const;

function footerHref(key: string): string {
  if (key === "services") return "/services";
  const hash = key === "about" ? "about" : key === "divisions" ? "divisions" : key === "pipeline" ? "pipeline" : key === "insights" ? "insights" : "contact";
  return `/#${hash}`;
}

export default async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="section-container py-12 text-center sm:py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
              C.H. Oriented
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {t("tagline")}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              {t("navigation")}
            </p>
            <ul className="mt-3 space-y-2.5">
              {FOOTER_LINK_KEYS.map((key) => (
                <li key={key}>
                  <Link
                    href={footerHref(key)}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              {t("contact")}
            </p>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              partnership@choriented.com
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Seoul, South Korea
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              {t("language")}
            </p>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              EN / KO / JP
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} C.H. Oriented. {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
