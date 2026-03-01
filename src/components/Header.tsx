"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

const NAV_KEYS = ["about", "services", "divisions", "pipeline", "insights", "contact"] as const;

function navHref(key: string): string {
  if (key === "services") return "/services";
  const hash = key === "about" ? "about" : key === "divisions" ? "divisions" : key === "pipeline" ? "pipeline" : key === "insights" ? "insights" : "contact";
  return `/#${hash}`;
}

export default function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-sm">
      <div className="section-container flex h-14 items-center justify-between gap-4 sm:h-16 md:gap-6">
        <Link
          href="/"
          className="gold-shimmer text-base font-semibold tracking-tight sm:text-lg"
        >
          C.H. Oriented
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={navHref(key)}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {t(key)}
            </Link>
          ))}
          <LocaleSwitcher />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 text-[var(--text-primary)]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-primary)] md:hidden">
          <div className="section-container flex flex-col gap-1 py-4">
            {NAV_KEYS.map((key) => (
              <Link
                key={key}
                href={navHref(key)}
                className="py-2.5 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
