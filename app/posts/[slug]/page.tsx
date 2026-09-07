import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/postsData';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Tag,
  ExternalLink,
  Share2,
  BookOpen,
} from 'lucide-react';
import { BlogCard } from '@/components/BlogCard';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const params: { slug: string }[] = [];

  posts.forEach((p) => {
    params.push({ slug: p.slug });
    p.aliases.forEach((alias) => {
      params.push({ slug: alias });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Miriam Lozneanu`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Miriam Lozneanu'],
      tags: post.categories,
    },
  };
}

export default async function SinglePostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null; // Older post
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null; // Newer post
  const relatedPosts = getRelatedPosts(post.slug, 2);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
      {/* Top Navigation & Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-stone-500 dark:text-zinc-400">
        <Link
          href="/posts"
          className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-zinc-100 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>All Blog Posts</span>
        </Link>
        <span>/</span>
        <span className="truncate max-w-[240px] sm:max-w-md text-stone-800 dark:text-zinc-300 font-medium">
          {post.title}
        </span>
      </nav>

      {/* Post Header */}
      <header className="space-y-4 border-b border-stone-200 dark:border-zinc-800 pb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 dark:bg-zinc-800 dark:text-zinc-300 border border-stone-200 dark:border-zinc-700"
            >
              <Tag className="w-3 h-3" aria-hidden="true" />
              {cat}
            </span>
          ))}
        </div>

        {/* Post Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-zinc-100 tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-500 dark:text-zinc-400 pt-2">
          <span className="font-semibold text-stone-800 dark:text-zinc-200">
            By Miriam Lozneanu
          </span>
          <span>&bull;</span>
          <time dateTime={post.date} className="flex items-center gap-1.5 font-mono">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {post.formattedDate}
          </time>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
      </header>

      {/* Post Content */}
      <div
        id="post-article-body"
        className="article-content text-stone-800 dark:text-zinc-200 text-base sm:text-lg leading-relaxed space-y-6 pt-2"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Original Source Reference Banner */}
      <div className="p-4 rounded-xl border border-stone-200 dark:border-zinc-800 bg-stone-100/60 dark:bg-zinc-900/60 text-xs sm:text-sm text-stone-600 dark:text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="font-semibold text-stone-800 dark:text-zinc-200">
            WordPress Archive Source:
          </span>{' '}
          Original post published on WordPress.
        </div>
        <a
          href={post.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-amber-700 dark:text-amber-400 hover:underline shrink-0"
        >
          <span>View on miriamsoftwareengineer.code.blog</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* Author Bio Box */}
      <div className="border border-stone-200 dark:border-zinc-800 rounded-xl p-6 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <div className="w-14 h-14 rounded-xl bg-stone-900 text-stone-100 flex flex-col items-center justify-center font-mono font-bold shrink-0">
          <span className="text-sm">ML</span>
          <span className="text-[10px] text-amber-300">⠍⠇</span>
        </div>
        <div className="space-y-1">
          <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-zinc-100">
            Written by Miriam Lozneanu
          </h3>
          <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
            DeafBlind computer programmer and software engineer. Writing code using a refreshable
            Braille display and screen reader, passionate about making software accessible to
            everyone.
          </p>
        </div>
      </div>

      {/* Previous / Next Post Navigation */}
      <div className="border-t border-stone-200 dark:border-zinc-800 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevPost ? (
          <Link
            href={`/posts/${prevPost.slug}`}
            className="group p-4 rounded-xl border border-stone-200 dark:border-zinc-800 hover:border-stone-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900 transition-colors flex flex-col justify-between"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-zinc-400 flex items-center gap-1 mb-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Previous Post
            </span>
            <span className="font-serif font-semibold text-stone-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 line-clamp-2">
              {prevPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={`/posts/${nextPost.slug}`}
            className="group p-4 rounded-xl border border-stone-200 dark:border-zinc-800 hover:border-stone-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900 transition-colors flex flex-col justify-between text-right"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-zinc-400 flex items-center justify-end gap-1 mb-1">
              Next Post <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="font-serif font-semibold text-stone-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 line-clamp-2">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-stone-200 dark:border-zinc-800 pt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            Related Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <BlogCard key={related.id} post={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
