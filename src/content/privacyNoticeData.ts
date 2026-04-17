/**
 * Aviso de privacidad alineado a la LFPDPPP (México).
 * Datos del responsable provistos por Btek.
 */

export type PrivacyBlock = { title: string; paragraphs: string[] };

export const PRIVACY_COMPANY = {
  name: 'Btek',
  address:
    'Adolfo Prieto No. 1634, Col. Del Valle Sur, Benito Juárez, C.P. 03104, Ciudad de México, México.',
  emailLegal: 'ventas@btek.com.mx',
} as const;

export const privacyNoticeEs: { intro: string; blocks: PrivacyBlock[] } = {
  intro:
    'En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, el responsable del tratamiento de datos personales pone a su disposición el presente Aviso de Privacidad.',
  blocks: [
    {
      title: '1. Responsable del tratamiento de datos personales',
      paragraphs: [
        `Responsable: ${PRIVACY_COMPANY.name}.`,
        `Domicilio para oír y recibir notificaciones: ${PRIVACY_COMPANY.address}`,
        `Correo electrónico para asuntos relacionados con protección de datos y derechos ARCO: ${PRIVACY_COMPANY.emailLegal}`,
      ],
    },
    {
      title: '2. Datos personales que podemos recabar',
      paragraphs: [
        'Para las finalidades descritas en este aviso, podemos tratar datos de identificación y contacto que usted nos proporcione de forma directa, entre otros: nombre, puesto, empresa, sitio web, correo electrónico, teléfono o WhatsApp, ubicación, así como la solución de interés, necesidades de cotización y mensajes que nos envíe a través de nuestros formularios o medios de contacto.',
        'No solicitamos datos personales sensibles a través de nuestros formularios generales de contacto. Si en algún supuesto específico se requiere información adicional, se le informará oportunamente y, en su caso, se solicitará su consentimiento expreso.',
      ],
    },
    {
      title: '3. Finalidades del tratamiento de datos',
      paragraphs: [
        'Las finalidades necesarias para la relación con usted:',
        '• Atender solicitudes de información, aclaraciones y seguimiento a mensajes enviados a través del sitio o por correo electrónico.',
        '• Evaluar y dar seguimiento a cotizaciones, propuestas comerciales y requerimientos de soluciones tecnológicas.',
        '• Dar cumplimiento a obligaciones contractuales o precontractuales cuando exista una relación comercial o de prestación de servicios.',
        '• Mantener registros de contacto para fines de servicio al cliente y seguimiento de la relación.',
        'Finalidades que no son necesarias pero que nos permiten mejorar nuestros servicios (cuando aplique y usted no se oponga):',
        '• Realizar análisis estadísticos y de mejora continua sobre el uso de nuestros canales de contacto, siempre que no se identifique indebidamente a los titulares.',
        'Si no desea que sus datos se traten para estas finalidades secundarias, puede enviarnos un correo a la dirección indicada en la sección de derechos ARCO.',
      ],
    },
    {
      title: '4. Medidas de seguridad',
      paragraphs: [
        'Implementamos medidas de seguridad administrativas, técnicas y físicas razonables conforme a la LFPDPPP para proteger los datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.',
        'Entre otras: controles de acceso a la información, uso de canales de comunicación legítimos, capacitación básica del personal con acceso a datos, y revisiones periódicas de los procesos de tratamiento. El envío de información por Internet no es completamente seguro; le recomendamos no enviar datos confidenciales no solicitados por canales no verificados.',
      ],
    },
    {
      title: '5. Procedimiento para ejercer los Derechos ARCO',
      paragraphs: [
        'Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como Derechos ARCO.',
        `Para ejercer sus derechos ARCO o revocar el consentimiento del tratamiento de sus datos personales, deberá enviar una solicitud al correo ${PRIVACY_COMPANY.emailLegal}, indicando al menos: nombre del titular y domicilio u otro medio para comunicar la respuesta; documentos que acrediten su identidad o, en su caso, la del representante legal; descripción clara y precisa de los datos personales respecto de los que busque ejercer algún derecho, y cualquier otro elemento que facilite la localización de los datos.`,
        'Le responderemos en los plazos establecidos por la ley y le informaremos el resultado de su solicitud, si procede, o las razones legales por las que no pueda atenderse, en su caso.',
      ],
    },
    {
      title: '6. Revocación del consentimiento y limitación de uso',
      paragraphs: [
        'Puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales, o limitar el uso o divulgación de los mismos, enviando su solicitud al correo señalado en el apartado anterior, con la misma información mínima requerida para ejercer los derechos ARCO.',
      ],
    },
    {
      title: '7. Transferencias',
      paragraphs: [
        'Salvo obligación legal o requerimiento de autoridad competente, no transferimos sus datos personales a terceros nacionales o internacionales sin informarle y, cuando la ley lo exija, obtener su consentimiento.',
      ],
    },
    {
      title: '8. Cambios al presente aviso',
      paragraphs: [
        'Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad. Las modificaciones estarán disponibles en esta misma sección del sitio web, indicando la fecha de la última actualización.',
      ],
    },
    {
      title: '9. Autoridad competente',
      paragraphs: [
        'Si considera que su derecho a la protección de datos personales ha sido lesionado por alguna conducta u omisión de nuestra parte, podrá interponer ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) la queja o denuncia que considere procedente (www.inai.org.mx).',
      ],
    },
  ],
};

