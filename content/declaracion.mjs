/**
 * Declaración responsable, chép nguyên văn từ app (nails-pos: shared/declaracion.ts và shared/sif.ts).
 * App là bản gốc: khi app đổi phiên bản hoặc đã ký thì cập nhật file này.
 * Luôn là tiếng Tây Ban Nha vì là văn bản chính thức.
 */
export const signature = { date: null, place: null };
export const appUrl = 'https://app.mverifactu.com/declaracion';
export const title = 'Declaración responsable del sistema informático de facturación';

export const items = [
  ['Nombre del sistema informático', 'Mverifactu'],
  ['Código identificador del sistema informático', 'VF'],
  ['Identificador completo de la versión del sistema informático', '1.1.0'],
  ['Componentes, hardware y software, del sistema informático, descripción y principales funcionalidades', [
    'El sistema consta de los siguientes componentes software, todos producidos por la misma entidad productora:',
    '1. Aplicación de punto de venta «Mverifactu» (versión web para navegador y aplicación para Android/iOS, mismo código), con la que el usuario selecciona los servicios, emite facturas completas y simplificadas, consulta y reimprime facturas, emite facturas rectificativas, anula facturas, consulta las ventas y recibe los avisos sobre la remisión a la AEAT.',
    '2. Servidor de facturación (Node.js) con base de datos PostgreSQL, que genera los registros de facturación de alta y anulación, calcula la huella (hash SHA-256) y los encadena por obligado tributario, los conserva, y los remite a la sede electrónica de la AEAT mediante el servicio web VERI*FACTU con el certificado electrónico del obligado tributario o, si este lo ha autorizado, con el de la entidad productora, respetando el control de flujo y reintentando los envíos fallidos.',
    'Hardware: no incluye hardware propio. Funciona en dispositivos de uso general (ordenador, tableta o teléfono Android) y, opcionalmente, en impresoras térmicas de tickets genéricas conectadas por Bluetooth, que solo reciben el contenido de la factura ya generado, incluido el código QR.',
    'Funcionalidades principales: emisión de facturas completas (F1) con los datos del destinatario y de facturas simplificadas (F2), con IVA; facturas rectificativas por diferencias por devoluciones (R1 y R5) y por sustitución para corregir los datos del destinatario (R4); anulación de registros; subsanación de registros rechazados o aceptados con errores; impresión de la factura con el código QR y la frase «Factura verificable en la sede electrónica de la AEAT»; y consulta del estado de remisión a la AEAT de cada registro.',
  ].join('<br>')],
  ['Indicación de si el sistema informático solo puede funcionar exclusivamente como «VERI*FACTU»', 'Sí'],
  ['Indicación de si el sistema informático permite ser usado por varios obligados tributarios o por un mismo usuario para dar soporte a la facturación de varios obligados tributarios', 'Sí'],
  ['Tipos de firma utilizados para firmar los registros de facturación y de evento en caso de no ser utilizado como «VERI*FACTU»', 'No aplica: el sistema funciona exclusivamente como «VERI*FACTU».'],
  ['Razón social de la entidad productora del sistema informático', '{name}'],
  ['Número de identificación fiscal (NIF) español de la entidad productora', '{nif}'],
  ['Dirección postal completa de contacto de la entidad productora', '{address}'],
  ['Declaración de cumplimiento', '{name} hace constar que el sistema informático «Mverifactu», en la versión 1.1.0, cumple con lo dispuesto en el artículo 29.2.j) de la Ley 58/2003, de 17 de diciembre, General Tributaria, en el Reglamento que establece los requisitos que deben adoptar los sistemas y programas informáticos o electrónicos que soporten los procesos de facturación de empresarios y profesionales, y la estandarización de formatos de los registros de facturación, aprobado por el Real Decreto 1007/2023, de 5 de diciembre, en la Orden HAC/1177/2024, de 17 de octubre, y en la sede electrónica de la Agencia Estatal de Administración Tributaria para todo aquello que complete las especificaciones de dicha orden.'],
  ['Fecha y lugar en los que la entidad productora suscribe la declaración responsable', signature.date && signature.place ? `${signature.date}, ${signature.place}` : '[pendiente de firma]'],
];

export const annex = [
  ['Modalidad', 'Todos los registros de facturación se remiten a la AEAT por el servicio web VERI*FACTU. Por ello, conforme al Reglamento y a la Orden, no se firman electrónicamente ni se genera registro de eventos.'],
  ['Integridad e inalterabilidad', 'Cada registro de alta o anulación incluye la huella SHA-256 calculada según las especificaciones de la AEAT y la huella del registro anterior del mismo obligado tributario. Antes de generar un registro se comprueba el registro anterior y su encadenamiento. Los registros no se modifican ni se borran: las correcciones se hacen mediante facturas rectificativas, anulaciones o registros de subsanación.'],
  ['Simultaneidad y código QR', 'El registro de facturación de alta se genera en el mismo momento en que se expide la factura, antes de entregarla. La factura impresa o mostrada incluye al principio el código QR (nivel de corrección M, entre 30 y 40 mm) con la URL de cotejo de la AEAT, precedido de «QR tributario:» y seguido de «Factura verificable en la sede electrónica de la AEAT».'],
  ['Remisión', 'La remisión se hace de forma automática con el certificado electrónico del obligado tributario o con el de la entidad productora, si el obligado la ha autorizado; ambos se conservan cifrados en el servidor y nunca en los dispositivos de venta. Se respeta el tiempo de espera indicado por la AEAT entre envíos (TiempoEsperaEnvio) y el máximo de 1.000 registros por envío. Los envíos fallidos se reintentan de forma automática, al menos una vez cada hora y por orden de generación, y se remiten con la marca de incidencia; el sistema avisa al usuario de los registros no remitidos, rechazados o aceptados con errores. Las respuestas y el CSV de la AEAT se conservan junto a cada registro.'],
  ['Conservación y trazabilidad', 'Los registros de facturación, los ficheros XML enviados y las respuestas de la AEAT se conservan en la base de datos del servidor durante el plazo legal. Cada instalación tiene un número de instalación único que no se reutiliza.'],
];
