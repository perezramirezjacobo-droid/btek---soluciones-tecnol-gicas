import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Users, Settings, Wrench, Activity, ShieldCheck } from 'lucide-react';

const OrgNode = ({ title, icon: Icon, delay = 0, isLast = false }: { title: string, icon: any, delay?: number, isLast?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center relative w-full max-w-[148px] sm:max-w-[200px] md:max-w-[240px]"
  >
    <div className="bg-white border border-btek-blue sm:border-2 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg flex flex-col items-center gap-1 sm:gap-2 w-full z-10 hover:border-btek-red transition-colors group">
      <div className="bg-slate-50 p-1.5 sm:p-2 rounded-md sm:rounded-lg group-hover:bg-btek-red/10 transition-colors">
        <Icon className="text-btek-blue group-hover:text-btek-red transition-colors w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" strokeWidth={2} />
      </div>
      <span className="font-bold text-slate-800 text-center uppercase tracking-wide text-[8px] sm:text-[9px] md:text-xs leading-tight">{title}</span>
    </div>
    {!isLast && (
      <div className="h-5 sm:h-7 md:h-12 w-0.5 bg-slate-200 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-300">
          <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </div>
      </div>
    )}
  </motion.div>
);

export const OrgChart = () => {
  const { t } = useLanguage();

  return (
    <section id="estructura" className="py-14 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-btek-blue mb-3 md:mb-4 uppercase tracking-tight">
            {t('org.title')}
          </h2>
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-btek-red mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col items-center space-y-0 max-w-[min(100%,20rem)] sm:max-w-none mx-auto md:mx-0 md:max-w-none">
          {/* Level 1: Dirección General */}
          <OrgNode title={t('org.dg')} icon={Users} delay={0.1} />

          {/* Level 2: Branching to Admin and Engineering */}
          <div className="relative w-full flex flex-col items-center">
            {/* Vertical line from DG to the horizontal bar */}
            <div className="w-0.5 h-5 sm:h-6 md:h-8 bg-slate-200"></div>
            
            {/* Horizontal connection line */}
            <div className="relative w-full max-w-4xl">
              <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-slate-200"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-32 w-full pt-0">
                {/* Administration Branch */}
                <div className="flex flex-col items-center pt-5 sm:pt-6 md:pt-8 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-5 sm:h-6 md:h-8 bg-slate-200"></div>
                  <OrgNode title={t('org.admin')} icon={Settings} delay={0.2} isLast={true} />
                </div>

                {/* Engineering Branch */}
                <div className="flex flex-col items-center pt-5 sm:pt-6 md:pt-8 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-5 sm:h-6 md:h-8 bg-slate-200"></div>
                  <OrgNode title={t('org.ing')} icon={Wrench} delay={0.3} />

                  {/* Level 3: Branching from Engineering to Operations and Services */}
                  <div className="relative w-full flex flex-col items-center">
                    {/* Vertical line from Engineering to its horizontal bar */}
                    <div className="w-0.5 h-5 sm:h-6 md:h-8 bg-slate-200"></div>
                    
                    {/* Horizontal connection line for Engineering children */}
                    <div className="relative w-full max-w-2xl">
                      <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-slate-200"></div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 w-full pt-0">
                        {/* Operations Branch */}
                        <div className="flex flex-col items-center pt-5 sm:pt-6 md:pt-8 relative">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-5 sm:h-6 md:h-8 bg-slate-200"></div>
                          <OrgNode title={t('org.ops')} icon={Activity} delay={0.4} />
                          
                          {/* Level 4: NOC under Operations */}
                          <div className="flex flex-col items-center">
                            <OrgNode title={t('org.noc')} icon={ShieldCheck} delay={0.5} isLast={true} />
                          </div>
                        </div>

                        {/* Professional Services Branch */}
                        <div className="flex flex-col items-center pt-5 sm:pt-6 md:pt-8 relative">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-5 sm:h-6 md:h-8 bg-slate-200"></div>
                          <OrgNode title={t('org.sp')} icon={Users} delay={0.6} isLast={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
