import { articles } from './articles.mjs';
export { articles };

const icons = {
  logo: '<path d="m3.5 6 6 12L15.4 6m-2.1 6 2.9 6L22 6"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  external: '<path d="M6 18 18 6M8 6h10v10"/>',
  receipt: '<path d="M5 3v18l3-2 4 2 4-2 3 2V3l-3 2-4-2-4 2-3-2Zm4 6h6m-6 4h6"/>',
  percent: '<path d="m5 19 14-14"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  chart: '<path d="M3 3v17h18M8 15v-3m5 3V8m5 7V5"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 17v4m-4 0h8"/>',
  qr: '<path d="M3 3h6v6H3zm12 0h6v6h-6zM3 15h6v6H3zm12-2v3h3v-3h3v8h-6v-2m-3-7H3"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
};

const icon = (name, className = '') => `<svg class="${className}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const brand = `<a class="brand" href="/" aria-label="Verifactura, trang chủ"><span class="brand-mark">${icon('logo')}</span><span>verifactura<span class="brand-dot">.</span></span></a>`;
const link = (label, href, style = 'primary', glyph = 'arrow') => `<a class="button ${style}" href="${href}">${label}${icon(glyph)}</a>`;
const emailLink = (email) => `mailto:${email}?subject=Verifactura%20%E2%80%93%20T%C6%B0%20v%E1%BA%A5n%20cho%20ti%E1%BB%87m%20nail`;
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const features = [
  ['receipt', 'Tính tiền tại quầy', 'Chọn dịch vụ, ghi nhận thợ thực hiện và phương thức thanh toán bằng thẻ hoặc tiền mặt.', '/phan-mem-tinh-tien-tiem-nail/'],
  ['percent', 'Tách IVA tự động', 'Tách tiền trước thuế và số IVA từ giá dịch vụ đã gồm thuế. Xem từng khoản ngay trên hóa đơn.', '/cach-tinh-iva-tay-ban-nha/'],
  ['qr', 'Hóa đơn VERI*FACTU', 'In hóa đơn có mã QR và theo dõi trạng thái gửi bản ghi đến Agencia Tributaria (AEAT).', '/hoa-don-verifactu-tay-ban-nha/'],
  ['chart', 'Báo cáo doanh thu', 'Đối soát doanh thu theo thời gian, dịch vụ, thợ và phương thức thanh toán. Xuất CSV để tổng hợp số liệu.', '#bao-cao'],
];

const questions = [
  ['Phần mềm Verifactura dành cho ai?', 'Verifactura có giao diện tiếng Việt, hướng đến các chủ tiệm nail tại Tây Ban Nha cần tính tiền theo dịch vụ, ghi nhận tiền mặt hoặc thẻ, và quản lý hóa đơn theo từng tiệm.'],
  ['Phần mềm tính thuế IVA như thế nào?', 'Bạn nhập giá dịch vụ đã gồm IVA. Khi lập hóa đơn, phần mềm tách giá trước thuế và số IVA theo mức thuế của tiệm. Ví dụ, với tổng tiền 36,30 € và mức IVA 21%, giá trước thuế là 30,00 € và IVA là 6,30 €.'],
  ['VERI*FACTU có thay cho việc nộp tờ khai IVA không?', 'Việc gửi bản ghi hóa đơn đến AEAT và việc nộp tờ khai IVA là hai nghiệp vụ riêng. Báo cáo và file CSV giúp bạn đối soát doanh thu và trao đổi số liệu với kế toán.'],
  ['Có thể in hóa đơn cho khách tại quầy không?', 'Có. Trên Android, Verifactura hỗ trợ máy in nhiệt 58 mm tương thích Bluetooth LE. Trên web, bạn có thể in qua hộp thoại của trình duyệt.'],
  ['Có thể thử phần mềm trước khi gửi hóa đơn thật không?', 'Bản minh họa trên trang này dùng dữ liệu mẫu. Khi thiết lập phần mềm, có thể dùng môi trường pruebas để kiểm tra việc gửi bản ghi trước khi chuyển tiệm sang môi trường thật.'],
];

const services = [
  ['gel', 'Sơn gel tay', 2420],
  ['pedi', 'Chăm sóc chân', 1210],
  ['remove', 'Tháo gel', 605],
  ['art', 'Trang trí móng', 484],
];

function demo() {
  return `<section class="demo-band" id="demo">
    <div class="container demo-layout">
      <div class="demo-intro">
        <p class="eyebrow">BẢN MINH HỌA</p>
        <h2>Thử tính tiền<br class="desktop-break"> một lượt khách.</h2>
        <p>Chọn dịch vụ và xem cách Verifactura tách IVA từ giá niêm yết. Hóa đơn mẫu sử dụng mức IVA 21%.</p>
        <a class="text-link" href="/cach-tinh-iva-tay-ban-nha/">Xem cách tính IVA ${icon('arrow')}</a>
      </div>
      <div class="checkout" data-demo>
        <div class="checkout-head"><span class="checkout-mark">${icon('logo')}</span><strong>Quầy tính tiền</strong><span class="demo-label">Dữ liệu mẫu</span></div>
        <div class="checkout-body">
          <div class="demo-services">
            <h3>Chọn dịch vụ</h3>
            <div class="service-grid">${services.map(([id, label, cents], index) => `<button class="service" type="button" data-service="${id}" data-cents="${cents}" aria-pressed="${index < 2}"><span class="service-check">${icon(index < 2 ? 'check' : 'plus')}</span><span data-service-name>${label}</span><strong>${(cents / 100).toFixed(2).replace('.', ',')} €</strong></button>`).join('')}</div>
            <fieldset class="payments"><legend>Hình thức thanh toán</legend><div><label><input type="radio" name="payment" value="Thẻ" checked><span>Thẻ</span></label><label><input type="radio" name="payment" value="Tiền mặt"><span>Tiền mặt</span></label></div></fieldset>
          </div>
          <div class="demo-summary">
            <h3>Đơn hàng mẫu</h3>
            <dl class="totals" aria-live="polite"><div><dt>Trước thuế</dt><dd data-base>30,00 €</dd></div><div><dt>IVA 21%</dt><dd data-tax>6,30 €</dd></div><div class="total"><dt>Tổng cộng</dt><dd data-total>36,30 €</dd></div></dl>
            <button class="button primary demo-submit" type="button" data-receipt>Xem hóa đơn mẫu ${icon('arrow')}</button>
          </div>
        </div>
        <dialog class="receipt-dialog" aria-labelledby="receipt-title">
          <form method="dialog"><button class="close-dialog" value="close" aria-label="Đóng hóa đơn mẫu">×</button></form>
          <span class="feature-icon">${icon('receipt')}</span><h2 id="receipt-title">Hóa đơn mẫu</h2>
          <p>Giao dịch minh họa. Bản ghi mẫu không được gửi đến AEAT.</p>
          <ul data-receipt-items></ul>
          <dl class="totals" data-receipt-totals></dl>
          <form method="dialog"><button class="button primary" value="close">Quay lại quầy</button></form>
        </dialog>
      </div>
    </div>
  </section>`;
}

export const home = {
  path: '/',
  title: 'Phần mềm tính tiền tiệm nail tại Tây Ban Nha | Verifactura',
  description: 'Verifactura là phần mềm tính tiền tiệm nail bằng tiếng Việt tại Tây Ban Nha. Tính IVA, in hóa đơn QR, gửi bản ghi VERI*FACTU đến AEAT và xem báo cáo doanh thu.',
  content: `
  <section class="hero container">
    <div class="hero-copy">
      <p class="eyebrow hero-kicker"><span class="flag" aria-hidden="true"></span> DÀNH CHO TIỆM NAIL TẠI TÂY BAN NHA</p>
      <h1>Phần mềm tính tiền <em>cho tiệm nail.</em></h1>
      <p class="hero-description">Chọn dịch vụ, tính thuế IVA và lập hóa đơn VERI*FACTU ngay tại quầy. Theo dõi doanh thu của tiệm trên giao diện tiếng Việt.</p>
      <div class="hero-actions">${link('Thử tính tiền', '#demo')}${link('Khám phá tính năng', '#tinh-nang', 'secondary')}</div>
      <div class="hero-platforms">${icon('monitor')}<span>Dùng trên web và Android</span></div>
    </div>
    <figure class="hero-visual">
      <img src="/assets/quay-tinh-tien-tiem-nail.webp" alt="Minh họa quầy tính tiền tiệm nail với máy tính bảng và máy in hóa đơn" width="1280" height="960" fetchpriority="high">
      <figcaption class="hero-receipt"><span class="receipt-icon">${icon('receipt')}</span><span><span class="receipt-caption">Tổng tiền đã gồm IVA</span><strong>36,30 €</strong></span></figcaption>
      <span class="image-note" aria-hidden="true">Ảnh minh họa</span>
    </figure>
  </section>

  <section class="features" id="tinh-nang">
    <div class="container section-block">
      <div class="section-heading"><p class="eyebrow">TÍNH NĂNG</p><h2>Từ quầy tính tiền đến báo cáo.</h2></div>
      <div class="feature-grid">${features.map(([glyph, title, desc, href]) => `<a class="feature" href="${href}"><span class="feature-icon">${icon(glyph)}</span><span class="feature-arrow">${icon('external')}</span><h3>${title}</h3><p>${desc}</p></a>`).join('')}</div>
    </div>
  </section>

  ${demo()}

  <section class="section-block container guides" id="huong-dan">
    <div class="section-heading"><p class="eyebrow">HƯỚNG DẪN CHO CHỦ TIỆM</p><h2>Hiểu rõ tiền, thuế và hóa đơn.</h2></div>
    <div class="guide-grid">${articles.map((article) => `<article class="guide"><a href="${article.path}"><span class="guide-category">${article.category}</span><h3>${article.heading}</h3><p>${article.summary}</p><span class="text-link">Đọc hướng dẫn ${icon('arrow')}</span></a></article>`).join('')}</div>
    <div class="report-callout" id="bao-cao"><span class="feature-icon">${icon('chart')}</span><div><h3>Đối soát cuối ngày hoặc cuối kỳ</h3><p>So sánh số tiền mặt và thẻ, xem doanh thu sau hoàn tiền, rồi xuất CSV với số hóa đơn, giá trước thuế và IVA để gửi kế toán.</p></div></div>
  </section>

  <section class="faq section-block" id="cau-hoi">
    <div class="container faq-layout">
      <div class="section-heading"><p class="eyebrow">HỎI ĐÁP</p><h2>Câu hỏi thường gặp</h2></div>
      <div class="faq-list">${questions.map(([question, answer], index) => `<details${index === 0 ? ' open' : ''}><summary>${question}<span>${icon('plus')}</span></summary><p>${answer}</p></details>`).join('')}</div>
    </div>
  </section>`,
};

function breadcrumbs(page) {
  return `<nav class="breadcrumbs" aria-label="Đường dẫn"><a href="/">Trang chủ</a>${icon('chevron')}<a href="/#huong-dan">Hướng dẫn</a>${icon('chevron')}<span aria-current="page">${page.category}</span></nav>`;
}

function articleContent(page) {
  return `<section class="article-hero"><div class="container article-inner">${breadcrumbs(page)}<p class="eyebrow">${page.category}</p><h1>${page.heading}</h1><p>${page.summary}</p></div></section>
    <div class="container article-layout"><article class="article-content">${page.body}</article>
    <aside class="article-aside"><div class="aside-card"><span class="feature-icon">${icon('receipt')}</span><h2>Thử Verifactura</h2><p>Xem một lượt tính tiền và tách IVA ngay trên trang.</p>${link('Mở bản minh họa', '/#demo')}</div>
    <nav class="related" aria-label="Hướng dẫn liên quan"><h2>Đọc thêm</h2>${articles.filter(({ path }) => path !== page.path).map(({ path, heading }) => `<a href="${path}">${heading}${icon('arrow')}</a>`).join('')}</nav></aside></div>`;
}

export function layout(page, { origin, email }) {
  const url = page.path && `${origin}${page.path}`;
  const socialImage = `${origin}/assets/verifactura-social.jpg`;
  const organization = { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Nails Trendy ES SL', url: origin, email };
  const schema = !url ? [] : page === home ? [organization, {
    '@type': 'WebSite', name: 'Verifactura', url: origin, inLanguage: 'vi', publisher: { '@id': organization['@id'] },
  }, {
    '@type': 'SoftwareApplication', name: 'Verifactura', url, operatingSystem: 'Web, Android', applicationCategory: 'BusinessApplication', description: page.description, inLanguage: 'vi', publisher: { '@id': organization['@id'] },
  }] : [organization, {
    '@type': 'Article', headline: page.heading, description: page.description, inLanguage: 'vi', mainEntityOfPage: url, author: { '@id': organization['@id'] }, publisher: { '@id': organization['@id'] },
  }, {
    '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${origin}/` },
      { '@type': 'ListItem', position: 2, name: page.heading, item: url },
    ],
  }];

  return `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f9f7f4">
  <title>${escape(page.title)}</title>
  <meta name="description" content="${escape(page.description)}">
  ${url ? `<link rel="canonical" href="${url}">
  <meta property="og:type" content="${page === home ? 'website' : 'article'}">
  <meta property="og:locale" content="vi_VN">
  <meta property="og:site_name" content="Verifactura">
  <meta property="og:title" content="${escape(page.title)}">
  <meta property="og:description" content="${escape(page.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${socialImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Quầy tính tiền minh họa của một tiệm nail">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }).replaceAll('<', '\\u003c')}</script>` : '<meta name="robots" content="noindex">'}
  <link rel="icon" href="/assets/favicon.png" type="image/png">
  <link rel="stylesheet" href="/assets/site.css">
  <script type="module" src="/assets/site.js"></script>
</head>
<body>
  <a href="#main" class="skip-link">Đến nội dung chính</a>
  <header class="site-header">
    <div class="container header-inner">
      ${brand}
      <button class="menu-toggle" aria-controls="site-nav" aria-expanded="false" type="button">${icon('menu')}<span class="sr-only">Mở menu</span></button>
      <nav class="site-nav" id="site-nav" aria-label="Điều hướng chính">
        <a href="/#tinh-nang">Tính năng</a><a href="/#demo">Dùng thử</a><a href="/#huong-dan">Hướng dẫn</a><a href="/#cau-hoi">Hỏi đáp</a>
        ${link('Liên hệ', '#lien-he', 'primary nav-cta', 'external')}
      </nav>
    </div>
  </header>
  <main id="main">${page.body ? articleContent(page) : page.content}</main>
  <footer class="site-footer" id="lien-he">
    <div class="container">
      <div class="footer-cta"><div><p class="eyebrow">LIÊN HỆ</p><h2>Trao đổi về nhu cầu của tiệm bạn.</h2><p>Gửi email cho Nails Trendy để tìm hiểu cách triển khai Verifactura.</p></div>${link('Gửi email', emailLink(email), 'footer-button', 'mail')}</div>
      <div class="footer-bottom">${brand}<span>Sản phẩm của Nails Trendy ES SL · Barcelona</span><a href="mailto:${email}">${email}</a></div>
    </div>
  </footer>
</body>
</html>`;
}
