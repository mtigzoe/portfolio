import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  Youtube,
  Car,
  Award,
  Terminal,
  Code2,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Projects',
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
      relatedPostSlugs: [
        { title: 'Umbrella Project Overview', slug: 'umbrella-project' },
        { title: 'Choosing Tech: Python, Flask & Vue.js', slug: 'what-programming-languages-have-you-chosen-for-your-umbrella-project' },
        { title: 'Making My Plans: Backend Architecture', slug: 'making-my-plans' },
        { title: 'Testing my Application with pytest', slug: 'testing-my-application' },
        { title: 'Defining Features with Agile User Stories', slug: 'defining-features' },
      ],
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
      relatedPostSlugs: [
        { title: 'Challenges in Developing YouTube Transcript Web App', slug: 'challenges-youtube-transcript' },
        { title: 'About Me: Assistive Video Reading', slug: 'about-me' },
      ],
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
      relatedPostSlugs: [
        { title: 'About Me: Vision for Driverless Cars', slug: 'about-me' },
        { title: 'Product Lifecycle and User Needs', slug: 'product-lifecycle' },
      ],
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
      relatedPostSlugs: [
        { title: 'Apprenticeship with Host Company', slug: 'apprenticeship-with-host-company' },
        { title: 'Crucial Communications with Supervisors', slug: 'crucial-communications' },
        { title: 'Accessibility on Pair Programming', slug: 'accessibility-on-pair-programming' },
        { title: 'Work From Home Daily Routine', slug: 'work-from-home' },
      ],
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
          Projects &amp; Technical Initiatives
        </h1>
        <p className="text-base sm:text-lg text-stone-600 dark:text-zinc-400 max-w-3xl mt-2">
          These projects showcase my journey as a DeafBlind software engineer, focusing
          on accessible tooling, Python backend services, math calculation engines, and assistive
          hardware integration.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-10">
        {projects.map((proj) => {
          const Icon = proj.icon;
          return (
            <article
              key={proj.id}
              id={`project-${proj.id}`}
              className="rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6 shadow-xs"
            >
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${proj.color}`}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-zinc-400">
                      {proj.category}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
                      {proj.title}
                    </h2>
                  </div>
                </div>
              </div>

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

              {/* Related Blog Posts */}
              <div className="pt-2 border-t border-stone-100 dark:border-zinc-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-zinc-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> Related Blog Posts:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {proj.relatedPostSlugs.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/posts/${rp.slug}`}
                      className="group p-3 rounded-lg border border-stone-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-amber-600 bg-stone-50/50 dark:bg-zinc-800/40 text-xs font-medium text-stone-800 dark:text-zinc-200 flex items-center justify-between transition-colors"
                    >
                      <span className="group-hover:text-amber-600 dark:group-hover:text-amber-400 truncate mr-2">
                        {rp.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
