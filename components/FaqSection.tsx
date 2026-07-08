/* eslint-disable react-hooks/refs */
"use client";

import { useState, useRef } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

interface FaqItemData {
  question: string;
  answer: string;
}

const FaqAccordionItem = ({ item, index, isOpen, onToggle }: { item: FaqItemData; index: number; isOpen: boolean; onToggle: () => void }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
          className={`group rounded-2xl border transition-all duration-300 ${
            isOpen
              ? "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20 shadow-md shadow-blue-100/50 dark:shadow-blue-900/30"
              : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
          }`}
        >
          <button
            onClick={onToggle}
            className="flex w-full items-center gap-4 px-6 py-5 text-left"
            aria-expanded={isOpen}
          >
            <span
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                isOpen
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-800"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
              }`}
            >
              {index + 1}
            </span>
            <span
              className={`flex-1 text-base font-medium transition-colors duration-300 ${
                isOpen ? "text-blue-800 dark:text-blue-300" : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                isOpen
                  ? "rotate-180 text-blue-600 dark:text-blue-400"
                  : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
              }`}
            />
          </button>
          <div
            ref={contentRef}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              // eslint-disable-next-line react-hooks/refs
              maxHeight: isOpen ? contentRef.current?.scrollHeight ?? 500 : 0,
              opacity: isOpen ? 1 : 0,
            }}
          >
            <div className="border-t border-blue-100 dark:border-blue-800 px-6 pb-5 pt-4">
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
  );
};

const FaqSection = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqData = translations[language] as { faq: { title: string; subtitle: string; items: FaqItemData[] } };
  const currentItems = faqData.faq.items;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white dark:bg-gray-900 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/50">
                <HelpCircle className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {faqData.faq.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                {faqData.faq.subtitle}
              </p>
            </div>
        <div className="mt-12 space-y-3">
          {currentItems.map((item, index) => (
            <FaqAccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-center shadow-lg">
          <h3 className="text-xl font-semibold text-white">
            {language === "id" ? "Masih memiliki pertanyaan?" : "Still have questions?"}
          </h3>
          <p className="mt-2 text-sm text-blue-100">
            {language === "id" ? "Tim kami siap membantu Anda. Hubungi kami sekarang!" : "Our team is ready to help you. Contact us now!"}
          </p>
          <a
            href="/kontak"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md"
          >
            {language === "id" ? "Hubungi Kami" : "Contact Us"}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
