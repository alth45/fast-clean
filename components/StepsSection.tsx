"use client";

import { useState, useEffect, useRef } from "react";
import {
  ClipboardList,
  MessageSquare,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Pilih Layanan",
    description:
      "Tentukan layanan kebersihan yang Anda butuhkan. Kami menyediakan berbagai pilihan mulai dari pembersihan rumah, kantor, hingga taman.",
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: MessageSquare,
    title: "Isi Form Pemesanan",
    description:
      "Lengkapi data diri dan detail kebutuhan Anda melalui form pemesanan online yang mudah dan cepat.",
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: CalendarCheck,
    title: "Konfirmasi & Jadwal",
    description:
      "Tim kami akan menghubungi Anda dalam 1x24 jam untuk mengonfirmasi pesanan dan menyepakati jadwal pelaksanaan.",
    color: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-50",
    textColor: "text-violet-600",
    borderColor: "border-violet-200",
  },
  {
    icon: Sparkles,
    title: "Nikmati Hasilnya",
    description:
      "Tim profesional kami akan membersihkan sesuai jadwal. Nikmati lingkungan yang bersih, segar, dan nyaman tanpa repot.",
    color: "from-amber-500 to-amber-600",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
];

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animasikan step satu per satu
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToLayanan = () => {
    const el = document.getElementById("layanan");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-emerald-50/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-50/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <Sparkles className="h-4 w-4" />
            Cara Pesan
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Mudah Memesan Layanan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Hanya 4 langkah mudah untuk mendapatkan layanan kebersihan profesional dari FastCleaning.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Garis penghubung desktop */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-200 via-emerald-200 via-violet-200 to-amber-200 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const isVisible = visibleSteps.includes(index);
              const isActive = activeStep === index;
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Nomor step */}
                  <div
                    className={`relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg transition-all duration-300 ${
                      isActive ? "scale-110 shadow-xl" : ""
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                    <span
                      className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold shadow-md transition-all duration-300 ${
                        step.textColor
                      } ${isActive ? "scale-110" : ""}`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Konten */}
                  <div
                    className={`mt-6 rounded-2xl border-2 p-6 text-center transition-all duration-300 ${
                      isActive
                        ? `${step.borderColor} ${step.bgLight} shadow-lg`
                        : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                    }`}
                  >
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        isActive ? step.textColor : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center lg:hidden">
                      <ChevronRight className="mt-2 h-6 w-6 rotate-90 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default StepsSection;