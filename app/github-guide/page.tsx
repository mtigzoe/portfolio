'use client';

import React, { useState } from 'react';
import {
  Github,
  Check,
  Copy,
  Terminal,
  FolderGit2,
  FileCode,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export default function GitHubGuidePage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = `# 1. Initialize Git (if not already done)
git init

# 2. Stage and commit all files, including all 16 migrated posts
git add .
git commit -m "Initial commit: Personal website and 16 migrated blog posts from WordPress"

# 3. Create your repository on GitHub (e.g. named 'miriam-personal-website')
# Then link it as remote origin (replace YOUR-USERNAME with your actual GitHub handle):
git remote add origin https://github.com/YOUR-USERNAME/miriam-personal-website.git

# 4. Rename main branch and push
git branch -M main
git push -u origin main`;

  const devCommands = `# Install all project dependencies
npm install

# Run development server locally
npm run dev

# Build for production
npm run build`;

  const newPostTemplate = `---
title: "My New Engineering Post"
date: "${new Date().toISOString()}"
formattedDate: "${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}"
slug: "my-new-engineering-post"
aliases: []
categories: ["Accessibility", "Python"]
readingTime: "3 min read"
originalUrl: ""
author: "Miriam Lozneanu"
excerpt: "A brief summary of the new post."
---

Your content goes here in standard Markdown format!`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-zinc-800 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          <Github className="w-4 h-4" />
          <span>Repository Setup Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-zinc-100">
          Setting Up Your GitHub Repository
        </h1>
        <p className="text-lg text-stone-600 dark:text-zinc-400">
          Everything is organized for Git version control, local development, and one-click
          deployments.
        </p>
      </div>

      {/* Migration Summary Callout */}
      <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
        <h2 className="text-base font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
          <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          All 16 WordPress Posts Successfully Migrated
        </h2>
        <p className="text-sm text-emerald-950 dark:text-emerald-200/90 leading-relaxed">
          Every post from <code className="font-mono bg-emerald-100/80 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded">https://miriamsoftwareengineer.code.blog/</code> has
          been extracted and converted into two clean formats in this codebase:
        </p>
        <ul className="text-sm text-emerald-950 dark:text-emerald-200/90 space-y-1.5 pl-5 list-disc">
          <li>
            <strong>Standard Markdown:</strong> In <code className="font-mono bg-emerald-100/80 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded">/content/posts/*.md</code> with
            complete YAML frontmatter (title, date, categories, excerpt, original URL).
          </li>
          <li>
            <strong>TypeScript Dataset:</strong> In <code className="font-mono bg-emerald-100/80 dark:bg-emerald-900/60 px-1.5 py-0.5 rounded">/lib/postsData.ts</code> for
            instant type safety, search, sorting, and fast Next.js rendering.
          </li>
        </ul>
      </div>

      {/* Step 1: Exporting to GitHub */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-stone-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
            1
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            Exporting from AI Studio to GitHub
          </h2>
        </div>
        <p className="text-stone-700 dark:text-zinc-300 leading-relaxed">
          You have two simple ways to get this project into your GitHub account:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" /> Method A: Direct Export Menu
            </h3>
            <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
              In Google AI Studio, click the project menu / settings in the top corner and select{' '}
              <strong>&ldquo;Export to GitHub&rdquo;</strong> (or &ldquo;Download ZIP&rdquo;). This automatically creates a
              new repository on your GitHub account with all project files.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-zinc-100 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-600" /> Method B: Standard Git CLI
            </h3>
            <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
              If working via terminal or after extracting the ZIP, run standard Git commands to connect
              to your GitHub remote repository.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Git Terminal Commands */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-stone-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
            2
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            Git Terminal Commands
          </h2>
        </div>
        <p className="text-sm text-stone-600 dark:text-zinc-400">
          Create a new repository on <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">github.com/new</a>, then run these commands in your project folder:
        </p>

        <div className="relative rounded-xl border border-stone-800 bg-zinc-950 text-zinc-100 p-4 font-mono text-xs sm:text-sm overflow-x-auto">
          <button
            type="button"
            onClick={() => copyToClipboard(gitCommands, 1)}
            className="absolute top-3 right-3 px-2.5 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs flex items-center gap-1.5 transition-colors"
            aria-label="Copy Git commands"
          >
            {copiedIndex === 1 ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          <pre className="whitespace-pre">{gitCommands}</pre>
        </div>
      </section>

      {/* Step 3: Local Development */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-stone-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
            3
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            Running Locally
          </h2>
        </div>
        <div className="relative rounded-xl border border-stone-800 bg-zinc-950 text-zinc-100 p-4 font-mono text-xs sm:text-sm overflow-x-auto">
          <button
            type="button"
            onClick={() => copyToClipboard(devCommands, 2)}
            className="absolute top-3 right-3 px-2.5 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs flex items-center gap-1.5 transition-colors"
            aria-label="Copy local dev commands"
          >
            {copiedIndex === 2 ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          <pre className="whitespace-pre">{devCommands}</pre>
        </div>
      </section>

      {/* Step 4: Adding New Posts in the Future */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-stone-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
            4
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-zinc-100">
            How to Add Future Posts
          </h2>
        </div>
        <p className="text-stone-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
          Whenever you want to publish a new article, you can add a new Markdown file in{' '}
          <code className="font-mono bg-stone-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            /content/posts/my-new-post.md
          </code>{' '}
          using this frontmatter structure:
        </p>

        <div className="relative rounded-xl border border-stone-800 bg-zinc-950 text-zinc-100 p-4 font-mono text-xs sm:text-sm overflow-x-auto">
          <button
            type="button"
            onClick={() => copyToClipboard(newPostTemplate, 3)}
            className="absolute top-3 right-3 px-2.5 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs flex items-center gap-1.5 transition-colors"
            aria-label="Copy Markdown post template"
          >
            {copiedIndex === 3 ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          <pre className="whitespace-pre">{newPostTemplate}</pre>
        </div>
      </section>

      {/* Continuous Integration / Deployment */}
      <div className="p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
        <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-zinc-100 flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-amber-600" />
          GitHub Actions CI Workflow Included
        </h3>
        <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
          This repository includes a GitHub Actions configuration at{' '}
          <code className="font-mono bg-stone-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            .github/workflows/ci.yml
          </code>
          . Every time you push changes or new blog posts to your GitHub repository, automated builds
          and tests will verify that your site compiles smoothly!
        </p>
      </div>
    </div>
  );
}
