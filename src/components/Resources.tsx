import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CiscoModal } from './CiscoModal';

export const Resources = () => {
  const { t } = useLanguage();
  const [isCiscoModalOpen, setIsCiscoModalOpen] = useState(false);

  const technologies = [
    { name: "Cisco", logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg", isSpecial: true },
    { name: "HP", logo: "/hp.png" },
    { name: "Fortinet", logo: "/fortinet.png" },
    { name: "Huawei", logo: "/huawei.png" },
    { name: "TP-Link", logo: "/tplink.png" },
    { name: "Aruba", logo: "/aruba.png" },
    { name: "Dell", logo: "/dell.png" },
    { name: "Microsoft", logo: "/microsoft.png" },
    { name: "Axis", logo: "/axis.png" },
    { name: "Belden", logo: "/belden.png" },
    { name: "Dintelligence", logo: "/dintelligence.png" },
    { name: "Alhua", logo: "/alhua.png" },
  ];

  return (
    <section id="recursos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-btek-blue mb-4">{t('resources.title')}</h2>
          <p className="text-slate-600">{t('resources.subtitle')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => tech.isSpecial && setIsCiscoModalOpen(true)}
              className={`w-40 h-24 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100 p-6 hover:shadow-md transition-all group ${tech.isSpecial ? 'cursor-pointer hover:border-btek-red ring-2 ring-transparent hover:ring-btek-red/20' : 'hover:border-btek-blue'}`}
            >
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <CiscoModal 
        isOpen={isCiscoModalOpen} 
        onClose={() => setIsCiscoModalOpen(false)} 
      />
    </section>
  );
};
