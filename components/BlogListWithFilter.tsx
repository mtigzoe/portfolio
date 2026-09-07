'use client';

import React, { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/postsData';
import { BlogCard } from './BlogCard';
import { Search, X, Filter, ArrowUpDown } from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

interface BlogListProps {
  initialPosts: BlogPost[];
  allCategories: string[];
  limit?: number;
  showSearch?: boolean;
}

export function BlogListWithFilter({
  initialPosts,
  allCategories,
  limit,
  showSearch = true,
}: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const { themeMode } = useAccessibility();

  const filteredPosts = useMemo(() => {
    let result = [...initialPosts];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.categories.includes(selectedCategory));
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
  }, [initialPosts, selectedCategory, searchQuery, sortOrder, limit]);

  const topCategories = ['All', ...allCategories];

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
                placeholder="Search all 16 posts by topic, keyword, or project..."
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

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist">
            <span className="text-xs font-semibold text-stone-500 dark:text-zinc-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" aria-hidden="true" />
              Filter:
            </span>
            {topCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100'
                      : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200 dark:bg-zinc-800/80 dark:text-zinc-400 dark:border-zinc-700 dark:hover:bg-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Result Count Status */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-zinc-400 pt-1">
            <span>
              Showing <strong>{filteredPosts.length}</strong> of {initialPosts.length} posts
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>

            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
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

      {/* Grid of Posts */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, idx) => (
            <BlogCard key={post.id} post={post} featured={idx === 0 && !limit && selectedCategory === 'All' && !searchQuery} />
          ))}
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
              setSelectedCategory('All');
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
