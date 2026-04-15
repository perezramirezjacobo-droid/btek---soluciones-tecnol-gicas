import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Cart {
  id: number;
  x: number;
  y: number;
  status: 'active' | 'idle' | 'charging';
}

export const GolfCartMap = () => {
  const [carts, setCarts] = useState<Cart[]>([]);

  // Initialize random carts
  useEffect(() => {
    const initialCarts: Cart[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10, // 10% to 90%
      y: Math.random() * 80 + 10,
      status: Math.random() > 0.3 ? 'active' : 'idle'
    }));
    setCarts(initialCarts);

    // Simulate movement
    const interval = setInterval(() => {
      setCarts(prev => prev.map(cart => {
        if (cart.status === 'active') {
          return {
            ...cart,
            x: Math.max(5, Math.min(95, cart.x + (Math.random() - 0.5) * 2)),
            y: Math.max(5, Math.min(95, cart.y + (Math.random() - 0.5) * 2))
          };
        }
        return cart;
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-slate-800 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
      {/* Map Background (Croquis style) */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Paths/Roads */}
          <path d="M10,20 Q50,10 90,20 T90,80 Q50,90 10,80 Z" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M30,20 L30,80 M70,20 L70,80 M10,50 L90,50" fill="none" stroke="white" strokeWidth="0.3" strokeDasharray="1 1" />
          
          {/* Areas */}
          <rect x="15" y="25" width="20" height="15" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="65" y="25" width="20" height="15" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="15" y="60" width="20" height="15" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="65" y="60" width="20" height="15" rx="2" fill="white" fillOpacity="0.1" />
          
          {/* Lake/Water */}
          <circle cx="50" cy="50" r="10" fill="#3b82f6" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(15,23,42,0.5)_100%)]" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Connection Lines (Optional visual flair) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {carts.length > 0 && carts.slice(0, -1).map((cart, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${cart.x}%`}
            y1={`${cart.y}%`}
            x2={`${carts[i+1].x}%`}
            y2={`${carts[i+1].y}%`}
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
        ))}
      </svg>

      {/* Golf Carts (Points) */}
      {carts.map((cart) => (
        <motion.div
          key={cart.id}
          layout
          initial={false}
          animate={{ left: `${cart.x}%`, top: `${cart.y}%` }}
          transition={{ duration: 3, ease: "linear" }}
          className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
        >
          {/* Pulse Effect */}
          {cart.status === 'active' && (
            <motion.div
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-btek-red rounded-full"
            />
          )}
          
          {/* Cart Icon/Dot */}
          <div className={`relative w-4 h-4 rounded-full border-2 border-white shadow-lg transition-colors ${cart.status === 'active' ? 'bg-btek-red' : 'bg-slate-500'}`}>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-btek-blue text-[8px] font-black px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              CART #{cart.id + 101}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-6 left-6 flex gap-4 bg-slate-900/50 backdrop-blur-md p-3 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-btek-red" />
          <span className="text-[8px] font-black uppercase tracking-widest text-white">En Movimiento</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-500" />
          <span className="text-[8px] font-black uppercase tracking-widest text-white">Estacionado</span>
        </div>
      </div>

      {/* Scanning Line */}
      <motion.div
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-btek-red/50 to-transparent z-20"
      />
    </div>
  );
};
