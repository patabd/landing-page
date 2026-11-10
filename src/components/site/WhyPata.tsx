const reasons = [
  {
    number: "01",
    title: "Bangla-first, genuinely",
    description:
      "Bangla slugs, a bn/en dashboard, and Bangla web fonts ship in the box. Write for the internet in the language you think in.",
  },
  {
    number: "02",
    title: "Priced for Bangladesh",
    description:
      "Free to start — ৳99 or ৳249 a month when you grow. Pay with bKash or Nagad, no international card required.",
  },
  {
    number: "03",
    title: "Your photos stay yours",
    description:
      "Originals are kept on every plan, forever. Upgrade and every past photo returns to full quality instantly — nothing to re-upload.",
  },
  {
    number: "04",
    title: "No lock-in",
    description:
      "The core is source-available: inspect it, fork it, self-host it from ৳10/month. Your publication stays portable.",
  },
];

export function WhyPata() {
  return (
    <section id="why" className="border-t border-border px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight">Why Pata</h2>
        <p className="mt-2 leading-relaxed text-muted">
          Competitors price in dollars and treat Bangla as an afterthought.
          Pata is built the other way around.
        </p>
        <ol className="mt-10 divide-y divide-border border-t border-border">
          {reasons.map((reason) => (
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
