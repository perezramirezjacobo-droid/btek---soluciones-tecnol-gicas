import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

export const BtekBenefits = () => {
  const benefits = [
    "Atención personalizada",
    "Experiencia",
    "Integración de soluciones",
    "Socio de Ecosystem Partners",
    "Centro de soporte a clientes",
    "Portal de gestión de incidentes"
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-btek-blue/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-btek-red/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-btek-red animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">Valor Agregado</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-btek-blue uppercase tracking-tighter leading-none">
              Beneficios <span className="text-btek-red">Btek</span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Como tu Asesor Tecnológico de Confianza, BTEK asegura experiencia, alta disponibilidad, tiempos de respuesta rápidos y profesionalismo para abordar los desafíos operativos. Nos enfocamos en transformar vulnerabilidades en fortalezas, ayudando a tu negocio a crecer y prosperar.
            </p>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-btek-blue/5 flex items-center gap-4 group hover:border-btek-red transition-colors">
              <div className="w-16 h-16 bg-btek-red rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-btek-red/20 group-hover:scale-110 transition-transform">
                <Star className="text-white fill-white" size={32} />
              </div>
              <div>
                <p className="text-btek-blue font-black uppercase tracking-widest text-sm mb-1">Reconocimiento</p>
                <p className="text-2xl font-black text-slate-800 tracking-tight">Excelencia en Satisfacción al Cliente</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Points */}
          <div className="grid gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:translate-x-2 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-btek-red/10 transition-colors">
                  <CheckCircle2 className="text-btek-red" size={24} />
                </div>
                <span className="text-lg font-bold text-slate-700 uppercase tracking-tight">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
