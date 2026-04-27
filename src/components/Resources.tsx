import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, FileText, Lock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESOURCE_LIBRARY } from '../content/resourceLibraryData';
import { cn } from '../lib/utils';

const ACCESS_PASSWORD = 'btek2026';

export const Resources = () => {
  const { language, t } = useLanguage();
  const [unlocked, setUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);
  const [shake, setShake] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const categories = useMemo(() => RESOURCE_LIBRARY, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ACCESS_PASSWORD) {
      setUnlocked(true);
      setAuthError(false);
      setPasswordInput('');
      return;
    }
    setAuthError(true);
    setShake(true);
    window.setTimeout(() => setShake(false), 500);
  };

  const toggleCategory = (id: string) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="recursos"
      className="py-24 bg-slate-50 scroll-mt-32 lg:scroll-mt-28"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-btek-blue">{t('resourceVault.title')}</h2>
        </div>

        {!unlocked ? (
          <div className="max-w-md mx-auto">
            <div
              className={cn(
                'rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50',
                shake && 'animate-resource-vault-shake',
              )}
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-btek-blue/10 text-btek-blue">
                <Lock className="h-7 w-7" aria-hidden />
              </div>
              <p className="text-center text-sm font-bold uppercase tracking-[0.12em] text-slate-500 mb-2">
                {t('resourceVault.secureBadge')}
              </p>
              <p className="text-center text-slate-600 text-sm mb-6">{t('resourceVault.passwordHint')}</p>
              <form onSubmit={handleUnlock} className="space-y-4">
                <div>
                  <label htmlFor="resource-password" className="sr-only">
                    {t('resourceVault.passwordLabel')}
                  </label>
                  <input
                    id="resource-password"
                    type="password"
                    autoComplete="off"
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      if (authError) setAuthError(false);
                    }}
                    placeholder={t('resourceVault.passwordPlaceholder')}
                    className={cn(
                      'w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-offset-0',
                      authError
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                        : 'border-slate-200 focus:border-btek-blue focus:ring-btek-blue/25',
                    )}
                  />
                </div>
                <AnimatePresence mode="wait">
                  {authError && (
                    <motion.div
                      key="err"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="rounded-xl border border-red-100 bg-red-50/90 px-4 py-3 text-center text-sm text-red-700"
                      role="alert"
                    >
                      {t('resourceVault.wrongPassword')}
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-btek-red py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btek-red"
                >
                  {t('resourceVault.unlockButton')}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8 flex items-center justify-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-800">
              <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
              <span>{t('resourceVault.unlockedNotice')}</span>
            </div>

            <div className="space-y-4">
              {categories.map((cat) => {
                const isOpen = openCategoryId === cat.id;
                const label = language === 'es' ? cat.labelEs : cat.labelEn;
                return (
                  <div
                    key={cat.id}
                    className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCategory(cat.id)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-slate-50"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-800">{label}</span>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 shrink-0 text-btek-blue transition-transform duration-300',
                          isOpen && 'rotate-180 text-btek-red',
                        )}
                        aria-hidden
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-50 px-6 pb-6 pt-2">
                            {cat.files.length === 0 ? (
                              <p className="py-4 text-center text-sm text-slate-500">{t('resourceVault.emptyCategory')}</p>
                            ) : (
                              <ul className="space-y-2 pt-2">
                                {cat.files.map((file) => {
                                  const fileLabel = language === 'es' ? file.labelEs : file.labelEn;
                                  return (
                                    <li key={file.href + fileLabel}>
                                      <a
                                        href={file.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all hover:border-slate-100 hover:bg-slate-50"
                                      >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-btek-blue/10 text-btek-blue group-hover:bg-btek-red/10 group-hover:text-btek-red">
                                          <FileText className="h-5 w-5" aria-hidden />
                                        </span>
                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-btek-blue">
                                          {fileLabel}
                                        </span>
                                        <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-btek-red">
                                          PDF
                                        </span>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
