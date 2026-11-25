export default {
  navLabel: 'Legal information',
  updated: 'Last updated: 24 November 2026',
  precedence: 'This is a translation. If there is any difference, the Spanish version applies.',
  rights: 'All rights reserved.',
  preferences: 'Cookie preferences',
  declarationDraft: 'Text awaiting signature. It is not yet the signed responsible declaration.',
  registryLabel: 'Company registration',
  pages: [
    {
      id: 'legal-notice',
      path: '/en/legal-notice/',
      category: 'Legal notice',
      description: 'Owner of the Mverifactu website, contact details and conditions of use.',
      body: `
      <h2>Owner</h2>
      <dl class="article-definitions"><dt>Company</dt><dd>{name}</dd><dt>NIF</dt><dd>{nif}</dd><dt>Address</dt><dd>{address}</dd><dt>Email</dt><dd><a href="mailto:{email}">{email}</a></dd>{registry}</dl>
      <h2>Purpose of the website</h2>
      <p>This website presents Mverifactu, checkout and invoicing software for nail salons, and lets you ask for a trial or buy by email. Using the website means accepting this notice.</p>
      <h2>Content</h2>
      <p>The guides are general information and do not replace your accountant’s advice. The demo uses sample data and does not issue invoices or send anything to AEAT.</p>
      <p>Mverifactu does not belong to the Spanish tax agency and is not endorsed by it. VERI*FACTU is the name the agency gives to systems that issue verifiable invoices.</p>
      <h2>Intellectual property</h2>
      <p>The texts, design, logo and software belong to {name} or are used with permission. They may not be copied or distributed for commercial purposes without written authorisation. The Be Vietnam Pro typeface is used under the <a href="/assets/be-vietnam-OFL.txt">OFL licence</a>.</p>
      <h2>Links and liability</h2>
      <p>We link to official websites, such as AEAT’s, whose content we do not control. We correct errors on this website when we learn of them. You can report them by email.</p>
      <h2>Applicable law</h2>
      <p>Spanish law applies. If you are a consumer, you may go to the courts where you live.</p>`,
    },
    {
      id: 'privacy',
      path: '/en/privacy-policy/',
      category: 'Privacy policy',
      description: 'Which personal data Mverifactu processes, why, for how long and how to exercise your rights.',
      body: `
      <h2>Controller</h2>
      <p>{name}, NIF {nif}, {address}. Email: <a href="mailto:{email}">{email}</a>.</p>
      <h2>Which data we use and why</h2>
      <dl class="article-definitions">
        <dt>If you write to us</dt><dd>Your email, name and what you tell us, to reply and prepare the trial. Basis: steps before a contract, at your request.</dd>
        <dt>If you have an account</dt><dd>Name, email, hashed password, the salon’s tax details, period of use and payments, to provide and invoice the service. Basis: the contract and our accounting and tax obligations.</dd>
        <dt>If you authorise sending with our certificate</dt><dd>Name and NIF of the signer, the signed document, date and IP, to prove the representation before AEAT. Basis: the authorisation and the related legal obligations.</dd>
        <dt>If you visit the website or the app</dt><dd>The server may log the IP, date and page requested, for security. Basis: legitimate interest in protecting the service.</dd>
      </dl>
      <p>We use no analytics or advertising, we do not sell data and we make no automated decisions about you.</p>
      <h2>Data of the salon’s clients and staff</h2>
      <p>The salon is the controller of the data it enters in Mverifactu. We process it on its behalf under the <a href="/en/data-processing/">data processing agreement</a>. If you are a client of a salon, please contact that salon first.</p>
      <h2>Who receives the data</h2>
      <ul><li>The Spanish tax agency (AEAT), which receives the invoice records.</li><li>{host}, the server provider.</li><li>Our email provider, if you write to us.</li><li>Authorities and courts, when the law requires it.</li></ul>
      <h2>How long we keep it</h2>
      <p>Enquiries, for as long as needed to deal with them. Account data, during the contract and then, blocked, for the legal limitation periods. Invoice records, for the period set by law.</p>
      <h2>Your rights</h2>
      <p>You can ask for access, rectification, erasure, objection, restriction and portability by writing to <a href="mailto:{email}">{email}</a>. We may ask you to confirm your identity. If you disagree with the answer, you can complain to the <a href="https://www.aepd.es">Spanish Data Protection Agency</a>.</p>
      <h2>Security</h2>
      <p>The connection to the app is encrypted with HTTPS. Passwords are stored as hashes and digital certificates are encrypted on the server. Each salon’s data is kept apart.</p>`,
    },
    {
      id: 'terms',
      path: '/en/terms-of-service/',
      category: 'Terms of service',
      description: 'Conditions for using Mverifactu: trial, plans, lifetime licence, obligations and cancellation.',
      body: `
      <h2>The parties</h2>
      <p>These terms govern the use of Mverifactu between {name}, NIF {nif}, and the salon that opens an account. Mverifactu is meant for companies and self-employed professionals.</p>
      <h2>The service</h2>
      <p>Mverifactu lets you charge for services, issue and print invoices, send the records to AEAT and see sales. It needs an internet connection to issue invoices. It does not file tax returns or give tax advice.</p>
      <h2>14-day trial</h2>
      <p>The trial is free and does not oblige you to buy. We remind you 5 days before it ends. After that, no new invoices can be issued until you buy.</p>
      <h2>Plans and payment</h2>
      <p>The <a href="/en/#pricing">plans and prices</a> are those on the website when you buy, plus VAT. They are paid in advance by the method we agree. We make no automatic charges. Each plan allows the account to be used on the number of devices it states.</p>
      <h2>Lifetime licence</h2>
      <p>It costs {price} + VAT, covers one device and does not expire. It includes 12 months of updates and 30 days of technical support from purchase. Renewing the updates is optional and costs {renewal} + VAT a year. You can renew at that price until 30 days after they end. Later on it costs {recovery} + VAT and includes 12 months from payment. Adaptations to legal changes are part of the updates.</p>
      <h2>End of the paid period</h2>
      <p>We remind you before it ends. If you do not renew a plan, you cannot issue new sales invoices, but you can still view and reprint earlier ones, and pending records are still sent to AEAT. You can cancel whenever you like. The plan stays active until the end of the period paid.</p>
      <h2>What is up to you</h2>
      <ul><li>Give correct tax details and use a valid certificate or authorise the sending.</li><li>Protect your password and access to your devices.</li><li>Check the warnings about rejected or pending records.</li><li>Meet your tax and data protection obligations.</li><li>Not use the service unlawfully or try to alter the records.</li></ul>
      <h2>Availability and support</h2>
      <p>We work to keep the service available, but there may be interruptions due to maintenance, third parties or AEAT itself. If AEAT does not respond, records stay in the queue and are retried.</p>
      <h2>Liability</h2>
      <p>We are liable for the service as the law provides. We are not liable for wrong data entered by the salon, expired certificates, use against these terms or causes beyond our control. None of this limits liability that the law does not allow to be excluded.</p>
      <h2>Ownership and data</h2>
      <p>The software belongs to {name}. The data belongs to the salon. Personal data is processed under the <a href="/en/privacy-policy/">privacy policy</a> and the <a href="/en/data-processing/">data processing agreement</a>.</p>
      <h2>Changes and applicable law</h2>
      <p>If we change these terms, we will tell you by email 30 days ahead and you may cancel. Spanish law applies and, between businesses, the courts of Barcelona.</p>`,
    },
    {
      id: 'cookies',
      path: '/en/cookies/',
      category: 'Cookies',
      description: 'This website uses no cookies. What the Mverifactu app stores on your device and how to delete it.',
      body: `
      <h2>This website uses no cookies</h2>
      <p>The Mverifactu website sets no cookies and stores no data in your browser. It loads no analytics, advertising or third-party content. The typefaces come from our own server. That is why there is no cookie banner.</p>
      <h2>What the app stores</h2>
      <p>The app uses no advertising or analytics cookies. It stores on the device only what it needs to work:</p>
      <dl class="article-definitions"><dt>Session</dt><dd>Keeps you logged in until you log out.</dd><dt>Language and appearance</dt><dd>Remember what you chose on that device.</dd><dt>Printer</dt><dd>Remembers the printer and its settings.</dd></dl>
      <p>This storage is necessary for the service you ask for and does not require consent.</p>
      <h2 id="preferences">Cookie preferences</h2>
      <div class="table-wrap"><table><caption>Status on this website</caption><thead><tr><th scope="col">Type</th><th scope="col">Status</th></tr></thead><tbody><tr><td>Necessary</td><td>Not used</td></tr><tr><td>Analytics</td><td>Not used</td></tr><tr><td>Advertising</td><td>Not used</td></tr></tbody></table></div>
      <p>There is nothing to accept or reject. If we ever add non-essential cookies, we will ask you first and you will be able to change your choice here.</p>
      <h2>How to delete stored data</h2>
      <p>In the app, logging out deletes the session. To delete the rest, clear the site data in your browser settings or the app data on Android.</p>`,
    },
    {
      id: 'declaration',
      path: '/en/responsible-declaration/',
      category: 'Responsible declaration',
      description: 'Responsible declaration of the Mverifactu invoicing system under Orden HAC/1177/2024.',
      intro: 'Text under article 15 of Orden HAC/1177/2024 for Mverifactu. The official text is in Spanish only and is also inside the app.',
      appLink: 'See the declaration in the app',
    },
    {
      id: 'processing',
      path: '/en/data-processing/',
      category: 'Data processing',
      description: 'Data processing agreement (art. 28 GDPR) between the salon and Nails Trendy ES SL.',
      body: `
      <h2>Parties and purpose</h2>
      <p>The salon is the controller of the personal data it enters in Mverifactu. {name}, NIF {nif}, processes it on the salon’s behalf under article 28 of Regulation (EU) 2016/679 (GDPR). This agreement is part of the <a href="/en/terms-of-service/">terms of service</a> and lasts as long as they do.</p>
      <h2>Data and purpose of processing</h2>
      <dl class="article-definitions"><dt>People</dt><dd>The salon’s clients who ask for a full invoice, and its staff.</dd><dt>Data</dt><dd>Of clients, name, tax ID and address. Of staff, name and sales. Also the invoice data.</dd><dt>Purpose</dt><dd>Issue, store and print invoices, send the records to AEAT and show sales.</dd><dt>Operations</dt><dd>Recording, storage, consultation, sending and deletion.</dd></dl>
      <h2>Obligations of {name}</h2>
      <ul><li>Process the data only on the salon’s documented instructions, which are these agreements and the use of the software, unless the law requires otherwise.</li><li>Keep confidentiality and require it of anyone with access to the data.</li><li>Apply the security measures in this agreement.</li><li>Help the salon answer people’s requests and comply with articles 32 to 36 of the GDPR.</li><li>Tell the salon without undue delay of any breach of its data.</li><li>Provide the information needed to show compliance and allow reasonable audits.</li><li>Say so if an instruction seems to be against the law.</li></ul>
      <h2>Sub-processors</h2>
      <p>The salon gives general authorisation to use sub-processors with the same obligations. At present this is {host}, the server provider. We will tell you by email before adding or changing one, and the salon may object. If any processing took place outside the European Economic Area, it would be under the safeguards of chapter V of the GDPR.</p>
      <p>AEAT receives the records by legal obligation and is not a sub-processor.</p>
      <h2>Security measures</h2>
      <ul><li>Connections encrypted with HTTPS.</li><li>Passwords stored as hashes.</li><li>Digital certificates encrypted (AES-256-GCM) and never on the selling devices.</li><li>Data kept apart by salon, with account access.</li><li>Database copy before each update.</li></ul>
      <h2>At the end</h2>
      <p>The salon can export its sales and ask for a copy of its data. The data is then deleted or returned, as the salon chooses, except what the law requires to be kept, which stays blocked.</p>
      <h2>Obligations of the salon</h2>
      <p>Inform its clients and staff, have a legal basis for the data it enters and not enter data that is not needed, such as health data.</p>
      <h2>Contact</h2>
      <p>If you need this agreement signed, write to <a href="mailto:{email}">{email}</a>.</p>`,
    },
  ],
};
