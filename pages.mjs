import { company } from './content/company.mjs';
import { annex, appUrl, items, signature, title as declarationTitle } from './content/declaracion.mjs';
import { defaultLanguage, languages } from './content/index.mjs';
import { aeat, app } from './content/links.mjs';
import { featuredPlan, license, plans, vatRate } from './content/pricing.mjs';
import { qrPath, qrSize } from './qr.mjs';

const icons = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
};

const icon = (name) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const euro = (cents) => `${(cents / 100).toFixed(2).replace('.', ',')} €`;
const brand = (t) => `<a class="brand" href="${t.home}" aria-label="${t.ui.homeLabel}"><img src="/assets/mverifactu-logo.webp" alt="" width="360" height="403"><span>Mverifactu</span></a>`;
const mailLink = (email, subject) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;
const trialLink = (t, email) => mailLink(email, t.ui.trialSubject);

/** Mọi trang của mọi ngôn ngữ. Các bản dịch của cùng một trang có chung `id`. */
export const pages = languages.flatMap((t) => [
  { id: 'home', t, path: t.home, title: t.title, description: t.description },
  ...t.articles.map((article) => ({ ...article, t })),
  ...t.legal.pages.map((legal) => ({ ...legal, t, legal: true, title: `${legal.category} | Mverifactu`, heading: legal.category })),
]);
export const translations = (page) => languages.map((t) => pages.find((other) => other.t === t && other.id === page.id));

// [tên trên vé, giá mẫu đã gồm IVA (cent), chọn sẵn, ký hiệu]. Tên trên màn hình lấy từ bản dịch, cùng thứ tự.
const services = [
  ['Manicura gel', 2420, true, '✧'],
  ['Pedicura spa', 1210, true, '❋'],
  ['Uñas acrílicas', 3630, false, '◇'],
  ['Relleno acrílico', 3025, false, '◈'],
  ['Retirada de gel', 605, false, '✦'],
  ['Nail art', 484, false, '✧'],
];
const total = services.reduce((sum, [, cents, selected]) => sum + (selected ? cents : 0), 0);
const base = Math.round(total * 100 / 121);
const lines = (names) => services.map(([, cents, selected], index) => (selected ? `<p class="line"><span>${names[index]}</span><span>${euro(cents)}</span></p>` : '')).join('');

const qr = (t) => `<svg class="qr" viewBox="0 0 ${qrSize} ${qrSize}" shape-rendering="crispEdges" role="img" aria-label="${t.ui.qrLabel}"><path fill="currentColor" d="${qrPath}"/></svg>`;

const totals = (t) => `<dl class="totals"><div><dt>${t.demo.base}</dt><dd data-base>${euro(base)}</dd></div><div><dt>${t.demo.tax}</dt><dd data-tax>${euro(total - base)}</dd></div><div class="total"><dt>${t.demo.total}</dt><dd data-total>${euro(total)}</dd></div></dl>`;

/** Vé mẫu theo bố cục vé 58 mm của app. Luôn là tiếng Tây Ban Nha, như vé đưa cho khách. */
export const receipt = (t) => `<div class="receipt" lang="es">
  <p><b>IVA INCLUIDO</b><br><b>FACTURA SIMPLIFICADA</b><br>QR tributario:</p>
  ${qr(t)}
  <p>Factura verificable en la sede electrónica de la AEAT</p>
  <p class="receipt-shop">SALÓN DE MUESTRA</p>
  <p>B00000000</p>
  <p class="line"><span>Nº T26-000128</span><span>24/11/2026 18:40</span></p>
  <div class="receipt-lines" data-lines="receipt">${lines(services.map(([name]) => name))}</div>
  <p class="line receipt-total"><span>TOTAL</span><span data-total>${euro(total)}</span></p>
  <p class="line"><span>Base imponible</span><span data-base>${euro(base)}</span></p>
  <p class="line"><span>IVA 21%</span><span data-tax>${euro(total - base)}</span></p>
  <p class="line"><span>Pago</span><span data-payment>Tarjeta</span></p>
  <p class="receipt-sample">MUESTRA SIN VALOR FISCAL</p>
</div>`;

