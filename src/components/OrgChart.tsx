import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Users, Settings, Wrench, Activity, ShieldCheck, type LucideIcon } from 'lucide-react';

const CX = 250;
const CY = 260;
/** Radio de anillos guía (mapa circular) */
const RINGS = [92, 168, 232];

type NodeDef = {
  id: string;
  labelKey: 'org.dg' | 'org.admin' | 'org.ing' | 'org.ops' | 'org.sp' | 'org.noc';
  icon: LucideIcon;
  /** Grados: 0 = derecha, 90 = abajo, 180 = izquierda (sentido horario en pantalla) */
  angleDeg: number;
  radius: number;
  /** Cajas más altas para textos largos */
  boxH: number;
};

function polarToXY(radius: number, angleDeg: number): { x: number; y: number } {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

const NODE_DEFS: NodeDef[] = [
  { id: 'dg', labelKey: 'org.dg', icon: Users, angleDeg: 0, radius: 0, boxH: 76 },
  { id: 'admin', labelKey: 'org.admin', icon: Settings, angleDeg: 172, radius: 92, boxH: 76 },
  { id: 'ing', labelKey: 'org.ing', icon: Wrench, angleDeg: 8, radius: 92, boxH: 76 },
  { id: 'ops', labelKey: 'org.ops', icon: Activity, angleDeg: 108, radius: 168, boxH: 76 },
  { id: 'sp', labelKey: 'org.sp', icon: Users, angleDeg: 74, radius: 168, boxH: 96 },
  { id: 'noc', labelKey: 'org.noc', icon: ShieldCheck, angleDeg: 112, radius: 232, boxH: 72 },
];

/** Aristas: misma jerarquía que el diagrama previo */
const EDGES: [string, string][] = [
  ['dg', 'admin'],
  ['dg', 'ing'],
  ['ing', 'ops'],
  ['ing', 'sp'],
  ['ops', 'noc'],
];

const NODE_W = 132;

export const OrgChart = () => {
  const { t } = useLanguage();

  const positions = useMemo(() => {
    const map: Record<string, { x: number; y: number }> = {};
    for (const n of NODE_DEFS) {
      map[n.id] = polarToXY(n.radius, n.angleDeg);
    }
    return map;
  }, []);

  const lines = useMemo(() => {
    return EDGES.map(([from, to]) => {
      const a = positions[from];
      const b = positions[to];
      return { key: `${from}-${to}`, x1: a.x, y1: a.y, x2: b.x, y2: b.y };
    });
  }, [positions]);

  return (
    <section id="estructura" className="py-14 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-btek-blue mb-3 md:mb-4 uppercase tracking-tight">
            {t('org.title')}
          </h2>
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-btek-red mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative w-full rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm p-3 sm:p-6 md:p-8">
            <svg
              viewBox="0 0 500 520"
              className="w-full h-auto select-none"
              role="img"
              aria-label={t('org.title')}
            >
              <defs>
                <linearGradient id="orgLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>

              {/* Anillos guía */}
              {RINGS.map((r) => (
                <circle
                  key={r}
                  cx={CX}
                  cy={CY}
                  r={r}
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray="6 10"
                  className="text-slate-200"
                />
              ))}

              {/* Conectores */}
              <g stroke="url(#orgLineGrad)" strokeWidth="2" fill="none" strokeLinecap="round">
                {lines.map((ln) => (
                  <line key={ln.key} x1={ln.x1} y1={ln.y1} x2={ln.x2} y2={ln.y2} />
                ))}
              </g>

              {/* Nodos */}
              {NODE_DEFS.map((node, index) => {
                const { x, y } = positions[node.id];
                const Icon = node.icon;
                const label = t(node.labelKey);
                const left = x - NODE_W / 2;
                const top = y - node.boxH / 2;

                return (
                  <foreignObject
                    key={node.id}
                    x={left}
                    y={top}
                    width={NODE_W}
                    height={node.boxH}
                    className="overflow-visible"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="bg-white border border-btek-blue border-2 rounded-xl shadow-md w-full h-full px-2 py-2 flex flex-col items-center justify-center gap-1 hover:border-btek-red hover:shadow-lg transition-colors group">
                        <div className="bg-slate-50 p-1.5 rounded-lg group-hover:bg-btek-red/10 transition-colors shrink-0">
                          <Icon
                            className="text-btek-blue group-hover:text-btek-red transition-colors w-4 h-4 sm:w-[18px] sm:h-[18px]"
                            strokeWidth={2}
                          />
                        </div>
                        <span className="font-bold text-slate-800 text-center uppercase tracking-wide text-[8px] sm:text-[9px] leading-tight px-0.5">
                          {label}
                        </span>
                      </div>
                    </motion.div>
                  </foreignObject>
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
