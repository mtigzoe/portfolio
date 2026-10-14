import React from 'react';
import { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/postsData';
import { BlogListWithFilter } from '@/components/BlogListWithFilter';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Blog Posts',
  description:
    'Browse technical blog posts by year, covering accessibility, Linux remote access, Python development, testing, and assistive technology.',
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
              <span>Full Archive &bull; {posts.length} Articles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-zinc-100">
              All Blog Posts
            </h1>
            <p className="text-base sm:text-lg text-stone-600 dark:text-zinc-400 max-w-2xl">
              Chronological collection of engineering reflections, accessibility insights, and
              software projects.
            </p>
          </div>

        </div>
      </div>

      {/* Main Filterable Post List */}
      <BlogListWithFilter initialPosts={posts} allCategories={categories} showSearch={true} />




    </div>
  );
}
