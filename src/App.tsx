import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { OrgChart } from './components/OrgChart';
import { Products } from './components/Products';
import { Solutions } from './components/Solutions';
import { BtekBenefits } from './components/BtekBenefits';
import { IoTSection } from './components/IoTSection';
import { IoTInitiatives } from './components/IoTInitiatives';
import { SmartCities } from './components/SmartCities';
import { NOCServices } from './components/NOCServices';
import { SuccessStories } from './components/SuccessStories';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const DiagnosticQuiz = lazy(() =>
  import('./components/DiagnosticQuiz').then((m) => ({ default: m.DiagnosticQuiz })),
);

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-white text-btek-blue p-4 rounded-full shadow-2xl hover:bg-slate-100 transition-colors border border-slate-200"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
};

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = React.useState(false);
  const [quizMounted, setQuizMounted] = React.useState(false);

  const openQuiz = React.useCallback(() => {
    setQuizMounted(true);
    setIsQuizOpen(true);
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-btek-red z-[60] origin-left"
          style={{ scaleX }}
        />
        
        <Navbar />
        
        <main className="pt-32 lg:pt-24">
          <Hero onOpenQuiz={openQuiz} />
          <About onOpenQuiz={openQuiz} />
          <OrgChart />
          <Products />
          <Solutions />
          <BtekBenefits />
          <IoTSection />
          <IoTInitiatives />
          <SmartCities />
          <NOCServices />
          <SuccessStories />
          <FAQ />
          <Contact />
          <Resources />
        </main>

        {quizMounted && (
          <Suspense fallback={null}>
            <DiagnosticQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
          </Suspense>
        )}
        <Footer />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}
