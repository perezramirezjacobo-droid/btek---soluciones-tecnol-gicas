import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Shield, Hospital, MapPin, CheckCircle2, Layout, BarChart3, Users, Smartphone, Zap } from 'lucide-react';

import { GolfCartMap } from './GolfCartMap';

export const IoTInitiatives = () => {
  const restaurantBrands = [
    "Domino's", "Starbucks", "Burger King", "Chili's", 
    "California Pizza Kitchen", "Italianni's", "P.F. Chang's"
  ];

  return (
    <div className="space-y-32 py-24 bg-white">
      {/* 1. Restaurante Digital */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-btek-red font-black uppercase tracking-widest text-sm mb-2">Iniciativas IoT con IA</h3>
              <h2 className="text-5xl font-black text-btek-blue uppercase tracking-tighter">Restaurante <span className="text-btek-red">Digital</span></h2>
            </div>
            
            <div className="grid gap-4">
              {[
                { title: "Presentación personalizada", desc: "Interfaz de usuario personalizada con la marca y estrategia visual de la organización.", icon: <Layout /> },
                { title: "Espacio para campañas", desc: "Se brinda un espacio para desplegar campañas informativas o de publicidad.", icon: <Zap /> },
                { title: "Rastreo de info adicional", desc: "Clics, tiempo de exposición, descarga de cupones, versión de SO, Apps, comportamiento.", icon: <BarChart3 /> },
                { title: "Bienvenida directa", desc: "Configuración de pantalla de ingreso para saltar credenciales en ingresos previos.", icon: <Users /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-btek-red shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {restaurantBrands.map((brand, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 shadow-sm">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-btek-blue p-6 rounded-3xl text-white">
                <h4 className="font-black uppercase tracking-widest text-xs mb-4">Información Demográfica</h4>
                <div className="h-32 bg-white/10 rounded-xl flex items-center justify-center">
                  <Users size={48} className="opacity-20" />
                </div>
                <p className="mt-4 text-xs font-medium text-slate-300">Visualización de perfiles y segmentación de usuarios.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-48 w-full object-cover" alt="Restaurant" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-48 w-full object-cover" alt="Food" referrerPolicy="no-referrer" />
              <div className="bg-btek-red p-6 rounded-3xl text-white">
                <h4 className="font-black uppercase tracking-widest text-xs mb-4">Dashboards con Analíticos</h4>
                <div className="h-32 bg-white/10 rounded-xl flex items-center justify-center">
                  <BarChart3 size={48} className="opacity-20" />
                </div>
                <p className="mt-4 text-xs font-medium text-red-100">Analíticos visualizados desde la Herramienta Web sin licencias de terceros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Seguridad Inteligente */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="h-64 bg-white rounded-3xl overflow-hidden flex items-center justify-center p-12 border border-white/10">
                <img src="/afore.png" className="max-w-full max-h-full object-contain" alt="Afore XXI Banorte" referrerPolicy="no-referrer" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div>
                <h3 className="text-btek-red font-black uppercase tracking-widest text-sm mb-2">Iniciativas IoT con IA</h3>
                <h2 className="text-5xl font-black uppercase tracking-tighter">Seguridad <span className="text-btek-red">Inteligente</span></h2>
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                Implementamos una solución de videovigilancia inteligente integrada a la red existente para reforzar la seguridad en instalaciones estratégicas de <span className="text-white font-bold">Afore XXI</span>. Incluye cámaras IP de alta resolución, sensores de movimiento y analítica avanzada.
              </p>

              <div className="space-y-4">
                {[
                  "Reducción de riesgos operativos y protección patrimonial.",
                  "Respuesta inmediata ante eventos críticos mediante alertas.",
                  "Trazabilidad de incidentes a través de grabaciones en la nube.",
                  "Ahorro en costos de vigilancia tradicional.",
                  "Integración con sistemas existentes y políticas corporativas."
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-btek-red shrink-0" size={20} />
                    <span className="text-sm font-medium text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl">
                  <Shield className="text-btek-blue" size={32} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-btek-red">Caso de Éxito</p>
                  <p className="text-xl font-black">Afore XXI Banorte</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. El Hospital Inteligente */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-btek-red font-black uppercase tracking-widest text-sm mb-2">Iniciativas IoT con IA</h3>
              <h2 className="text-5xl font-black text-btek-blue uppercase tracking-tighter">El Hospital <span className="text-btek-red">Inteligente</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Atención de tickets", "Soporte correctivo (RMA´s)", 
                "Soporte preventivo anual", "Control de cambios",
                "Administración de configuración", "Gestión ante Carrier",
                "Escalación automática", "Cumplimiento SLA´s 24x7",
                "Servicios ABC", "Soporte telefónico ilimitado",
                "Soporte en sitio", "Respaldo de configuraciones"
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-btek-red" />
                  <span className="text-sm font-bold text-slate-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200 flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Hospital className="text-btek-red" size={40} />
              </div>
              <div>
                <p className="text-xl font-black text-btek-blue">Médica Sur</p>
                <p className="text-sm font-bold text-slate-500 italic">"Excelencia médica, calidez humana"</p>
              </div>
            </div>
          </motion.div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-btek-red/10 rounded-[3rem] blur-2xl group-hover:bg-btek-red/20 transition-all" />
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200" 
              className="relative rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover" 
              alt="Hospital Building" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 4. Moon Palace */}
      <section className="bg-btek-blue py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <GolfCartMap />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-3xl shadow-xl text-btek-blue max-w-xs z-30">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-btek-red" size={24} />
                  <p className="font-black uppercase tracking-tighter">Geolocalización</p>
                </div>
                <p className="text-xs font-bold text-slate-600">Localización de activos en tiempo real mediante red inalámbrica.</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-btek-red font-black uppercase tracking-widest text-sm mb-2">Iniciativas IoT con IA</h3>
                <h2 className="text-5xl font-black uppercase tracking-tighter">Moon <span className="text-btek-red">Palace</span></h2>
                <p className="text-xl font-bold mt-2 text-slate-300">Admón. y Monitoreo de Telefonía Wireless con Seguridad</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h4 className="text-btek-red font-black uppercase tracking-widest text-xs mb-6">Función Destacada</h4>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0">
                    <Smartphone className="text-btek-blue" size={32} />
                  </div>
                  <p className="text-2xl font-black leading-tight">Localizar carritos de golf en todo el complejo.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Sistema de Gestión</p>
                  <p className="font-bold text-sm">WCS con mapas de calor y trazabilidad de nodos.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Geolocalización</p>
                  <p className="font-bold text-sm">Mapas interactivos con puntos de red y activos.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
