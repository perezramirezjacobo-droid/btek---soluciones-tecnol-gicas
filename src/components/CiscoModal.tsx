import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface CiscoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CiscoModal = ({ isOpen, onClose }: CiscoModalProps) => {
  const specializations = [
    "Especialización avanzada en arquitectura de redes sin fronteras.",
    "Especialización avanzada en arquitectura de colaboración.",
    "Especialización avanzada en arquitectura de centros de datos.",
    "Comunicaciones unificadas avanzadas.",
    "Socio de servicio Cisco Smart Care.",
    "Partner SMB de telepresencia video.",
    "ATP Videovigilancia IP.",
    "ATP Redes Inalámbricas Malladas.",
    "Partner de la academia Cisco Networking.",
    "Excelencia en Satisfacción al Cliente",
    "ATP (Advanced Technology Parthner)"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl overflow-hidden border border-white/20"
          >
            <div className="bg-[#004A99] p-6 md:p-8 flex justify-between items-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="bg-white p-2 rounded-xl shadow-inner">
                  <img 
                    src="https://cdn.worldvectorlogo.com/logos/cisco-2.svg" 
                    alt="Cisco" 
                    className="h-8 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Cisco Certifications</h3>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors relative z-10">
                <X size={28} />
              </button>
            </div>
            
            <div className="p-6 md:p-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="grid gap-4">
                {specializations.map((spec, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={i}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-btek-red transition-colors group"
                  >
                    <CheckCircle2 className="text-[#E30613] mt-1 shrink-0" size={20} />
                    <p className="text-slate-700 font-medium leading-relaxed">{spec}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={onClose}
                className="bg-[#004A99] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#003d7a] transition-all shadow-lg"
              >
                CERRAR
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
