import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { HomePage } from './pages/HomePage';
import { PrivacyNotice } from './pages/PrivacyNotice';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aviso-de-privacidad" element={<PrivacyNotice />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
