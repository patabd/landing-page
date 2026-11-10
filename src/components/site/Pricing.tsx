import NumberFlow from "@number-flow/react";

import { DigitRoll } from "@/components/ui/digit-roll";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { locale, c } = useI18n();
  const { plans } = c.pricing;

  return (
    <section
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

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
          {plans.map((plan, index) => (
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
                    value={plan.price}
                    locales="en"
                    prefix="৳"
                    className="text-3xl font-semibold tracking-tight"
                  />
                ) : (
                  <DigitRoll
                    value={plan.price}
                    locale={locale}
                    prefix="৳"
                    className="text-3xl font-semibold tracking-tight"
                  />
                )}
                <span className="text-sm text-muted">{plan.period}</span>
              </div>
              <p className="mt-1 min-h-5 text-xs text-muted/70">{plan.note}</p>
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl border-t border-border pt-8">
          <h3 className="font-semibold">{c.pricing.selfHost.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {c.pricing.selfHost.description}
          </p>
        </div>

        <p className={cn("mt-10 text-xs text-muted")}>
          {c.pricing.footnote}
        </p>
      </div>
    </section>
  );
}
