# FastClean - Solusi Kebersihan Profesional

Website layanan kebersihan profesional untuk kantor, gedung, dan taman. Dibangun menggunakan **Next.js** dengan desain modern, responsif, dan dukungan bahasa Indonesia-Inggris (bilingual).

## ✨ Fitur

- **🌐 Bilingual** – Dukungan bahasa Indonesia dan Inggris
- **📱 Responsif** – Tampilan optimal di desktop, tablet, dan mobile
- **⚡ Performa Cepat** – Dibangun dengan Next.js App Router
- **🎨 Desain Modern** – UI/UX bersih dengan Tailwind CSS
- **❓ FAQ Accordion** – Section FAQ interaktif dengan animasi smooth

## 🚀 Halaman

| Route        | Deskripsi                     |
| ------------ | ----------------------------- |
| /          | Beranda (Hero, Why Us, Problems, Services, FAQ) |
| /faq       | Halaman FAQ terpisah          |
| /tentang   | Tentang FastClean             |
| /gallery   | Gallery                       |
| /kontak    | Kontak Kami                   |
| /solusi/*  | Detail solusi pembersihan     |
| /pesan/*   | Halaman pemesanan layanan     |

## 🛠️ Stack Teknologi

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Geist (Vercel)

## 📦 Instalasi

ash
git clone https://github.com/username/fastclean.git
cd fastclean
npm install
npm run dev


Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🏗️ Build & Production

ash
npm run build
npm start


## 🌍 Struktur Proyek


fastclean/
├── app/                    # Halaman Next.js App Router
│   ├── faq/               # Halaman FAQ
│   ├── gallery/           # Halaman Gallery
│   ├── kontak/            # Halaman Kontak
│   ├── pesan/             # Halaman Pemesanan
│   ├── solusi/            # Halaman Solusi
│   ├── tentang/           # Halaman Tentang
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Layout utama
│   └── page.tsx           # Halaman beranda
├── components/            # Komponen reusable
│   ├── FaqSection.tsx     # Komponen FAQ Accordion
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigasi utama
│   ├── ProblemsSection.tsx
│   ├── ServicesSection.tsx
│   └── WhyUsSection.tsx
├── lib/                   # Utility & data
│   ├── LanguageContext.tsx
│   └── translations.ts
├── public/                # Asset statis
└── package.json


## 🔧 Kustomisasi

### Menambahkan Pertanyaan FAQ Baru

Edit file lib/translations.ts dan tambahkan item baru ke array aq.items:

	ypescript
items: [
  {
    question: "Pertanyaan baru?",
    answer: "Jawaban untuk pertanyaan tersebut."
  },
]


### Mengganti Tema Warna

Warna utama menggunakan tailwind class lue-*. Ubah di konfigurasi Tailwind atau ganti class di komponen.

## 📄 Lisensi

Proyek ini bersifat privat / internal.
