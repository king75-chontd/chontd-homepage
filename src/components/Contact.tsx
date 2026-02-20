"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-16 sm:py-20 md:py-24 lg:py-[7rem]">
      <div className="section-container text-center">
        <header className="section-header">
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-lead">{t("subtitle")}</p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="space-y-8 text-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                {t("corporateEmail")}
              </p>
              <a
                href="mailto:partnership@choriented.com"
                className="mt-1.5 block text-[var(--accent)] hover:underline"
              >
                partnership@choriented.com
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                {t("office")}
              </p>
              <p className="mt-1.5 text-[var(--text-secondary)]">
                Seoul, South Korea
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                {t("social")}
              </p>
              <p className="mt-1.5 text-sm text-[var(--text-muted)]">
                {t("socialPlaceholder")}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)]">
                {t("name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                placeholder={t("namePlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)]">
                {t("email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                placeholder={t("emailPlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-[var(--text-secondary)]">
                {t("company")}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                placeholder={t("companyPlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)]">
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                placeholder={t("messagePlaceholder")}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-[var(--accent)] py-3.5 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)] disabled:opacity-50"
            >
              {status === "sending"
                ? t("sending")
                : status === "sent"
                  ? t("sent")
                  : status === "error"
                    ? t("tryAgain")
                    : t("submit")}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-400">
                {t("error")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
