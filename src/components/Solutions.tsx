import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Network, Cpu, Wifi, Shield, Smartphone, Cloud, Monitor, Phone, Video, Database, ChevronRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Solutions = () => {
  const { t } = useLanguage();

  const solutions = useMemo(() => [
    { title: t('solutions.item.redes'), icon: <Network />, desc: t('solutions.item.redes_desc') },
    { title: t('solutions.item.routing'), icon: <Cpu />, desc: t('solutions.item.routing_desc') },
    { title: t('solutions.item.wireless'), icon: <Wifi />, desc: t('solutions.item.wireless_desc') },
    { title: t('solutions.item.cyber'), icon: <Shield />, desc: t('solutions.item.cyber_desc') },
    { title: t('solutions.item.iot'), icon: <Smartphone />, desc: t('solutions.item.iot_desc') },
    { title: t('solutions.item.cloud'), icon: <Cloud />, desc: t('solutions.item.cloud_desc') },
    { title: t('solutions.item.workplace'), icon: <Monitor />, desc: t('solutions.item.workplace_desc') },
    { title: t('solutions.item.telephony'), icon: <Phone />, desc: t('solutions.item.telephony_desc') },
    { title: t('solutions.item.video'), icon: <Video />, desc: t('solutions.item.video_desc') },
    { title: t('solutions.item.analytics'), icon: <Database />, desc: t('solutions.item.analytics_desc') },
  ], [t]);

  return (
    <section id="soluciones" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-btek-blue">{t('solutions.title')}</h2>
          <p className="text-slate-600">{t('solutions.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutions.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-btek-red/10 text-btek-red rounded-full flex items-center justify-center mb-4 group-hover:bg-btek-red group-hover:text-white transition-all shadow-lg shadow-transparent group-hover:shadow-btek-red/20">
                {s.icon}
              </div>
              <h3 className="font-bold text-sm mb-2 text-slate-900">{s.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-btek-dark-blue rounded-3xl p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-btek-red/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{t('solutions.why_title')}</h3>
              <p className="text-slate-300 text-lg">
                {t('solutions.why_desc')}
              </p>
              <button 
                onClick={() => document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-btek-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2"
              >
                {t('solutions.why_cta')} <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-2xl text-center">
                <p className="text-4xl font-bold text-btek-red mb-2">+3,500</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('solutions.stat.projects')}</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl text-center">
                <p className="text-4xl font-bold text-btek-red mb-2">24/7</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('solutions.stat.support')}</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl text-center">
                <p className="text-4xl font-bold text-btek-red mb-2">&lt;4h</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{t('solutions.stat.response')}</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl text-center flex flex-col items-center justify-center min-h-[120px]">
                <p className="text-lg sm:text-xl font-bold text-btek-red leading-snug">
                  {t('solutions.stat.presence')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
