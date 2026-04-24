/**
 * Biblioteca de PDFs — archivos en `public/recursos/<carpeta>/`
 * (nombres ASCII: sin espacios ni acentos).
 */
export type ResourcePdfEntry = {
  labelEs: string;
  labelEn: string;
  href: string;
};

export type ResourceCategoryConfig = {
  id: 'curriculum' | 'presentacion' | 'edutek' | 'fit360' | 'hoteleria' | 'retail' | 'salud';
  labelEs: string;
  labelEn: string;
  files: ResourcePdfEntry[];
};

export const RESOURCE_LIBRARY: ResourceCategoryConfig[] = [
  {
    id: 'curriculum',
    labelEs: 'Curriculum',
    labelEn: 'Curriculum',
    files: [
      {
        labelEs: 'Curriculum empresarial BTEK',
        labelEn: 'BTEK corporate curriculum',
        href: '/recursos/curriculum/curriculum-empresarial-btek.pdf',
      },
      {
        labelEs: 'Curriculum empresarial BTEK (ES, sin Huawei) — 28 ene.',
        labelEn: 'BTEK corporate curriculum (ES, no Huawei) — Jan 28',
        href: '/recursos/curriculum/curriculum-empresarial-btek-es-sin-huawei-28-enero.pdf',
      },
    ],
  },
  {
    id: 'presentacion',
    labelEs: 'Presentación',
    labelEn: 'Presentation',
    files: [
      {
        labelEs: 'One page BTEK',
        labelEn: 'BTEK one pager',
        href: '/recursos/presentacion/presentacion-one-page-btek.pdf',
      },
      {
        labelEs: 'Presentación BTEK ESP (con Huawei)',
        labelEn: 'BTEK presentation ES (with Huawei)',
        href: '/recursos/presentacion/presentacion-btek-esp-huawei-compressed.pdf',
      },
    ],
  },
  {
    id: 'edutek',
    labelEs: 'Edutek',
    labelEn: 'Edutek',
    files: [
      {
        labelEs: 'One page EduTek',
        labelEn: 'EduTek one pager',
        href: '/recursos/edutek/edutek-one-page.pdf',
      },
      {
        labelEs: 'Presentación EduTek',
        labelEn: 'EduTek presentation',
        href: '/recursos/edutek/edutek-presentacion.pdf',
      },
    ],
  },
  {
    id: 'fit360',
    labelEs: 'Fit360',
    labelEn: 'Fit360',
    files: [
      {
        labelEs: 'One page Fit360',
        labelEn: 'Fit360 one pager',
        href: '/recursos/fit360/fit360-one-page.pdf',
      },
      {
        labelEs: 'Presentación Fit360',
        labelEn: 'Fit360 presentation',
        href: '/recursos/fit360/fit360-presentacion.pdf',
      },
    ],
  },
  {
    id: 'hoteleria',
    labelEs: 'Hotelería',
    labelEn: 'Hospitality',
    files: [
      {
        labelEs: 'Presentación Hotel Connect',
        labelEn: 'Hotel Connect presentation',
        href: '/recursos/hoteleria/hoteleria-hotel-connect-presentacion.pdf',
      },
      {
        labelEs: 'One page HotelConnect',
        labelEn: 'HotelConnect one pager',
        href: '/recursos/hoteleria/hoteleria-hotelconnect-one-page.pdf',
      },
    ],
  },
  {
    id: 'retail',
    labelEs: 'Retail',
    labelEn: 'Retail',
    files: [
      {
        labelEs: 'Presentación Pak Retail',
        labelEn: 'Pak Retail presentation',
        href: '/recursos/retail/retail-pak-retail-presentacion.pdf',
      },
      {
        labelEs: 'One page Pak Retail — general',
        labelEn: 'Pak Retail one pager — general',
        href: '/recursos/retail/retail-pak-retail-general-one-page.pdf',
      },
      {
        labelEs: 'One page Pak Retail — Holowits',
        labelEn: 'Pak Retail one pager — Holowits',
        href: '/recursos/retail/retail-pak-retail-holowits-one-page.pdf',
      },
      {
        labelEs: 'One page Pak Retail — Data Intelligence',
        labelEn: 'Pak Retail one pager — Data Intelligence',
        href: '/recursos/retail/retail-pak-retail-data-intelligence-one-page.pdf',
      },
      {
        labelEs: 'One page Pak Retail — Huawei',
        labelEn: 'Pak Retail one pager — Huawei',
        href: '/recursos/retail/retail-pak-retail-huawei-one-page.pdf',
      },
    ],
  },
  {
    id: 'salud',
    labelEs: 'Salud',
    labelEn: 'Healthcare',
    files: [
      {
        labelEs: 'Presentación HospiTek 360',
        labelEn: 'HospiTek 360 presentation',
        href: '/recursos/salud/salud-hospitek-360-presentacion.pdf',
      },
      {
        labelEs: 'One page HospiTek 360',
        labelEn: 'HospiTek 360 one pager',
        href: '/recursos/salud/salud-hospitek-360-one-page.pdf',
      },
    ],
  },
];
