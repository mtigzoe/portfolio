import React from 'react';
import { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/postsData';
import { BlogListWithFilter } from '@/components/BlogListWithFilter';
import { BookOpen, ExternalLink, Rss } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Blog Posts (16)',
  description:
    'Complete archive of all 16 technical blog posts written by Miriam Lozneanu, covering accessibility, Python development, testing with pytest, and assistive technology.',
};

export default function PostsPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
      {/* Page Header */}
      <div className="border-b border-stone-200 dark:border-zinc-800 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Full Archive &bull; 16 Articles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-zinc-100">
              All Blog Posts
            </h1>
            <p className="text-base sm:text-lg text-stone-600 dark:text-zinc-400 max-w-2xl">
              Chronological collection of engineering reflections, accessibility insights, and
              software projects migrated from{' '}
              <a
                href="https://miriamsoftwareengineer.code.blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 dark:text-amber-400 underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1 font-medium"
              >
                miriamsoftwareengineer.code.blog
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              .
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/api/rss"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold text-stone-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors shadow-xs"
              title="Subscribe via RSS"
            >
              <Rss className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>RSS Feed</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Filterable Post List */}
      <BlogListWithFilter initialPosts={posts} allCategories={categories} showSearch={true} />
    </div>
  );
}
