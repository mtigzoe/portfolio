'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAccessibility } from './AccessibilityProvider';
import {
  BookOpen,
  FolderGit2,
  User,
  Github,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Type,
  ExternalLink,
} from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const { fontSize, setFontSize, themeMode, setThemeMode } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Blog Posts (16)' },
    { href: '/projects', label: 'Projects' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname.startsWith('/posts');
    return pathname.startsWith(href);
  };

  const navBgClass =
    themeMode === 'dark'
      ? 'bg-zinc-900/90 border-zinc-800'
      : themeMode === 'high-contrast'
      ? 'bg-black border-white'
      : 'bg-white/90 border-stone-200';

  const linkActiveBg =
    themeMode === 'dark'
      ? 'bg-zinc-800 text-white font-medium'
      : themeMode === 'high-contrast'
      ? 'bg-white text-black font-bold'
      : 'bg-stone-100 text-stone-900 font-semibold';

  const linkInactive =
    themeMode === 'dark'
      ? 'text-zinc-300 hover:text-white hover:bg-zinc-800/50'
      : themeMode === 'high-contrast'
      ? 'text-white hover:underline'
      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50';

  return (
    <>
      {/* Accessibility Skip Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:font-bold focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300 rounded"
      >
        Skip to main content
      </a>

      <header
        id="site-header"
        className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors ${navBgClass}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-stone-500 rounded-lg p-1"
              aria-label="Software Engineering Blog, Blog Posts"
            >
              <div className="w-11 h-11 rounded-lg bg-stone-900 text-stone-100 flex flex-col items-center justify-center font-mono text-xs font-bold border border-stone-700 shadow-xs group-hover:scale-105 transition-transform">
                <span>SE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg tracking-tight flex items-center gap-2">
                  Software Engineering Blog
                </span>
                <span className="text-xs text-stone-500 dark:text-zinc-400 font-medium tracking-normal">
                  DeafBlind Software Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5" aria-label="Primary Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm transition-colors ${
                    isActive(link.href) ? linkActiveBg : linkInactive
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Accessibility & Theme Controls */}
            <div className="flex items-center gap-2">
              {/* Text Size Adjuster */}
              <div
                className="hidden sm:flex items-center rounded-md border p-0.5 text-xs font-medium border-stone-300 dark:border-zinc-700"
                role="group"
                aria-label="Text size adjustments"
              >
                <button
                  type="button"
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 rounded transition-colors ${
                    fontSize === 'normal'
                      ? 'bg-stone-900 text-white dark:bg-zinc-200 dark:text-zinc-900'
                      : 'hover:bg-stone-200 dark:hover:bg-zinc-800'
                  }`}
                  aria-label="Default text size"
                  title="Default font size"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-1 rounded transition-colors text-sm ${
                    fontSize === 'large'
                      ? 'bg-stone-900 text-white dark:bg-zinc-200 dark:text-zinc-900'
                      : 'hover:bg-stone-200 dark:hover:bg-zinc-800'
                  }`}
                  aria-label="Large text size"
                  title="Large font size"
                >
                  A+
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2 py-1 rounded transition-colors text-base font-bold ${
                    fontSize === 'xlarge'
                      ? 'bg-stone-900 text-white dark:bg-zinc-200 dark:text-zinc-900'
                      : 'hover:bg-stone-200 dark:hover:bg-zinc-800'
                  }`}
                  aria-label="Extra large text size"
                  title="Extra-large font size"
                >
                  A++
                </button>
              </div>

              {/* Theme / Contrast Mode Toggle */}
              <button
                type="button"
                onClick={() => {
                  if (themeMode === 'light') setThemeMode('dark');
                  else if (themeMode === 'dark') setThemeMode('high-contrast');
                  else setThemeMode('light');
                }}
                className="p-2.5 rounded-lg border border-stone-300 dark:border-zinc-700 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-medium"
                aria-label={`Toggle contrast mode. Current: ${themeMode}`}
                title={`Theme: ${themeMode} (click to cycle)`}
              >
                {themeMode === 'light' && <Moon className="w-4 h-4" aria-hidden="true" />}
                {themeMode === 'dark' && <Sparkles className="w-4 h-4 text-amber-300" aria-hidden="true" />}
                {themeMode === 'high-contrast' && <Sun className="w-4 h-4" aria-hidden="true" />}
                <span className="hidden lg:inline capitalize">{themeMode}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-lg border border-stone-300 dark:border-zinc-700 hover:bg-stone-100 dark:hover:bg-zinc-800"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden border-t px-4 pt-3 pb-6 space-y-2 bg-stone-50 dark:bg-zinc-900 border-stone-200 dark:border-zinc-800"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href) ? linkActiveBg : linkInactive
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Font Size Controls */}
            <div className="pt-4 border-t border-stone-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Reading Text Size:
              </span>
              <div className="flex gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setFontSize('normal')}
                  className={`px-3 py-1.5 rounded border ${
                    fontSize === 'normal' ? 'bg-stone-900 text-white' : 'bg-white text-stone-800'
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('large')}
                  className={`px-3 py-1.5 rounded border ${
                    fontSize === 'large' ? 'bg-stone-900 text-white' : 'bg-white text-stone-800'
                  }`}
                >
                  Large
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('xlarge')}
                  className={`px-3 py-1.5 rounded border ${
                    fontSize === 'xlarge' ? 'bg-stone-900 text-white' : 'bg-white text-stone-800'
                  }`}
                >
                  XL
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
