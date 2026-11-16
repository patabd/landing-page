import { useI18n } from "@/i18n/I18nProvider";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  const { c } = useI18n();

  return (
    <section className="border-t border-border px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          {c.finalCta.title}
        </h2>
        <p className="mt-2 text-muted">{c.finalCta.body}</p>
        <div className="mt-8 flex justify-center">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
