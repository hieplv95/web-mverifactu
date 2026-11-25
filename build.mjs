import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { layout, notFound, pages, translations } from './pages.mjs';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = new URL('dist/', import.meta.url);
const settings = JSON.parse(await readFile(new URL('site.json', import.meta.url), 'utf8'));
const origin = new URL(process.env.SITE_URL || settings.url).origin;

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

await write('404.html', layout(notFound, { ...settings, origin }));

// Địa chỉ tiếng Việt cũ, trước khi trang có nhiều ngôn ngữ.
for (const slug of ['phan-mem-tinh-tien-tiem-nail', 'cach-tinh-iva-tay-ban-nha', 'hoa-don-verifactu-tay-ban-nha']) {
  const url = `/vi/${slug}/`;
  await write(`${slug}/index.html`, `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><title>Mverifactu</title><link rel="canonical" href="${origin}${url}"><meta http-equiv="refresh" content="0; url=${url}"></head>
<body><a href="${url}">${origin}${url}</a></body></html>`);
}

const alternates = (page) => translations(page).map(({ t, path }) => `<xhtml:link rel="alternate" hreflang="${t.lang}" href="${origin}${path}"/>`).join('');
const sitemap = pages.map((page) => `  <url><loc>${origin}${page.path}</loc>${alternates(page)}</url>`).join('\n');
await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemap}\n</urlset>\n`);
await write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages in ${root}dist for ${origin}`);
