import { Shield, Users, Wrench, Clock, BadgeCheck, Wallet } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Pekerja Profesional & Terlatih",
    description:
      "Setiap anggota tim kami telah melalui pelatihan ketat dan memiliki sertifikasi di bidang kebersihan profesional.",
  },
  {
    icon: Wrench,
    title: "Alat & Bahan Modern",
    description:
      "Kami menggunakan peralatan dan bahan pembersih terkini yang ampuh namun tetap aman bagi lingkungan dan kesehatan.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu & Andal",
    description:
      "Komitmen kami adalah datang tepat waktu sesuai jadwal yang telah disepakati, tanpa mengecewakan.",
  },
  {
    icon: Wallet,
    title: "Harga Terjangkau",
    description:
      "Kami menawarkan harga yang kompetitif dan transparan tanpa biaya tersembunyi. Sesuai dengan kualitas yang Anda dapatkan.",
  },
  {
    icon: BadgeCheck,
    title: "Berpengalaman & Terpercaya",
    description:
      "Sudah melayani ratusan klien dari berbagai sektor, mulai dari rumah tinggal hingga gedung perkantoran.",
  },
  {
    icon: Shield,
    title: "Garansi Kepuasan",
    description:
      "Jika Anda tidak puas dengan hasil kerja kami, kami siap melakukan pembersihan ulang tanpa biaya tambahan.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="tentang" className="bg-gray-50 dark:bg-gray-900/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Kenapa Pelanggan Mempercayakan Kebersihannya kepada Kami
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Kami berkomitmen memberikan layanan kebersihan terbaik. Berikut
            alasan mengapa banyak pelanggan memilih FastCleaning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 mt-12">
          <div className="flex flex-col items-start p-6 border-b border-gray-200 dark:border-gray-700 sm:border-r hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Pekerja Profesional & Terlatih</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">Setiap anggota tim kami telah melalui pelatihan ketat dan memiliki sertifikasi di bidang kebersihan profesional.</p>
          </div>
          <div className="flex flex-col items-start p-6 border-b border-gray-200 dark:border-gray-700 sm:border-r lg:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <Wrench className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Alat & Bahan Modern</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">Kami menggunakan peralatan dan bahan pembersih terkini yang ampuh namun tetap aman bagi lingkungan dan kesehatan.</p>
          </div>
          <div className="flex flex-col items-start p-6 border-b border-gray-200 dark:border-gray-700 sm:border-r-0 lg:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Tepat Waktu & Andal</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">Komitmen kami adalah datang tepat waktu sesuai jadwal yang telah disepakati, tanpa mengecewakan.</p>
          </div>
          <div className="flex flex-col items-start p-6 border-b border-gray-200 dark:border-gray-700 sm:border-r lg:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <Wallet className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Harga Terjangkau</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">Kami menawarkan harga yang kompetitif dan transparan tanpa biaya tersembunyi. Sesuai dengan kualitas yang Anda dapatkan.</p>
          </div>
          <div className="flex flex-col items-start p-6 border-b border-gray-200 dark:border-gray-700 sm:border-r lg:border-r-0 lg:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Berpengalaman & Terpercaya</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">Sudah melayani ratusan klien dari berbagai sektor, mulai dari rumah tinggal hingga gedung perkantoran.</p>
          </div>
          <div className="flex flex-col items-start p-6 border-b-0 sm:border-r-0 lg:border-r-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Garansi Kepuasan</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">Jika Anda tidak puas dengan hasil kerja kami, kami siap melakukan pembersihan ulang tanpa biaya tambahan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
