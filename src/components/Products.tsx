import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Products = () => {
  const { t } = useLanguage();

  const products = useMemo(() => [
    {
      id: 'pak-retail',
      name: t('products.pak.name'),
      video: 'https://www.youtube.com/embed/wNUZ2rn1jhg',
      description: t('products.pak.desc'),
      highlight: t('products.pak.highlight'),
      list: [
        t('products.pak.list1'),
        t('products.pak.list2'),
        t('products.pak.list3')
      ],
      benefits: [
        t('products.pak.benefit1'),
        t('products.pak.benefit2'),
        t('products.pak.benefit3')
      ],
      footer: t('products.pak.footer')
    },
    {
      id: 'hotel-connect',
      name: t('products.hotel.name'),
      video: 'https://www.youtube.com/embed/eVxOkTuj0Lg',
      description: t('products.hotel.desc'),
      benefits: [
        t('products.hotel.benefit1'),
        t('products.hotel.benefit2'),
        t('products.hotel.benefit3'),
        t('products.hotel.benefit4')
      ]
    },
    {
      id: 'fit360',
      name: t('products.fit.name'),
      video: 'https://www.youtube.com/embed/BbW9U8K1Ldc',
      description: t('products.fit.desc'),
      footer: t('products.fit.footer')
    },
    {
      id: 'hospitek',
      name: t('products.hospi.name'),
      video: 'https://www.youtube.com/embed/VJjor66KYrc',
      description: t('products.hospi.desc'),
      footer: t('products.hospi.footer')
    }
  ], [t]);

  const [activeProductId, setActiveProductId] = useState(products[0].id);
  const activeProduct = useMemo(() => 
    products.find(p => p.id === activeProductId) || products[0],
    [activeProductId, products]
  );

  return (
    <section id="productos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-btek-blue mb-4">{t('products.title')}</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {products.map((p) => (
              <button 
                key={p.id}
                onClick={() => setActiveProductId(p.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeProductId === p.id 
                  ? 'bg-btek-red text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video bg-slate-900">
                <iframe 
                  className="w-full h-full"
                  src={activeProduct.video} 
                  title={activeProduct.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <div className="p-8 md:p-12 space-y-6">
                <h3 className="text-3xl font-bold text-btek-blue">{activeProduct.name}</h3>
                <p className="text-slate-600 leading-relaxed">{activeProduct.description}</p>
                
                {activeProduct.highlight && (
                  <p className="font-bold text-slate-800">{activeProduct.highlight}</p>
                )}

                {activeProduct.list && (
                  <ul className="space-y-2">
                    {activeProduct.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-btek-red rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {activeProduct.benefits && (
                  <div className="space-y-4">
                    <p className="font-bold text-btek-blue uppercase tracking-widest text-xs">{t('products.benefits_label')}</p>
                    <ul className="space-y-3">
                      {activeProduct.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                          <CheckCircle2 className="text-btek-red flex-shrink-0 mt-0.5" size={16} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeProduct.footer && (
                  <p className="text-slate-600 italic border-t border-slate-100 pt-6">{activeProduct.footer}</p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
