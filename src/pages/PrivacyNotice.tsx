import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BtekLogo } from '../components/BtekLogo';
import { privacyNoticeEs, privacyNoticeEn } from '../content/privacyNoticeData';

export const PrivacyNotice = () => {
  const { language, t } = useLanguage();
  const data = language === 'es' ? privacyNoticeEs : privacyNoticeEn;

  useEffect(() => {
    document.title = language === 'es' ? 'Aviso de Privacidad | Btek' : 'Privacy Notice | Btek';
    return () => {
      document.title = 'Btek Expertos en Redes Complejas';
    };
  }, [language]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btek-blue">
            <BtekLogo className="h-11 sm:h-12 w-auto" />
            <span className="sr-only">Btek — {t('privacy.back_home')}</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-btek-blue hover:text-btek-red transition-colors"
          >
            <ArrowLeft size={18} aria-hidden />
            {t('privacy.back_home')}
          </Link>
        </div>
      </header>

      <article className="container mx-auto px-4 py-10 md:py-14 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-btek-blue mb-2">{t('privacy.document_title')}</h1>
        <p className="text-sm text-slate-500 mb-10">{t('privacy.updated')}</p>

        <p className="text-slate-700 leading-relaxed mb-10">{data.intro}</p>

        <div className="space-y-10">
          {data.blocks.map((block) => (
            <section key={block.title}>
              <h2 className="text-xl font-bold text-btek-blue mb-4 border-l-4 border-btek-red pl-4">{block.title}</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {block.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-slate-200">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-btek-blue font-semibold hover:text-btek-red transition-colors"
          >
            <ArrowLeft size={18} aria-hidden />
            {t('privacy.back_home')}
          </Link>
        </div>
      </article>
    </div>
  );
};
