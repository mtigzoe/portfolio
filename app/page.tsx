import React from 'react';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/postsData';
import { BlogListWithFilter } from '@/components/BlogListWithFilter';
import {
  Code2,
  Calculator,
  Youtube,
  Car,
  Award,
  ArrowRight,
  Sparkles,
  BookOpen,
  FolderGit2,
  CheckCircle2,
  ExternalLink,
  Laptop,
} from 'lucide-react';

export default function HomePage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-stone-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xs shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-100 dark:border-zinc-800">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800/80">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Personal Website &amp; Technical Archive</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-zinc-100 tracking-tight leading-tight">
                Miriam Lozneanu
              </h1>
              <p className="text-lg md:text-xl text-stone-700 dark:text-zinc-300 font-medium">
                DeafBlind Software Engineer &bull; Accessibility Advocate &bull; Python Developer
              </p>
            </div>

            {/* Braille Display Visual Badge */}
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-stone-900 text-stone-100 dark:bg-zinc-800 border border-stone-700 text-center min-w-[170px] shadow-xs">
              <span className="text-2xl font-mono text-amber-300 tracking-widest font-bold">
                ⠍⠊⠗⠊⠁⠍
              </span>
              <span className="text-[11px] text-stone-400 mt-1 uppercase tracking-wider font-semibold">
                Braille Output
              </span>
              <span className="text-[10px] text-stone-500">Refreshable Display</span>
            </div>
          </div>

          {/* Bio introduction */}
          <div className="pt-6 space-y-4 text-stone-700 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
            <p>
              I am a <strong>DeafBlind computer programmer</strong> who uses a refreshable Braille
              display and screen reader to write code, explore algorithms, and build accessible tools.
              My goal is to design software applications that empower people with disabilities to live
              more independent, productive lives.
            </p>
            <p>
              This website is my complete personal developer home and technical blog, containing all{' '}
              <strong>16 original posts</strong> faithfully migrated from my WordPress blog (
              <a
                href="https://miriamsoftwareengineer.code.blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 dark:text-amber-400 font-semibold underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1"
              >
                miriamsoftwareengineer.code.blog
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              ), with full search and responsive reading tools.
            </p>
          </div>

          {/* Call to action pills */}
          <div className="pt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#posts-section"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Read Posts (16)</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 font-semibold text-sm hover:bg-stone-50 dark:hover:bg-zinc-700 transition-colors"
            >
              <FolderGit2 className="w-4 h-4" aria-hidden="true" />
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Technical Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-zinc-100">
              Featured Projects &amp; Initiatives
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400"
          >
            <span>View detailed project specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1: Accessible TI-89 */}
          <div className="rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center">
                <Calculator className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-zinc-100">
                Accessible TI-89 Calculator
              </h3>
              <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
                A web application built in Python and Vue.js specifically engineered for visually
                impaired and blind students taking calculus, computing derivatives and integrals with
                accessible output.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 dark:border-zinc-800 text-xs font-mono text-stone-500">
              Python &bull; Flask &bull; Math Calculus &bull; Vue.js
            </div>
          </div>

          {/* Project 2: YouTube Transcript Extractor */}
          <div className="rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-300 flex items-center justify-center">
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-zinc-100">
                YouTube Transcript Extractor
              </h3>
              <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
                A Python Flask tool utilizing `youtube-transcript-api` to extract video transcripts so
                DeafBlind users can read spoken content comfortably via refreshable Braille displays.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 dark:border-zinc-800 text-xs font-mono text-stone-500">
              Python &bull; Flask &bull; youtube-transcript-api
            </div>
          </div>

          {/* Project 3: Develop Carolina & Automated Testing */}
          <div className="rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center">
                <Award className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-zinc-100">
                Apprenticeship &amp; Testing
              </h3>
              <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
                Apprenticeship at Worthwhile through the Develop Carolina program: practicing agile
                user stories on GitHub, automated pytest suites, SQL data queries, and accessible pair
                programming.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 dark:border-zinc-800 text-xs font-mono text-stone-500">
              pytest &bull; SQL &bull; GitHub &bull; Pair Programming
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Blog Posts Section */}
      <section id="posts-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Articles &amp; Writings
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-zinc-100">
              Blog Posts Archive (16 Posts)
            </h2>
            <p className="text-sm text-stone-600 dark:text-zinc-400 mt-1">
              Search and filter all posts copied from{' '}
              <span className="font-mono">miriamsoftwareengineer.code.blog</span>
            </p>
          </div>

          <Link
            href="/posts"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400"
          >
            <span>View all 16 posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Client-side filterable blog list */}
        <BlogListWithFilter initialPosts={posts} allCategories={categories} limit={6} />

        <div className="mt-10 text-center">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 font-semibold text-sm hover:bg-stone-50 dark:hover:bg-zinc-700 transition-colors shadow-xs"
          >
            <span>View Full Archive of All 16 Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Assistive Tech & Coding Philosophy Spotlight */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl border border-stone-200 dark:border-zinc-800 bg-stone-100/50 dark:bg-zinc-900/40 p-6 sm:p-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Accessibility in Action
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-zinc-100">
              How a DeafBlind Software Engineer Codes
            </h2>
            <p className="text-stone-700 dark:text-zinc-300 leading-relaxed">
              Coding as a DeafBlind software engineer relies on specialized hardware and software:
            </p>

            <ul className="space-y-3 text-stone-700 dark:text-zinc-300 text-sm sm:text-base pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Refreshable Braille Display:</strong> Translates on-screen text, code, and
                  terminal output into raised Braille pins in real-time.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Screen Readers &amp; Keyboard Navigation:</strong> Fast, structured navigation
                  through codebases, pull requests, and documentation without pointing devices.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Automated Unit &amp; Integration Testing:</strong> Utilizing `pytest` and test
                  fixtures to catch regression bugs early when visual verification is not possible.
                </div>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 underline underline-offset-4"
              >
                <span>Read Miriam&apos;s full story and background</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
