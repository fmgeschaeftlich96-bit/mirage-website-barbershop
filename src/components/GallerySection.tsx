"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { InstagramLink } from "@/components/InstagramLink";

const gridImages = [
  { src: "/images/gallery-5.jpg", alt: "Neuruppin – Eingangsbereich", location: "Neuruppin" },
  { src: "/images/gallery-6.jpg", alt: "Neuruppin – Stuhlreihe", location: "Neuruppin" },
  { src: "/images/gallery-7.jpg", alt: "Neuruppin – Atmosphäre", location: "Neuruppin" },
  { src: "/images/gallery-8.jpg", alt: "Oranienburg – Shop", location: "Oranienburg" },
  { src: "/images/gallery-9.jpg", alt: "Oranienburg – Übersicht", location: "Oranienburg" },
  { src: "/images/gallery-10.jpg", alt: "Oranienburg – Eingang", location: "Oranienburg" },
];

const featuredImage = {
  src: "/images/hero-bg.jpg",
  alt: "MiRash Barbershop – Shop Atmosphäre",
  location: "Neuruppin",
};

const allImages = [...gridImages, featuredImage];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);
  const [featuredHovered, setFeaturedHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + allImages.length) % allImages.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % allImages.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section id="gallery" className="bg-[#0a0a0a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6"
          >
            <div>
              <span className="section-label">Unsere Arbeit</span>
              <span className="gold-line mt-3" />
              <h2 className="section-title">Galerie</h2>
            </div>
            <div className="flex flex-wrap gap-6">
              <InstagramLink href="https://www.instagram.com/mirash_neuruppin" handle="@mirash_neuruppin" size="sm" />
              <InstagramLink href="https://www.instagram.com/mirash.oranienburg/" handle="@mirash.oranienburg" size="sm" />
            </div>
          </motion.div>

          {/* 3×2 Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mb-2 lg:mb-3">
            {gridImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="relative h-48 lg:h-64 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ${hovered === i ? "scale-110" : "scale-100"}`}
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-[#0a0a0a]/40 transition-opacity duration-300 ${hovered === i ? "opacity-0" : "opacity-100"}`} />
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-3 left-3"
                    >
                      <span className="bg-[#c9a84c] text-[#0a0a0a] text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-1">
                        {img.location}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Featured Full-Width Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative overflow-hidden cursor-pointer flex justify-center bg-[#050505]"
            onMouseEnter={() => setFeaturedHovered(true)}
            onMouseLeave={() => setFeaturedHovered(false)}
            onClick={() => openLightbox(allImages.length - 1)}
          >
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              width={0}
              height={0}
              sizes="100vw"
              className={`block h-auto transition-transform duration-700 ${featuredHovered ? "scale-105" : "scale-100"}`}
              style={{ maxHeight: "520px", width: "auto", maxWidth: "100%" }}
              priority
            />
            <div className={`absolute inset-0 bg-[#0a0a0a]/40 transition-opacity duration-300 ${featuredHovered ? "opacity-0" : "opacity-100"}`} />
            <AnimatePresence>
              {featuredHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute bottom-5 left-5"
                >
                  <span className="bg-[#c9a84c] text-[#0a0a0a] text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5">
                    {featuredImage.location}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95"
            onClick={closeLightbox}
          >
            {/* Image container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[lightboxIndex].src}
                alt={allImages[lightboxIndex].alt}
                width={0}
                height={0}
                sizes="90vw"
                className="block h-auto"
                style={{ maxHeight: "88vh", maxWidth: "90vw", width: "auto" }}
                priority
              />

              {/* Location badge */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#c9a84c] text-[#0a0a0a] text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1.5">
                  {allImages[lightboxIndex].location}
                </span>
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-[#9a9585] hover:text-[#f5f0e8] transition-colors p-2"
              aria-label="Schließen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[#9a9585]/60 text-xs tracking-widest">
              {lightboxIndex + 1} / {allImages.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a9585] hover:text-[#c9a84c] transition-colors p-3"
              aria-label="Vorheriges Bild"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9a9585] hover:text-[#c9a84c] transition-colors p-3"
              aria-label="Nächstes Bild"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