function demo(t) {
  const d = t.demo;
  return `<section class="container demo" id="demo" aria-label="${d.label}" data-demo data-idle="${d.idle}" data-empty="${d.empty}" data-done="${d.done}">
    <div class="till">
      <div class="till-services">
        <p class="till-note">${d.note}</p>
        <h2>${d.sell}</h2>
        <div class="tiles">${services.map(([name, cents, selected, glyph], index) => `<button class="tile" type="button" data-service data-name="${d.services[index]}" data-receipt="${name}" data-cents="${cents}" aria-pressed="${selected}"><span class="tile-glyph" aria-hidden="true">${glyph}</span><span class="tile-name">${d.services[index]}</span><span class="tile-price">${euro(cents)}</span><span class="tile-mark" aria-hidden="true">${icon('check')}</span></button>`).join('')}</div>
      </div>
      <div class="till-cart">
        <h2>${d.invoice}</h2>
        <div class="till-lines" data-lines="name">${lines(d.services)}</div>
        <fieldset class="payments"><legend>${d.payment}</legend><div><label><input type="radio" name="payment" value="Tarjeta" checked><span>${d.card}</span></label><label><input type="radio" name="payment" value="Efectivo"><span>${d.cash}</span></label></div></fieldset>
        ${totals(t)}
        <button class="button" type="button" data-issue>${d.issue}</button>
        <p class="till-status" data-status role="status">${d.idle}</p>
      </div>
    </div>
    <div class="paper" data-paper><div class="paper-sheet">${receipt(t)}</div></div>
  </section>`;
}

const weekHeights = [36, 41, 47, 52, 71, 85, 26];

const price = (cents) => euro(cents).replace(' ', '&nbsp;');
const withVat = (cents) => price(Math.round(cents * (100 + vatRate) / 100));
const fill = (text, values) => text.replace(/\{(\w+)\}/g, (_, key) => values[key]);
const checks = (items) => `<ul class="checks">${items.map((item) => `<li>${icon('check')}<span>${item}</span></li>`).join('')}</ul>`;

function pricing(t, email) {
  const p = t.pricing;
  const l = p.license;
  const plan = ({ name, text, items, extras }, index) => {
    const featured = index === featuredPlan;
    return `<li class="plan${featured ? ' featured' : ''}">
      ${featured ? `<span class="plan-badge">${p.featured}</span>` : ''}
      <h3>${name}</h3><p class="plan-text">${text}</p>
      <p class="plan-price"><strong>${price(plans[index])}</strong> ${p.perMonth}</p><p class="plan-vat">${fill(p.withVat, { price: withVat(plans[index]) })}</p>
      ${checks(items)}${extras ? `<div class="plan-extras"><p>${p.onlyHere}</p>${checks(extras)}</div>` : ''}
      <a class="button" href="${mailLink(email, fill(p.subject, { plan: name }))}">${fill(p.choose, { plan: name })}</a>
    </li>`;
  };
  return `<section class="section container pricing" id="pricing">
    <h2>${p.heading}</h2><p class="pricing-text">${p.text}</p>
    <ul class="plans">${p.plans.map(plan).join('')}</ul>
    <div class="license">
      <div class="license-head"><div><h3>${l.heading}</h3><p>${fill(l.text, prices)}</p></div><a class="button outline" href="${mailLink(email, l.subject)}">${l.buy}</a></div>
      ${checks(l.items)}
      <div class="license-after"><h4>${l.afterHeading}</h4>${l.after.map((text) => `<p>${fill(text, prices)}</p>`).join('')}</div>
      <h4>${l.faqHeading}</h4>
      <div class="accordion">${l.questions.map(([question, answer]) => `<details><summary>${question}</summary><p>${fill(answer, prices)}</p></details>`).join('')}</div>
    </div>
  </section>`;
}

