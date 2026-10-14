'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export function ProjectDisclosure({
  id, title, number, children,
}: { id: string; title: string; number: number; children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `project-details-${id}`;
  return (
    <div id={`project-${id}`} className="rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-xs">
      <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((value) => !value)}
          className="w-full flex items-center justify-between gap-4 text-left rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
        >
          <span>{number}. {title}</span>
          <ChevronDown aria-hidden="true" className={`w-5 h-5 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </h2>
      <div id={panelId} hidden={!expanded}>
        <div className="space-y-6 pt-6">{children}</div>
      </div>
    </div>
  );
}
