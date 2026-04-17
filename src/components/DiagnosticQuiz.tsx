import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, CheckCircle2, ChevronRight, ChevronLeft, 
  User, Mail, Phone, MapPin, AlertCircle, 
  TrendingUp, ShieldCheck, Activity, Brain,
  Trophy, ArrowRight, Send
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import confetti from 'canvas-confetti';
import { BtekLogo } from './BtekLogo';

interface DiagnosticQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

type Level = 'reactivo' | 'transicion' | 'proactivo';

export const DiagnosticQuiz = ({ isOpen, onClose }: DiagnosticQuizProps) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    answers: Array(10).fill(null),
    situation: '',
    desiredResult: '',
    obstacles: '',
    solution: '',
    additionalInfo: ''
  });

  const [locationLoading, setLocationLoading] = useState(false);
  const [isSessionRequested, setIsSessionRequested] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  // Auto-detect location
  useEffect(() => {
    if (!isOpen || formData.location) return;

    const ac = new AbortController();
    setLocationLoading(true);
    fetch('https://ipapi.co/json/', {signal: ac.signal, credentials: 'omit'})
      .then((res) => {
        if (!res.ok) throw new Error('location fetch failed');
        return res.json();
      })
      .then((data: {city?: string; country_name?: string}) => {
        if (data.city && data.country_name) {
          setFormData((prev) => ({
            ...prev,
            location: `${data.city}, ${data.country_name}`,
          }));
        }
      })
      .catch(() => {})
      .finally(() => setLocationLoading(false));

    return () => ac.abort();
  }, [isOpen, formData.location]);

  const questions = [
    { text: "¿Cuentas con un NOC 24/7 que supervise tus tiendas en tiempo real?", category: "Detección y corrección proactiva" },
    { text: "¿Recibes alertas automáticas ante fallas de red, temperatura u otros eventos críticos?", category: "Detección y corrección proactiva" },
    { text: "¿Das seguimiento y cierre a los incidentes detectados con responsable asignado?", category: "Detección y corrección proactiva" },
    { text: "¿Utilizas checklists remotos para validar la operación diaria de cada tienda?", category: "Detección y corrección proactiva" },
    { text: "¿Tienes un proceso de escalamiento definido (tienda → zona → central)?", category: "Soluciones rápidas y focalizadas" },
    { text: "¿Supervisores cuentan con herramientas para visualizar el comportamiento de la tienda sin estar en sitio?", category: "Soluciones rápidas y focalizadas" },
    { text: "¿Analizas y reportas el tiempo de atención y resolución (SLA) de cada incidente?", category: "Soluciones rápidas y focalizadas" },
    { text: "¿Identificas el perfil de tus clientes (sexo, edad, horario y frecuencia de visita)?", category: "Anticipar y aprovechar oportunidades" },
    { text: "¿Monitoreas por perfil los Top 10 productos y combos más vendidos por tienda y horario?", category: "Anticipar y aprovechar oportunidades" },
    { text: "¿Correlacionas visitas, tickets y cancelaciones para detectar nuevas oportunidades de venta?", category: "Anticipar y aprovechar oportunidades" },
  ];

  const profileOptions = {
    situation: [
      "Detectamos problemas solo cuando afectan ventas",
      "Tenemos alertas pero sin cierre constante",
      "Procesos definidos sin integración",
      "Operación monitoreada pero reactiva",
      "Operación estable buscando optimizar con IA"
    ],
    desiredResult: [
      "Detectar fallas antes de afectar ventas",
      "Reducir tiempo de resolución",
      "Visibilidad 360° en tiempo real",
      "Conocer comportamiento del cliente",
      "Consolidar alertas y reportes en una sola plataforma"
    ],
    obstacles: [
      "Falta de tecnología integrada",
      "Falta de tiempo o recursos",
      "Procesos manuales",
      "Poca visibilidad de datos",
      "Dificultad para medir ROI"
    ],
    solution: [
      "Sistema unificado de monitoreo",
      "Tablero ejecutivo de pérdidas y ventas",
      "Servicio gestionado NOC+Analítica 24/7",
      "Herramienta de perfilamiento de clientes",
      "Acompañamiento experto"
    ]
  };

  const calculateScore = () => {
    return formData.answers.filter(a => a === true).length;
  };

  const getLevel = (score: number): Level => {
    if (score <= 3) return 'reactivo';
    if (score <= 7) return 'transicion';
    return 'proactivo';
  };

  const levelData = {
    reactivo: {
      title: "NIVEL REACTIVO",
      color: "#ef4444",
      state: "La mayoría de los problemas se detectan cuando ya afectan la venta (caída de NPS o carrito abandonado). El equipo central depende de reportes manuales.",
      opportunity: "Implementar monitoreo proactivo 24/7 con alertas automáticas.",
      priority: "Pasar de detectar a prevenir."
    },
    transicion: {
      title: "NIVEL EN TRANSICIÓN",
      color: "#f59e0b",
      state: "Existen procesos documentados (alertas, checklists) pero están dispersos o poco integrados entre TI y Operaciones. La velocidad de acción es lenta o manual.",
      opportunity: "Integrar alertas, tickets y dashboards en una sola plataforma con escalamiento y SLA definidos.",
      priority: "Conectar la información y acelerar la respuesta."
    },
    proactivo: {
      title: "NIVEL PROACTIVO",
      color: "#10b981",
      state: "Detectas anomalías en tiempo real, anticipas fallas y utilizas dashboards integrados para decisiones ágiles. La operación ya impulsa el crecimiento, no solo eficiencia.",
      opportunity: "Incorporar IA y analítica avanzada para anticipar comportamientos.",
      priority: "Evolucionar de eficiencia operativa a crecimiento estratégico."
    }
  };

  const handleNext = () => {
    if (step === 3) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#003399', '#cc0000', '#ffffff']
      });
    }
    setStep(prev => prev + 1);
  };

  const handleScheduleSession = () => {
    setShowEmailOptions(true);
  };

  const sendEmail = (provider: 'gmail' | 'outlook' | 'yahoo' | 'default') => {
    setIsSending(true);
    
    const subject = encodeURIComponent(`Nueva solicitud de sesión: ${formData.name} - Pak Retail`);
    const body = encodeURIComponent(`
Hola equipo de Btek,

Deseo agendar una sesión de 15 minutos para discutir los resultados de mi diagnóstico.

DATOS DEL LEAD:
- Nombre: ${formData.name}
- Email: ${formData.email}
- Teléfono: ${formData.phone || 'No proporcionado'}
- Ubicación: ${formData.location}

RESULTADOS DEL DIAGNÓSTICO:
- Score: ${calculateScore()}/10
- Nivel: ${levelData[getLevel(calculateScore())].title}

PERFILAMIENTO:
- Situación Actual: ${formData.situation}
- Resultado Deseado: ${formData.desiredResult}
- Obstáculos: ${formData.obstacles}
- Solución Percibida: ${formData.solution}
- Comentarios: ${formData.additionalInfo || 'Ninguno'}

Saludos.
    `);

    let url = '';
    const to = 'ventas@btek.com.mx';

    switch (provider) {
      case 'gmail':
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
        break;
      case 'outlook':
        url = `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;
        break;
      case 'yahoo':
        url = `https://compose.mail.yahoo.com/?to=${to}&subject=${subject}&body=${body}`;
        break;
      default:
        url = `mailto:${to}?subject=${subject}&body=${body}`;
    }

    if (provider === 'default') {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    setTimeout(() => {
      setIsSending(false);
      setIsSessionRequested(true);
      setShowEmailOptions(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#003399', '#cc0000']
      });
    }, 500);
  };

  const handleBack = () => setStep(prev => prev - 1);

  const handleAnswer = (index: number, value: boolean) => {
    const newAnswers = [...formData.answers];
    newAnswers[index] = value;
    setFormData({ ...formData, answers: newAnswers });
  };

  const isStepValid = () => {
    if (step === 0) return formData.name && formData.email;
    if (step === 1) return formData.answers.every(a => a !== null);
    if (step === 2) return formData.situation && formData.desiredResult && formData.obstacles && formData.solution;
    return true;
  };

  const score = calculateScore();
  const level = getLevel(score);
  const currentLevelData = levelData[level];

  const chartData = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 10 - score },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[90vh]"
      >
        {/* Sidebar Info */}
        <div className="hidden md:flex md:w-1/3 bg-btek-blue p-10 text-white flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="relative z-10">
            <div className="mb-8">
              <BtekLogo variant="light" className="h-11 w-auto" />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">
              Diagnóstico <br /> <span className="text-btek-red">Pak Retail</span>
            </h2>
            <p className="text-blue-100/80 text-sm font-medium leading-relaxed">
              Descubre el nivel de madurez operativa de tu negocio y recibe recomendaciones estratégicas inmediatas.
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-200">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Activity size={16} />
              </div>
              <span>Toma solo 3 min</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-200">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Trophy size={16} />
              </div>
              <span>Resultados Gratis</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar relative">
          <div className="md:hidden mb-8">
            <BtekLogo className="h-10 w-auto" />
          </div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <X size={24} />
          </button>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-black text-btek-blue uppercase tracking-tight mb-2">Información Básica</h3>
                  <p className="text-slate-500 text-sm">Comencemos conociéndote un poco mejor.</p>
                </div>

                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nombre Completo*</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-btek-blue/20 focus:border-btek-blue outline-none transition-all font-bold text-slate-700"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Correo Corporativo*</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-btek-blue/20 focus:border-btek-blue outline-none transition-all font-bold text-slate-700"
                        placeholder="ejemplo@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Teléfono (Opcional)</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-btek-blue/20 focus:border-btek-blue outline-none transition-all font-bold text-slate-700"
                          placeholder="+52..."
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Ubicación</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="text"
                          value={formData.location}
                          onChange={e => setFormData({...formData, location: e.target.value})}
                          disabled={locationLoading}
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-btek-blue/20 focus:border-btek-blue outline-none transition-all font-bold text-slate-700 disabled:opacity-50"
                          placeholder={locationLoading ? "Detectando..." : "Ciudad, País"}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="w-full py-5 bg-btek-blue text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-btek-blue/20 disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                >
                  Continuar <ChevronRight size={20} />
                </button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-black text-btek-blue uppercase tracking-tight mb-2">Mejores Prácticas</h3>
                  <p className="text-slate-500 text-sm">Responde con honestidad para un diagnóstico preciso.</p>
                </div>

                <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                  {questions.map((q, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded-full bg-btek-blue text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-1">
                          {i + 1}
                        </span>
                        <p className="font-bold text-slate-700 leading-tight">{q.text}</p>
                      </div>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => handleAnswer(i, true)}
                          className={`flex-1 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all border-2 ${
                            formData.answers[i] === true 
                            ? 'bg-btek-blue text-white border-btek-blue' 
                            : 'bg-white text-slate-400 border-slate-100 hover:border-btek-blue/30'
                          }`}
                        >
                          Sí
                        </button>
                        <button 
                          onClick={() => handleAnswer(i, false)}
                          className={`flex-1 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all border-2 ${
                            formData.answers[i] === false 
                            ? 'bg-btek-red text-white border-btek-red' 
                            : 'bg-white text-slate-400 border-slate-100 hover:border-btek-red/30'
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handleBack}
                    className="flex-1 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronLeft size={20} /> Atrás
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="flex-[2] py-5 bg-btek-blue text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-btek-blue/20 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    Siguiente <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-black text-btek-blue uppercase tracking-tight mb-2">Perfil del Cliente</h3>
                  <p className="text-slate-500 text-sm">Ayúdanos a entender tu contexto operativo.</p>
                </div>

                <div className="space-y-6 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Situación Actual</label>
                    <select 
                      value={formData.situation}
                      onChange={e => setFormData({...formData, situation: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-btek-blue/20"
                    >
                      <option value="">Selecciona una opción</option>
                      {profileOptions.situation.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Resultado deseado (90 días)</label>
                    <select 
                      value={formData.desiredResult}
                      onChange={e => setFormData({...formData, desiredResult: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-btek-blue/20"
                    >
                      <option value="">Selecciona una opción</option>
                      {profileOptions.desiredResult.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Principales obstáculos</label>
                    <select 
                      value={formData.obstacles}
                      onChange={e => setFormData({...formData, obstacles: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-btek-blue/20"
                    >
                      <option value="">Selecciona una opción</option>
                      {profileOptions.obstacles.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mejor solución percibida</label>
                    <select 
                      value={formData.solution}
                      onChange={e => setFormData({...formData, solution: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-btek-blue/20"
                    >
                      <option value="">Selecciona una opción</option>
                      {profileOptions.solution.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">¿Algo más que debamos saber?</label>
                    <textarea 
                      value={formData.additionalInfo}
                      onChange={e => setFormData({...formData, additionalInfo: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-btek-blue/20 min-h-[100px]"
                      placeholder="Cuéntanos más sobre tu operación..."
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={handleBack}
                    className="flex-1 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronLeft size={20} /> Atrás
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="flex-[2] py-5 bg-btek-red text-white rounded-2xl font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-btek-red/20 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    Finalizar Diagnóstico <Send size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8 text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                  <CheckCircle2 className="text-green-500" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Diagnóstico Completado</span>
                </div>

                <div className="relative h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="100%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                      >
                        <Cell fill={currentLevelData.color} />
                        <Cell fill="#f1f5f9" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                    <span className="text-5xl font-black text-slate-800">{score}/10</span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Puntos Obtenidos</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter" style={{ color: currentLevelData.color }}>
                      {currentLevelData.title}
                    </h3>
                    <p className="text-slate-500 font-bold mt-2">{currentLevelData.state}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <p className="text-[10px] font-black uppercase tracking-widest text-btek-red mb-2">Oportunidad</p>
                      <p className="text-sm font-bold text-slate-700">{currentLevelData.opportunity}</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <p className="text-[10px] font-black uppercase tracking-widest text-btek-blue mb-2">Prioridad</p>
                      <p className="text-sm font-bold text-slate-700">{currentLevelData.priority}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 space-y-6">
                  {!isSessionRequested ? (
                    <>
                      {!showEmailOptions ? (
                        <>
                          <p className="text-sm text-slate-500 font-medium">Hemos enviado un reporte detallado a <span className="text-btek-blue font-bold">{formData.email}</span></p>
                          <div className="flex flex-col md:flex-row gap-4">
                            <button 
                              onClick={handleScheduleSession}
                              disabled={isSending}
                              className="flex-1 py-4 bg-btek-blue text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                              {isSending ? "Enviando..." : "Agendar Sesión 15 min"} <ArrowRight size={18} />
                            </button>
                            <button 
                              onClick={onClose}
                              className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
                            >
                              Cerrar
                            </button>
                          </div>
                        </>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-4"
                        >
                          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Selecciona tu plataforma de correo</p>
                          <div className="grid grid-cols-2 gap-3">
                            <button 
                              onClick={() => sendEmail('gmail')}
                              className="p-4 bg-white border border-slate-100 rounded-2xl hover:border-btek-blue hover:shadow-md transition-all flex flex-col items-center gap-2"
                            >
                              <img src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png" alt="Gmail" className="w-8 h-8" />
                              <span className="text-[10px] font-black uppercase tracking-widest">Gmail</span>
                            </button>
                            <button 
                              onClick={() => sendEmail('outlook')}
                              className="p-4 bg-white border border-slate-100 rounded-2xl hover:border-btek-blue hover:shadow-md transition-all flex flex-col items-center gap-2"
                            >
                              <img src="https://res.cdn.office.net/assets/mail/pwa/v1/pngs/apple-touch-icon.png" alt="Outlook" className="w-8 h-8" />
                              <span className="text-[10px] font-black uppercase tracking-widest">Outlook</span>
                            </button>
                            <button 
                              onClick={() => sendEmail('yahoo')}
                              className="p-4 bg-white border border-slate-100 rounded-2xl hover:border-btek-blue hover:shadow-md transition-all flex flex-col items-center gap-2"
                            >
                              <img src="https://s.yimg.com/cv/apiv2/myy/yahoo_mail_app_icon_192.png" alt="Yahoo" className="w-8 h-8" />
                              <span className="text-[10px] font-black uppercase tracking-widest">Yahoo</span>
                            </button>
                            <button 
                              onClick={() => sendEmail('default')}
                              className="p-4 bg-white border border-slate-100 rounded-2xl hover:border-btek-blue hover:shadow-md transition-all flex flex-col items-center gap-2"
                            >
                              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                                <Mail size={20} className="text-slate-500" />
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-widest">Predeterminado</span>
                            </button>
                          </div>
                          <button 
                            onClick={() => setShowEmailOptions(false)}
                            className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-btek-red transition-colors"
                          >
                            Cancelar
                          </button>
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="p-6 bg-green-50 border border-green-100 rounded-3xl text-center">
                        <CheckCircle2 className="text-green-500 mx-auto mb-2" size={32} />
                        <h4 className="text-lg font-black text-green-800 uppercase tracking-tight">¡Solicitud Enviada!</h4>
                        <p className="text-sm text-green-700 font-medium">Hemos recibido tu interés para agendar una sesión. Un experto de Btek se pondrá en contacto contigo a la brevedad.</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-left">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Contacto Directo</p>
                          <p className="text-sm font-bold text-btek-blue">ventas@btek.com.mx</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Sitio Web</p>
                          <p className="text-sm font-bold text-btek-blue">www.btek.com.mx</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={onClose}
                        className="w-full py-4 bg-btek-blue text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-800 transition-all"
                      >
                        Finalizar
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
