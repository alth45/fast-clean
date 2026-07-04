"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles, ChevronRight, Building2, Home, Sofa, Wrench, TreePine, Bath, SprayCan, Phone, Mail, CheckCircle2 } from "lucide-react";
import BookingForm from "@/components/BookingForm";

// Mapping slug ke detail layanan
const serviceDetails: Record<string, { title: string; subtitle: string; icon: React.ReactNode; description: string }> = {
  "pasca-renovasi": {
    title: "Pembersihan Pasca Renovasi",
    subtitle: "Bersihkan sisa material dan debu setelah renovasi",
    icon: <Wrench className="h-8 w-8" />,
    description:
      "Setelah renovasi, debu dan kotoran pasti berserakan. Tim FastCleaning akan membersihkan sisa-sisa material, debu halus, dan noda membandel sehingga rumah atau kantor Anda kembali bersih dan layak huni.",
  },
  "deep-clean": {
    title: "Deep Clean",
    subtitle: "Pembersihan menyeluruh hingga ke sudut tersembunyi",
    icon: <SprayCan className="h-8 w-8" />,
    description:
      "Layanan pembersihan menyeluruh hingga ke sudut-sudut tersembunyi. Cocok untuk rumah, kantor, atau gedung yang membutuhkan pembersihan total. Kami menjangkau area yang jarang dibersihkan sehari-hari.",
  },
  kontrak: {
    title: "Pembersihan Kontrak Bulanan",
    subtitle: "Solusi praktis dengan jadwal pembersihan rutin",
    icon: <Building2 className="h-8 w-8" />,
    description:
      "Solusi praktis dengan jadwal pembersihan rutin mingguan atau bulanan. Kami menyesuaikan frekuensi sesuai kebutuhan Anda. Harga spesial untuk kontrak jangka panjang.",
  },
  "laundry-karpet": {
    title: "Laundry Karpet & Sofa",
    subtitle: "Karpet dan sofa bersih bebas noda",
    icon: <Sofa className="h-8 w-8" />,
    description:
      "Karpet, sofa, dan kursi kantor yang kotor dan berminyak? Kami menggunakan mesin dan bahan pembersih khusus yang ampuh mengangkat noda dan debu tanpa merusak serat kain.",
  },
  "kamar-mandi-dapur": {
    title: "Pembersihan Kamar Mandi & Dapur",
    subtitle: "Area paling rawan kuman jadi higienis",
    icon: <Bath className="h-8 w-8" />,
    description:
      "Kamar mandi dan dapur adalah area paling rawan kuman. Kami membersihkan kerak air, jamur, noda membandel, dan mendisinfeksi permukaan agar higienis dan aman.",
  },
  taman: {
    title: "Pembersihan Taman & Halaman",
    subtitle: "Taman dan halaman asri bebas sampah",
    icon: <TreePine className="h-8 w-8" />,
    description:
      "Taman dan halaman yang rimbun perlu perawatan rutin. Kami membersihkan daun kering, rumput liar, dan sampah agar taman tetap asri dan nyaman dipandang.",
  },
};

const serviceListForLabel: Record<string, string> = {
  "pasca-renovasi": "Pembersihan Pasca Renovasi",
  "deep-clean": "Deep Clean",
  kontrak: "Pembersihan Kontrak Bulanan",
  "laundry-karpet": "Laundry Karpet & Sofa",
  "kamar-mandi-dapur": "Pembersihan Kamar Mandi & Dapur",
  taman: "Pembersihan Taman & Halaman",
};

export default function BookingPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceDetails[slug];
  const serviceName = serviceListForLabel[slug] || slug;

  if (!service) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center bg-gray-50/50">
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 shadow-inner">
          <Sparkles className="h-10 w-10 text-gray-400" />
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Layanan Tidak Ditemukan</h2>
        <p className="mt-3 max-w-md text-base text-gray-600">
          Maaf, layanan kebersihan yang Anda cari tidak tersedia atau tautan mungkin rusak. Silakan jelajahi opsi layanan kami lainnya.
        </p>
        <Link
          href="/#layanan"
          className="group mt-8 flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Kembali ke Layanan
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Header Premium dengan Efek Kedalaman */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 px-4 pb-32 pt-12 sm:px-6 lg:px-8">
        {/* Dekorasi Background */}
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 opacity-60 blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-400/20 opacity-50 blur-3xl mix-blend-screen pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <Link
            href="/#layanan"
            className="group inline-flex items-center gap-2 rounded-full bg-white/5 pr-4 pl-3 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </Link>
          
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {/* Ikon Layanan dengan Glassmorphism */}
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md">
              {service.icon}
            </div>
            
            <div>
              {/* <nav className="mb-2 flex items-center gap-2 text-xs font-medium text-blue-200">
                <Home className="h-3.5 w-3.5" />
                <span>Beranda</span>
                <ChevronRight className="h-3 w-3 opacity-60" />
                <span>Layanan</span>
                <ChevronRight className="h-3 w-3 opacity-60" />
                <span className="text-white">{service.title}</span>
              </nav> */}
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-2 text-lg text-blue-100/90 max-w-2xl">
                {service.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Konten Utama (Overlapping ke atas header) */}
      <div className="relative z-20 mx-auto -mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          
          {/* Kolom Kiri: Deskripsi & Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              
              {/* Kartu Tentang Layanan */}
              <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-8 rounded-full bg-blue-600"></div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Tentang Layanan
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                
                <div className="my-6 border-b border-gray-100"></div>
                
                {/* List Keunggulan */}
                <h4 className="mb-4 text-sm font-bold text-gray-900">Keunggulan Kami</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex mt-0.5 h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <span className="text-[10px] font-bold">1</span>
                    </div>
                    <p className="text-sm text-gray-600">Tenaga kerja profesional & terlatih</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex mt-0.5 h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <span className="text-[10px] font-bold">2</span>
                    </div>
                    <p className="text-sm text-gray-600">Peralatan modern & bahan aman</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex mt-0.5 h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <span className="text-[10px] font-bold">3</span>
                    </div>
                    <p className="text-sm text-gray-600">Garansi kepuasan 100%</p>
                  </li>
                </ul>
              </div>

              {/* Kartu Kontak Bantuan */}
              <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 sm:p-8">
                <h4 className="font-bold text-gray-900">Butuh Bantuan Cepat?</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                  Hubungi customer service kami jika Anda memiliki pertanyaan khusus mengenai layanan ini.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href="tel:+6281234567890"
                    className="group flex w-fit items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    +62 812-3456-7890
                  </a>
                  <a
                    href="mailto:info@fastcleaning.com"
                    className="group flex w-fit items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                    info@fastcleaning.com
                  </a>
                </div>
              </div>
              
            </div>
          </div>

          {/* Kolom Kanan: Form Pemesanan */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-8 border-b border-gray-100 pb-6">
                <h2 className="text-2xl font-bold text-gray-900">Form Pemesanan</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Silakan lengkapi data diri dan detail pengerjaan untuk memesan layanan <span className="font-semibold text-blue-600">{service.title}</span>. Tim kami akan merespons dalam 1x24 jam.
                </p>
              </div>
              
              {/* Komponen BookingForm (Sudah di-style modern sebelumnya) */}
              <div className="-mx-2 sm:mx-0">
                <BookingForm initialService={serviceName} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}