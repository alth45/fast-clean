"use client";

import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-[1600px] mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Gallery
          </h1>
          <p className="text-zinc-400 mt-2 text-lg">
            A curated collection of moments
          </p>
        </header>
        <Gallery />
      </div>
    </main>
  );
}