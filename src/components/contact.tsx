"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { submitContactForm, type ContactState } from "@/app/actions/contact";

export function Contact() {
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    submitContactForm,
    null
  );

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-primary">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Have a question, suggestion, or just want to say hi? Drop us a
            message.
          </p>
        </div>

        <form
          action={formAction}
          className="space-y-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-neutral-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={200}
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-green-primary/50 focus:ring-1 focus:ring-green-primary/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-neutral-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={320}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-green-primary/50 focus:ring-1 focus:ring-green-primary/30"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={5}
              placeholder="What's on your mind?"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-green-primary/50 focus:ring-1 focus:ring-green-primary/30"
            />
          </div>

          {state && (
            <p
              className={`text-sm ${
                state.success ? "text-green-primary" : "text-red-400"
              }`}
              role="status"
            >
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-green-primary py-3 text-sm font-semibold text-black transition-colors hover:bg-green-light disabled:opacity-60"
          >
            {isPending ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
