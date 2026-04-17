import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BtekLogo } from './BtekLogo';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-8">
          <div className="flex items-center gap-2">
            <BtekLogo variant="light" className="h-14 sm:h-16 md:h-[4.5rem] w-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-btek-red transition-colors">{t('nav.inicio')}</a>
            <a href="#nosotros" className="hover:text-btek-red transition-colors">{t('nav.nosotros')}</a>
            <a href="#productos" className="hover:text-btek-red transition-colors">{t('nav.productos')}</a>
            <a href="#soluciones" className="hover:text-btek-red transition-colors">{t('nav.soluciones')}</a>
            <a href="#contacto" className="hover:text-btek-red transition-colors">{t('nav.contacto')}</a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@BtekTecnologiaAplicadaaNegocio" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} className="hover:text-btek-red cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61570606985844&locale=es_LA" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} className="hover:text-btek-red cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/btekventas/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="hover:text-btek-red cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/102811968/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="hover:text-btek-red cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-4">
            <span>55345618</span>
            <span>ventas@btek.com.mx</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
