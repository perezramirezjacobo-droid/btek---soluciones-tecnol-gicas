import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Settings, Users, MonitorDot, ShieldCheck, Database, BarChart3, Cog } from 'lucide-react';

export const NOCServices = () => {
  const services = [
    { title: "Soporte ante fallas", icon: <Activity size={20} /> },
    { title: "Soporte para cambios", icon: <Settings size={20} /> },
    { title: "Servicios de monitoreo", icon: <MonitorDot size={20} /> }
  ];

  const benefits = [
    { title: "Portal de servicios para gestión de tickets en la nube", icon: <CloudIcon /> },
    { title: "Soporte de Procesos ITIL", icon: <ShieldCheck size={20} /> },
    { title: "Servicios de monitoreo remoto o en sitio", icon: <MonitorDot size={20} /> },
    { title: "Servicios complementarios de solución y atención en sitio", icon: <Users size={20} /> },
    { title: "Proceso de certificación de otros componentes SNMP", icon: <Database size={20} /> },
    { title: "Control de calidad, satisfacción del cliente", icon: <StarIcon /> }
  ];

  return (
    <section className="py-24 bg-btek-dark-blue text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4"
          >
            NOC y Servicios <span className="text-btek-red">Administrados</span>
          </motion.h2>
          <div className="h-1.5 w-32 bg-btek-red mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Services Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 h-full">
              <h3 className="text-2xl font-black uppercase tracking-widest text-btek-red mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-btek-red rounded-lg flex items-center justify-center text-white">
                  <Settings size={20} />
                </div>
                Servicios
              </h3>
              <div className="space-y-4">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <div className="text-btek-red">{service.icon}</div>
                    <span className="font-bold uppercase tracking-tight text-sm">{service.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Visual: Dashboards & Performance */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative w-full aspect-square max-w-[300px]"
            >
              {/* Decorative Gear Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-white/10"
                >
                  <Cog size={280} strokeWidth={0.5} />
                </motion.div>
              </div>
              
              {/* Dashboard Mockup Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-btek-red to-btek-blue rounded-full p-1 shadow-2xl shadow-btek-red/20">
                  <div className="w-full h-full bg-btek-dark-blue rounded-full overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                    <BarChart3 className="text-btek-red mb-2" size={48} />
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Desempeño Real-Time</p>
                    <div className="mt-4 flex gap-1 items-end h-12">
                      {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          className="w-2 bg-btek-red rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-btek-dark-blue bg-slate-700 flex items-center justify-center">
                    <Users size={20} className="text-slate-300" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-black uppercase tracking-widest text-btek-red">Gestión de Equipo</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Soporte Multidisciplinario</p>
              </div>
            </div>
          </div>

          {/* Benefits Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 h-full">
              <h3 className="text-2xl font-black uppercase tracking-widest text-btek-red mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-btek-red rounded-lg flex items-center justify-center text-white">
                  <Activity size={20} />
                </div>
                Beneficios
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="text-btek-red mt-0.5 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                    <span className="font-bold uppercase tracking-tight text-xs leading-tight">{benefit.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CloudIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-3.9-4.5-.4-3.1-3-5.5-6.1-5.5-2.6 0-4.9 1.7-5.7 4.1-2.2.4-3.8 2.3-3.8 4.6 0 2.5 2 4.5 4.5 4.5h10.5z" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
