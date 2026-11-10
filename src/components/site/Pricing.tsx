const plans = [
  {
    name: "Free",
    price: "৳0",
    period: "forever",
    note: "",
    features: [
      "2 publications",
      "Unlimited posts",
      "200 MB photo storage — web-optimized delivery",
      "Posts feed + About + Contact + Projects",
      "“Made with Pata” badge",
    ],
  },
  {
    name: "Basic",
    price: "৳99",
    period: "/mo",
    note: "৳950/yr on yearly (≈ ৳79/mo)",
    features: [
      "10 publications",
      "Custom domain",
      "Original-quality photo delivery",
      "1 GB photo storage",
    ],
  },
  {
    name: "Pro",
    price: "৳249",
    period: "/mo",
    note: "৳2,390/yr on yearly (≈ ৳199/mo)",
    features: [
      "Unlimited publications",
      "Badge removal",
      "5 GB photo storage + ৳50/5 GB packs",
      "All themes",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-border px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Launch pricing
          </h2>
          <p className="mt-2 leading-relaxed text-muted">
            Prices in taka, billed through bKash or Nagad. Yearly billing saves
            20%.
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
                <span className="text-3xl font-semibold tracking-tight">
                  {plan.price}
                </span>
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
          <h3 className="font-semibold">Self-hosting?</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            Run the source-available core on your own server — development and
            testing are free, production needs a license at ৳10/mo or ৳100/yr.
            The open-source home lives at pata.foundation.
          </p>
        </div>

        <p className="mt-10 text-xs text-muted/60">
          Launch pricing — may shift slightly before release.
        </p>
      </div>
    </section>
  );
}
