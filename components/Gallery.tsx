/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const IMAGE_COUNT = 90;
const BATCH_SIZE = 10;
const SHUFFLE_INTERVAL = 6000; // ms
const COLUMN_BREAKPOINTS = {
  sm: 1,  // < 640px
  md: 2,  // 640px - 1023px
  lg: 3,  // 1024px - 1279px
  xl: 4,  // 1280px - 1535px
  "2xl": 5, // >= 1536px
};

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  aspectRatio: number; // width / height
};

// Generate placeholder aspect ratios based on image id
// In production, you'd get these from the actual image dimensions
function getAspectRatio(id: number): number {
  // Generate pseudo-random but deterministic aspect ratios
  // to simulate varied image dimensions like Pinterest
  const ratios = [
    0.67, 0.75, 0.8, 1.0, 1.25, 1.33, 1.5, 0.9, 1.2, 1.0,
    0.7, 1.6, 0.85, 1.1, 1.4, 0.6, 1.0, 0.95, 1.3, 1.0,
  ];
  return ratios[id % ratios.length];
}

function generateImages(): GalleryImage[] {
  return Array.from({ length: IMAGE_COUNT }, (_, i) => ({
    id: i + 1,
    src: `/image/${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
    aspectRatio: getAspectRatio(i),
  }));
}

function getColumnCount(): number {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1536) return 5;
  if (window.innerWidth >= 1280) return 4;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function Gallery() {
  const [allImages] = useState<GalleryImage[]>(generateImages);
  const [loadedImages, setLoadedImages] = useState<GalleryImage[]>([]);
  const [currentBatch, setCurrentBatch] = useState(1);
  const [columns, setColumns] = useState<GalleryImage[][]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const prevBatchRef = useRef(currentBatch);

  // Load images in batches
  useEffect(() => {
    if (currentBatch * BATCH_SIZE <= loadedImages.length) return;
    
    const newBatch = allImages.slice(
      (currentBatch - 1) * BATCH_SIZE,
      currentBatch * BATCH_SIZE
    );
    
    if (newBatch.length === 0) return;

    // Preload images before adding them to the DOM
    const preloadImages = newBatch.map((img) => {
      return new Promise<void>((resolve) => {
        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = img.src;
        preloadLink.onload = () => resolve();
        preloadLink.onerror = () => resolve(); // resolve even on error
        document.head.appendChild(preloadLink);
        // Fallback timeout
        setTimeout(resolve, 3000);
      });
    });

    Promise.all(preloadImages).then(() => {
      setLoadedImages((prev) => [...prev, ...newBatch]);
      setLoadedCount((prev) => prev + newBatch.length);
    });
  }, [currentBatch, allImages, loadedImages.length]);

  // Distribute loaded images into columns (masonry layout)
  const distributeToColumns = useCallback(
    (images: GalleryImage[], columnCount: number): GalleryImage[][] => {
      const cols: GalleryImage[][] = Array.from(
        { length: columnCount },
        () => []
      );
      const colHeights: number[] = new Array(columnCount).fill(0);

      images.forEach((img) => {
        // Find the column with the smallest total aspect ratio (shortest)
        const shortestCol = colHeights.indexOf(Math.min(...colHeights));
        cols[shortestCol].push(img);
        colHeights[shortestCol] += img.aspectRatio;
      });

      return cols;
    },
    []
  );

  // Update columns on resize and when images change
  useEffect(() => {
    const updateColumns = () => {
      const colCount = getColumnCount();
      setColumns(distributeToColumns(loadedImages, colCount));
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [loadedImages, distributeToColumns]);

  // Mark images as ready after first batch
  useEffect(() => {
    if (loadedImages.length > 0 && !imagesReady) {
      setImagesReady(true);
    }
  }, [loadedImages, imagesReady]);

  // Auto-shuffle images every SHUFFLE_INTERVAL ms
  useEffect(() => {
    if (loadedImages.length < 2) return;

    const shuffleTimer = setInterval(() => {
      setIsShuffling(true);

      // Re-distribute with a different seed/order
      const shuffled = [...loadedImages];
      // Fisher-Yates shuffle
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      const colCount = getColumnCount();
      setColumns(distributeToColumns(shuffled, colCount));

      // Reset shuffling state after animation
      setTimeout(() => {
        setIsShuffling(false);
      }, 800);
    }, SHUFFLE_INTERVAL);

    return () => clearInterval(shuffleTimer);
  }, [loadedImages, distributeToColumns]);

  // Infinite scroll: load more images when scrolled near bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          currentBatch * BATCH_SIZE < allImages.length
        ) {
          setCurrentBatch((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [currentBatch, allImages.length]);

  return (
    <div className="relative">
      {/* Progress bar showing load status */}
      <div className="sticky top-0 z-50 w-full bg-zinc-900/80 backdrop-blur-sm rounded-full h-1.5 mb-8 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out rounded-full"
          style={{
            width: `${(loadedCount / IMAGE_COUNT) * 100}%`,
          }}
        />
        <span className="absolute right-0 -top-6 text-xs text-zinc-400 tabular-nums">
          {loadedCount} / {IMAGE_COUNT}
        </span>
      </div>

      {/* Masonry grid */}
      <div
        className={`flex gap-4 md:gap-5 lg:gap-6 transition-opacity duration-500 ${
          imagesReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4 md:gap-5 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {col.map((img, imgIdx) => (
                <motion.div
                  key={`${img.id}-${colIdx}-${imgIdx}`}
                  layout
                  initial={!imagesReady ? { opacity: 0, y: 20 } : false}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: isShuffling ? [1, 0.97, 1] : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 200,
                      damping: 30,
                      delay: imgIdx * 0.03,
                    },
                    opacity: { duration: 0.4 },
                    scale: {
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: imgIdx * 0.02,
                    },
                  }}
                  className="relative group break-inside-avoid overflow-hidden rounded-xl bg-zinc-800/50"
                  style={{
                    aspectRatio: img.aspectRatio,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image number badge */}
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    #{img.id}
                  </div>

                  {/* Shimmer loading effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Load more trigger */}
      {loadedCount < IMAGE_COUNT && (
        <div
          ref={loaderRef}
          className="flex justify-center items-center py-16"
        >
          <div className="flex items-center gap-3 text-zinc-400">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="text-sm">Loading more images...</span>
          </div>
        </div>
      )}

      {/* All loaded message */}
      {loadedCount === IMAGE_COUNT && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 text-zinc-500"
        >
          <span className="inline-flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            All {IMAGE_COUNT} images loaded
          </span>
        </motion.div>
      )}
    </div>
  );
}