export const privacyNoticeEn: { intro: string; blocks: PrivacyBlock[] } = {
  intro:
    'In compliance with the Mexican Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations, the data controller makes this Privacy Notice available to you.',
  blocks: [
    {
      title: '1. Data controller',
      paragraphs: [
        `Controller: ${PRIVACY_COMPANY.name}.`,
        `Address for notices: ${PRIVACY_COMPANY.address}`,
        `Email for data protection matters and ARCO rights: ${PRIVACY_COMPANY.emailLegal}`,
      ],
    },
    {
      title: '2. Personal data we may collect',
      paragraphs: [
        'For the purposes described in this notice, we may process identification and contact data that you provide directly, including: name, position, company, website, email, phone or WhatsApp, location, solution of interest, quoting needs, and messages sent through our forms or contact channels.',
        'We do not request sensitive personal data through our general contact forms. If additional information is required in a specific case, you will be informed in due course and, where applicable, your express consent will be requested.',
      ],
    },
    {
      title: '3. Purposes of processing',
      paragraphs: [
        'Purposes necessary for our relationship with you:',
        '• Respond to requests for information, clarifications, and follow-up on messages sent through the site or email.',
        '• Assess and follow up on quotes, commercial proposals, and technology solution requirements.',
        '• Fulfill contractual or pre-contractual obligations when there is a commercial or service relationship.',
        '• Keep contact records for customer service and relationship follow-up.',
        'Purposes that are not necessary but help us improve our services (where applicable and unless you object):',
        '• Perform statistical analysis and continuous improvement on the use of our contact channels, provided individual identification is not misused.',
        'If you do not wish your data to be processed for these secondary purposes, you may email the address indicated in the ARCO rights section.',
      ],
    },
    {
      title: '4. Security measures',
      paragraphs: [
        'We implement reasonable administrative, technical, and physical security measures in accordance with the LFPDPPP to protect personal data against damage, loss, alteration, destruction, or unauthorized use, access, or processing.',
        'Among others: access controls, use of legitimate communication channels, basic training for personnel with access to data, and periodic reviews of processing procedures. Transmission of information over the Internet is not completely secure; we recommend not sending unsolicited confidential data through unverified channels.',
      ],
    },
    {
      title: '5. ARCO rights procedure',
      paragraphs: [
        'You have the right to know what personal data we hold about you, what we use it for, and the conditions of its use (Access). You may also request correction of outdated, inaccurate, or incomplete information (Rectification); erasure from our records when you consider it is not being used in accordance with applicable principles and obligations (Cancellation); and object to specific uses of your data (Opposition). These are known as ARCO rights.',
        `To exercise your ARCO rights or revoke consent for processing, send a request to ${PRIVACY_COMPANY.emailLegal}, including at least: full name and address or another channel to communicate the response; documents proving your identity or your legal representative’s; a clear description of the personal data and the right you wish to exercise; and any other element that helps locate the data.`,
        'We will respond within the legal deadlines and inform you whether the request is granted or the legal reasons if it cannot be fulfilled.',
      ],
    },
    {
      title: '6. Revocation and limitation',
      paragraphs: [
        'You may revoke consent or limit the use or disclosure of your data by sending a request to the email above with the same minimum information required to exercise ARCO rights.',
      ],
    },
    {
      title: '7. Transfers',
      paragraphs: [
        'Unless required by law or competent authority, we do not transfer your personal data to domestic or international third parties without informing you and, where the law requires it, obtaining your consent.',
      ],
    },
    {
      title: '8. Changes to this notice',
      paragraphs: [
        'We may modify or update this privacy notice at any time. Changes will be published in this section of the website with the date of the last update.',
      ],
    },
    {
      title: '9. Competent authority',
      paragraphs: [
        'If you believe your data protection rights have been violated, you may file a complaint with the National Institute for Transparency, Access to Information and Personal Data Protection (INAI) at www.inai.org.mx.',
      ],
    },
  ],
};
