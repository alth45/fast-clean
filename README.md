# FastClean - Solusi Kebersihan Profesional

Website layanan kebersihan profesional untuk kantor, gedung, dan taman. Dibangun menggunakan **Next.js 15** dengan desain modern, responsif, dan dukungan bahasa Indonesia-Inggris (bilingual).

## ✨ Fitur

- **🌐 Bilingual** – Dukungan bahasa Indonesia dan Inggris dengan toggle bahasa real-time
- **📱 Responsif** – Tampilan optimal di desktop, tablet, dan mobile
- **⚡ Performa Cepat** – Dibangun dengan Next.js App Router
- **🎨 Desain Modern** – UI/UX bersih dengan Tailwind CSS
- **❓ FAQ Accordion** – Section FAQ interaktif dengan animasi smooth
- **📋 Form Pemesanan** – Booking form dengan pilihan tanggal, waktu, dan layanan
- **📧 API Contact** – Route API untuk menangani pengiriman pesan kontak
- **🔍 Dynamic Routing** – Halaman detail solusi dan pemesanan dengan slug dinamis
- **🔄 Language Context** – Manajemen state bahasa global

## 🚀 Halaman

| Route          | Deskripsi                     |
|----------------|-------------------------------|
| `/`            | Beranda (Hero, Why Us, Problems, Services, FAQ, Steps) |
| `/faq`         | Halaman FAQ terpisah          |
| `/tentang`     | Tentang FastClean             |
| `/gallery`     | Gallery                       |
| `/kontak`      | Kontak Kami                   |
| `/solusi/[slug]` | Detail solusi pembersihan   |
| `/pesan/[slug]`  | Halaman pemesanan per layanan |

## 🛠️ Stack Teknologi

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Geist (Vercel)
- **State Management**: React Context (LanguageContext)

## 📦 Instalasi

```bash
git clone https://github.com/alth45/fast-clean.git
cd fast-clean
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🏗️ Build & Production

```bash
npm run build
npm start
```

## 🌍 Struktur Proyek

```
fast-clean/
├── app/                    # Halaman Next.js App Router
│   ├── api/               # Route API
│   │   └── contact/       # API endpoint untuk kontak
│   ├── faq/               # Halaman FAQ
│   ├── gallery/           # Halaman Gallery
│   ├── kontak/            # Halaman Kontak
│   ├── pesan/             # Halaman Pemesanan (dynamic: [slug])
│   ├── solusi/            # Halaman Solusi (dynamic: [slug])
│   ├── tentang/           # Halaman Tentang
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Layout utama
│   └── page.tsx           # Halaman beranda
├── components/            # Komponen reusable
│   ├── BookingForm.tsx    # Form pemesanan layanan
│   ├── FaqSection.tsx     # Komponen FAQ Accordion
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigasi utama
│   ├── ProblemsSection.tsx # Section masalah & solusi
│   ├── ServicesSection.tsx # Section layanan
│   ├── StepsSection.tsx   # Section langkah pemesanan
│   └── WhyUsSection.tsx   # Section mengapa memilih kami
├── lib/                   # Utility & data
│   ├── LanguageContext.tsx # Context bahasa global
│   └── translations.ts    # Semua teks bilingual
├── public/                # Asset statis
│   └── images/            # Gambar
└── package.json
```

## 🔧 Kustomisasi

### Menambahkan Pertanyaan FAQ Baru

Edit file `lib/translations.ts` dan tambahkan item baru ke array `faq.items`:

```typescript
items: [
  {
    question: "Pertanyaan baru?",
    answer: "Jawaban untuk pertanyaan tersebut."
  },
]
```

### Menambahkan Halaman Layanan Baru

1. Tambahkan data layanan baru di `lib/translations.ts` dalam array `services`.
2. Buat folder `app/pesan/[slug]/` atau `app/solusi/[slug]/` jika belum ada (parameter slug akan otomatis menangani dynamic routing).

### Mengganti Tema Warna

Warna utama menggunakan tailwind class `blue-*`. Ubah di konfigurasi Tailwind atau ganti class di komponen.

### Menambahkan Endpoint API Baru

Buat folder baru di `app/api/` dan file `route.ts` sesuai kebutuhan (mendukung HTTP GET, POST, dll).

## 📄 Lisensi

Proyek ini bersifat privat / internal.