function homeContent(t, email) {
  const { deadlines, flow, report } = t;
  const deadline = (date, label, until) => `<div class="deadline"><strong>${date}</strong><p>${label}</p><span data-until="${until}" data-days="${deadlines.days}" data-day="${deadlines.day}" data-past="${deadlines.past}" hidden></span></div>`;
  const step = (index, mark, card) => `<li><span class="flow-mark">${mark}</span><h3>${flow.steps[index][0]}</h3><p>${flow.steps[index][1]}</p>${card}</li>`;
  const record = (number, received) => `<div><span>${number}</span><span class="pill${received ? '' : ' waiting'}">${received ? flow.received : flow.waiting}</span></div>`;
  return `
  <section class="hero"><div class="container hero-layout">
    <h1>${t.hero.lines.map((line) => line.replaceAll(' ', '&nbsp;')).join('<br>')}</h1>
    <div><p>${t.hero.text}</p>
    <div class="hero-actions"><a class="button light" href="${trialLink(t, email)}">${t.ui.trial}</a><a class="hero-link" href="#demo">${t.hero.demoLink}</a></div></div>
  </div></section>

  ${demo(t)}

  <section class="section container deadlines">
    <div><h2>${deadlines.heading}</h2><p>${deadlines.text} <a href="${aeat.deadline}">${deadlines.source}</a></p></div>
    <div class="deadline-grid">${deadline(deadlines.dates[0], deadlines.company, '2027-01-01')}${deadline(deadlines.dates[1], deadlines.selfEmployed, '2027-07-01')}</div>
  </section>

  <section class="section tinted" id="invoices"><div class="container">
    <h2>${flow.heading}</h2>
    <ol class="flow">
      ${step(0, '1', `<div class="flow-card rows"><div><span>${t.demo.base}</span><b>30,00 €</b></div><div><span>${t.demo.tax}</span><b>6,30 €</b></div><div><b>${flow.customerPays}</b><b>36,30 €</b></div></div>`)}
      ${step(1, '2', `<div class="flow-card">${qr(t)}<p><b>T26-000128</b>${flow.invoiceTypes}</p></div>`)}
      ${step(2, icon('check'), `<div class="flow-card rows">${record('T26-000128', false)}${record('T26-000127', true)}${record('T26-000126', true)}</div>`)}
    </ol>
  </div></section>

  <section class="section container report" id="reports">
    <div class="chart"><p>${report.chart}</p><strong>3.418,60 €</strong><div class="bars" aria-hidden="true">${weekHeights.map((height, index) => `<div${height === 85 ? ' class="best"' : ''}><i style="height:${height}%"></i>${report.days[index]}</div>`).join('')}</div><div class="split"><span>${report.card}</span><span>${report.cash}</span></div></div>
    <div><h2>${report.heading}</h2><ul>${report.items.map((item) => `<li>${icon('check')}<span>${item}</span></li>`).join('')}</ul></div>
  </section>

  <section class="section container specs"><h2>${t.specs.heading}</h2><dl>${t.specs.rows.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join('')}</dl></section>

  ${pricing(t, email)}

  <section class="section tinted" id="guides"><div class="container">
    <h2>${t.guidesHeading}</h2>
    <ul class="guides">${t.articles.map(({ path, heading, summary }) => `<li><a href="${path}"><h3>${heading}</h3><p>${summary}</p>${icon('arrow')}</a></li>`).join('')}</ul>
  </div></section>

  <section class="section container faq" id="faq">
    <h2>${t.faqHeading}</h2>
    <div class="accordion">${t.questions.map(([question, answer], index) => `<details${index === 0 ? ' open' : ''}><summary>${question}</summary><p>${answer}</p></details>`).join('')}</div>
  </section>`;
}

function articleContent(page) {
  const { t } = page;
  const ui = t.articleUi;
  return `<section class="article-hero"><div class="container">
      <nav class="breadcrumbs" aria-label="${ui.breadcrumbs}"><a href="${t.home}">${ui.home}</a>${icon('chevron')}<a href="${t.home}#guides">${ui.guides}</a>${icon('chevron')}<span aria-current="page">${page.category}</span></nav>
      <h1>${page.heading}</h1><p>${page.summary}</p>
    </div></section>
    <div class="container article-layout"><article class="article-content">${page.body}</article>
    <aside><div class="aside-card"><h2>${ui.tryHeading}</h2>${totals(t)}<a class="button" href="${t.home}#demo">${ui.tryLink}</a></div>
    <nav class="related" aria-label="${ui.related}"><h2>${ui.related}</h2>${t.articles.filter(({ path }) => path !== page.path).map(({ path, heading }) => `<a href="${path}">${heading}${icon('arrow')}</a>`).join('')}</nav></aside></div>`;
}

