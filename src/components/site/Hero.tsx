import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="px-6 pt-20 pb-10 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="reveal text-sm text-muted"
          style={{ animationDelay: "0ms" }}
        >
          Launching soon in Bangladesh
        </p>
        <h1
          lang="bn"
          className="reveal mt-4 text-4xl font-bold leading-snug sm:text-5xl"
          style={{ animationDelay: "40ms" }}
        >
          নিজের পাতা, কয়েক মিনিটে
        </h1>
        <p
          className="reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted"
          style={{ animationDelay: "80ms" }}
        >
          Pata (পাতা — “page”) is a publishing home for Bangladeshi creators.
          Launch a blog, portfolio, or mini news site at{" "}
          <code className="rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.875em] text-foreground">
            you.pata.page
          </code>{" "}
          — no hosting, no domain, no setup. Bangla-first, priced in taka, paid
          with bKash or Nagad.
        </p>
        <div
          className="reveal mt-10 flex min-h-[76px] justify-center"
          style={{ animationDelay: "120ms" }}
        >
          <WaitlistForm />
        </div>
        <p
          className="reveal text-xs text-muted/70"
          style={{ animationDelay: "150ms" }}
        >
          One email at launch. No spam — ever.
        </p>
      </div>
    </section>
  );
}
