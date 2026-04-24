import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { PartnersCarousel } from './PartnersCarousel';
import { BtekLogo } from './BtekLogo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.inicio'), href: '/' },
    { name: t('nav.nosotros'), href: '#nosotros' },
    { name: t('nav.estructura'), href: '#estructura' },
    { name: t('nav.productos'), href: '#productos' },
    { name: t('nav.soluciones'), href: '#soluciones' },
    { name: t('nav.casos'), href: '#casos' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.tecnologias'), href: '#tecnologias' },
    { name: t('nav.contacto'), href: '#contacto' },
    { name: t('nav.recursos'), href: '#recursos' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-0" : "bg-white/80 backdrop-blur-sm py-0"
    )}>
      <div className="container mx-auto px-4 md:px-6 py-2">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-6 xl:gap-8">
          <div className="flex shrink-0 items-center justify-between w-full lg:w-auto lg:pr-2">
            <Link to="/" className="flex items-center gap-2 group py-0.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btek-blue">
              <BtekLogo className="h-11 sm:h-12 md:h-14 w-auto transition-transform duration-300 ease-out group-hover:scale-[1.02]" />
              <span className="sr-only">BTEK — {t('nav.inicio')}</span>
            </Link>

            {/* Language Switcher for mobile */}
            <div className="flex lg:hidden items-center gap-2">
              <button 
                onClick={() => setLanguage('es')}
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-full border transition-all",
                  language === 'es' ? "bg-btek-red text-white border-btek-red" : "bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100"
                )}
              >
                <img src="https://flagcdn.com/w20/mx.png" alt="ES" className="w-4 h-auto rounded-sm" />
                <span className="text-[9px] font-black tracking-widest">ES</span>
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-full border transition-all",
                  language === 'en' ? "bg-btek-red text-white border-btek-red" : "bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100"
                )}
              >
                <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-4 h-auto rounded-sm" />
                <span className="text-[9px] font-black tracking-widest">EN</span>
              </button>
            </div>
          </div>
          
          {/* Navigation Links - Always Visible & No Wrap */}
          <div className="flex-1 min-w-0 max-w-full overflow-x-auto no-scrollbar lg:overflow-visible lg:border-l lg:border-slate-200/80 lg:pl-6 xl:pl-8">
            <div className="flex flex-nowrap items-center justify-center lg:justify-start gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 px-4 lg:px-0 min-w-max mx-auto lg:mx-0">
              {navLinks.map((link) =>
                link.href === '/' ? (
                  <Link
                    key={link.name}
                    to="/"
                    className="relative text-[9px] md:text-[10px] font-bold text-slate-600 hover:text-btek-blue transition-colors uppercase tracking-[0.05em] md:tracking-[0.1em] group py-1 whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-btek-red transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative text-[9px] md:text-[10px] font-bold text-slate-600 hover:text-btek-blue transition-colors uppercase tracking-[0.05em] md:tracking-[0.1em] group py-1 whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-btek-red transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3 text-slate-400 border-r pr-4 border-slate-200">
              <a href="https://www.youtube.com/@BtekTecnologiaAplicadaaNegocio" target="_blank" rel="noopener noreferrer">
                <Youtube size={16} className="hover:text-btek-red transition-colors cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570606985844&locale=es_LA" target="_blank" rel="noopener noreferrer">
                <Facebook size={16} className="hover:text-btek-blue transition-colors cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/btekventas/" target="_blank" rel="noopener noreferrer">
                <Instagram size={16} className="hover:text-btek-blue transition-colors cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/102811968/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} className="hover:text-btek-blue transition-colors cursor-pointer" />
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setLanguage('es')}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all",
                  language === 'es' ? "bg-btek-red text-white border-btek-red shadow-md" : "bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100"
                )}
              >
                <img src="https://flagcdn.com/w20/mx.png" alt="ES" className="w-4 h-auto rounded-sm" />
                <span className="text-[10px] font-black tracking-widest">ES</span>
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all",
                  language === 'en' ? "bg-btek-red text-white border-btek-red shadow-md" : "bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100"
                )}
              >
                <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-4 h-auto rounded-sm" />
                <span className="text-[10px] font-black tracking-widest">EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isScrolled ? 0 : 'auto', opacity: isScrolled ? 0 : 1 }}
        className="overflow-hidden"
      >
        <PartnersCarousel />
      </motion.div>
    </nav>
  );
};



