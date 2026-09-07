# Miriam Lozneanu – Personal Website & Engineering Blog

Welcome to the personal website and technical engineering blog of **Miriam Lozneanu**, a DeafBlind software engineer passionate about accessibility, Python development, assistive technology, and building software that improves lives.

This project was built with **Next.js 15 (App Router)** and **Tailwind CSS**, migrating all **16 blog posts** originally published on WordPress at [miriamsoftwareengineer.code.blog](https://miriamsoftwareengineer.code.blog/).

---

## Key Features

- **Full Post Migration:** All 16 original WordPress posts preserved with full HTML formatting, publish dates, reading times, tags, and original permalinks.
- **Dual Content Storage:**
  - Standard Markdown files with YAML frontmatter in `/content/posts/*.md`
  - Typed TypeScript dataset in `/lib/postsData.ts` for instant search and static generation
- **Accessibility First:**
  - High-contrast text and WCAG AAA compliant color ratios
  - Built-in text size adjuster (Normal, Large, Extra Large)
  - Dark mode and High Contrast mode toggle
  - Semantic HTML5 with keyboard skip-to-content links
  - Refreshable Braille display and screen reader friendly structure
- **Interactive Blog Search & Filtering:** Filter by topic/category, live search query, and sort by date.
- **Project Case Studies:** Detailed architectural breakdowns of the *Accessible TI-89 Calculator*, *YouTube Transcript Web Extractor*, and *Autonomous Vehicle Interface Concept*.
- **RSS Feed:** Live XML RSS endpoint at `/api/rss` for subscribers and RSS readers.

---

## 16 Migrated Blog Posts

| # | Title | Date | Categories | Slug |
|---|---|---|---|---|
| 1 | Testing my Application | April 8, 2022 | Testing & QA, Python, Accessibility | `testing-my-application` |
| 2 | Crucial Communications | March 30, 2022 | Career & Mentorship, SQL, Communication | `crucial-communications` |
| 3 | Defining Features | March 30, 2022 | Software Engineering, Agile, GitHub | `defining-features` |
| 4 | Learning Process | March 22, 2022 | Accessibility, Assistive Tech, Learning | `learning-process` |
| 5 | Accessibility on Pair Programming | March 11, 2022 | Accessibility, Pair Programming, Braille | `accessibility-on-pair-programming` |
| 6 | Making My Plans | March 7, 2022 | Software Engineering, Python, Architecture | `making-my-plans` |
| 7 | Art to Software Engineering | February 25, 2022 | Personal Story, Art & Tech, Accessibility | `art-to-software-engineering` |
| 8 | What programming languages have you chosen for your Umbrella Project? | February 24, 2022 | Web Development, Python, Vue.js | `what-programming-languages-have-you-chosen-for-your-umbrella-project` |
| 9 | Apprenticeship with Host Company | February 14, 2022 | Career & Mentorship, Apprenticeship, Community | `apprenticeship-with-host-company` |
| 10 | Work From Home | February 11, 2022 | Remote Work, Productivity, Daily Routine | `work-from-home` |
| 11 | Grow Up with the Internet | February 11, 2022 | Technology, Reflections, History | `grow-up-with-the-internet` |
| 12 | Umbrella Project | February 7, 2022 | Accessibility, Calculus & Math, Projects | `umbrella-project` |
| 13 | Encouragement | January 29, 2022 | Reflections, Advocacy, Personal Journey | `encouragement` |
| 14 | Product Lifecycle | January 29, 2022 | Product Management, Software Lifecycle | `product-lifecycle` |
| 15 | Challenges in Developing a YouTube Transcript Web Application | January 28, 2022 | Projects, Python & Flask, Debugging | `challenges-youtube-transcript` |
| 16 | About Me | January 17, 2022 | About Miriam, Accessibility, Assistive Tech | `about-me` |

---

## Setting Up Your GitHub Repository

### 1. Direct Export via AI Studio
In Google AI Studio, click the project menu in the top right and select **Export to GitHub**.

### 2. Manual Git Push
```bash
# Initialize and commit
git init
git add .
git commit -m "Migrate 16 blog posts from WordPress to Next.js personal website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/miriam-personal-website.git

# Push to main branch
git branch -M main
git push -u origin main
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

---

## How to Add New Blog Posts

Add a new markdown file in `/content/posts/your-slug.md`:

```markdown
---
title: "Your Post Title"
date: "2026-09-07T00:00:00.000Z"
formattedDate: "September 7, 2026"
slug: "your-slug"
aliases: []
categories: ["Accessibility", "Python"]
readingTime: "4 min read"
originalUrl: ""
author: "Miriam Lozneanu"
excerpt: "A brief summary of your post."
---

Your content goes here!
```

---

## License & Credits

- Content & Articles &copy; Miriam Lozneanu
- Migrated from [miriamsoftwareengineer.code.blog](https://miriamsoftwareengineer.code.blog/)
