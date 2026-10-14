import React from 'react';
import { ProjectDisclosure } from '@/components/ProjectDisclosure';
import { Metadata } from 'next';
import {
  Car,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Goals',
  description:
    'Future accessibility goals, including an accessible autonomous vehicle interface concept.',
};

export default function GoalsPage() {
  const projects = [
    {
      id: 'autonomous-vehicle-remote',
      title: 'Accessible Autonomous Vehicle Interface Concept',
      category: 'Future Concept',
      icon: Car,
      color: 'text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/70',
      summary:
        'Research and conceptual architecture for an accessible software remote enabling DeafBlind individuals to navigate driverless vehicles independently.',
      techStack: ['Mobile Web', 'Accessibility APIs', 'Haptic Feedback', 'Bluetooth Braille Protocol'],
      problem:
        'Autonomous vehicles offer independence to non-drivers, but existing prototypes often rely on touchscreen displays or audible alerts that exclude individuals who are both deaf and blind.',
      solution:
        'Proposed a software-based remote control interface delivering bidirectional communication between the vehicle and a DeafBlind passenger through standard assistive protocols and tactile feedback.',
      testingApproach:
        'Continuous user persona research and accessibility requirements mapping based on lived DeafBlind experience.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
      {/* Page Header */}
      <div className="border-b border-stone-200 dark:border-zinc-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-zinc-100 mt-2">
          Goals
        </h1>
        <p className="text-base sm:text-lg text-stone-600 dark:text-zinc-400 max-w-3xl mt-2">
          Ideas I would like to explore to make technology more accessible.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-10">
        {projects.map((proj, index) => {
          return (
            <ProjectDisclosure key={proj.id} id={proj.id} title={proj.title} number={index + 1}>
              <p className="text-sm font-semibold text-stone-500 dark:text-zinc-400">{proj.category}</p>

              {/* Summary */}
              <p className="text-base sm:text-lg text-stone-700 dark:text-zinc-300 leading-relaxed font-medium">
                {proj.summary}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-1">
                  Technologies:
                </span>
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-100 dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 border border-stone-200 dark:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-stone-50 dark:bg-zinc-950/50 border border-stone-200/80 dark:border-zinc-800 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                    The Accessibility Challenge
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-stone-50 dark:bg-zinc-950/50 border border-stone-200/80 dark:border-zinc-800 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Solution
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
                    {proj.solution}
                  </p>
                </div>
              </div>

            </ProjectDisclosure>
          );
        })}
      </div>
    </div>
  );
}
