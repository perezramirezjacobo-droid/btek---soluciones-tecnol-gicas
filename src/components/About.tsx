import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MexicoMap = lazy(() => import('./MexicoMap').then((m) => ({ default: m.MexicoMap })));

export const About = ({ onOpenQuiz }: { onOpenQuiz: () => void }) => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <span className="text-btek-blue font-bold uppercase tracking-widest text-sm">{t('about.who')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('about.desc')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-btek-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                {t('about.more')}
              </button>
              <button 
                onClick={onOpenQuiz}
                className="border-2 border-btek-red text-btek-red px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                {t('about.audit')}
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-slate-100">
              <button 
                onClick={() => document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-btek-blue font-bold flex items-center gap-2 hover:text-btek-red transition-colors"
              >
                {t('about.success')} <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-4 text-slate-600">
                <Phone size={18} className="text-btek-red" />
                <span className="font-bold text-sm">55345618</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-btek-red/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 space-y-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-white/10">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/nGIXY_Q76xM" 
                  title="BTEK Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600" 
                  alt="Modern Data Center" 
                  className="rounded-xl shadow-lg border border-slate-100"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" 
                  alt="Microchip Technology" 
                  className="rounded-xl shadow-lg border border-slate-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Suspense
            fallback={
              <div
                className="w-full min-h-[650px] rounded-[2rem] bg-slate-100 animate-pulse border border-slate-200"
                aria-hidden
              />
            }
          >
            <MexicoMap />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
};
