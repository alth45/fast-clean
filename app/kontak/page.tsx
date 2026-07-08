import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight, Home } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    content: "+62 812-3456-789",
    href: "tel:+628123456789",
    description: "Senin - Sabtu, 08:00 - 18:00",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@fastcleaning.id",
    href: "mailto:info@fastcleaning.id",
    description: "Kami akan membalas dalam 1x24 jam",
  },
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Kebersihan No. 123, Jakarta",
    href: "#",
    description: "Kantor pusat FastCleaning",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Sabtu, 08:00 - 18:00",
    href: "#",
    description: "Minggu & Hari Besar libur",
  },
];

export const metadata: Metadata = {
  title: "Kontak - FastCleaning",
  description: "Hubungi FastCleaning untuk konsultasi dan pemesanan layanan kebersihan profesional.",
};

export default function KontakPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Kontak Kami
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
              Hubungi FastCleaning untuk konsultasi, pertanyaan, atau pemesanan layanan kebersihan profesional.
            </p>
            <nav className="mt-4" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="/" className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                    <Home className="h-3.5 w-3.5" />
                    Beranda
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mx-2 h-4 w-4" />
                  <span className="text-gray-700 dark:text-gray-300" aria-current="page">Kontak</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-colors group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {item.content}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 dark:bg-gray-900/30 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Atau Kirim Pesan Langsung
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Isi form di bawah dan tim kami akan menghubungi Anda dalam 1x24 jam.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm">
            <p className="text-center text-gray-500 dark:text-gray-400">
              Silakan kunjungi halaman{" "}
              <Link href="/#layanan" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                layanan kami
              </Link>{" "}
              untuk memesan langsung, atau hubungi kami melalui WhatsApp / Telepon.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+628123456789"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +62 812-3456-789
              </a>
              <a
                href="mailto:info@fastcleaning.id"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@fastcleaning.id
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}