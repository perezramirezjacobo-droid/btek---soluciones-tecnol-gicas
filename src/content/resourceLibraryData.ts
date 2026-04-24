/**
 * Biblioteca de PDFs — rutas servidas desde `public/recursos/<carpeta>/`.
 * Los nombres de archivo con espacios o acentos se codifican en la URL.
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

/** Ruta pública segura para un PDF bajo `public/recursos/`. */
const pdfHref = (folder: string, filename: string) =>
  `/recursos/${folder}/${encodeURIComponent(filename)}`;

export const RESOURCE_LIBRARY: ResourceCategoryConfig[] = [
  {
    id: 'curriculum',
    labelEs: 'Curriculum',
    labelEn: 'Curriculum',
    files: [
      {
        labelEs: 'Curriculum empresarial BTEK',
        labelEn: 'BTEK corporate curriculum',
        href: pdfHref('curriculum', 'Curriculum Empresarial Btek.pdf'),
      },
      {
        labelEs: 'Curriculum empresarial BTEK (ES, sin Huawei) — 28 ene.',
        labelEn: 'BTEK corporate curriculum (ES, no Huawei) — Jan 28',
        href: pdfHref(
          'curriculum',
          'Curriculum Empresarial Btek (es) sin Hauwei - 28 Enero.pdf',
        ),
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
        href: pdfHref('presentacion', 'One Page Btek VF.pdf'),
      },
      {
        labelEs: 'Presentación BTEK ESP (con Huawei)',
        labelEn: 'BTEK presentation ES (with Huawei)',
        href: pdfHref(
          'presentacion',
          'PRESENTACIÓN BTEK ESP - con Huawei.pptx_compressed.pdf',
        ),
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
        href: pdfHref('edutek', 'One Page EDUTEK.pdf'),
      },
      {
        labelEs: 'Presentación EduTek',
        labelEn: 'EduTek presentation',
        href: pdfHref('edutek', 'Presentación EduTek.pdf'),
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
        href: pdfHref('fit360', 'One Page Btek Fit360.pdf'),
      },
      {
        labelEs: 'Presentación Fit360',
        labelEn: 'Fit360 presentation',
        href: pdfHref('fit360', 'Presentación Btek FIT360.pdf'),
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
        href: pdfHref('hoteleria', 'Presentación Btek Hotel Connect.pdf'),
      },
      {
        labelEs: 'One page HotelConnect',
        labelEn: 'HotelConnect one pager',
        href: pdfHref('hoteleria', 'One Page Btek HotelConnect.pdf'),
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
        href: pdfHref('retail', 'Presentación Btek Pak Retail.pdf'),
      },
      {
        labelEs: 'One page Pak Retail — general',
        labelEn: 'Pak Retail one pager — general',
        href: pdfHref('retail', 'One Page Btek Pak Retail General.pdf'),
      },
      {
        labelEs: 'One page Pak Retail — Holowits',
        labelEn: 'Pak Retail one pager — Holowits',
        href: pdfHref('retail', 'One Page Pak Retail Holowits.pdf'),
      },
      {
        labelEs: 'One page Pak Retail — Data Intelligence',
        labelEn: 'Pak Retail one pager — Data Intelligence',
        href: pdfHref('retail', 'One Page Btek Pak Retail - Data Intelligence.pdf'),
      },
      {
        labelEs: 'One page Pak Retail — Huawei',
        labelEn: 'Pak Retail one pager — Huawei',
        href: pdfHref('retail', 'One Page Btek Pak Retail - Huawei.pdf'),
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
        href: pdfHref('salud', 'Presentación HospiTek 360.pdf'),
      },
      {
        labelEs: 'One page HospiTek 360',
        labelEn: 'HospiTek 360 one pager',
        href: pdfHref('salud', 'One Page HospiTek 360.pdf'),
      },
    ],
  },
];
