import {
  BookOpen,
  BrainCircuit,
  Clock,
  MessageSquareText,
  ShieldCheck,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: BrainCircuit,
    title: "Deep Understanding",
    description:
      "Surface doesn't just give answers — it helps you truly understand the concept so you can apply it anywhere.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "No waiting for office hours. Get help whenever you need it, day or night, weekday or weekend.",
  },
  {
    icon: MessageSquareText,
    title: "Ask Anything",
    description:
      "From basic algebra to quantum physics, Surface handles questions across every subject and level.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description:
      "Get clear, step-by-step explanations in seconds. No lag, no delays — just fast, quality help.",
  },
  {
    icon: BookOpen,
    title: "Learn Your Way",
    description:
      "Surface adapts to your learning style with examples, visuals, and explanations tailored to you.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    description:
      "Your questions and data stay yours. We use end-to-end encryption and never sell your information.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-primary">
            Features
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Everything you need to excel
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Surface combines the patience of a great professor with the speed of
            modern technology to help you learn better, faster.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-green-primary/20 hover:bg-green-muted"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-primary/10 text-green-primary transition-colors group-hover:bg-green-primary/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
