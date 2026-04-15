import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Hotel, Hospital, GraduationCap, Landmark, 
  Award, ChevronRight, CheckCircle2, Network, Activity,
  ExternalLink, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const cases = [
  {
    id: "marti",
    category: "Retail",
    client: "Grupo Martí",
    title: "Conectividad Autónoma en Espacios Temporales",
    desc: "BTEK diseñó una solución basada en un poste autónomo de conectividad, equipado con panel solar y batería de respaldo para áreas sin infraestructura eléctrica.",
    benefits: [
      "Conectividad rápida en zonas remotas.",
      "Operación 100% autónoma con energía solar.",
      "Instalación flexible y reubicable."
    ],
    tech: "ROUTING, SWITCHING, WIFI",
    award: "AL MEJOR LOGRO DEL AÑO",
    img: "/marti.png"
  },
  {
    id: "banorte",
    category: "Finanzas",
    client: "Afore XXI Banorte",
    title: "Seguridad Inteligente y Videovigilancia",
    desc: "Implementación de una solución de videovigilancia inteligente integrada a la red existente para reforzar la seguridad en instalaciones estratégicas.",
    benefits: [
      "Reducción de riesgos operativos.",
      "Respuesta inmediata ante eventos críticos.",
      "Trazabilidad de incidentes en la nube."
    ],
    tech: "VIDEOSURVEILLANCE, AI, CLOUD",
    img: "/afore.png"
  },
  {
    id: "grand-velas",
    category: "Hotelería",
    client: "Grand Velas",
    title: "Experiencia Multimedia Interactiva",
    desc: "Internet de alta velocidad con contenido personalizado y configuración inteligente de habitaciones para el máximo confort del huésped.",
    benefits: [
      "Internet de alta velocidad personalizado.",
      "Configuración inteligente de habitación.",
      "Multimedia interactiva personalizada."
    ],
    tech: "ROUTING, SWITCHING, WIFI",
    award: "AL MEJOR LOGRO DEL AÑO",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "medica-sur",
    category: "Salud",
    client: "Médica Sur",
    title: "Infraestructura de Red Hospitalaria",
    desc: "Soporte y administración de infraestructura crítica para garantizar la continuidad operativa de uno de los hospitales más importantes de México.",
    benefits: [
      "Soporte 24x7 con cumplimiento de SLA.",
      "Gestión de red de misión crítica.",
      "Administración de configuración y seguridad."
    ],
    tech: "ROUTING, SWITCHING, NOC",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "uaq",
    category: "Educación",
    client: "UAQ",
    title: "Wireless Mesh de Gran Escala",
    desc: "Implementación de nodos mesh inalámbricos en postes con energía solar para cobertura total en áreas exteriores del campus universitario.",
    benefits: [
      "Cobertura inalámbrica exterior total.",
      "Nodos mesh autónomos con energía solar.",
      "Soporte para miles de usuarios simultáneos."
    ],
    tech: "WIFI, MESH, SOLAR",
    award: "ATP WIRELESS MESH FOR THE BIGGEST PROJECT",
    img: "/uaq.png"
  },
  {
    id: "monteverde",
    category: "Educación",
    client: "Colegio Monteverde",
    title: "Transformación Digital Educativa",
    desc: "Despliegue de cableado estructurado, switches administrables y puntos de acceso de última generación para un entorno de aprendizaje moderno.",
    benefits: [
      "Cobertura total en aulas y gimnasio.",
      "Red escalable para iniciativas futuras.",
      "Gestión centralizada y segura."
    ],
    tech: "WIFI, SWITCHING",
    img: "/monteverde.png"
  },
  {
    id: "pemex",
    category: "Gobierno",
    client: "PEMEX",
    title: "Servicios Administrados y Monitoreo NOC",
    desc: "Gestión integral de infraestructura crítica mediante servicios administrados y monitoreo constante en sala de control de alta tecnología.",
    benefits: [
      "Monitoreo 24/7 en sala de control (NOC).",
      "Métricas de desempeño en tiempo real.",
      "Continuidad operativa garantizada."
    ],
    tech: "MANAGED SERVICES, NOC",
    img: "/pemex.png"
  }
];

export const SuccessStories = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = [
    { name: "Todos", icon: <Activity size={16} /> },
    { name: "Retail", icon: <ShoppingBag size={16} /> },
    { name: "Hotelería", icon: <Hotel size={16} /> },
    { name: "Salud", icon: <Hospital size={16} /> },
    { name: "Educación", icon: <GraduationCap size={16} /> },
    { name: "Gobierno", icon: <Landmark size={16} /> }
  ];

  const filteredCases = activeCategory === "Todos" 
    ? cases 
    : cases.filter(c => c.category === activeCategory);

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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black transition-all ${
                activeCategory === cat.name 
                ? 'bg-btek-blue text-white shadow-xl shadow-btek-blue/20 scale-105' 
                : 'bg-white text-slate-500 border border-slate-200 hover:border-btek-blue hover:text-btek-blue'
              }`}
            >
              {cat.icon}
              <span className="text-[10px] uppercase tracking-widest">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((c) => (
              <motion.div
                layout
                key={c.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center p-8">
                  <img 
                    src={c.img} 
                    alt={c.client} 
                    className={`w-full h-full ${c.img.startsWith('/') ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-btek-blue shadow-lg">
                    {c.category}
                  </div>
                  {c.award && (
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-btek-red/90 backdrop-blur-md rounded-2xl text-white flex items-center gap-3">
                      <Award size={20} className="shrink-0" />
                      <p className="text-[10px] font-black uppercase tracking-widest leading-tight">{c.award}</p>
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col flex-grow space-y-6">
                  <div>
                    <p className="text-btek-red font-black uppercase tracking-widest text-xs mb-2">{c.client}</p>
                    <h3 className="text-2xl font-black text-btek-blue uppercase tracking-tighter leading-none">{c.title}</h3>
                  </div>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {c.desc}
                  </p>

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

                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <Network size={16} className="text-btek-blue" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{c.tech}</span>
                    </div>
                    <button className="p-2 bg-btek-blue text-white rounded-xl hover:bg-btek-red transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
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
