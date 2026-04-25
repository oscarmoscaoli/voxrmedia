// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vosk-cookie-consent');
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('vosk-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[110] p-6 animate-fade-up">
      <div className="max-w-7xl mx-auto bg-[#111] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 leading-relaxed max-w-2xl">
          We use cookies to enhance your experience and analyze our traffic. By continuing to browse, you agree to our <span className="text-white font-bold italic">data processing policy.</span>
        </p>
        <button
          onClick={acceptCookies}
          className="w-full md:w-auto bg-white text-black px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#FF5F00] hover:text-white transition-all duration-500"
        >
          Accept & Close
        </button>
      </div>
    </div>
  );
}