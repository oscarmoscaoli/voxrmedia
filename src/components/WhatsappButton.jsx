// src/components/WhatsappButton.jsx
import React from 'react';

export default function WhatsappButton() {
  const phoneNumber = "55XXXXXXXXXXX"; // Insira seu número com DDD
  const message = encodeURIComponent("Olá! Vim através do site e gostaria de saber mais sobre a VOSK Media.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/whatsapp.svg" 
        alt="WhatsApp" 
        className="w-8 h-8 invert-0" 
      />
      <span class="absolute right-full mr-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Talk to an expert
      </span>
    </a>
  );
}