import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6">
        <div className="animate-fade-in-up flex items-center gap-2 rounded-full border border-green-primary/20 bg-green-muted px-4 py-1.5 text-sm text-green-primary">
          <Sparkles className="h-4 w-4" />
          Your friendly professor, always on call
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 text-4xl font-extrabold leading-tight tracking-tight text-white opacity-0 sm:text-5xl md:text-6xl">
          Blast through life with{" "}
          <span className="bg-gradient-to-r from-green-primary to-green-light bg-clip-text text-transparent">
            great grades
          </span>
        </h1>

        <p className="animate-fade-in-up animate-delay-200 max-w-xl text-lg leading-relaxed text-neutral-400 opacity-0">
          Surface is your always-available professor — clear doubts, ask
          questions, and get your problems resolved instantly. No office hours
          needed.
        </p>

        <div className="animate-fade-in-up animate-delay-300 flex flex-wrap items-center justify-center gap-4 opacity-0">
          <span className="group relative inline-flex cursor-default items-center gap-2 rounded-full bg-neutral-800 px-6 py-3 text-sm font-semibold text-neutral-400">
            Try Surface
            <ArrowRight className="h-4 w-4" />
            <span className="absolute -top-2 right-0 rounded-full bg-green-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
              Soon
            </span>
          </span>

          <a
            href="#features"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-green-primary/40 hover:text-green-primary"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
