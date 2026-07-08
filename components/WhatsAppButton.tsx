"use client";

import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
const WHATSAPP_MESSAGE = "Halo FastClean! Saya ingin bertanya tentang layanan kebersihan.";

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Chat WhatsApp"
    >
      <Phone className="h-7 w-7" />
    </button>
  );
}