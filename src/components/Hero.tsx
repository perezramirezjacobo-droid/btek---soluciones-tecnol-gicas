import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ClipboardCheck, Clock, Gift, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = ({ onOpenQuiz }: { onOpenQuiz: () => void }) => {
  const { t } = useLanguage();
  const features = [
    "Monitoreo NOC con SLA 24x7x4x365",
    "Análisis de datos y soluciones cloud con IA",
    "Redes escalables, WiFi última generación, SD-WAN",
    "Videovigilancia inteligente con IA",
    "Ciberseguridad contra amenazas criticas",
    "Telefonía IP y colaboración segura",
    "Soporte técnico nacional con ingenieros certificados."
  ];

  return (
    <>
      {/* Inicio Section */}
      <section id="inicio" className="relative pt-32 pb-20 overflow-hidden bg-btek-dark-blue text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-btek-dark-blue/80 via-btek-dark-blue/90 to-btek-dark-blue" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,51,153,0.3),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col items-center gap-6">
                <button 
                  onClick={onOpenQuiz}
                  className="bg-btek-red hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all transform hover:scale-105 shadow-2xl shadow-btek-red/30 flex items-center gap-3 mx-auto uppercase tracking-tighter"
                >
                  <ClipboardCheck size={24} />
                  Inicia el Cuestionario
                  <ChevronRight size={20} />
                </button>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70">
                    <Clock size={16} className="text-btek-red" />
                    Solo toma 3 minutos
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70">
                    <Gift size={16} className="text-btek-red" />
                    Es gratis
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70">
                    <Zap size={16} className="text-btek-red" />
                    Recomendaciones inmediatas
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIT360 Section */}
      <section className="py-20 bg-gradient-to-br from-btek-blue to-btek-dark-blue text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {t('hero.fit_title')}
              </h2>
              <div className="bg-white/10 border-l-4 border-btek-red p-6 rounded-r-xl">
                <p className="text-xl font-bold text-white">
                  {t('hero.fit_desc')}
                </p>
              </div>
              
              <ul className="grid md:grid-cols-1 gap-4 pt-4">
                {features.map((f, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-btek-red flex-shrink-0 mt-1" size={20} />
                    <span className="text-white">{f}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-8">
                <p className="text-white font-bold uppercase tracking-widest text-sm">{t('hero.transform')}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-btek-red/20 rounded-full blur-3xl animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Technology Dashboard" 
                className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
