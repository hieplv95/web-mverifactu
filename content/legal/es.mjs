export default {
  navLabel: 'Información legal',
  updated: 'Última actualización: 24 de noviembre de 2026',
  precedence: '',
  rights: 'Todos los derechos reservados.',
  preferences: 'Preferencias de cookies',
  declarationDraft: 'Texto pendiente de firma. Todavía no es la declaración responsable suscrita.',
  registryLabel: 'Datos registrales',
  pages: [
    {
      id: 'legal-notice',
      path: '/aviso-legal/',
      category: 'Aviso legal',
      description: 'Titular de la web de Mverifactu, datos de contacto y condiciones de uso.',
      body: `
      <h2>Titular</h2>
      <dl class="article-definitions"><dt>Empresa</dt><dd>{name}</dd><dt>NIF</dt><dd>{nif}</dd><dt>Domicilio</dt><dd>{address}</dd><dt>Email</dt><dd><a href="mailto:{email}">{email}</a></dd>{registry}</dl>
      <h2>Objeto de la web</h2>
      <p>Esta web informa sobre Mverifactu, un programa de cobro y facturación para salones de uñas, y permite pedir una prueba o contratar por email. Usar la web supone aceptar este aviso.</p>
      <h2>Contenido</h2>
      <p>Las guías son información general y no sustituyen el consejo de tu gestoría. La demostración usa datos de muestra y no emite facturas ni envía nada a la AEAT.</p>
      <p>Mverifactu no pertenece a la Agencia Tributaria ni está avalado por ella. VERI*FACTU es el nombre que la Agencia Tributaria da a los sistemas de emisión de facturas verificables.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los textos, el diseño, el logotipo y el programa pertenecen a {name} o se usan con permiso. No se pueden copiar ni distribuir con fines comerciales sin autorización por escrito. La tipografía Be Vietnam Pro se usa con la <a href="/assets/be-vietnam-OFL.txt">licencia OFL</a>.</p>
      <h2>Enlaces y responsabilidad</h2>
      <p>Enlazamos a webs oficiales, como la sede de la AEAT, cuyo contenido no controlamos. Corregimos los errores de esta web cuando los conocemos. Puedes avisarnos por email.</p>
      <h2>Ley aplicable</h2>
      <p>Se aplica la ley española. Si eres consumidor, puedes acudir a los tribunales de tu domicilio.</p>`,
    },
    {
      id: 'privacy',
      updated: 'Última actualización: 25 de noviembre de 2026',
      path: '/politica-de-privacidad/',
      category: 'Política de privacidad',
      description: 'Qué datos personales trata Mverifactu, para qué, durante cuánto tiempo y cómo ejercer tus derechos.',
      body: `
      <h2>Responsable</h2>
      <p>{name}, NIF {nif}, {address}. Email: <a href="mailto:{email}">{email}</a>.</p>
      <h2>Qué datos usamos y para qué</h2>
      <dl class="article-definitions">
        <dt>Si nos escribes</dt><dd>Tu email, tu nombre y lo que nos cuentes, para responderte y preparar la prueba. Base: medidas previas a un contrato, a petición tuya.</dd>
        <dt>Si tienes una cuenta</dt><dd>Nombre, email, contraseña en forma de hash, datos fiscales del salón, periodo de uso y pagos, para prestar el servicio y facturarlo. Base: el contrato y nuestras obligaciones contables y fiscales.</dd>
        <dt>Si autorizas el envío con nuestro certificado</dt><dd>Nombre y NIF de quien firma, documento firmado, fecha e IP, para acreditar la representación ante la AEAT. Base: la autorización y las obligaciones legales asociadas.</dd>
        <dt>Si visitas la web o la app</dt><dd>El servidor puede registrar la IP, la fecha y la página pedida, por seguridad. Base: interés legítimo en proteger el servicio.</dd>
        <dt>Si visitas mverifactu.com</dt><dd>Contamos las páginas vistas en nuestro propio servidor, sin cookies, para saber cuánto y cómo se usa la web. De cada visita guardamos la fecha y la hora, la página, el tipo de dispositivo, el dominio de la web o el código de campaña del enlace que te trajo, si lo hay, el país, solo si la red que sirve la web lo indica, y un código de visitante. Base: interés legítimo en conocer el uso de la web y mejorarla.</dd>
      </dl>
      <p>El código de visitante se calcula con la IP, los datos del navegador que este envía (user agent) y un valor aleatorio que cambia cada día. Las estadísticas no guardan la IP ni los datos del navegador, y el código no sirve para reconocerte de un día para otro. No contamos los robots conocidos ni las páginas que el navegador carga por adelantado.</p>
      <p>No usamos servicios de analítica de terceros ni publicidad, no vendemos datos y no tomamos decisiones automatizadas sobre ti.</p>
      <h2>Datos de los clientes y del equipo del salón</h2>
      <p>De los datos que el salón introduce en Mverifactu es responsable el salón. Nosotros los tratamos por su cuenta, según el <a href="/encargado-del-tratamiento/">acuerdo de encargado del tratamiento</a>. Si eres cliente de un salón, dirígete primero a ese salón.</p>
      <h2>Quién recibe los datos</h2>
      <ul><li>La Agencia Tributaria (AEAT), que recibe los registros de facturación.</li><li>{host}, proveedor del servidor.</li><li>Nuestro proveedor de correo, si nos escribes.</li><li>Autoridades y tribunales, cuando la ley lo exija.</li></ul>
      <h2>Cuánto tiempo los guardamos</h2>
      <p>Las consultas, el tiempo necesario para atenderlas. Los datos de la cuenta, mientras dure el contrato y después, bloqueados, durante los plazos legales de prescripción. Los registros de facturación, durante el plazo que fija la ley. Las estadísticas de visitas, 2 años.</p>
      <h2>Tus derechos</h2>
      <p>Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:{email}">{email}</a>. Podemos pedirte que confirmes tu identidad. Como las estadísticas de visitas no llevan tu nombre ni tu IP, normalmente no podemos saber cuáles son tuyas. Si no estás de acuerdo con la respuesta, puedes reclamar ante la <a href="https://www.aepd.es">Agencia Española de Protección de Datos</a>.</p>
      <h2>Seguridad</h2>
      <p>La conexión con la app va cifrada con HTTPS. Las contraseñas se guardan como hash, y los certificados electrónicos, cifrados en el servidor. Los datos de cada salón están separados.</p>`,
    },
    {
      id: 'terms',
      path: '/terminos-de-servicio/',
      category: 'Términos de servicio',
      description: 'Condiciones para usar Mverifactu: prueba, planes, licencia definitiva, obligaciones y baja.',
      body: `
      <h2>Las partes</h2>
      <p>Estos términos regulan el uso de Mverifactu entre {name}, NIF {nif}, y el salón que abre una cuenta. Mverifactu está pensado para empresas y autónomos.</p>
      <h2>El servicio</h2>
      <p>Mverifactu permite cobrar servicios, emitir e imprimir facturas, enviar los registros a la AEAT y consultar ventas. Necesita conexión a internet para emitir facturas. No presenta declaraciones de impuestos ni da asesoramiento fiscal.</p>
      <h2>Prueba de 14 días</h2>
      <p>La prueba no se cobra ni obliga a contratar. Te avisamos 5 días antes de que termine. Al acabar no se pueden emitir facturas nuevas hasta contratar.</p>
      <h2>Planes y pago</h2>
      <p>Los <a href="/#pricing">planes y precios</a> son los publicados en la web cuando contratas, más IVA. Se pagan por adelantado por el medio que acordemos. No hacemos cargos automáticos. Cada plan permite usar la cuenta en el número de dispositivos que indica.</p>
      <h2>Licencia definitiva</h2>
      <p>Cuesta {price} + IVA, sirve para un dispositivo y no caduca. Incluye 12 meses de actualizaciones y 30 días de soporte técnico desde la compra. Renovar las actualizaciones es opcional y cuesta {renewal} + IVA al año. Se puede renovar a ese precio hasta 30 días después del vencimiento. Más tarde cuesta {recovery} + IVA e incluye 12 meses desde el pago. Las adaptaciones a cambios legales forman parte de las actualizaciones.</p>
      <h2>Fin del periodo contratado</h2>
      <p>Te avisamos antes de que termine. Si no renuevas un plan, no puedes emitir facturas de venta nuevas, pero sigues pudiendo consultar y reimprimir las anteriores, y los registros pendientes se siguen enviando a la AEAT. Puedes darte de baja cuando quieras. El plan sigue activo hasta el final del periodo pagado.</p>
      <h2>Lo que te corresponde</h2>
      <ul><li>Dar datos fiscales correctos y usar un certificado válido o autorizar el envío.</li><li>Guardar tu contraseña y el acceso a tus dispositivos.</li><li>Revisar los avisos sobre registros rechazados o pendientes.</li><li>Cumplir tus obligaciones fiscales y de protección de datos.</li><li>No usar el servicio con fines ilícitos ni intentar alterar los registros.</li></ul>
      <h2>Disponibilidad y soporte</h2>
      <p>Trabajamos para que el servicio esté disponible, pero puede haber paradas por mantenimiento, por fallos de terceros o de la propia AEAT. Si la AEAT no responde, los registros quedan en cola y se reintentan.</p>
      <h2>Responsabilidad</h2>
      <p>Respondemos del servicio según la ley. No respondemos de datos erróneos introducidos por el salón, de certificados caducados, del uso contrario a estos términos ni de causas ajenas a nuestro control. Nada de esto limita la responsabilidad que la ley no permite excluir.</p>
      <h2>Propiedad y datos</h2>
      <p>El programa es de {name}. Los datos son del salón. El tratamiento de datos personales se rige por la <a href="/politica-de-privacidad/">política de privacidad</a> y el <a href="/encargado-del-tratamiento/">acuerdo de encargado</a>.</p>
      <h2>Cambios y ley aplicable</h2>
      <p>Si cambiamos estos términos, avisaremos por email con 30 días de antelación y podrás darte de baja. Se aplica la ley española y, entre empresas, los tribunales de Barcelona.</p>`,
    },
    {
      id: 'cookies',
      updated: 'Última actualización: 25 de noviembre de 2026',
      path: '/politica-de-cookies/',
      category: 'Cookies',
      description: 'Esta web no usa cookies. Qué guarda la app de Mverifactu en tu dispositivo y cómo borrarlo.',
      body: `
      <h2>Esta web no usa cookies</h2>
      <p>La web de Mverifactu no instala cookies ni guarda datos en tu navegador. No carga herramientas de analítica, publicidad ni contenido de terceros. Las tipografías se sirven desde nuestro propio servidor. Por eso no ves un aviso de cookies.</p>
      <p>Contamos las visitas en nuestro propio servidor, sin cookies y sin guardar la IP. Lo explicamos en la <a href="/politica-de-privacidad/">política de privacidad</a>.</p>
      <h2>Qué guarda la app</h2>
      <p>La app no usa cookies publicitarias ni de analítica. Guarda en el dispositivo lo imprescindible para funcionar:</p>
      <dl class="article-definitions"><dt>Sesión</dt><dd>Mantiene tu acceso hasta que sales.</dd><dt>Idioma y aspecto</dt><dd>Recuerdan lo que has elegido en ese dispositivo.</dd><dt>Impresora</dt><dd>Recuerda la impresora y sus ajustes.</dd></dl>
      <p>Este almacenamiento es necesario para el servicio que pides y no requiere consentimiento.</p>
      <h2 id="preferences">Preferencias de cookies</h2>
      <div class="table-wrap"><table><caption>Estado en esta web</caption><thead><tr><th scope="col">Tipo</th><th scope="col">Estado</th></tr></thead><tbody><tr><td>Necesarias</td><td>No se usan</td></tr><tr><td>Analíticas</td><td>No se usan</td></tr><tr><td>Publicidad</td><td>No se usan</td></tr></tbody></table></div>
      <p>No hay nada que aceptar ni rechazar. Si algún día añadimos cookies no necesarias, antes te pediremos permiso y podrás cambiarlo aquí.</p>
      <h2>Cómo borrar los datos guardados</h2>
      <p>En la app, al cerrar sesión se borra la sesión. Para borrar el resto, elimina los datos del sitio en los ajustes del navegador o los datos de la aplicación en Android.</p>`,
    },
    {
      id: 'declaration',
      path: '/declaracion-responsable/',
      category: 'Declaración responsable',
      description: 'Declaración responsable del sistema informático de facturación Mverifactu, según la Orden HAC/1177/2024.',
      intro: 'Texto del artículo 15 de la Orden HAC/1177/2024 para Mverifactu. También está dentro de la app.',
      appLink: 'Ver la declaración en la app',
    },
    {
      id: 'processing',
      path: '/encargado-del-tratamiento/',
      category: 'Encargado del tratamiento',
      description: 'Acuerdo de encargado del tratamiento (art. 28 RGPD) entre el salón y Nails Trendy ES SL.',
      body: `
      <h2>Partes y objeto</h2>
      <p>El salón es responsable de los datos personales que introduce en Mverifactu. {name}, NIF {nif}, los trata como encargado, por cuenta del salón, según el artículo 28 del Reglamento (UE) 2016/679 (RGPD). Este acuerdo forma parte de los <a href="/terminos-de-servicio/">términos de servicio</a> y dura lo mismo que ellos.</p>
      <h2>Datos y finalidad</h2>
      <dl class="article-definitions"><dt>Personas</dt><dd>Clientes del salón que piden factura completa y profesionales del equipo.</dd><dt>Datos</dt><dd>De los clientes, nombre, identificación fiscal y dirección. Del equipo, nombre y ventas. Además, los datos de las facturas.</dd><dt>Finalidad</dt><dd>Emitir, guardar e imprimir facturas, enviar los registros a la AEAT y mostrar las ventas.</dd><dt>Operaciones</dt><dd>Registro, conservación, consulta, envío y borrado.</dd></dl>
      <h2>Obligaciones de {name}</h2>
      <ul><li>Tratar los datos solo según las instrucciones documentadas del salón, que son estos acuerdos y el uso del programa, salvo obligación legal.</li><li>Mantener la confidencialidad y exigirla a quienes accedan a los datos.</li><li>Aplicar las medidas de seguridad de este acuerdo.</li><li>Ayudar al salón a responder a los derechos de las personas y a cumplir los artículos 32 a 36 del RGPD.</li><li>Avisar al salón sin dilación indebida si hay una violación de seguridad de sus datos.</li><li>Facilitar la información necesaria para demostrar el cumplimiento y permitir auditorías razonables.</li><li>Avisar si una instrucción parece contraria a la ley.</li></ul>
      <h2>Subencargados</h2>
      <p>El salón autoriza de forma general a usar subencargados con las mismas obligaciones. Ahora es {host}, proveedor del servidor. Avisaremos por email antes de añadir o cambiar uno, y el salón podrá oponerse. Si un tratamiento se hiciera fuera del Espacio Económico Europeo, se haría con las garantías del capítulo V del RGPD.</p>
      <p>La AEAT recibe los registros por obligación legal y no es subencargada.</p>
      <h2>Medidas de seguridad</h2>
      <ul><li>Conexiones cifradas con HTTPS.</li><li>Contraseñas guardadas como hash.</li><li>Certificados electrónicos cifrados (AES-256-GCM) y nunca en los dispositivos de venta.</li><li>Datos separados por salón y acceso con cuenta.</li><li>Copia de la base de datos antes de cada actualización.</li></ul>
      <h2>Al terminar</h2>
      <p>El salón puede exportar sus ventas y pedir una copia de sus datos. Después se suprimen o se devuelven, a elección del salón, salvo los que la ley obliga a conservar, que quedan bloqueados.</p>
      <h2>Obligaciones del salón</h2>
      <p>Informar a sus clientes y a su equipo, tener base legal para los datos que introduce y no introducir datos que no hagan falta, como los de salud.</p>
      <h2>Contacto</h2>
      <p>Si necesitas este acuerdo firmado, escribe a <a href="mailto:{email}">{email}</a>.</p>`,
    },
  ],
};
