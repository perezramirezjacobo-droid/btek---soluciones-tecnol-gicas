import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CiscoModal } from './CiscoModal';

const alliances = [
  { name: "Cisco", logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg", isSpecial: true },
  { name: "HP", logo: "/hp.png" },
  { name: "Fortinet", logo: "/fortinet.png" },
  { name: "Huawei", logo: "/huawei.png" },
  { name: "TP-Link", logo: "/tplink.png" },
  { name: "Aruba", logo: "/aruba.png" },
  { name: "Dell", logo: "/dell.png" },
  { name: "Microsoft", logo: "/microsoft.png" },
  { name: "AWS", logo: "/aws.png" },
  { name: "Google Cloud", logo: "/googlecloud.png" }
];

// Duplicate for infinite scroll
const duplicatedAlliances = [...alliances, ...alliances, ...alliances, ...alliances];

export const PartnersCarousel = () => {
  const [isCiscoModalOpen, setIsCiscoModalOpen] = useState(false);

  return (
    <div className="bg-transparent py-2 border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedAlliances.map((a, i) => (
              <div 
                key={i} 
                className="w-24 h-12 flex items-center justify-center"
                onClick={() => a.isSpecial && setIsCiscoModalOpen(true)}
              >
                <img
                  src={a.logo}
                  alt={a.name}
                  className={`max-w-full max-h-full object-contain transition-all cursor-pointer ${a.isSpecial ? 'opacity-100 scale-110' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <CiscoModal 
        isOpen={isCiscoModalOpen} 
        onClose={() => setIsCiscoModalOpen(false)} 
      />
    </div>
  );
};
