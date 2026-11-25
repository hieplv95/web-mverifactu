import legal from './legal/es.mjs';
import { aeat } from './links.mjs';

export default {
  lang: 'es',
  name: 'Español',
  ogLocale: 'es_ES',
  home: '/',
  legal,
  title: 'Programa TPV y facturación VERI*FACTU para salones de uñas | Mverifactu',
  description: 'Mverifactu es el programa de cobro y facturación VERI*FACTU para salones de uñas en España. Desglosa el IVA, imprime tickets con QR, envía los registros a la AEAT y muestra tus ventas.',
  ui: {
    homeLabel: 'Mverifactu, inicio',
    skip: 'Ir al contenido',
    menuLabel: 'Navegación principal',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    language: 'Idioma',
    nav: { invoices: 'Facturas', reports: 'Informes', pricing: 'Precios', guides: 'Guías', faq: 'Preguntas' },
    trial: 'Prueba de 14 días',
    trialSubject: 'Mverifactu: prueba de 14 días',
    socialAlt: 'Mverifactu: un toque, imprime y envía a la AEAT',
    qrLabel: 'Código QR de muestra',
  },
  hero: {
    lines: ['Un toque:', 'imprime y envía', 'a la AEAT.'],
    text: 'El programa de cobro y facturación VERI*FACTU para salones de uñas en España. En web y Android.',
    demoLink: 'Pruébalo aquí abajo',
  },
  demo: {
    label: 'Demostración',
    note: 'Datos de muestra',
    sell: 'Vender',
    invoice: 'Factura',
    services: ['Manicura gel', 'Pedicura spa', 'Uñas acrílicas', 'Relleno acrílico', 'Retirada de gel', 'Nail art'],
    payment: 'Pago',
    card: 'Tarjeta',
    cash: 'Efectivo',
    base: 'Base imponible',
    tax: 'IVA 21%',
    total: 'Total',
    issue: 'Emitir e imprimir',
    idle: 'Demostración, no se envía a la AEAT.',
    empty: 'Elige al menos un servicio.',
    done: 'Emitida T26-000128. Ticket de muestra, no se envía a la AEAT.',
  },
  deadlines: {
    heading: '¿Desde cuándo necesitas un programa adaptado?',
    text: 'Si facturas con un programa, tendrá que cumplir los requisitos de la AEAT. VERI*FACTU es una forma de hacerlo.',
    source: 'Ver la nota de la AEAT',
    dates: ['1/1/2027', '1/7/2027'],
    company: 'Sociedades (SL)',
    selfEmployed: 'Autónomos',
    days: 'Faltan {n} días',
    day: 'Falta 1 día',
    past: 'Ya en vigor',
  },
  flow: {
    heading: '¿Qué pasa con la factura cuando pulsas?',
    steps: [
      ['En el mostrador', 'Elige servicios, profesional, tarjeta o efectivo. El IVA se desglosa solo a partir del precio con IVA incluido.'],
      ['En manos del cliente', 'Un ticket numerado con su QR tributario, para comprobarlo en la AEAT.'],
      ['En la AEAT', 'El registro entra en la cola y se reintenta solo si la AEAT no responde. Ves el estado en la app.'],
    ],
    customerPays: 'Paga el cliente',
    invoiceTypes: 'Factura simplificada (F2), o completa (F1) si el cliente pide nombre y NIF.',
    waiting: 'Pendiente',
    received: 'Recibida por la AEAT',
  },
  report: {
    chart: 'Ventas de la semana, IVA incluido (datos de muestra)',
    days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    card: 'Tarjeta 64%',
    cash: 'Efectivo 36%',
    heading: 'Al cerrar, ya sabes cuánto has hecho hoy.',
    items: ['Ventas menos devoluciones, por día, semana y mes', 'Efectivo y tarjeta por separado para cuadrar caja', 'Por profesional y por servicio', 'Exportación CSV para tu gestoría'],
  },
  specs: {
    heading: 'Con los equipos que ya tienes.',
    rows: [
      ['Dispositivos', 'Navegador web, móviles y tabletas Android'],
      ['Impresora', 'Térmica de 58 mm por Bluetooth LE, o impresión desde el navegador'],
      ['Facturas', 'Simplificada F2, completa F1, devoluciones y anulación de las emitidas por error'],
      ['Idiomas', 'Español, vietnamita e inglés'],
    ],
  },
  pricing: {
    heading: 'Precios',
    text: 'Pruébalo 14 días sin pagar. Después eliges cómo seguir.',
    featured: 'Recomendado',
    perMonth: '/mes + IVA',
    withVat: '{price}/mes con IVA',
    choose: 'Elegir {plan}',
    subject: 'Mverifactu: plan {plan}',
    onlyHere: 'Solo en este plan',
    plans: [
      {
        name: 'Básico',
        text: 'Para quien cobra en un solo puesto y quiere facturar en regla.',
        items: ['1 dispositivo', 'Cobro por servicio en web y Android', 'Facturas VERI*FACTU con QR', 'Devoluciones y anulaciones', 'Ventas por día, semana y mes', 'Efectivo y tarjeta por separado'],
      },
      {
        name: 'Profesional',
        text: 'Para salones con equipo que quieren ver quién hace qué.',
        items: ['Todo lo del plan Básico', '3 dispositivos', 'Ventas por profesional', 'Ventas por servicio', 'Fotos en la lista de servicios', 'Exportación CSV para tu gestoría'],
      },
      {
        name: 'Empresarial',
        text: 'Para salones con varios puestos de cobro.',
        items: ['Todo lo del plan Profesional', '5 dispositivos'],
        extras: ['Ayuda para configurar impresora y servicios', 'Soporte prioritario'],
      },
    ],
    license: {
      heading: '¿Prefieres pagar una sola vez?',
      text: 'Licencia definitiva por {price} + IVA ({priceVat} con IVA). Sin cuotas obligatorias y con 12 meses de actualizaciones.',
      buy: 'Comprar licencia',
      subject: 'Mverifactu: licencia definitiva',
      items: ['Todas las funciones de Mverifactu', 'Sin límite de tiempo', '12 meses de actualizaciones', 'Mejoras, correcciones y cambios normativos durante ese periodo', '30 días de soporte técnico desde la compra', '1 dispositivo'],
      afterHeading: 'Después del primer año',
      after: [
        'La licencia no caduca. Sigues usando las funciones incluidas en tu periodo de actualizaciones.',
        'Si quieres seguir recibiendo mejoras, correcciones y cambios normativos, renuevas por <b>{renewal} + IVA al año</b> ({renewalVat} con IVA). <b>Renovar es opcional.</b>',
        'Tienes 30 días tras el vencimiento para renovar a ese precio. Más tarde, recuperar las actualizaciones cuesta {recovery} + IVA ({recoveryVat} con IVA) e incluye 12 meses desde el pago.',
      ],
      faqHeading: 'Dudas sobre la licencia definitiva',
      questions: [
        ['¿Qué pasa cuando termina el primer año?', 'La licencia sigue activa. Dejas de recibir actualizaciones nuevas hasta que renueves.'],
        ['¿Tengo que renovar cada año?', 'No. La renovación es opcional y no se cobra automáticamente. Si cambian los requisitos de la AEAT, la adaptación llega con las actualizaciones.'],
        ['¿Qué incluye la renovación?', '12 meses más de mejoras, correcciones y cambios normativos por {renewal} + IVA ({renewalVat} con IVA).'],
      ],
    },
  },
  guidesHeading: 'Guías para tu salón',
  faqHeading: 'Preguntas frecuentes',
  questions: [
    ['¿Para quién es Mverifactu?', 'Para salones de uñas en España que cobran por servicio, registran efectivo o tarjeta y quieren emitir facturas VERI*FACTU. La app está en español, vietnamita e inglés.'],
    ['¿Cómo funciona la prueba de 14 días?', 'Escribe a Nails Trendy y creamos la cuenta de tu salón. La prueba no se cobra y te avisamos 5 días antes de que termine.'],
    ['¿Cómo se calcula el IVA?', 'Introduces los precios con IVA incluido. Al emitir la factura, Mverifactu separa la base imponible y la cuota según el tipo de tu salón. Por ejemplo, 36,30 € al 21% son 30,00 € de base y 6,30 € de IVA.'],
    ['¿VERI*FACTU sustituye a la declaración del IVA?', 'No. Enviar los registros de facturación a la AEAT y presentar la declaración del IVA son trámites distintos. Los informes y el CSV te ayudan a cuadrar las ventas y pasar los datos a tu gestoría.'],
    ['¿Con qué impresora funciona?', 'En Android, con impresoras térmicas de 58 mm Bluetooth LE. En la web, imprimes desde el cuadro de diálogo del navegador.'],
    ['¿Puedo probar antes de enviar facturas reales?', 'Sí. La demostración de esta página usa datos de muestra. Al configurar el salón se puede usar el entorno de pruebas para comprobar el envío antes de pasar al entorno real.'],
  ],
  footer: {
    heading: 'Pruébalo 14 días en tu salón.',
    text: 'La prueba no se cobra. Escríbenos y creamos tu cuenta.',
    cta: 'Pedir la prueba por email',
    maker: 'Un producto de Nails Trendy ES SL, Barcelona',
  },
  articleUi: {
    breadcrumbs: 'Ruta de navegación',
    home: 'Inicio',
    guides: 'Guías',
    tryHeading: 'Prueba a cobrar un servicio',
    tryLink: 'Abrir la demostración',
    related: 'Seguir leyendo',
  },
  notFound: {
    title: 'Página no encontrada | Mverifactu',
    heading: 'Página no encontrada',
    text: 'La página que buscas ya no está en esta dirección.',
    link: 'Volver al inicio',
  },
  articles: [
    {
      id: 'till',
      path: '/programa-facturacion-salon-de-unas/',
      category: 'Cobro en el mostrador',
      title: 'Programa de cobro y facturación para salones de uñas en España',
      heading: 'Programa de cobro para salones de uñas en España',
      summary: 'De la lista de precios al cierre del día: así trabaja un salón con Mverifactu.',
      description: 'Cómo usar Mverifactu en un salón de uñas en España para elegir servicios, registrar el pago, imprimir facturas con QR y exportar las ventas.',
      body: `
      <h2>Prepara los precios y el equipo</h2>
      <p>Pon a los servicios el nombre que usa tu equipo, como manicura gel, pedicura o retirada de gel. Introduce los precios con IVA incluido y agrupa los servicios para encontrarlos rápido. Crea la lista de profesionales si quieres ver las ventas de cada persona.</p>
      <h2>Cobra a cada cliente</h2>
      <ol>
        <li><strong>Elige servicios y cantidad.</strong> El programa suma los precios y muestra el total que paga el cliente.</li>
        <li><strong>Elige profesional y forma de pago.</strong> Registra efectivo o tarjeta para cuadrar la caja al final del día.</li>
        <li><strong>Emite e imprime la factura.</strong> Elige factura simplificada F2 o introduce los datos del cliente para una factura completa F1. La impresión lleva código QR. En Android funciona con impresoras térmicas Bluetooth LE de 58 mm compatibles; en la web se imprime desde el navegador.</li>
      </ol>
      <div class="article-note"><h2>Ejemplo de un cliente</h2><p>Una manicura gel de 24,20 € y una pedicura spa de 12,10 € suman 36,30 €. Con el IVA al 21%, la factura muestra 30,00 € de base imponible y 6,30 € de IVA.</p><p><a href="/#demo">Cambia los servicios en el pedido de muestra</a></p></div>
      <h2>Revisa las ventas al cerrar</h2>
      <p>Elige el periodo, mira las ventas menos devoluciones y compara el efectivo con la tarjeta. Los informes por profesional y por servicio ayudan a comprobar el trabajo hecho. El CSV incluye campos como el número de factura, la forma de pago, la base imponible, el IVA y el total.</p>
      <p><a href="/factura-verifactu-salon-de-unas/">Cómo envía Mverifactu los registros de facturación a la AEAT</a>.</p>`,
    },
    {
      id: 'iva',
      path: '/calcular-iva-incluido/',
      category: 'IVA',
      title: 'Cómo calcular el IVA de un precio con IVA incluido',
      heading: 'Cómo calcular el IVA de un precio con IVA incluido',
      summary: 'Separa la base imponible y la cuota de IVA de una factura con un ejemplo de un salón de uñas.',
      description: 'Fórmula para sacar el IVA de un precio con IVA incluido en España, ejemplo con el 21% y dónde ver la base imponible en Mverifactu.',
      body: `
      <h2>¿Qué es el IVA?</h2>
      <p>El IVA es el Impuesto sobre el Valor Añadido. El tipo general es del 21%. El tipo aplicable depende de la operación y de su normativa. <a href="${aeat.iva}">Ver la información de la AEAT sobre el IVA</a>.</p>
      <h2>Fórmula para separar el IVA del precio que paga el cliente</h2>
      <div class="article-note"><p><strong>Base imponible = total con IVA ÷ (1 + tipo de IVA)</strong></p><p><strong>Cuota de IVA = total con IVA − base imponible</strong></p></div>
      <p>Con un tipo del 21%, divide el total entre 1,21. Si el total es 36,30 €, la base imponible es 30,00 € y el IVA 6,30 €. En una factura, redondea la base al céntimo y calcula el IVA por diferencia para que las tres cifras cuadren.</p>
      <div class="table-wrap"><table><caption>Ejemplo con el IVA al 21%</caption><thead><tr><th scope="col">Paga el cliente</th><th scope="col">Base</th><th scope="col">IVA</th></tr></thead><tbody><tr><td>12,10 €</td><td>10,00 €</td><td>2,10 €</td></tr><tr><td>24,20 €</td><td>20,00 €</td><td>4,20 €</td></tr><tr><td>36,30 €</td><td>30,00 €</td><td>6,30 €</td></tr></tbody></table></div>
      <h2>¿Dónde muestra Mverifactu el IVA?</h2>
      <p>El programa aplica el tipo de IVA de tu salón al emitir la factura a partir del precio con IVA incluido. Puedes ver la base, el IVA y el total en el detalle de la factura, en el informe de ventas y en el CSV.</p>
      <p><a href="/#demo">Prueba a separar el IVA en un pedido de muestra</a>.</p>`,
    },
    {
      id: 'verifactu',
      path: '/factura-verifactu-salon-de-unas/',
      category: 'Facturas y AEAT',
      title: 'Factura VERI*FACTU para salones de uñas',
      heading: 'Factura VERI*FACTU en un salón de uñas',
      summary: 'Qué es la factura con QR, qué registro se envía a la AEAT y qué comprobar antes de empezar.',
      description: 'VERI*FACTU explicado para salones de uñas en España: código QR, registros de facturación enviados a la AEAT, factura simplificada F2 y completa F1.',
      body: `
      <h2>¿Qué es VERI*FACTU?</h2>
      <p>VERI*FACTU es la modalidad en la que el programa de facturación envía los registros de facturación a la Agencia Tributaria (AEAT). En el mostrador, el cliente recibe una factura con un código QR para cotejar los datos en el servicio de la AEAT. <a href="${aeat.verifactu}">Ver la explicación sobre VERI*FACTU</a> y <a href="${aeat.qr}">la guía de la AEAT sobre el QR</a>.</p>
      <h2>Facturas F2 y F1 en Mverifactu</h2>
      <dl class="article-definitions"><dt>F2 · Factura simplificada</dt><dd>Para las operaciones que pueden documentarse con factura simplificada.</dd><dt>F1 · Factura completa</dt><dd>Incluye los datos del destinatario. En el mostrador se introducen los datos del cliente y su identificación antes de emitirla.</dd></dl>
      <p>Al devolver una parte o todo el importe, Mverifactu vincula la factura rectificativa con la original. En el historial puedes abrir el detalle para ver los registros relacionados y su resultado.</p>
      <h2>Antes de enviar registros reales</h2>
      <ol>
        <li>Comprueba el NIF y los datos de facturación del salón.</li>
        <li>Configura el certificado digital para el envío y haz pruebas en el <em>entorno de pruebas</em>.</li>
        <li>Emite una factura de muestra, revisa el QR impreso y lee la respuesta de la AEAT antes de pasar al entorno real.</li>
      </ol>
      <div class="article-note"><h2>Enviar registros y declarar el IVA</h2><p>Son dos trámites distintos. Puedes exportar los datos de ventas de Mverifactu para cuadrarlos con tu gestoría al preparar la declaración.</p></div>
      <p><a href="/calcular-iva-incluido/">Cómo leer la base imponible y el IVA de una factura</a>.</p>`,
    },
  ],
};
