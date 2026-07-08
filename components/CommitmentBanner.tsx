
"use client";

import { Shield, Heart, ThumbsUp, Target, Users, Award, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useRef, useEffect, useState } from "react";

const commitmentIcons = [
  Shield,
  Heart,
  ThumbsUp,
  Target,
  Users,
  Award,
];

const CommitmentBanner = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const isIndonesian = language === "id";

  const title = isIndonesian
    ? "Komitmen Kami"
    : "Our Commitment";
  const subtitle = isIndonesian
    ? "Nilai-nilai yang menjadi fondasi setiap layanan FastCleaning"
    : "The values that form the foundation of every FastCleaning service";

  const commitments = isIndonesian
    ? [
        {
          icon: Shield,
          title: "Kualitas Terjamin",
          description: "Setiap layanan melewati proses quality control ketat sebelum diserahkan kepada pelanggan.",
        },
        {
          icon: Heart,
          title: "Peduli Lingkungan",
          description: "Menggunakan produk ramah lingkungan yang aman bagi keluarga, hewan peliharaan, dan planet kita.",
        },
        {
          icon: ThumbsUp,
          title: "Kepuasan Pelanggan",
          description: "Kepuasan Anda adalah prioritas utama. Kami mendengarkan dan terus berinovasi untuk hasil terbaik.",
        },
        {
          icon: Target,
          title: "Tepat Sasaran",
          description: "Layanan yang disesuaikan dengan kebutuhan spesifik Anda, bukan pendekatan satu-ukuran-untuk-semua.",
        },
        {
          icon: Users,
          title: "Tim Profesional",
          description: "Pekerja terlatih, bersertifikat, dan diasuransikan untuk ketenangan pikiran Anda.",
        },
        {
          icon: Award,
          title: "Transparan & Jujur",
          description: "Harga jelas tanpa biaya tersembunyi, komunikasi terbuka, dan layanan yang dapat dipercaya.",
        },
      ]
    : [
        {
          icon: Shield,
          title: "Guaranteed Quality",
          description: "Every service passes strict quality control before being delivered to customers.",
        },
        {
          icon: Heart,
          title: "Eco-Friendly",
          description: "Using environmentally friendly products safe for family, pets, and our planet.",
        },
        {
          icon: ThumbsUp,
          title: "Customer Satisfaction",
          description: "Your satisfaction is our top priority. We listen and continuously innovate for the best results.",
        },
        {
          icon: Target,
          title: "Spot On",
          description: "Services tailored to your specific needs, not a one-size-fits-all approach.",
        },
        {
          icon: Users,
          title: "Professional Team",
          description: "Trained, certified, and insured workers for your peace of mind.",
        },
        {
          icon: Award,
          title: "Transparent & Honest",
          description: "Clear pricing with no hidden fees, open communication, and trustworthy service.",
        },
      ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            commitments.forEach((_, i) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  if (!prev.includes(i)) return [...prev, i];
                  return prev;
                });
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-20 sm:py-28"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl" />

        {/* Grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="commitment-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#commitment-grid)" />
        </svg>
      </div>

      {/* Floating sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400/40"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 3) * 30}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) scale(1.5);
            opacity: 0.8;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5" />
            {isIndonesian ? "Nilai-Nilai Kami" : "Our Values"}
          </span>
        </div>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i}>
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    {word}
                  </span>
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-200/80 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Commitment Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-700 ease-out hover:border-blue-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/5 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />
                </div>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 ring-1 ring-white/10 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 group-hover:ring-blue-400/30">
                  <Icon className="h-7 w-7 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300" />
                </div>

                {/* Content */}
                <div className="relative mt-5">
                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-200/60 transition-colors duration-300 group-hover:text-blue-200/80">
                    {item.description}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <p className="text-sm text-blue-200/80">
              {isIndonesian
                ? "Komitmen ini yang membuat FastCleaning berbeda. Bergabunglah dengan ribuan pelanggan puas kami."
                : "This commitment sets FastCleaning apart. Join our thousands of satisfied customers."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentBanner;