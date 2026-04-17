import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const OrgChart = () => {
  const { t } = useLanguage();

  return (
    <section id="estructura" className="py-14 md:py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-btek-blue uppercase tracking-tight">
            {t('org.title')}
          </h2>
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-btek-red mx-auto rounded-full mt-3 md:mt-4" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8 sm:py-8 shadow-sm"
        >
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-left">
            {t('org.body')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
