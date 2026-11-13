import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { articles, home, layout } from './pages.mjs';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = new URL('dist/', import.meta.url);
const settings = JSON.parse(await readFile(new URL('site.json', import.meta.url), 'utf8'));
const origin = new URL(process.env.SITE_URL || settings.url).origin;
const pages = [home, ...articles];

async function write(path, content) {
  const file = new URL(path, output);
  await mkdir(new URL('.', file), { recursive: true });
  await writeFile(file, content, 'utf8');
}

await mkdir(output, { recursive: true });
await cp(new URL('public/', import.meta.url), output, { recursive: true });

for (const page of pages) {
  await write(`${page.path.slice(1)}index.html`, layout(page, { ...settings, origin }));
}

await write('404.html', layout({
  title: 'Không tìm thấy trang | Verifactura',
  description: 'Trang bạn tìm không còn ở địa chỉ này.',
  content: '<section class="container article-content"><h1>Không tìm thấy trang</h1><p><a href="/">Về trang chủ Verifactura</a></p></section>',
}, { ...settings, origin }));

const sitemap = pages.map(({ path }) => `  <url><loc>${origin}${path}</loc></url>`).join('\n');
await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
await write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages in ${root}dist for ${origin}`);
