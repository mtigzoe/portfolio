import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'About a DeafBlind software developer building accessible applications.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-zinc-100">
        About
      </h1>
      <div className="space-y-5 text-base sm:text-lg leading-relaxed">
        <p>
          I am a DeafBlind software developer. I use a refreshable Braille display
          to read code, documentation, and information online.
        </p>
        <p>
          I build software to help people with disabilities and make everyday
          activities more accessible. My experience with assistive technology
          guides how I approach accessibility, development, and testing.
        </p>
        <p>
          My projects include a Python Flask application that extracts transcripts
          from YouTube, making video content available to read in Braille.
          I am also interested in accessible interfaces for driverless cars.
        </p>
        <p>
          This website shares my software projects, learning experiences, and
          reflections on accessibility.
        </p>
      </div>
      <p>
        <a href="https://github.com/mtigzoe" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
          Visit my GitHub profile (opens in a new tab)
        </a>
      </p>
      <div className="flex flex-wrap gap-6">
        <Link href="/posts" className="underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
          Read blog posts
        </Link>
        <Link href="/projects" className="underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
          Explore projects
        </Link>
      </div>
    </div>
  );
}
