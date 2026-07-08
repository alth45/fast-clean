import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Pembersihan Pasca Renovasi",
    description:
      "Setelah renovasi, debu dan kotoran pasti berserakan. Tim FastCleaning akan membersihkan sisa-sisa material, debu halus, dan noda membandel sehingga rumah atau kantor Anda kembali bersih dan layak huni.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    alt: "Pembersihan pasca renovasi",
    slug: "pasca-renovasi",
  },
  {
    title: "Deep Clean",
    description:
      "Layanan pembersihan menyeluruh hingga ke sudut-sudut tersembunyi. Cocok untuk rumah, kantor, atau gedung yang membutuhkan pembersihan total. Kami menjangkau area yang jarang dibersihkan sehari-hari.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
    alt: "Deep clean ruangan",
    slug: "deep-clean",
  },
  {
    title: "Pembersihan Kontrak Bulanan",
    description:
      "Solusi praktis dengan jadwal pembersihan rutin mingguan atau bulanan. Kami menyesuaikan frekuensi sesuai kebutuhan Anda. Harga spesial untuk kontrak jangka panjang.",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    alt: "Pembersihan kontrak",
    slug: "kontrak",
  },
  {
    title: "Laundry Karpet & Sofa",
    description:
      "Karpet, sofa, dan kursi kantor yang kotor dan berminyak? Kami menggunakan mesin dan bahan pembersih khusus yang ampuh mengangkat noda dan debu tanpa merusak serat kain.",
    image:
      "https://images.unsplash.com/photo-1610699121961-9f4a0a5e2d49?w=600&q=80",
    alt: "Laundry karpet dan sofa",
    slug: "laundry-karpet",
  },
  {
    title: "Pembersihan Kamar Mandi & Dapur",
    description:
      "Kamar mandi dan dapur adalah area paling rawan kuman. Kami membersihkan kerak air, jamur, noda membandel, dan mendisinfeksi permukaan agar higienis dan aman.",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&q=80",
    alt: "Pembersihan kamar mandi dan dapur",
    slug: "kamar-mandi-dapur",
  },
  {
    title: "Pembersihan Taman & Halaman",
    description:
      "Taman dan halaman yang rimbun perlu perawatan rutin. Kami membersihkan daun kering, rumput liar, dan sampah agar taman tetap asri dan nyaman dipandang.",
    image:
      "https://images.unsplash.com/photo-1617576683098-00ea1ee1cde3?w=600&q=80",
    alt: "Pembersihan taman dan halaman",
    slug: "taman",
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
      {/* Aksen background samar agar tidak terlalu plain putih */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 dark:from-blue-900/20 via-white dark:via-gray-900 to-white dark:to-gray-900"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Layanan Kami
          </h2>
          {/* Garis aksen estetis */}
          <div className="mt-4 flex justify-center">
            <div className="h-1.5 w-16 rounded-full bg-blue-600"></div>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Berbagai layanan kebersihan profesional yang siap membantu Anda
            menciptakan lingkungan yang bersih, sehat, dan nyaman.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-gray-900/50"
            >
              {/* Gambar */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
              </div>

              {/* Konten */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
                
                {/* Garis pemisah halus sebelum tombol */}
                <div className="my-6 border-b border-gray-100 dark:border-gray-700"></div>

                <Link
                  href={`/pesan/${service.slug}`}
                  className="group/btn flex w-full items-center justify-between rounded-xl bg-blue-50 px-6 py-3.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md"
                >
                  Pesan Sekarang
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;