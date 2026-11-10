import { useI18n } from "@/i18n/I18nProvider";

export function WhyPata() {
  const { c } = useI18n();

  return (
    <section
      id="why"
      className="scroll-mt-20 border-t border-border px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight">
          {c.why.heading}
        </h2>
        <p className="mt-2 leading-relaxed text-muted">{c.why.intro}</p>
        <ol className="mt-10 divide-y divide-border border-t border-border">
          {c.why.items.map((reason) => (
            <li
              key={reason.number}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-6"
            >
              <span className="pt-0.5 font-mono text-sm text-muted/70">
                {reason.number}
              </span>
              <div>
                <h3 className="font-semibold">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
