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
          className="max-w-xl mx-auto rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-8 sm:py-7 shadow-sm text-slate-800"
        >
          <div className="font-black text-btek-blue text-center text-sm sm:text-base uppercase tracking-wide border-b border-slate-100 pb-3 mb-3">
            {t('org.dg')}
          </div>
          <ul className="space-y-3 text-sm sm:text-[15px] leading-snug">
            <li className="flex gap-2">
              <span className="text-btek-red font-black shrink-0">—</span>
              <span className="font-semibold">{t('org.admin')}</span>
            </li>
            <li>
              <div className="flex gap-2">
                <span className="text-btek-red font-black shrink-0">—</span>
                <span className="font-semibold">{t('org.ing')}</span>
              </div>
              <ul className="mt-2 ml-2 sm:ml-4 pl-3 sm:pl-4 border-l-2 border-btek-blue/25 space-y-2">
                <li>
                  <span className="font-medium text-slate-700">{t('org.ops')}</span>
                  <div className="mt-1.5 ml-3 sm:ml-4 pl-3 border-l border-slate-300 text-slate-600">
                    {t('org.noc')}
                  </div>
                </li>
                <li className="font-medium text-slate-700 pt-0.5">{t('org.sp')}</li>
              </ul>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