const prices = Object.fromEntries(['price', 'renewal', 'recovery'].flatMap((key) => [[key, price(license[key])], [`${key}Vat`, withVat(license[key])]]));

function declarationBody({ intro, appLink, t }) {
  const list = (entries, letters) => `<dl class="article-definitions">${entries.map(([term, value], index) => `<dt>${letters ? `${String.fromCharCode(97 + index)}) ` : ''}${term}</dt><dd>${value}</dd>`).join('')}</dl>`;
  return `${signature.date && signature.place ? '' : `<p class="article-note"><strong>${t.legal.declarationDraft}</strong></p>`}
    <p>${intro} <a href="${appUrl}">${appLink}</a>.</p>
    <div lang="es"><h2>${declarationTitle}</h2>${list(items, true)}<h2>Anexo</h2>${list(annex)}</div>`;
}

function legalContent(page, email) {
  const { t } = page;
  const { legal } = t;
  const registry = company.registry ? `<dt>${legal.registryLabel}</dt><dd>${company.registry}</dd>` : '';
  const body = fill(page.id === 'declaration' ? declarationBody(page) : page.body, { ...company, ...prices, email, registry });
  return `<section class="article-hero"><div class="container">
      <nav class="breadcrumbs" aria-label="${t.articleUi.breadcrumbs}"><a href="${t.home}">${t.articleUi.home}</a>${icon('chevron')}<span aria-current="page">${page.category}</span></nav>
      <h1>${page.heading}</h1><p>${page.description}</p>
    </div></section>
    <div class="container article-layout"><article class="article-content">${body}<p class="legal-updated">${page.updated ?? legal.updated}. ${legal.precedence}</p></article>
    <aside><nav class="related legal-related" aria-label="${legal.navLabel}"><h2>${legal.navLabel}</h2>${legal.pages.map(({ path, category }) => `<a href="${path}"${path === page.path ? ' aria-current="page"' : ''}>${category}${icon('arrow')}</a>`).join('')}</nav></aside></div>`;
}

