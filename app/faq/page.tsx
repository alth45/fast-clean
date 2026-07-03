/* eslint-disable @next/next/no-html-link-for-pages */
import FaqSection from "@/components/FaqSection";

export default function FaqPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              FAQ
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Pertanyaan yang Sering Diajukan / Frequently Asked Questions
            </p>
            <nav className="mt-4" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm text-gray-500">
                <li><a href="/" className="hover:text-blue-600">Beranda</a></li>
                <li className="flex items-center">
                  <svg className="mx-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span className="text-gray-700" aria-current="page">FAQ</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
