import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Loader2, MapPin, AlertCircle, RefreshCw } from 'lucide-react';

// Multiple sources for redundancy
const GEO_SOURCES = [
  "https://raw.githubusercontent.com/angelnmf/mexico-geojson/master/mexico.json",
  "https://cdn.jsdelivr.net/gh/martgnz/mexico-geojson/mexico.json",
  "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/MEX.geo.json"
];

const locations = [
  { id: 'cdmx', name: "map.cdmx", coordinates: [-99.1332, 19.4326], offset: [0, -80] },
  { id: 'gdl', name: "map.guadalajara", coordinates: [-103.3496, 20.6597], offset: [-120, -20] },
  { id: 'mty', name: "map.monterrey", coordinates: [-100.3161, 25.6866], offset: [120, -20] },
  { id: 'riviera', name: "map.riviera", coordinates: [-87.0739, 20.6296], offset: [-120, 60] },
];

const highlightedStates = [
  "Ciudad de México", 
  "Distrito Federal", 
  "Jalisco", 
  "Nuevo León", 
  "Quintana Roo",
  "México",
  "Estado de México"
];

export const MexicoMap = () => {
  const { t } = useLanguage();
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadMap = async () => {
      setLoading(true);
      setError(null);
      
      for (const source of GEO_SOURCES) {
        try {
          const response = await fetch(source, {credentials: 'omit'});
          if (!response.ok) throw new Error(`Failed to fetch from ${source}`);
          const data = await response.json();
          setGeoData(data);
          setLoading(false);
          return; // Success!
        } catch {
          // try next mirror
        }
      }
      
      setError("No se pudo cargar el mapa interactivo después de varios intentos.");
      setLoading(false);
    };

    loadMap();
  }, [retryCount]);

  return (
    <div className="w-full bg-white rounded-[2rem] p-6 md:p-12 border border-slate-200 shadow-2xl relative overflow-hidden min-h-[650px] flex flex-col">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#004A99_1.5px,transparent_1.5px)] [background-size:30px_30px]"></div>
      </div>

      <div className="relative z-10 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="p-3 bg-btek-red rounded-2xl shadow-lg shadow-btek-red/20">
            <MapPin className="text-white" size={28} />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-btek-blue uppercase tracking-tighter leading-none">
              {t('about.map_title')}
            </h3>
            <div className="h-1 w-20 bg-btek-red mt-2 rounded-full"></div>
          </div>
        </motion.div>
        <p className="text-slate-600 max-w-2xl text-lg md:text-xl leading-relaxed font-medium">
          {t('about.map_desc')}
        </p>
      </div>

      <div className="flex-1 relative bg-slate-900 rounded-[1.5rem] border-2 border-slate-800 overflow-hidden flex items-center justify-center min-h-[450px] shadow-2xl">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative">
                <Loader2 className="text-white animate-spin" size={64} strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-btek-red rounded-full animate-ping"></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white font-black uppercase tracking-widest text-sm mb-1">Cargando Infraestructura</p>
                <p className="text-slate-400 text-xs">Sincronizando datos geográficos...</p>
              </div>
            </motion.div>
          ) : error ? (
            <motion.div 
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900"
            >
              {/* Simple SVG Fallback of Mexico Shape (Simplified) */}
              <svg viewBox="0 0 800 500" className="w-full max-w-lg opacity-20 mb-8">
                <path 
                  d="M150,150 L250,100 L400,120 L550,80 L700,150 L750,300 L600,450 L400,400 L200,450 L100,300 Z" 
                  fill="#004A99" 
                />
              </svg>
              <div className="text-center relative z-10">
                <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
                <p className="text-white font-black text-xl mb-2 uppercase tracking-tight">Mapa no disponible</p>
                <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">
                  No pudimos cargar el mapa interactivo. Sin embargo, nuestras ubicaciones principales son:
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {locations.map(loc => (
                    <span key={loc.id} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold text-white">
                      {t(loc.name)}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setRetryCount(prev => prev + 1)}
                  className="px-6 py-3 bg-btek-red text-white rounded-xl font-bold text-sm hover:bg-btek-red/90 transition-all shadow-lg"
                >
                  Reintentar Carga
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full flex items-center justify-center p-4"
            >
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 1000,
                  center: [-98, 22]
                }}
                width={800}
                height={600}
                className="w-full h-full max-h-[550px]"
              >
                <Geographies geography={geoData}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const name = geo.properties.name || geo.properties.NAME_1 || geo.properties.ESTADO || geo.properties.NOM_ENT || geo.properties.admin;
                      const isHighlighted = highlightedStates.some(h => 
                        name?.toLowerCase().includes(h.toLowerCase())
                      );
                      
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isHighlighted ? "#E30613" : "#1E293B"}
                          stroke={isHighlighted ? "#FFFFFF" : "#334155"}
                          strokeWidth={isHighlighted ? 1.5 : 0.5}
                          style={{
                            default: { outline: "none", transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)" },
                            hover: { fill: isHighlighted ? "#FF1F2B" : "#334155", outline: "none", cursor: "pointer" },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {locations.map(({ id, name, coordinates, offset }) => (
                  <React.Fragment key={id}>
                    <Marker coordinates={coordinates as [number, number]}>
                      <motion.g
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
                      >
                        <circle r={15} fill="#FFFFFF" fillOpacity={0.1} />
                        <motion.circle
                          animate={{ r: [8, 14, 8], opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          r={10}
                          fill="#FFFFFF"
                          fillOpacity={0.2}
                        />
                        <circle r={5} fill="#FFFFFF" stroke="#E30613" strokeWidth={2.5} shadow-lg="true" />
                      </motion.g>
                    </Marker>
                    <Annotation
                      subject={coordinates as [number, number]}
                      dx={offset[0]}
                      dy={offset[1]}
                      connectorProps={{
                        stroke: "#FFFFFF",
                        strokeWidth: 2,
                        strokeDasharray: "4, 4",
                        strokeLinecap: "round"
                      }}
                    >
                      <text
                        x={offset[0] > 0 ? 15 : -15}
                        textAnchor={offset[0] > 0 ? "start" : "end"}
                        alignmentBaseline="middle"
                        fill="#FFFFFF"
                        className="text-[14px] md:text-lg font-black uppercase tracking-widest"
                        style={{ paintOrder: "stroke", stroke: "#0F172A", strokeWidth: 4 }}
                      >
                        {t(name)}
                      </text>
                    </Annotation>
                  </React.Fragment>
                ))}
              </ComposableMap>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {locations.map((loc) => (
          <motion.div 
            key={loc.id}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col gap-2 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-btek-red transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-btek-red group-hover:animate-pulse shadow-[0_0_15px_rgba(227,6,19,0.4)]"></div>
              <span className="text-sm md:text-base font-black text-slate-800 uppercase tracking-widest">{t(loc.name)}</span>
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Centro de Operaciones</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
