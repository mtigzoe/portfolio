const fs = require('fs');
const { redactAuthor } = require('./redact_author');

const raw = JSON.parse(fs.readFileSync('wp_posts_raw.json', 'utf-8'));

function decodeHtml(html) {
  if (!html) return '';
  return html
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#038;/g, '&')
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ');
}

function stripHtml(html) {
  return decodeHtml(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function calculateReadingTime(text) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

const categoryMapping = {
  'testing-my-application': ['Testing & QA', 'Python', 'Accessibility'],
  'crucial-communications': ['Career & Mentorship', 'SQL', 'Communication'],
  'defining-features': ['Software Engineering', 'Agile', 'GitHub'],
  'learning-process': ['Accessibility', 'Assistive Tech', 'Learning'],
  'accessibility-on-pair-programming': ['Accessibility', 'Pair Programming', 'Braille'],
  'making-my-plans': ['Software Engineering', 'Python', 'Architecture'],
  '19': ['Personal Story', 'Art & Tech', 'Accessibility'],
  'what-programming-languages-have-you-chosen-for-your-umbrella-project': ['Web Development', 'Python', 'Vue.js'],
  'apprenticeship-with-host-company': ['Career & Mentorship', 'Apprenticeship', 'Community'],
  'work-from-home': ['Remote Work', 'Productivity', 'Daily Routine'],
  'grow-up-with-the-internet': ['Technology', 'Reflections', 'History'],
  'umbrella-project': ['Accessibility', 'Calculus & Math', 'Projects'],
  'encouragement': ['Reflections', 'Advocacy', 'Personal Journey'],
  'product-lifecycle': ['Product Management', 'Software Lifecycle', 'Learning'],
  '11': ['Projects', 'Python & Flask', 'Debugging'],
  'about-me': ['About Me', 'Accessibility', 'Assistive Tech'],
};

const processed = raw.posts.map(post => {
  const authorName = post.author?.name || '';
  let title = redactAuthor(decodeHtml(post.title), authorName).trim();
  let slug = post.slug;
  const aliases = [];

  if (post.ID === 11 || slug === '11') {
    title = 'Challenges in Developing a YouTube Transcript Web Application';
    slug = 'challenges-youtube-transcript';
    aliases.push('11');
  } else if (post.ID === 19 || slug === '19') {
    title = 'Art to Software Engineering';
    slug = 'art-to-software-engineering';
    aliases.push('19');
  }

  // Raw HTML content cleanup
  let cleanContent = redactAuthor(decodeHtml(post.content), authorName)
    .replace(/<p class="wp-block-paragraph">\s*<\/p>/g, '')
    .trim();

  // If post 11, remove duplicate "Challenges" header paragraph if present
  if (post.ID === 11) {
    cleanContent = cleanContent.replace(/^<p class="wp-block-paragraph">Challenges\s*<\/p>/, '');
  }

  const plainText = stripHtml(cleanContent);
  const excerpt = stripHtml(redactAuthor(post.excerpt || cleanContent, authorName)).substring(0, 220) + '...';
  const readingTime = calculateReadingTime(plainText);
  const categories = categoryMapping[post.slug] || categoryMapping[slug] || ['Engineering'];

  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return {
    id: post.ID.toString(),
    title,
    slug,
    aliases,
    date: post.date,
    formattedDate,
    categories,
    readingTime,
    excerpt,
    contentHtml: cleanContent,
    plainText,
    originalUrl: '',
    author: {
      name: 'Author',
      role: 'DeafBlind Software Engineer',
      bio: 'Software engineer passionate about accessibility, Python, and creating technology accessible to everyone.'
    }
  };
});

// Sort chronologically descending (newest first)
processed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const tsFileContent = `// Migrated blog posts from the configured WordPress source
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  aliases: string[];
  date: string;
  formattedDate: string;
  categories: string[];
  readingTime: string;
  excerpt: string;
  contentHtml: string;
  plainText: string;
  originalUrl: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
}

export const BLOG_POSTS: BlogPost[] = ${JSON.stringify(processed, null, 2)};

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const normalized = slug.toLowerCase();
  return BLOG_POSTS.find(
    (p) => p.slug === normalized || p.aliases.some((a) => a.toLowerCase() === normalized)
  );
}

export function getAllCategories(): string[] {
  const cats = new Set<string>();
  BLOG_POSTS.forEach((p) => p.categories.forEach((c) => cats.add(c)));
  return Array.from(cats).sort();
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return BLOG_POSTS.slice(0, limit);

  return BLOG_POSTS
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => {
      const aOverlap = a.categories.filter((c) => current.categories.includes(c)).length;
      const bOverlap = b.categories.filter((c) => current.categories.includes(c)).length;
      return bOverlap - aOverlap;
    })
    .slice(0, limit);
}
`;

fs.writeFileSync('lib/postsData.ts', tsFileContent);
fs.writeFileSync('data/posts_clean.json', JSON.stringify(processed, null, 2));

console.log('Successfully generated lib/postsData.ts with', processed.length, 'posts');
