const fs = require('fs');
const path = require('path');

const posts = JSON.parse(fs.readFileSync('data/posts_clean.json', 'utf-8'));
const targetDir = path.join(process.cwd(), 'content', 'posts');
fs.mkdirSync(targetDir, { recursive: true });

posts.forEach((post) => {
  // Convert HTML paragraphs to Markdown
  let mdContent = post.contentHtml
    .replace(/<p class="wp-block-paragraph">/g, '')
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/&nbsp;/g, ' ')
    .trim();

  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
date: "${post.date}"
formattedDate: "${post.formattedDate}"
slug: "${post.slug}"
aliases: [${post.aliases.map((a) => `"${a}"`).join(', ')}]
categories: [${post.categories.map((c) => `"${c}"`).join(', ')}]
readingTime: "${post.readingTime}"
originalUrl: "${post.originalUrl}"
author: "${post.author.name}"
excerpt: "${post.excerpt.replace(/"/g, '\\"')}"
---

${mdContent}
`;

  const filePath = path.join(targetDir, `${post.slug}.md`);
  fs.writeFileSync(filePath, frontmatter);
});

console.log(`Generated ${posts.length} markdown post files in /content/posts/`);
