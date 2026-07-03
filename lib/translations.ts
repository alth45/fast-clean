export type Language = "id" | "en";

export const translations = {
  id: {
    nav: {
      about: "Tentang FastCleaning",
      solutions: "Solusi",
      solutionsChildren: {
        office: "Kantor",
        building: "Gedung",
        garden: "Taman",
      },
      gallery: "Gallery",
      faq: "FAQ",
      language: "Bahasa Inggris",
      languageChildren: {
        english: "English",
        indonesia: "Indonesia",
      },
      contact: "Kontak Kami",
    },
    hero: {
      title: "Solusi Kebersihan",
      titleHighlight: "Profesional",
      subtitle: "untuk Anda",
      description:
        "FastCleaning menyediakan layanan kebersihan terpercaya untuk kantor, gedung, dan taman Anda. Tim profesional kami siap membantu menciptakan lingkungan yang bersih dan nyaman.",
      cta: "Hubungi Kami",
      learnMore: "Pelajari Lebih Lanjut",
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      subtitle: "Temukan jawaban untuk pertanyaan umum seputar layanan kebersihan kami.",
      items: [
        {
          question: "Apa saja layanan yang ditawarkan FastCleaning?",
          answer: "FastCleaning menyediakan berbagai layanan kebersihan profesional, termasuk pembersihan pasca renovasi, deep clean, pembersihan kontrak bulanan, laundry karpet & sofa, pembersihan kamar mandi & dapur, serta pembersihan taman & halaman."
        },
        {
          question: "Bagaimana cara memesan layanan FastCleaning?",
          answer: "Anda dapat memesan layanan melalui website kami dengan mengklik tombol \"Pesan Sekarang\" pada layanan yang diinginkan, atau menghubungi kami langsung melalui tombol \"Kontak Kami\" di navbar. Tim kami akan merespons dalam waktu 1x24 jam."
        },
        {
          question: "Apakah FastCleaning melayani area luar kota?",
          answer: "Saat ini FastCleaning berfokus pada area perkotaan di sekitar Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Untuk area luar kota, silakan hubungi kami untuk diskusi lebih lanjut."
        },
        {
          question: "Berapa lama waktu yang dibutuhkan untuk satu sesi pembersihan?",
          answer: "Durasi pembersihan tergantung pada jenis layanan dan luas area. Pembersihan standar untuk rumah tinggal biasanya memakan waktu 2-4 jam, sedangkan pembersihan pasca renovasi atau deep clean bisa memakan waktu 4-8 jam."
        },
        {
          question: "Apakah FastCleaning menyediakan peralatan dan bahan pembersih?",
          answer: "Ya, tim FastCleaning datang dengan peralatan dan bahan pembersih profesional yang lengkap. Anda tidak perlu menyediakan apa pun. Kami menggunakan produk pembersih yang aman dan ramah lingkungan."
        },
        {
          question: "Bagaimana jika saya tidak puas dengan hasil pembersihan?",
          answer: "Kepuasan Anda adalah prioritas kami. Jika ada area yang kurang bersih, kami akan melakukan pembersihan ulang secara gratis. Kami juga menerima masukan untuk perbaikan layanan di masa mendatang."
        }
      ]
    },
  },
  en: {
    nav: {
      about: "About FastCleaning",
      solutions: "Solutions",
      solutionsChildren: {
        office: "Office",
        building: "Building",
        garden: "Garden",
      },
      gallery: "Gallery",
      faq: "FAQ",
      language: "Language",
      languageChildren: {
        english: "English",
        indonesia: "Indonesia",
      },
      contact: "Contact Us",
    },
    hero: {
      title: "Professional",
      titleHighlight: "Cleaning",
      subtitle: "Solutions for You",
      description:
        "FastCleaning provides trusted cleaning services for your office, building, and garden. Our professional team is ready to help create a clean and comfortable environment.",
      cta: "Contact Us",
      learnMore: "Learn More",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our cleaning services.",
      items: [
        {
          question: "What services does FastCleaning offer?",
          answer: "FastCleaning provides various professional cleaning services, including post-renovation cleaning, deep clean, monthly contract cleaning, carpet & sofa laundry, bathroom & kitchen cleaning, and garden & yard cleaning."
        },
        {
          question: "How do I order FastCleaning services?",
          answer: "You can order services through our website by clicking the \"Order Now\" button on the desired service, or contact us directly via the \"Contact Us\" button in the navbar. Our team will respond within 24 hours."
        },
        {
          question: "Does FastCleaning serve out-of-town areas?",
          answer: "Currently FastCleaning focuses on urban areas around Jakarta, Bogor, Depok, Tangerang, and Bekasi. For out-of-town areas, please contact us for further discussion."
        },
        {
          question: "How long does one cleaning session take?",
          answer: "The duration depends on the type of service and area size. Standard cleaning for a residential house usually takes 2-4 hours, while post-renovation or deep clean can take 4-8 hours."
        },
        {
          question: "Does FastCleaning provide equipment and cleaning supplies?",
          answer: "Yes, FastCleaning team comes with complete professional equipment and cleaning supplies. You don't need to provide anything. We use safe and environmentally friendly cleaning products."
        },
        {
          question: "What if I'm not satisfied with the cleaning result?",
          answer: "Your satisfaction is our priority. If there are areas that are not clean enough, we will do re-cleaning for free. We also welcome feedback for service improvement in the future."
        }
      ]
    },
  },
};

export type TranslationKeys = typeof translations.id;
export type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split(".");
  let result: unknown = translations[lang];
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof result === "string" ? result : path;
}