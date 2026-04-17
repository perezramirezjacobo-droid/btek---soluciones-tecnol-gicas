import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingDown,
  Users,
  BarChart,
  Wifi,
  Factory,
  Brain,
  Cloud,
  Database,
  LineChart,
  Activity,
  Cpu,
} from 'lucide-react';

export const IoTSection = () => {
  const metrics = [
    {
      title: 'Reducción de costos',
      value: '15%',
      desc: 'Menos desperdicio y mejor uso de activos al basar la operación en datos medibles y priorización automática.',
      icon: <TrendingDown className="text-btek-red" size={32} />,
    },
    {
      title: 'Visión estratégica',
      value: '58%',
      desc: 'El 58% de los ejecutivos ya considera el IoT estratégico: sensores y analítica alinean TI con resultados de negocio.',
      icon: <Users className="text-btek-red" size={32} />,
    },
    {
      title: 'Proyección a futuro',
      value: '95%',
      desc: 'El 95% planea más iniciativas IoT en tres años; quienes integran IA y datos hoy aceleran esa curva.',
      icon: <BarChart className="text-btek-red" size={32} />,
    },
  ];

  const hexagons = [
    { icon: <Wifi size={20} />, label: 'Wi‑Fi' },
    { icon: <Factory size={20} />, label: 'Industria' },
    { icon: <Brain size={20} />, label: 'IA' },
    { icon: <Cloud size={20} />, label: 'Cloud' },
  ];

  const dataTiles = [
    {
      icon: <Database className="text-white" size={28} />,
      title: 'Ingesta y gobierno de datos',
      desc: 'Normalizamos señales de sensores y sistemas para que sean comparables y auditables.',
      className: 'bg-gradient-to-br from-btek-blue to-btek-dark-blue text-white border-0 shadow-lg shadow-btek-blue/20',
      textMuted: 'text-blue-100/90',
    },
    {
      icon: <Cpu className="text-btek-red" size={24} />,
      title: 'IA en borde y nube',
      desc: 'Modelos ligeros en sitio y analítica centralizada según criticidad y latencia.',
      className: 'bg-slate-50 border border-slate-100',
      textMuted: 'text-slate-500',
    },
    {
      icon: <LineChart className="text-btek-red" size={24} />,
      title: 'Paneles y series',
      desc: 'KPIs, tendencias y comparativos históricos en un solo lienzo operativo.',
      className: 'bg-slate-50 border border-slate-100',
      textMuted: 'text-slate-500',
    },
    {
      icon: <Activity className="text-btek-red" size={24} />,
      title: 'Alertas inteligentes',
      desc: 'Umbral dinámico y detección de anomalías para priorizar al equipo correcto.',
      className: 'bg-slate-50 border border-slate-100',
      textMuted: 'text-slate-500',
    },
  ];

  const industries = [
    {
      title: 'Operaciones / Personal',
      img: '/noc.png',
      desc: 'Personal operativo revisando datos en campo.',
    },
    {
      title: 'Tecnología / IoT',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      desc: 'Representación digital de conectividad IoT.',
    },
    {
      title: 'Monitoreo / Decisiones',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      desc: 'Visualización de dashboards y analítica para decisiones.',
    },
  ];

  return (
    <div className="space-y-24">
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 flex flex-col"
            >
              <h2 className="text-4xl md:text-5xl font-black text-btek-blue uppercase tracking-tighter leading-tight">
                Internet de las Cosas con IA y{' '}
                <span className="text-btek-red">análisis de datos</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Unimos sensores, redes y plataformas para capturar información en continuo. La IA prioriza
                alertas, enriquece series temporales y alimenta tableros que convierten la operación en
                decisiones medibles: del dato bruto al insight accionable.
              </p>

              <div className="grid gap-6 flex-1">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-btek-red transition-all group"
                  >
                    <div className="p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform shrink-0">
                      {m.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-2xl font-black text-btek-blue">{m.value}</h4>
                      <p className="font-bold text-slate-800 mb-1">{m.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-4 min-h-[min(100%,520px)] lg:min-h-full"
            >
              <div className="absolute -z-10 right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-btek-red/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 left-8 top-0 w-48 h-48 bg-btek-blue/10 rounded-full blur-3xl" />

              <div className="grid grid-cols-2 gap-3 flex-1 min-h-0 auto-rows-fr">
                <div
                  className={`row-span-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between ${dataTiles[0].className}`}
                >
                  <div className="p-3 bg-white/15 rounded-xl w-fit backdrop-blur-sm">{dataTiles[0].icon}</div>
                  <div>
                    <h3 className="font-black text-lg sm:text-xl mb-2 leading-tight">{dataTiles[0].title}</h3>
                    <p className={`text-sm leading-relaxed ${dataTiles[0].textMuted}`}>{dataTiles[0].desc}</p>
                  </div>
                </div>

                {dataTiles.slice(1, 3).map((tile, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between ${tile.className}`}
                  >
                    <div className="p-2.5 bg-white rounded-lg shadow-sm w-fit mb-3">{tile.icon}</div>
                    <div>
                      <h3 className="font-black text-btek-blue text-sm sm:text-base mb-1 leading-snug">
                        {tile.title}
                      </h3>
                      <p className={`text-xs sm:text-sm leading-relaxed ${tile.textMuted}`}>{tile.desc}</p>
                    </div>
                  </div>
                ))}

                <div
                  className={`col-span-2 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 ${dataTiles[3].className}`}
                >
                  <div className="p-2.5 bg-white rounded-lg shadow-sm w-fit shrink-0">{dataTiles[3].icon}</div>
                  <div className="min-w-0">
                    <h3 className="font-black text-btek-blue text-sm sm:text-base mb-1">{dataTiles[3].title}</h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${dataTiles[3].textMuted}`}>
                      {dataTiles[3].desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-wrap gap-2 flex-1 justify-center sm:justify-between">
                  {hexagons.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700 uppercase tracking-wide"
                    >
                      <span className="text-btek-blue">{h.icon}</span>
                      {h.label}
                    </div>
                  ))}
                </div>
                <p className="text-center sm:text-right text-xs text-slate-500 max-w-xs sm:max-w-[200px] leading-snug shrink-0">
                  Capas de conectividad y cómputo que alimentan el ciclo de datos de extremo a extremo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-black text-btek-blue uppercase tracking-tighter">
              Industrias usando IoT con IA para <span className="text-btek-red">eficientizar sus negocios</span>
            </h2>
            <p className="text-lg text-slate-600">
              Con una infraestructura de Red inteligente, usted puede mejorar sus Operaciones, incrementar la
              Seguridad, y consolidar Bases de Datos valiosas que le permitan analizar y automatizar la toma de
              decisiones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="relative w-64 h-64 group">
                  <div className="absolute inset-0 bg-btek-red rounded-full scale-105 opacity-0 group-hover:opacity-20 transition-all duration-500" />
                  <img
                    src={ind.img}
                    alt={ind.title}
                    className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-btek-blue uppercase tracking-tight mb-2">{ind.title}</h3>
                  <p className="text-slate-500 font-medium">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
