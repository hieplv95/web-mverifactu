import legal from './legal/en.mjs';
import { aeat } from './links.mjs';

export default {
  lang: 'en',
  name: 'English',
  ogLocale: 'en_GB',
  home: '/en/',
  legal,
  title: 'VERI*FACTU point of sale and invoicing for nail salons in Spain | Mverifactu',
  description: 'Mverifactu is VERI*FACTU checkout and invoicing software for nail salons in Spain. Split out VAT (IVA), print receipts with a QR code, send records to AEAT and see your sales.',
  ui: {
    homeLabel: 'Mverifactu, home',
    skip: 'Skip to main content',
    menuLabel: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    nav: { invoices: 'Invoices', reports: 'Reports', pricing: 'Pricing', guides: 'Guides', faq: 'FAQ' },
    login: 'Log in',
    trial: '14-day trial',
    trialSubject: 'Mverifactu: 14-day trial',
    socialAlt: 'Mverifactu: one tap, print the invoice, send it to AEAT',
    qrLabel: 'Sample QR code',
  },
  hero: {
    lines: ['One tap:', 'print invoice,', 'send to AEAT.'],
    text: 'VERI*FACTU checkout and invoicing software for nail salons in Spain. On the web and Android.',
    demoLink: 'Try it below',
  },
  demo: {
    label: 'Demo',
    note: 'Sample data',
    sell: 'Sell',
    invoice: 'Invoice',
    services: ['Gel manicure', 'Spa pedicure', 'Acrylic nails', 'Acrylic infill', 'Gel removal', 'Nail art'],
    payment: 'Payment',
    card: 'Card',
    cash: 'Cash',
    base: 'Before tax',
    tax: 'VAT (IVA) 21%',
    total: 'Total',
    issue: 'Issue and print',
    idle: 'Demo, nothing is sent to AEAT.',
    empty: 'Choose at least one service.',
    done: 'Issued T26-000128. Sample receipt, not sent to AEAT.',
  },
  deadlines: {
    heading: 'When does your software have to comply?',
    text: 'If you invoice with software, it will have to meet AEAT’s requirements. VERI*FACTU is one way to do it.',
    source: 'Read AEAT’s notice (in Spanish)',
    dates: ['1 Jan 2027', '1 Jul 2027'],
    company: 'Companies (SL)',
    selfEmployed: 'Self-employed (autónomos)',
    days: '{n} days left',
    day: '1 day left',
    past: 'In force',
  },
  flow: {
    heading: 'Where does the invoice go after you tap?',
    steps: [
      ['At the counter', 'Choose services, staff, card or cash. VAT is split out from the price with VAT included.'],
      ['In the client’s hand', 'A numbered receipt with its QR tributario, to check it with AEAT.'],
      ['At AEAT', 'The record joins the queue and is retried if AEAT does not respond. The status shows in the app.'],
    ],
    customerPays: 'Client pays',
    invoiceTypes: 'Simplified invoice (F2), or full invoice (F1) when the client needs a name and NIF.',
    waiting: 'Waiting',
    received: 'Received by AEAT',
  },
  report: {
    chart: 'Sales this week, VAT included (sample data)',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    card: 'Card 64%',
    cash: 'Cash 36%',
    heading: 'Close up knowing what you made today.',
    items: ['Sales after refunds, by day, week and month', 'Cash and card apart, to balance the till', 'By staff member and by service', 'CSV export for your accountant'],
  },
  specs: {
    heading: 'Works with what you already have.',
    rows: [
      ['Devices', 'Web browser, Android phones and tablets'],
      ['Printer', '58 mm Bluetooth LE thermal printer, or print from the browser'],
      ['Invoices', 'Simplified F2, full F1, refunds, and cancelling invoices issued by mistake'],
      ['Languages', 'Spanish, Vietnamese and English'],
    ],
  },
  pricing: {
    heading: 'Pricing',
    text: 'Try it free for 14 days, then choose how to continue.',
    featured: 'Recommended',
    perMonth: '/month + VAT',
    withVat: '{price}/month with VAT',
    choose: 'Choose {plan}',
    subject: 'Mverifactu: {plan} plan',
    onlyHere: 'Only in this plan',
    plans: [
      {
        name: 'Basic',
        text: 'For a salon with one till that needs compliant invoices.',
        items: ['1 device', 'Checkout by service on web and Android', 'VERI*FACTU invoices with QR', 'Refunds and cancellations', 'Sales by day, week and month', 'Cash and card apart'],
      },
      {
        name: 'Professional',
        text: 'For salons with a team that want to see who does what.',
        items: ['Everything in Basic', '3 devices', 'Sales by staff member', 'Sales by service', 'Photos in the service list', 'CSV export for your accountant'],
      },
      {
        name: 'Business',
        text: 'For salons with several tills.',
        items: ['Everything in Professional', '5 devices'],
        extras: ['Help setting up the printer and services', 'Priority support'],
      },
    ],
    license: {
      heading: 'Rather pay once?',
      text: 'Lifetime licence for {price} + VAT ({priceVat} with VAT). No compulsory fees, and 12 months of updates.',
      buy: 'Buy the licence',
      subject: 'Mverifactu: lifetime licence',
      items: ['Every Mverifactu feature', 'No time limit', '12 months of updates', 'Improvements, fixes and legal changes during that period', '30 days of technical support from purchase', '1 device'],
      afterHeading: 'After the first year',
      after: [
        'The licence does not expire. You keep using the features included in your update period.',
        'To keep receiving improvements, fixes and legal changes, you renew for <b>{renewal} + VAT a year</b> ({renewalVat} with VAT). <b>Renewing is optional.</b>',
        'You have 30 days after it ends to renew at that price. Later on, getting updates back costs {recovery} + VAT ({recoveryVat} with VAT) and includes 12 months from payment.',
      ],
      faqHeading: 'Questions about the lifetime licence',
      questions: [
        ['What happens when the first year ends?', 'The licence stays active. You stop receiving new updates until you renew.'],
        ['Do I have to renew every year?', 'No. Renewing is optional and is not charged automatically. If AEAT changes its requirements, the adaptation comes with the updates.'],
        ['What does the renewal include?', '12 more months of improvements, fixes and legal changes for {renewal} + VAT ({renewalVat} with VAT).'],
      ],
    },
  },
  guidesHeading: 'Guides for your salon',
  faqHeading: 'Frequently asked questions',
  questions: [
    ['Who is Mverifactu for?', 'Nail salons in Spain that charge by service, take cash or card and want to issue VERI*FACTU invoices. The app is in Spanish, Vietnamese and English.'],
    ['How does the 14-day trial work?', 'Email Nails Trendy and we create an account for your salon. The trial is free of charge, and you are reminded 5 days before it ends.'],
    ['How is VAT calculated?', 'You enter prices with VAT included. When an invoice is issued, Mverifactu splits the amount before tax and the VAT at your salon’s rate. For example, 36,30 € at 21% is 30,00 € before tax and 6,30 € VAT.'],
    ['Does VERI*FACTU replace the VAT return?', 'No. Sending invoice records to AEAT and filing a VAT return are two separate things. The reports and CSV help you check your sales and pass the figures to your accountant.'],
    ['Which printers work?', 'On Android, 58 mm Bluetooth LE thermal printers. On the web, you print through the browser’s print dialog.'],
    ['Can I test before sending real invoices?', 'Yes. The demo on this page uses sample data. When setting up the salon, AEAT’s test environment can be used to check sending before switching to the real one.'],
  ],
  footer: {
    heading: 'Try it for 14 days in your salon.',
    text: 'The trial is free of charge. Email us and we create your account.',
    cta: 'Ask for a trial by email',
    maker: 'A product of Nails Trendy ES SL, Barcelona',
  },
  articleUi: {
    breadcrumbs: 'Breadcrumbs',
    home: 'Home',
    guides: 'Guides',
    tryHeading: 'Try a checkout',
    tryLink: 'Open the demo',
    related: 'Read next',
  },
  articles: [
    {
      id: 'till',
      path: '/en/nail-salon-checkout-software-spain/',
      category: 'At the counter',
      title: 'Nail salon checkout and invoicing software in Spain',
      heading: 'Checkout software for nail salons in Spain',
      summary: 'From the price list to closing the day: how a salon works with Mverifactu.',
      description: 'How to use Mverifactu in a nail salon in Spain to choose services, record the payment, print invoices with a QR code and export sales.',
      body: `
      <h2>Set up prices and staff</h2>
      <p>Name services the way your team does, such as gel manicure, pedicure or gel removal. Enter prices with VAT included and group the services so they are easy to find. Add your staff if you want to see sales for each person.</p>
      <h2>Charge each client</h2>
      <ol>
        <li><strong>Choose services and quantity.</strong> The software adds up the prices and shows the total the client pays.</li>
        <li><strong>Choose the staff member and payment method.</strong> Record cash or card so the till balances at the end of the day.</li>
        <li><strong>Issue and print the invoice.</strong> Choose a simplified invoice (F2) or enter the client’s details for a full invoice (F1). The printout has a QR code. Android works with compatible 58 mm Bluetooth LE thermal printers; on the web you print from the browser.</li>
      </ol>
      <div class="article-note"><h2>Example of one client</h2><p>A gel manicure at 24,20 € and a spa pedicure at 12,10 € come to 36,30 €. With VAT at 21%, the invoice shows 30,00 € before tax and 6,30 € VAT.</p><p><a href="/en/#demo">Change the services in the sample order</a></p></div>
      <h2>Check sales at closing time</h2>
      <p>Choose the period, see sales after refunds and compare cash with card. Reports by staff member and by service help you check the work done. The CSV has fields such as invoice number, payment method, amount before tax, VAT and total.</p>
      <p><a href="/en/verifactu-invoice-nail-salon/">How Mverifactu sends invoice records to AEAT</a>.</p>`,
    },
    {
      id: 'iva',
      path: '/en/calculate-spanish-vat-iva/',
      category: 'VAT (IVA)',
      title: 'How to work out Spanish VAT (IVA) from a price with VAT included',
      heading: 'How to work out IVA from a price with VAT included',
      summary: 'Split the amount before tax and the VAT on an invoice, with an example from a nail salon.',
      description: 'The formula to take Spanish VAT (IVA) out of a price with VAT included, an example at 21%, and where to see the amount before tax in Mverifactu.',
      body: `
      <h2>What is IVA?</h2>
      <p>IVA is Spanish value added tax, short for <em lang="es">Impuesto sobre el Valor Añadido</em>. The general rate is 21%. The rate that applies depends on the transaction and its rules. <a href="${aeat.iva}">See AEAT’s information on IVA (in Spanish)</a>.</p>
      <h2>Formula to split VAT out of what the client pays</h2>
      <div class="article-note"><p><strong>Before tax = total with VAT ÷ (1 + VAT rate)</strong></p><p><strong>VAT = total with VAT − amount before tax</strong></p></div>
      <p>At a rate of 21%, divide the total by 1.21. For a total of 36,30 €, the amount before tax is 30,00 € and the VAT is 6,30 €. On an invoice, round the amount before tax to the cent and take the difference as VAT so the three figures match.</p>
      <div class="table-wrap"><table><caption>Example with VAT at 21%</caption><thead><tr><th scope="col">Client pays</th><th scope="col">Before tax</th><th scope="col">VAT</th></tr></thead><tbody><tr><td>12,10 €</td><td>10,00 €</td><td>2,10 €</td></tr><tr><td>24,20 €</td><td>20,00 €</td><td>4,20 €</td></tr><tr><td>36,30 €</td><td>30,00 €</td><td>6,30 €</td></tr></tbody></table></div>
      <h2>Where does Mverifactu show VAT?</h2>
      <p>The software applies your salon’s VAT rate when it issues an invoice from prices with VAT included. You can see the amount before tax, the VAT and the total in the invoice details, the sales report and the CSV.</p>
      <p><a href="/en/#demo">Try splitting VAT on a sample order</a>.</p>`,
    },
    {
      id: 'verifactu',
      path: '/en/verifactu-invoice-nail-salon/',
      category: 'Invoices and AEAT',
      title: 'VERI*FACTU invoices for nail salons in Spain',
      heading: 'VERI*FACTU invoices in a nail salon',
      summary: 'What the QR invoice is, which record goes to AEAT and what to check before you start.',
      description: 'VERI*FACTU explained for nail salons in Spain: the QR code, invoice records sent to AEAT, simplified F2 invoices and full F1 invoices.',
      body: `
      <h2>What is VERI*FACTU?</h2>
      <p>VERI*FACTU is the mode in which invoicing software sends invoice records to the Spanish tax agency, Agencia Tributaria (AEAT). At the counter, the client gets an invoice with a QR code to check the details with AEAT’s service. <a href="${aeat.verifactu}">Read about VERI*FACTU</a> and <a href="${aeat.qr}">AEAT’s guide to the QR code</a> (both in Spanish).</p>
      <h2>F2 and F1 invoices in Mverifactu</h2>
      <dl class="article-definitions"><dt>F2 · <span lang="es">Factura simplificada</span></dt><dd>For transactions that qualify for a simplified invoice.</dd><dt>F1 · <span lang="es">Factura completa</span></dt><dd>Includes the recipient’s details. At the counter, the client’s details and tax ID are entered before issuing it.</dd></dl>
      <p>When you refund part or all of a sale, Mverifactu links the corrective invoice to the original. In the invoice history you can open the details to see the related records and their result.</p>
      <h2>Before sending real records</h2>
      <ol>
        <li>Check the salon’s NIF and invoicing details.</li>
        <li>Set up the digital certificate used for sending and test it in the <em lang="es">pruebas</em> environment.</li>
        <li>Issue a sample invoice, check the printed QR code and read AEAT’s response before switching to the real environment.</li>
      </ol>
      <div class="article-note"><h2>Sending records and filing VAT</h2><p>These are two separate things. You can export sales data from Mverifactu to check it with your accountant when preparing the return.</p></div>
      <p><a href="/en/calculate-spanish-vat-iva/">How to read the amount before tax and the VAT on an invoice</a>.</p>`,
    },
  ],
};
