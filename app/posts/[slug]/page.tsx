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
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Author'],
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

  const allPosts = [...getAllPosts()].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null; // Older post
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null; // Newer post
  const relatedPosts = getRelatedPosts(post.slug, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
      {/* Post Header */}
      <header className="space-y-4 border-b border-stone-200 dark:border-zinc-800 pb-8">
        <time dateTime={post.date} className="flex items-center gap-1.5 font-mono">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          {post.formattedDate}
        </time>

        {/* Post Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 dark:text-zinc-100 tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-500 dark:text-zinc-400 pt-2">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" aria-hidden="true" />
            Estimated reading time: {post.readingTime.replace(/^(\d+) min read$/, (_, minutes) => `${minutes} ${minutes === '1' ? 'minute' : 'minutes'}`)}
          </span>
        </div>
      </header>

      {/* Post Content */}
      <div
        id="post-article-body"
        className="article-content text-stone-800 dark:text-zinc-200 text-base sm:text-lg leading-relaxed space-y-6 pt-2"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Previous / Next Post Navigation */}
      <div className="border-t border-stone-200 dark:border-zinc-800 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevPost ? (
          <Link
            href={`/posts/${prevPost.slug}`}
            aria-label={`Previous Post: ${prevPost.title}`}
            className="group p-4 rounded-xl border border-stone-200 dark:border-zinc-800 hover:border-stone-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900 transition-colors flex flex-col justify-between"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-zinc-400 flex items-center gap-1 mb-1">
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Previous Post:{' '}
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
            aria-label={`Next Post: ${nextPost.title}`}
            className="group p-4 rounded-xl border border-stone-200 dark:border-zinc-800 hover:border-stone-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900 transition-colors flex flex-col justify-between text-right"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-zinc-400 flex items-center justify-end gap-1 mb-1">
              Next Post:{' '}<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
    </div>
  );
}
