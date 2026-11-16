import { BlurText } from "@/components/motion/blur-text";
import { useI18n } from "@/i18n/I18nProvider";
import { PublicationPreview } from "./PublicationPreview";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  const { c } = useI18n();

  return (
    <section className="px-6 pt-12 pb-20 sm:pt-20 lg:pt-24">
      <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1fr_26rem] lg:gap-16">
        <div className="text-center lg:text-left">
          <p
            className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
            style={{ animationDelay: "0ms" }}
          >
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent"
            />
            {c.hero.eyebrow}
          </p>
          <BlurText
            as="h1"
            text={c.hero.title}
            trigger="mount"
            delay={0.05}
            className="mt-5 text-4xl font-bold leading-snug sm:text-5xl lg:text-6xl lg:leading-[1.2]"
          />
          <p
            className="reveal mx-auto mt-6 max-w-md text-base leading-relaxed text-muted lg:mx-0"
            style={{ animationDelay: "260ms" }}
          >
            {c.hero.bodyBefore}
            <code className="rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.875em] text-foreground">
              you.pata.page
            </code>
            {c.hero.bodyAfter}
          </p>
          <div
            id="waitlist"
            className="reveal mt-9 flex min-h-[76px] scroll-mt-28 justify-center lg:justify-start"
            style={{ animationDelay: "320ms" }}
          >
            <WaitlistForm />
          </div>
          <ul
            className="reveal mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted lg:justify-start"
            style={{ animationDelay: "380ms" }}
          >
            {c.hero.chips.map((chip) => (
              <li key={chip} className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-ring"
                />
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <PublicationPreview />
      </div>
    </section>
  );
}
