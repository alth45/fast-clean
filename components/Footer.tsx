import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Deskripsi */}
          <div>
            <h3 className="text-xl font-bold text-white dark:text-white">FastCleaning</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Solusi kebersihan profesional untuk rumah, kantor, dan taman
              Anda. Tim berpengalaman siap membantu menciptakan lingkungan
              yang bersih dan nyaman.
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h4 className="font-semibold text-white dark:text-white">Navigasi</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/tentang" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  Tentang FastCleaning
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-white dark:text-white">Layanan</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/pesan/deep-clean" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  Deep Clean
                </Link>
              </li>
              <li>
                <Link href="/pesan/pasca-renovasi" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  Pembersihan Pasca Renovasi
                </Link>
              </li>
              <li>
                <Link href="/pesan/kontrak" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  Kontrak Bulanan
                </Link>
              </li>
              <li>
                <Link href="/pesan/laundry-karpet" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  Laundry Karpet & Sofa
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white dark:text-white">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Jl. Kebersihan No. 123, Jakarta</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+628123456789" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  +62 812-3456-789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@fastcleaning.id" className="transition-colors hover:text-white dark:hover:text-gray-200">
                  info@fastcleaning.id
                </a>
              </li>
            </ul>

            {/* Sosial Media */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 dark:bg-gray-800 transition-colors hover:bg-blue-600"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.2-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.2l-.4 2.9h-1.8v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 dark:bg-gray-800 transition-colors hover:bg-pink-600"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 dark:bg-gray-800 transition-colors hover:bg-blue-500"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2 .8C18.7 4.7 17.8 4 16.7 4c-1.6 0-2.8 1.3-2.8 2.9 0 .2 0 .5.1.7-2.3-.1-4.3-1.3-5.6-3.1-.2.4-.3.8-.3 1.3 0 1 .5 1.9 1.3 2.4-.5 0-1-.1-1.5-.4v.1c0 1.4 1 2.6 2.3 2.9-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.1-1.6 1.2-3.6 1.9-5.9 1.9H6c2.1 1.4 4.6 2.2 7.3 2.2 8.7 0 13.4-7.3 13.4-13.6v-.6c.9-.6 1.6-1.3 2.2-2.1-.8.4-1.6.7-2.5.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 dark:border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FastCleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
