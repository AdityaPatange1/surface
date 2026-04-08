import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started and exploring Surface.",
    features: [
      "10 questions per day",
      "Core subjects covered",
      "Basic explanations",
      "Community support",
    ],
    cta: "Coming Soon",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For serious students who want unlimited access.",
    features: [
      "Unlimited questions",
      "All subjects & levels",
      "Step-by-step breakdowns",
      "Priority responses",
      "Study plan generation",
      "Email support",
    ],
    cta: "Coming Soon",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$8",
    period: "/seat/month",
    description: "Great for study groups, tutors, and classrooms.",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Progress tracking",
      "Shared question bank",
      "Admin controls",
      "Dedicated support",
    ],
    cta: "Coming Soon",
    highlighted: false,
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-primary">
            Pricing
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Start free, upgrade when you&apos;re ready. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-colors ${
                plan.highlighted
                  ? "animate-pulse-glow border-green-primary/40 bg-green-primary/[0.04]"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-neutral-400">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-neutral-400">{plan.description}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-primary" />
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                disabled
                className={`mt-8 w-full cursor-not-allowed rounded-full py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-green-primary/20 text-green-primary"
                    : "bg-white/5 text-neutral-400"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
