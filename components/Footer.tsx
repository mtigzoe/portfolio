'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="mt-20 border-t border-stone-200 dark:border-zinc-800 bg-stone-100/70 dark:bg-zinc-900/50 py-12 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Bio & Braille Motto */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-stone-900 text-stone-100 flex items-center justify-center font-mono text-xs font-bold">
                ML
              </div>
              <span className="font-serif font-bold text-lg text-stone-900 dark:text-zinc-100">
                Miriam Lozneanu
              </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed max-w-md">
              DeafBlind software engineer building accessible tools, Python applications, and
              advocating for assistive technology. All 16 original WordPress posts preserved and
              migrated to Next.js.
            </p>
            <div className="pt-1 text-xs text-stone-500 dark:text-zinc-500 flex items-center gap-2">
              <span className="font-mono bg-stone-200 dark:bg-zinc-800 px-2 py-0.5 rounded text-amber-700 dark:text-amber-400 font-bold">
                ⠍⠊⠗⠊⠁⠍
              </span>
              <span>&ldquo;Miriam&rdquo; in English Grade 1 Braille</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-stone-900 dark:text-zinc-200 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-stone-600 dark:text-zinc-400">
              <li>
                <Link href="/" className="hover:text-stone-900 dark:hover:text-white transition-colors">
                  All 16 Blog Posts
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-stone-900 dark:hover:text-white transition-colors">
                  Featured Projects
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 dark:text-zinc-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Miriam Lozneanu. Migrated from WordPress to Next.js.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Accessible by design</span>
            <span>&bull;</span>
            <span>Screen reader & Braille display friendly</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
