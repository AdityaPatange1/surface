"use client";

import { useState } from "react";
import { Check, Copy, Download, Terminal } from "lucide-react";

const INSTALL_COMMAND = "npx surface@latest";

export function Install() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-primary">
            Install
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get started in seconds
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            One command is all it takes. Surface runs right in your terminal.
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <Terminal className="h-4 w-4 text-green-primary" />
              <span className="text-xs text-neutral-500">Terminal</span>
            </div>

            <div className="flex items-center justify-between px-4 py-5">
              <code className="font-mono text-sm text-green-light">
                <span className="text-neutral-500">$ </span>
                {INSTALL_COMMAND}
              </code>
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Copy install command"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              disabled
              className="flex cursor-not-allowed items-center gap-2 rounded-full bg-green-primary/20 px-6 py-3 text-sm font-semibold text-green-primary"
            >
              <Download className="h-4 w-4" />
              Download App — Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
