'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/postsData';
import { Calendar, ArrowRight } from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const { themeMode } = useAccessibility();

  const cardBorderClass =
    themeMode === 'dark'
      ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
      : themeMode === 'high-contrast'
      ? 'bg-black border-2 border-white hover:bg-zinc-900'
      : 'bg-white border-stone-200 hover:border-stone-400 hover:shadow-xs';

  return (
    <div
      id={`post-card-${post.slug}`}
      className={`group rounded-xl border p-6 transition-all duration-200 flex flex-col justify-between ${cardBorderClass} ${
        featured ? 'md:col-span-2 md:p-8' : ''
      }`}
    >
      <div>
        <time dateTime={post.date} className="flex items-center gap-1.5 font-mono">
          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
          {post.formattedDate}
        </time>

        {/* Post Title */}
        <h3
          className={`font-serif font-bold tracking-tight text-stone-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors ${
            featured ? 'text-2xl md:text-3xl mb-3' : 'text-xl mb-2'
          }`}
        >
          <Link
            href={`/posts/${post.slug}`}
            className="focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-stone-600 dark:text-zinc-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Read More Action */}
      <div className="pt-4 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between text-xs text-stone-500 dark:text-zinc-400">

        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex items-center gap-1.5 font-semibold text-stone-800 dark:text-zinc-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all text-sm"
          aria-label={`Read full post: ${post.title}`}
        >
          <span>Read Post</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
