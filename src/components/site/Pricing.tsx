import { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { ArrowUpRight } from "lucide-react";

import { DigitRoll } from "@/components/ui/digit-roll";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "yearly";

export function Pricing() {
  const { locale, c } = useI18n();
  const { plans } = c.pricing;
  const [billing, setBilling] = useState<Billing>("monthly");

  // Prices roll in (from ৳0) the first time the section enters the viewport,
  // and re-roll when the language changes while it's visible.
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const seenRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !seenRef.current) {
          seenRef.current = true;
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const prevLocale = useRef(locale);
  useEffect(() => {
    if (prevLocale.current === locale) return;
    prevLocale.current = locale;
    if (!seenRef.current) return;
    setRevealed(false);
    const timer = window.setTimeout(() => setRevealed(true), 40);
    return () => window.clearTimeout(timer);
  }, [locale]);

  const billingOptions = [
    { value: "monthly" as const, label: c.pricing.billing.monthly },
    { value: "yearly" as const, label: c.pricing.billing.yearly },
  ];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="scroll-mt-20 border-t border-border px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            {c.pricing.heading}
          </h2>
          <p className="mt-2 leading-relaxed text-muted">
            {c.pricing.intro}
          </p>
        </div>

        <div
          role="group"
          aria-label={c.pricing.billing.label}
          className="mt-8 inline-flex items-center gap-0.5 rounded-full border border-border p-0.5"
        >
          {billingOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setBilling(option.value)}
              aria-pressed={billing === option.value}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring",
                billing === option.value
                  ? "bg-surface text-foreground"
                  : "text-muted hover:text-foreground"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {plans.map((plan, index) => {
            const target =
              billing === "yearly" ? plan.yearlyPrice : plan.price;
            const price = revealed ? target : 0;
            return (
              <div
                key={plan.name}
                className={
                  index === 0
                    ? "md:pr-8"
                    : index === plans.length - 1
                      ? "md:pl-8"
                      : "md:px-8"
                }
              >
                <h3 className="text-sm font-medium text-muted">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1.5">
                  {locale === "en" ? (
                    <NumberFlow
                      value={price}
                      locales="en"
                      prefix="৳"
                      className="text-3xl font-semibold tracking-tight"
                    />
                  ) : (
                    <DigitRoll
                      value={price}
                      locale={locale}
                      prefix="৳"
                      className="text-3xl font-semibold tracking-tight"
                    />
                  )}
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <p className="mt-1 min-h-5 text-xs text-muted/70">
                  {billing === "yearly" ? plan.note.yearly : plan.note.monthly}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-2xl border-t border-border pt-8">
          <h3 className="font-semibold">{c.pricing.selfHost.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {c.pricing.selfHost.description}
          </p>
          <a
            href="https://github.com/patabd"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            github.com/patabd
            <ArrowUpRight className="size-3.5 text-muted" aria-hidden="true" />
          </a>
        </div>

        <p className={cn("mt-10 text-xs text-muted")}>
          {c.pricing.footnote}
        </p>
      </div>
    </section>
  );
}
