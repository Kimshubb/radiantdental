// client/scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { blogPosts } from '../src/components/blog-data.js'; // ✅ Adjusted to your structure

const baseUrl = 'https://radiantdental.co.ke';
const staticRoutes = ['/', '/about', '/contact', '/blog'];

const blogRoutes = blogPosts.map(post => `/blog/${post.id}`);

const allRoutes = [...staticRoutes, ...blogRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    route => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`
  )
  .join('')}
</urlset>
`;

fs.writeFileSync(path.resolve('./public', 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated at public/sitemap.xml');

