import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, BarChart, Wifi, Factory, Brain, Cloud, ChevronRight } from 'lucide-react';

export const IoTSection = () => {
  const metrics = [
    {
      title: "Reducción de costos",
      value: "15%",
      desc: "Reducción de costos operativos de hasta un 15%.",
      icon: <TrendingDown className="text-btek-red" size={32} />,
    },
    {
      title: "Visión estratégica",
      value: "58%",
      desc: "El 58% de los ejecutivos consideran el IoT como estratégico para sus empresas.",
      icon: <Users className="text-btek-red" size={32} />,
    },
    {
      title: "Proyección a futuro",
      value: "95%",
      desc: "El 95% planea lanzar iniciativas de IoT en los próximos tres años.",
      icon: <BarChart className="text-btek-red" size={32} />,
    }
  ];

  const hexagons = [
    { icon: <Wifi size={24} />, label: "Wi-Fi" },
    { icon: <Factory size={24} />, label: "Industria" },
    { icon: <Brain size={24} />, label: "AI" },
    { icon: <Cloud size={24} />, label: "Cloud" }
  ];

  const industries = [
    {
      title: "Operaciones / Personal",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      desc: "Personal operativo revisando datos en campo."
    },
    {
      title: "Tecnología / IoT",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      desc: "Representación digital de conectividad IoT."
    },
    {
      title: "Monitoreo / Decisiones",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      desc: "Visualización de dashboards en dispositivos móviles."
    }
  ];

  return (
    <div className="space-y-24">
      {/* Section: IoT & Mobile Experiences */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black text-btek-blue uppercase tracking-tighter leading-tight">
                Internet de las Cosas con IA y <span className="text-btek-red">Experiencias Móviles</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Conectar todo brinda resultados comerciales positivos. La conexión de todo genera resultados medibles para el negocio:
              </p>

              <div className="grid gap-6">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-btek-red transition-all group"
                  >
                    <div className="p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      {m.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-btek-blue">{m.value}</h4>
                      <p className="font-bold text-slate-800 mb-1">{m.title}</p>
                      <p className="text-sm text-slate-500">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative flex justify-center items-center">
              {/* Decorative background circle */}
              <div className="absolute -z-10 w-64 h-64 bg-btek-red/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Industries using IoT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-black text-btek-blue uppercase tracking-tighter">
              Industrias usando IoT con IA para <span className="text-btek-red">eficientizar sus negocios</span>
            </h2>
            <p className="text-lg text-slate-600">
              Con una infraestructura de Red inteligente, usted puede mejorar sus Operaciones, incrementar la Seguridad, y consolidar Bases de Datos valiosas que le permitan analizar y automatizar la toma de decisiones.
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
