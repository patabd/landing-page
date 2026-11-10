import { useI18n } from "@/i18n/I18nProvider";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  const { c } = useI18n();

  return (
    <section className="px-6 pt-20 pb-10 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="reveal text-sm text-muted"
          style={{ animationDelay: "0ms" }}
        >
          {c.hero.eyebrow}
        </p>
        <h1
          className="reveal mt-4 text-4xl font-bold leading-snug sm:text-5xl"
          style={{ animationDelay: "40ms" }}
        >
          {c.hero.title}
        </h1>
        <p
          className="reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted"
          style={{ animationDelay: "80ms" }}
        >
          {c.hero.bodyBefore}
          <code className="rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.875em] text-foreground">
            you.pata.page
          </code>
          {c.hero.bodyAfter}
        </p>
        <div
          className="reveal mt-10 flex min-h-[76px] justify-center"
          style={{ animationDelay: "120ms" }}
        >
          <WaitlistForm />
        </div>
        <p
          className="reveal text-xs text-muted"
          style={{ animationDelay: "150ms" }}
        >
          {c.form.microcopy}
        </p>
      </div>
    </section>
  );
}