function legalNav(page) {
  const { legal } = page.t;
  const cookies = legal.pages.find(({ id }) => id === 'cookies');
  const links = [...legal.pages.map(({ path, category }) => [path, category]), [`${cookies.path}#preferences`, legal.preferences]];
  return `<nav class="legal-nav" aria-label="${legal.navLabel}"><ul>${links.map(([path, label]) => `<li><a href="${path}"${path === page.path ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}</ul></nav>`;
}

/** 404 dùng ngôn ngữ mặc định, nút đổi ngôn ngữ trỏ về trang chủ của từng ngôn ngữ. */
export const notFound = {
  id: 'not-found',
  t: defaultLanguage,
  title: defaultLanguage.notFound.title,
  description: defaultLanguage.notFound.text,
};

function notFoundContent({ home, notFound: text }) {
  return `<section class="container not-found"><h1>${text.heading}</h1><p>${text.text}</p><a class="button" href="${home}">${text.link}</a></section>`;
}

function languageNav(page) {
  const links = page.path ? translations(page) : languages.map((t) => ({ t, path: t.home }));
  return `<nav class="languages" aria-label="${page.t.ui.language}">${links.map(({ t, path }) => `<a href="${path}" hreflang="${t.lang}" lang="${t.lang}" title="${t.name}"${t === page.t ? ' aria-current="true"' : ''}><span aria-hidden="true">${t.lang.toUpperCase()}</span><span class="sr-only">${t.name}</span></a>`).join('')}</nav>`;
}

function structuredData(page, origin, email) {
  const { t } = page;
  const url = `${origin}${page.path}`;
  const organization = { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Nails Trendy ES SL', url: origin, email };
  const publisher = { '@id': organization['@id'] };
  const graph = page.id === 'home' ? [organization, {
    '@type': 'WebSite', name: 'Mverifactu', url, inLanguage: t.lang, publisher,
  }, {
    '@type': 'SoftwareApplication', name: 'Mverifactu', url, operatingSystem: 'Web, Android', applicationCategory: 'BusinessApplication', description: page.description, inLanguage: languages.map(({ lang }) => lang), publisher,
  }] : page.legal ? [organization, {
    '@type': 'WebPage', name: page.heading, description: page.description, inLanguage: t.lang, url, publisher,
  }] : [organization, {
    '@type': 'Article', headline: page.heading, description: page.description, inLanguage: t.lang, mainEntityOfPage: url, author: publisher, publisher,
  }, {
    '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.articleUi.home, item: `${origin}${t.home}` },
      { '@type': 'ListItem', position: 2, name: page.heading, item: url },
    ],
  }];
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c');
}

function searchTags(page, origin, email) {
  const { t } = page;
  const url = `${origin}${page.path}`;
  const versions = translations(page);
  const original = versions.find((version) => version.t === defaultLanguage);
  return `<link rel="canonical" href="${url}">
  ${versions.map((version) => `<link rel="alternate" hreflang="${version.t.lang}" href="${origin}${version.path}">`).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${origin}${original.path}">
  <meta property="og:type" content="${page.id === 'home' || page.legal ? 'website' : 'article'}">
  <meta property="og:locale" content="${t.ogLocale}">
  ${languages.filter((other) => other !== t).map((other) => `<meta property="og:locale:alternate" content="${other.ogLocale}">`).join('\n  ')}
  <meta property="og:site_name" content="Mverifactu">
  <meta property="og:title" content="${escape(page.title)}">
  <meta property="og:description" content="${escape(page.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${origin}/assets/mverifactu-social-${t.lang}.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${escape(t.ui.socialAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${structuredData(page, origin, email)}</script>`;
}

export function layout(page, { origin, email }) {
  const { t } = page;
  const { ui } = t;
  const content = page.id === 'home' ? homeContent(t, email) : page.legal ? legalContent(page, email) : page.body ? articleContent(page) : notFoundContent(t);

  return `<!doctype html>
<html lang="${t.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0044c0">
  <title>${escape(page.title)}</title>
  <meta name="description" content="${escape(page.description)}">
  ${page.path ? searchTags(page, origin, email) : '<meta name="robots" content="noindex">'}
  <link rel="icon" href="/assets/favicon.png" type="image/png">
  <link rel="preload" href="/assets/be-vietnam-800.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/site.css">
  <script type="module" src="/assets/site.js"></script>
</head>
<body>
  <a href="#main" class="skip-link">${ui.skip}</a>
  <header class="site-header">
    <div class="container header-inner">
      ${brand(t)}
      <nav class="site-nav" id="site-nav" aria-label="${ui.menuLabel}">
        ${Object.entries(ui.nav).map(([id, label]) => `<a href="${t.home}#${id}">${label}</a>`).join('')}
        <a class="button login" href="${app}/">${ui.login}</a>
        <a class="button" href="${trialLink(t, email)}">${ui.trial}</a>
      </nav>
      ${languageNav(page)}
      <button class="menu-toggle" aria-controls="site-nav" aria-expanded="false" type="button" data-open="${ui.menuOpen}" data-close="${ui.menuClose}">${icon('menu')}<span class="sr-only">${ui.menuOpen}</span></button>
    </div>
  </header>
  <main id="main">${content}</main>
  <footer class="site-footer" id="contact">
    <div class="container">
      <div class="footer-cta"><div><h2>${t.footer.heading}</h2><p>${t.footer.text}</p></div><a class="button" href="${trialLink(t, email)}">${t.footer.cta}</a></div>
      <div class="footer-bottom">${brand(t)}<span>${t.footer.maker}</span><a href="mailto:${email}">${email}</a></div>
      <div class="footer-legal">${legalNav(page)}<p>© ${new Date().getFullYear()} ${company.name}. ${t.legal.rights}</p></div>
    </div>
  </footer>
</body>
</html>`;
}
