import type { Metadata } from 'next';
import { Cpu, Terminal, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coding Style',
  description: 'Assistive technology, development tools, and automated testing in my coding workflow.',
};

export default function CodingStylePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-zinc-100">
        Coding Style
      </h1>
        <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-zinc-800">
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            Assistive Technology &amp; Engineering Workstation
          </h2>
          <p>
            Developing software without vision or hearing requires intentional tooling and reliable
            assistive technology:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 dark:text-zinc-100 font-semibold text-base">
                <Cpu aria-hidden="true" className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Refreshable Braille Display</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                Connected via USB or Bluetooth. Electromechanical pins dynamically form Braille cells
                representing code lines, indentation, error messages, and documentation.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 dark:text-zinc-100 font-semibold text-base">
                <Terminal aria-hidden="true" className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Command-Line &amp; Screen Readers</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                The terminal is often the cleanest, most accessible interface. Shell scripts, Git CLI,
                and screen-reader cursor routing allow rapid navigation without mouse dependency.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 dark:text-zinc-100 font-semibold text-base">
                <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Automated Testing with pytest</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                Automated unit and integration tests help verify software behavior.
                Fixtures and test assertions catch bugs before deployment.
              </p>
            </div>

          </div>
        </section>
    </div>
  );
}
