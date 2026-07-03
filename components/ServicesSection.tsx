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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Layanan Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Berbagai layanan kebersihan profesional yang siap membantu Anda
            menciptakan lingkungan yang bersih, sehat, dan nyaman.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg"
            >
              {/* Gambar */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Konten */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <Link
                  href={`/pesan/${service.slug}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Pesan Sekarang
                  <ArrowRight className="h-4 w-4" />
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