import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CiscoModal } from './CiscoModal';

/** Invalidación de caché para PNG locales del carrusel tras reprocesar transparencia */
const carouselAssetVersion = '2';

function carouselLogoSrc(logo: string) {
  if (logo.startsWith('http://') || logo.startsWith('https://')) return logo;
  return `${logo}?v=${carouselAssetVersion}`;
}

const alliances = [
  { name: "Cisco", logo: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg", isSpecial: true },
  { name: "HP", logo: "/hp.png" },
  { name: "Fortinet", logo: "/fortinet.png" },
  { name: "Huawei", logo: "/huawei.png" },
  { name: "TP-Link", logo: "/tplink.png" },
  { name: "Aruba", logo: "/aruba.png" },
  { name: "Dell", logo: "/dell.png" },
  { name: "Microsoft", logo: "/microsoft.png" },
  { name: "Axis", logo: "/axis.png" },
  { name: "Belden", logo: "/belden.png" },
  { name: "Dintelligence", logo: "/dintelligence.png", largerLogo: true },
  { name: "Alhua", logo: "/alhua.png" },
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
                className={`flex items-center justify-center ${'largerLogo' in a && a.largerLogo ? 'w-36 h-20 md:w-44 md:h-24' : 'w-24 h-12'}`}
                onClick={() => a.isSpecial && setIsCiscoModalOpen(true)}
              >
                <img
                  src={carouselLogoSrc(a.logo)}
                  alt={a.name}
                  className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                    'largerLogo' in a && a.largerLogo
                      ? 'scale-110 md:scale-125 cursor-default hover:scale-[1.32]'
                      : a.isSpecial
                        ? 'cursor-pointer scale-105 hover:scale-110'
                        : 'cursor-default hover:scale-105'
                  }`}
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
