import React from 'react';
import { ProjectDisclosure } from '@/components/ProjectDisclosure';
import { Metadata } from 'next';
import {
  Calculator,
  Youtube,
  Car,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Software engineering projects, including the Accessible TI-89 Calculator, YouTube Transcript Extractor, and Autonomous Vehicle Interface concepts.',
};

export default function ProjectsPage() {
  const projects = [
    {
      id: 'accessible-ti89',
      title: 'Accessible TI-89 Calculator Web Application',
      category: 'Flagship Umbrella Project',
      icon: Calculator,
      color: 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/70',
      summary:
        'A fully accessible web calculator engineered specifically for blind and visually impaired students enrolled in high school and university calculus classes.',
      techStack: ['Python', 'Flask', 'Vue.js', 'pytest', 'Calculus Math Libraries', 'GitHub Projects'],
      problem:
        'Standard handheld graphing calculators like the TI-89 are physically inaccessible to blind students. Sighted graphical plots and small LCD screens create massive educational barriers for students attempting advanced mathematics.',
      solution:
        'Engineered a web application powered by a Python backend capable of evaluating algebraic equations, derivatives, and integrals, returning structured textual outputs that can be read seamlessly on refreshable Braille displays and with screen readers.',
      testingApproach:
        'Implemented automated testing with pytest, utilizing custom test fixtures for real numbers and statistics, alongside deterministic unit tests for derivatives and integrals.',
    },
    {
      id: 'youtube-transcript',
      title: 'YouTube Transcript Web Extractor',
      category: 'Assistive Tool',
      icon: Youtube,
      color: 'text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-950/70',
      summary:
        'A web application that extracts full transcripts from any YouTube video URL, allowing DeafBlind users to read video dialogue in tactile Braille.',
      techStack: ['Python', 'Flask', 'youtube-transcript-api', 'pafy', 'HTML5', 'Heroku'],
      problem:
        'Accessing video captions on YouTube in real time using a refreshable Braille display is extremely challenging because captions disappear rapidly and audio is inaccessible to DeafBlind individuals.',
      solution:
        'Developed a Python Flask web application. Users paste a YouTube video link, and the backend extracts the full transcript via the YouTube API, presenting it as clean, readable text on an accessible HTML page that can be panned at the user’s own reading speed on a Braille display.',
      testingApproach:
        'Debugged third-party library breakages when YouTube altered its dislike count API in November 2021, directly patching module source code to restore transcript retrieval functionality.',
    },
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
    {
      id: 'develop-carolina',
      title: 'Apprenticeship at Worthwhile (Develop Carolina)',
      category: 'Professional Experience',
      icon: Award,
      color: 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/70',
      summary:
        'Professional software engineering apprenticeship: practicing agile workflows, database querying with SQL, pair programming, and remote work discipline.',
      techStack: ['Python', 'MySQL', 'SQL Queries', 'CSV Processing', 'Git & GitHub', 'Agile/Scrum'],
      problem:
        'Navigating real-world client requirements, vague initial project specifications, and inaccessible pair programming platforms like CodeWars with screen readers.',
      solution:
        'Established structured communication habits with mentors, refined requirements through iterative documentation, extracted database records into CSV reports, and established accessible pair-programming workflows.',
      testingApproach:
        'Requirement verification cycles and iterative specification reviews with engineering supervisors.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
      {/* Page Header */}
      <div className="border-b border-stone-200 dark:border-zinc-800 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          Portfolio &amp; Engineering Case Studies
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-zinc-100 mt-2">
          Projects
        </h1>
        <p className="text-base sm:text-lg text-stone-600 dark:text-zinc-400 max-w-3xl mt-2">
          These projects showcase my journey as a DeafBlind software engineer, focusing
          on accessible tooling, Python backend services, math calculation engines, and assistive
          hardware integration.
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
                    The Engineering Solution
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
