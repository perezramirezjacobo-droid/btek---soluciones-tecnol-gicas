import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Zap, Home, Cpu, Landmark, GraduationCap, Smartphone } from 'lucide-react';

export const SmartCities = () => {
  const pillars = [
    { title: "Salud Inteligente", icon: <HeartPulse />, color: "bg-red-500" },
    { title: "Energía Inteligente", icon: <Zap />, color: "bg-yellow-500" },
    { title: "Hogar Inteligente", icon: <Home />, color: "bg-blue-500" },
    { title: "IoT", icon: <Cpu />, color: "bg-purple-500" },
    { title: "Gobierno Inteligente", icon: <Landmark />, color: "bg-green-500" },
    { title: "Educación Inteligente", icon: <GraduationCap />, color: "bg-orange-500" }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-btek-blue uppercase tracking-tighter mb-6"
          >
            Ciudades <span className="text-btek-red">Inteligentes</span>
          </motion.h2>
          <p className="text-lg text-slate-600 font-medium">
            Transformamos entornos urbanos en ecosistemas conectados que mejoran la calidad de vida a través de la tecnología integrada.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Visual */}
          <div className="relative z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-btek-blue/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" 
                className="relative rounded-[3rem] shadow-2xl border-8 border-white"
                alt="Smart City Concept"
                referrerPolicy="no-referrer"
              />
              
              {/* Smartphone Overlay */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-4 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block"
              >
                <div className="w-full h-full bg-slate-900 rounded-[1.5rem] flex items-center justify-center">
                  <Smartphone className="text-white" size={48} />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Pillars */}
          <div className="absolute inset-0 pointer-events-none">
            {pillars.map((pillar, i) => {
              const angles = [210, 150, 90, 30, 330, 270];
              const angle = angles[i];
              const radius = 350; // Distance from center
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="absolute left-1/2 top-1/2 hidden lg:flex flex-col items-center gap-3 pointer-events-auto"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`
                  }}
                >
                  <div className={`w-16 h-16 ${pillar.color} text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer`}>
                    {pillar.icon}
                  </div>
                  <span className="bg-white px-4 py-2 rounded-full shadow-md text-[10px] font-black uppercase tracking-widest text-slate-700 whitespace-nowrap border border-slate-100">
                    {pillar.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Grid for Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 lg:hidden">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4">
                <div className={`w-12 h-12 ${pillar.color} text-white rounded-xl flex items-center justify-center`}>
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
                  {pillar.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
