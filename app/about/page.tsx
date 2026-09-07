import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  Terminal,
  Cpu,
  EyeOff,
  VolumeX,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Miriam Lozneanu',
  description:
    'Learn about Miriam Lozneanu, a DeafBlind computer programmer and software engineer using refreshable Braille technology to develop accessible software.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-zinc-800 pb-8 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          Biography &amp; Accessibility Mission
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-zinc-100">
          About Miriam Lozneanu
        </h1>
        <p className="text-lg text-stone-600 dark:text-zinc-400">
          DeafBlind Computer Programmer &bull; Assistive Technology Pioneer &bull; Python Engineer
        </p>
      </div>

      {/* Main Narrative Card */}
      <div className="space-y-6 text-stone-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-4">
          <div className="text-amber-900 dark:text-amber-300 font-serif font-bold text-xl sm:text-2xl">
            &ldquo;I am a deaf and blind computer programmer and use my refreshable Braille display to
            read and access all information online.&rdquo;
          </div>
          <p className="text-sm sm:text-base text-amber-950 dark:text-amber-200/90 leading-relaxed">
            A refreshable Braille display functions like a specialized tactile screen and keyboard
            combined, raising physical pins that allow me to read code, terminal output, and online
            resources character-by-character. It gives me the independence and precision to be
            successful in software engineering.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            From Pencil Drawing to Software Engineering
          </h2>
          <p>
            As a child and on through college, I deeply enjoyed pencil drawing when I had enough vision.
            Art gave me an outlet to express detail, structure, and patience. When my vision changed, I
            channeled that exact same creative and analytical passion into computer programming.
          </p>
          <p>
            Code is another form of meticulous craft: breaking complex mathematical logic into elegant
            functions, anticipating edge cases, and constructing interfaces that function reliably for
            anyone who touches them.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-zinc-800">
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            Assistive Technology &amp; Engineering Workstation
          </h2>
          <p>
            Developing software without vision or hearing requires intentional tooling and reliable
            assistive technology:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 dark:text-zinc-100 font-semibold text-base">
                <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Refreshable Braille Display</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                Connected via USB or Bluetooth. Electromechanical pins dynamically form Braille cells
                representing code lines, indentation, error messages, and documentation.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 dark:text-zinc-100 font-semibold text-base">
                <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Command-Line &amp; Screen Readers</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                The terminal is often the cleanest, most accessible interface. Shell scripts, Git CLI,
                and screen-reader cursor routing allow rapid navigation without mouse dependency.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 dark:text-zinc-100 font-semibold text-base">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Automated Testing with pytest</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                Because visual manual testing is not an option, comprehensive automated unit and
                integration tests are crucial. Fixtures and test assertions catch bugs before deployment.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 dark:text-zinc-100 font-semibold text-base">
                <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Consistent Work Routine</span>
              </div>
              <p className="text-sm text-stone-600 dark:text-zinc-400">
                Working remotely 8:00 AM to 5:00 PM, Monday to Friday. Maintaining a disciplined routine
                ensures energy, sharp focus, and healthy boundaries.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-zinc-800">
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            Mission &amp; Looking Forward
          </h2>
          <p>
            I am motivated to help people with disabilities to improve their lives. I persevere in
            finding solutions and developing software applications because I understand the daily
            challenges disabled persons face when interacting with technology.
          </p>
          <p>
            Looking ahead, I am eager to continue building tools like the Accessible TI-89 calculator,
            advancing accessible remote controls for autonomous vehicles, and collaborating with teams
            that value accessibility as a fundamental human right.
          </p>
        </section>
      </div>

      {/* Relevant Articles Box */}
      <div className="pt-6 border-t border-stone-200 dark:border-zinc-800 space-y-4">
        <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-zinc-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-600" /> Read Miriam&apos;s Reflections on Her Journey:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/posts/about-me"
            className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-500 transition-colors flex items-center justify-between"
          >
            <div>
              <span className="font-semibold text-stone-900 dark:text-zinc-100 text-sm block">
                About Me (Original Post)
              </span>
              <span className="text-xs text-stone-500">January 17, 2022</span>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>

          <Link
            href="/posts/art-to-software-engineering"
            className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-500 transition-colors flex items-center justify-between"
          >
            <div>
              <span className="font-semibold text-stone-900 dark:text-zinc-100 text-sm block">
                Art to Software Engineering
              </span>
              <span className="text-xs text-stone-500">February 25, 2022</span>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>

          <Link
            href="/posts/learning-process"
            className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-500 transition-colors flex items-center justify-between"
          >
            <div>
              <span className="font-semibold text-stone-900 dark:text-zinc-100 text-sm block">
                Learning Process
              </span>
              <span className="text-xs text-stone-500">March 22, 2022</span>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>

          <Link
            href="/posts/accessibility-on-pair-programming"
            className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-500 transition-colors flex items-center justify-between"
          >
            <div>
              <span className="font-semibold text-stone-900 dark:text-zinc-100 text-sm block">
                Accessibility on Pair Programming
              </span>
              <span className="text-xs text-stone-500">March 11, 2022</span>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
