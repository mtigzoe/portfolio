import { NextResponse } from 'next/server';
import { BLOG_POSTS } from '@/lib/postsData';

export const dynamic = 'force-static';

export async function GET() {
  const siteUrl = (process.env.APP_URL || '').replace(/\/$/, '');
  const feedItems = BLOG_POSTS.map((post) => {
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/posts/${post.slug}</link>
      <guid>${siteUrl}/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${post.author.name}]]></dc:creator>
      <description><![CDATA[${post.excerpt}]]></description>
      <content:encoded><![CDATA[${post.contentHtml}]]></content:encoded>
      ${post.categories.map((c) => `<category><![CDATA[${c}]]></category>`).join('\n')}
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Software Engineering Blog</title>
    <link>${siteUrl}</link>
    <description>Engineering blog by a DeafBlind software engineer.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${feedItems}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

