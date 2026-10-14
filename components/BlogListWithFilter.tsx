'use client';

import React, { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/postsData';
import { BlogCard } from './BlogCard';
import { Search, X, ArrowUpDown, ChevronDown } from 'lucide-react';

interface BlogListProps {
  initialPosts: BlogPost[];
  allCategories: string[];
  limit?: number;
  showSearch?: boolean;
}

export function BlogListWithFilter({
  initialPosts,
  limit,
  showSearch = true,
}: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [expandedMonths, setExpandedMonths] = useState<Record<string, boolean>>({});

  const years = useMemo(() => Array.from(new Set(
    initialPosts.map((post) => new Date(post.date).getUTCFullYear().toString())
  )).sort((a, b) => Number(b) - Number(a)), [initialPosts]);

  const filteredPosts = useMemo(() => {
    let result = [...initialPosts];

    if (selectedYear !== 'All') {
      result = result.filter((post) =>
        new Date(post.date).getUTCFullYear().toString() === selectedYear
      );
    }

    // Search query filter (matches title, excerpt, categories, or plain text)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.plainText.toLowerCase().includes(q) ||
          p.categories.some((c) => c.toLowerCase().includes(q))
      );
    }

    // Sort
    result.sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
    });

    if (limit && limit > 0) {
      return result.slice(0, limit);
    }

    return result;
  }, [initialPosts, selectedYear, searchQuery, sortOrder, limit]);

  const monthGroups = useMemo(() => {
    const groups = new Map<string, { key: string; label: string; posts: BlogPost[] }>();
    for (const post of filteredPosts) {
      const date = new Date(post.date);
      const key = date.toISOString().slice(0, 7);
      if (!groups.has(key)) {
        groups.set(key, {
          key,
          label: date.toLocaleDateString('en-US', {
            month: 'long', year: 'numeric', timeZone: 'UTC',
          }),
          posts: [],
        });
      }
      groups.get(key)!.posts.push(post);
    }
    return Array.from(groups.values());
  }, [filteredPosts]);

  return (
    <div className="space-y-6">
      {showSearch && (
        <div className="space-y-4">
          {/* Search bar & Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-zinc-500"
                aria-hidden="true"
              />
              <input
                id="blog-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts by topic, keyword, or project..."
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-stone-900 dark:text-zinc-100 placeholder-stone-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Search posts"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 dark:hover:text-zinc-200"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="blog-year-select" className="text-xs font-semibold text-stone-500 dark:text-zinc-400 uppercase tracking-wider">
                Year:
              </label>
              <select
                id="blog-year-select"
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setExpandedMonths({});
                }}
                className="px-3 py-2 text-sm rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-stone-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="All">All years</option>
                {years.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>

            {/* Sort Order Selector */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort-order-select"
                className="text-xs font-semibold text-stone-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1"
              >
                <ArrowUpDown className="w-3.5 h-3.5" aria-hidden="true" />
                Sort:
              </label>
              <select
                id="sort-order-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
                className="px-3 py-2 text-sm rounded-lg border border-stone-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-stone-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Result Count Status */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-zinc-400 pt-1">
            <span role="status" aria-live="polite">
              Showing <strong>{filteredPosts.length}</strong> of {initialPosts.length} posts
              {selectedYear !== 'All' && ` from ${selectedYear}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>

            {(selectedYear !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedYear('All');
                  setExpandedMonths({});
                  setSearchQuery('');
                }}
                className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* Expandable monthly archives */}
      {filteredPosts.length > 0 ? (
        <div className="space-y-6">
          {monthGroups.map((group) => {
            const expanded = expandedMonths[group.key] ??
              (searchQuery.trim() !== '' || selectedYear !== 'All');
            const panelId = `month-posts-${group.key}`;
            const headingId = `month-heading-${group.key}`;
            return (
              <section key={group.key} aria-labelledby={headingId}>
                <h2 id={headingId} className="text-xl sm:text-2xl font-serif font-bold">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setExpandedMonths((current) => ({
                      ...current, [group.key]: !expanded,
                    }))}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left rounded-lg border border-stone-300 dark:border-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
                  >
                    <span>{group.label} <span className="text-sm font-normal">({group.posts.length} {group.posts.length === 1 ? 'article' : 'articles'})</span></span>
                    <ChevronDown aria-hidden="true" className={`w-5 h-5 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                  </button>
                </h2>
                <div id={panelId} hidden={!expanded}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {group.posts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-xl border border-dashed border-stone-300 dark:border-zinc-800 bg-stone-50/50 dark:bg-zinc-900/30">
          <p className="text-stone-700 dark:text-zinc-300 font-medium mb-2">No matching posts found</p>
          <p className="text-sm text-stone-500 dark:text-zinc-400 mb-4">
            Try searching for another topic such as &ldquo;python&rdquo;, &ldquo;braille&rdquo;, &ldquo;pytest&rdquo;, or &ldquo;accessibility&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedYear('All');
              setExpandedMonths({});
            }}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
