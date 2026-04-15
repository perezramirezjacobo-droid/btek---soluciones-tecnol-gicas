import React, { useMemo, useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    website: '',
    email: '',
    phone: '',
    location: '',
    solution: '',
    quote: '',
    message: ''
  });

  const solutions = useMemo(() => [
    t('solutions.item.redes'),
    t('solutions.item.routing'),
    t('solutions.item.wireless'),
    t('solutions.item.cyber'),
    t('solutions.item.iot'),
    t('solutions.item.cloud'),
    t('solutions.item.workplace'),
    t('solutions.item.telephony'),
    t('solutions.item.video'),
    t('solutions.item.analytics')
  ], [t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Nuevo mensaje de contacto: ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(`
Nombre: ${formData.name}
Puesto: ${formData.position}
Empresa: ${formData.company}
Sitio Web: ${formData.website}
Email: ${formData.email}
Teléfono: ${formData.phone}
Ubicación: ${formData.location}
Solución de interés: ${formData.solution}
Interés en cotizar: ${formData.quote}

Mensaje:
${formData.message}
    `);

    window.location.href = `mailto:ventas@btek.com.mx?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-btek-blue p-12 text-white space-y-8">
            <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
            <p className="text-blue-100">{t('contact.subtitle')}</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold">{t('contact.call')}</p>
                  <p className="font-bold">55345618</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold">{t('contact.email')}</p>
                  <p className="font-bold">ventas@btek.com.mx</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-12">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.position')}</label>
                <input 
                  type="text" 
                  value={formData.position}
                  onChange={e => setFormData({...formData, position: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.company')}</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.website')}</label>
                <input 
                  type="url" 
                  value={formData.website}
                  onChange={e => setFormData({...formData, website: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.phone')}</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.location')}</label>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.solution')}</label>
                <select 
                  value={formData.solution}
                  onChange={e => setFormData({...formData, solution: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue appearance-none"
                >
                  <option value="">{t('contact.form.select')}</option>
                  {solutions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.quote')}</label>
                <input 
                  type="text" 
                  value={formData.quote}
                  onChange={e => setFormData({...formData, quote: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('contact.form.message')}</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-btek-blue" 
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-btek-red text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg uppercase tracking-widest flex items-center justify-center gap-2">
                  <Send size={18} />
                  {t('contact.form.send')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
