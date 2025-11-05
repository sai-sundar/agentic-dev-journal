import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('journal');
  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Dev Journal - Coding with AI Agents',
    description: 'Musings on coding with AI agents, exploring new applications, and documenting my development journey.',
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/journal/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
