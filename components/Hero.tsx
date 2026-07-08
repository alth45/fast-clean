"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { getTranslation } from "@/lib/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = (path: string) => getTranslation(language, path);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 dark:from-gray-900 to-white dark:to-gray-800 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}{" "}
            <span className="text-blue-600 dark:text-blue-400">{t("hero.titleHighlight")}</span>{" "}
            {t("hero.subtitle")}
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            {t("hero.description")}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 dark:bg-blue-500 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {t("hero.cta")}
            </Link>
            <Link
              href="#"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("tentang");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              {t("hero.learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;