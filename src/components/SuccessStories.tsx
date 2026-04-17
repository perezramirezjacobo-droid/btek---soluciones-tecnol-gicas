import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import {
  Award,
  CheckCircle2,
  Network,
} from 'lucide-react';
const cases = [
  {
    id: 'marti',
    category: 'Retail',
    client: 'Grupo Martí',
    title: 'Conectividad Autónoma en Espacios Temporales',
    desc: 'BTEK diseñó una solución basada en un poste autónomo de conectividad, equipado con panel solar y batería de respaldo para áreas sin infraestructura eléctrica.',
    benefits: [
      'Conectividad rápida en zonas remotas.',
      'Operación 100% autónoma con energía solar.',
      'Instalación flexible y reubicable.',
    ],
    tech: 'ROUTING, SWITCHING, WIFI DE ÚLT. GEN.',
    award: 'AL MEJOR LOGRO DEL AÑO',
    img: '/marti.png',
  },
  {
    id: 'banorte',
    category: 'Finanzas',
    client: 'Afore XXI Banorte',
    title: 'Seguridad Inteligente y Videovigilancia',
    desc: 'Implementación de una solución de videovigilancia inteligente integrada a la red existente para reforzar la seguridad en instalaciones estratégicas.',
    benefits: [
      'Reducción de riesgos operativos.',
      'Respuesta inmediata ante eventos críticos.',
      'Trazabilidad de incidentes en la nube.',
    ],
    tech: 'VIDEOSURVEILLANCE, AI, CLOUD',
    img: '/afore.png',
  },
  {
    id: 'grand-velas',
    category: 'Hotelería',
    client: 'Grand Velas',
    title: 'Experiencia Multimedia Interactiva',
    desc: 'Internet de alta velocidad con contenido personalizado y configuración inteligente de habitaciones para el máximo confort del huésped.',
    benefits: [
      'Internet de alta velocidad personalizado.',
      'Configuración inteligente de habitación.',
      'Multimedia interactiva personalizada.',
    ],
    tech: 'ROUTING, SWITCHING, WIFI DE ÚLT. GEN.',
    award: 'AL MEJOR LOGRO DEL AÑO',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'medica-sur',
    category: 'Salud',
    client: 'Médica Sur',
    title: 'Infraestructura de Red Hospitalaria',
    desc: 'Soporte y administración de infraestructura crítica para garantizar la continuidad operativa de uno de los hospitales más importantes de México.',
    benefits: [
      'Soporte 24x7 con cumplimiento de SLA.',
      'Gestión de red de misión crítica.',
      'Administración de configuración y seguridad.',
    ],
    tech: 'ROUTING, SWITCHING, NOC',
    img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'monteverde',
    category: 'Educación',
    client: 'Colegio Monteverde',
    title: 'Transformación Digital Educativa',
    desc: 'Despliegue de cableado estructurado, switches administrables y puntos de acceso de última generación para un entorno de aprendizaje moderno.',
    benefits: [
      'Cobertura total en aulas y gimnasio.',
      'Red escalable para iniciativas futuras.',
      'Gestión centralizada y segura.',
    ],
    tech: 'WIFI DE ÚLT. GEN., SWITCHING',
    img: '/monteverde.png',
  },
  {
    id: 'uaq',
    category: 'Educación',
    client: 'UAQ',
    title: 'WiFi Mesh de Gran Escala',
    desc: 'Implementación de nodos WiFi mesh de última generación en postes con energía solar para cobertura total en áreas exteriores del campus universitario.',
    benefits: [
      'Cobertura exterior total con WiFi de última generación.',
      'Nodos mesh autónomos con energía solar.',
      'Soporte para miles de usuarios simultáneos.',
    ],
    tech: 'WIFI DE ÚLT. GEN., MESH, SOLAR',
    award: 'ATP WIRELESS MESH FOR THE BIGGEST PROJECT',
    img: '/uaq.png',
  },
  {
    id: 'pemex',
    category: 'Gobierno',
    client: 'PEMEX',
    title: 'Servicios Administrados y Monitoreo NOC',
    desc: 'Gestión integral de infraestructura crítica mediante servicios administrados y monitoreo constante en sala de control de alta tecnología.',
    benefits: [
      'Monitoreo 24/7 en sala de control (NOC).',
      'Métricas de desempeño en tiempo real.',
      'Continuidad operativa garantizada.',
    ],
    tech: 'MANAGED SERVICES, NOC',
    img: '/pemex.png',
  },
];

/** Orden fijo por sector y, dentro del mismo sector, por cliente */
const INDUSTRY_ORDER: Record<string, number> = {
  Retail: 1,
  Finanzas: 2,
  Hotelería: 3,
  Salud: 4,
  Educación: 5,
  Gobierno: 6,
};

export const SuccessStories = () => {
  const orderedCases = useMemo(() => {
    return [...cases].sort((a, b) => {
      const sector = INDUSTRY_ORDER[a.category] - INDUSTRY_ORDER[b.category];
      if (sector !== 0) return sector;
      return a.client.localeCompare(b.client, 'es');
    });
  }, []);

  return (
    <section id="casos" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-btek-red/10 rounded-full border border-btek-red/20"
          >
            <Award className="text-btek-red" size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest text-btek-red">Casos de Éxito</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-btek-blue uppercase tracking-tighter leading-none">
            Transformando Negocios con <span className="text-btek-red">Tecnología</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Descubre cómo hemos ayudado a líderes de diversas industrias a optimizar sus operaciones y alcanzar sus objetivos estratégicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {orderedCases.map((c, index) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.05, 0.35) }}
              className={cn(
                'group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col h-full',
                index === orderedCases.length - 1 && 'md:col-span-2 md:max-w-xl md:mx-auto md:w-full'
              )}
            >
              <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center p-8">
                <img
                  src={c.img}
                  alt={c.client}
                  className={`w-full h-full ${c.img.startsWith('/') ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2 items-start max-w-[85%]">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-btek-blue shadow-lg border border-slate-100">
                    Sector: {c.category}
                  </span>
                </div>
                {c.award && (
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-btek-red/90 backdrop-blur-md rounded-2xl text-white flex items-center gap-3">
                    <Award size={20} className="shrink-0" />
                    <p className="text-[10px] font-black uppercase tracking-widest leading-tight">{c.award}</p>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Industria / vertical
                  </p>
                  <p className="text-sm font-black text-btek-blue uppercase tracking-wide mb-2">{c.category}</p>
                  <p className="text-btek-red font-black uppercase tracking-widest text-xs mb-2">{c.client}</p>
                  <h3 className="text-2xl font-black text-btek-blue uppercase tracking-tighter leading-none">{c.title}</h3>
                </div>

                <p className="text-sm text-slate-600 font-medium leading-relaxed">{c.desc}</p>

                <div className="space-y-3">
                  {c.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-btek-red/10 rounded-full p-0.5">
                        <CheckCircle2 className="text-btek-red" size={12} />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-2 min-w-0">
                  <div className="p-2 bg-slate-50 rounded-lg shrink-0">
                    <Network size={16} className="text-btek-blue" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 truncate">{c.tech}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 bg-btek-blue rounded-[3rem] text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl font-black uppercase tracking-tighter">¿Listo para ser nuestro próximo caso de éxito?</h3>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Permítenos ayudarte a transformar tus desafíos tecnológicos en ventajas competitivas.
            </p>
            <button
              type="button"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-btek-red hover:bg-red-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-btek-red/20"
            >
              Contáctanos Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
