"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { InstagramLink } from "@/components/InstagramLink";

const locations = [
  {
    city: "Neuruppin",
    address: "Karl-Marx-Straße 47",
    zip: "16816 Neuruppin",
    phone: "03391 8580446",
    phoneHref: "tel:+4933918580446",
    instagram: "https://www.instagram.com/mirash_neuruppin",
    instagramHandle: "@mirash_neuruppin",
    hours: [
      { day: "Mo – Fr", time: "09:00 – 19:00 Uhr" },
      { day: "Samstag", time: "09:00 – 18:00 Uhr" },
      { day: "Sonntag", time: "Geschlossen" },
    ],
    mapSrc: "https://maps.google.com/maps?q=Karl-Marx-Stra%C3%9Fe+47%2C+16816+Neuruppin&output=embed&hl=de",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Karl-Marx-Stra%C3%9Fe+47%2C+16816+Neuruppin",
    tag: "Standort 01",
    shopImages: [
      { src: "/images/gallery-5.jpg", alt: "Neuruppin Shop Eingang" },
      { src: "/images/gallery-6.jpg", alt: "Neuruppin Stuhlreihe" },
      { src: "/images/gallery-7.jpg", alt: "Neuruppin Shop Atmosphäre" },
    ],
  },
  {
    city: "Oranienburg",
    address: "Friedensstraße 8",
    zip: "16515 Oranienburg",
    phone: "03301 5748866",
    phoneHref: "tel:+4933015748866",
    instagram: "https://www.instagram.com/mirash.oranienburg/",
    instagramHandle: "@mirash.oranienburg",
    hours: [
      { day: "Mo – Fr", time: "09:00 – 19:00 Uhr" },
      { day: "Samstag", time: "09:00 – 19:00 Uhr" },
      { day: "Sonntag", time: "Geschlossen" },
    ],
    mapSrc: "https://maps.google.com/maps?q=Friedensstra%C3%9Fe+8%2C+16515+Oranienburg&output=embed&hl=de",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Friedensstra%C3%9Fe+8%2C+16515+Oranienburg",
    tag: "Standort 02",
    shopImages: [
      { src: "/images/gallery-8.jpg", alt: "Oranienburg Shop Atmosphäre" },
      { src: "/images/gallery-9.jpg", alt: "Oranienburg Shop Übersicht" },
      { src: "/images/gallery-10.jpg", alt: "Oranienburg Shop Eingang" },
    ],
  },
];

export default function LocationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="locations" className="bg-[#080808] py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-16"
        >
          <span className="section-label">Wo du uns findest</span>
          <span
            className="gold-line mt-3"
            style={{ margin: "0.75rem auto 1.5rem" }}
          />
          <h2 className="section-title">Unsere Standorte</h2>
          <p className="text-[#9a9585] text-sm mt-4 max-w-md mx-auto">
            Kein Termin nötig — komm einfach vorbei. Wir freuen uns auf dich.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="border border-[#1a1a1a] hover:border-[#c9a84c]/30 transition-colors duration-500 overflow-hidden"
            >
              {/* Shop Image Strip */}
              <div className="grid grid-cols-3 h-32 lg:h-44">
                {loc.shopImages.map((img, j) => (
                  <div key={j} className="relative overflow-hidden group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority={j === 0}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 33vw, 17vw"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="relative h-44 lg:h-52 overflow-hidden">
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Karte ${loc.city}`}
                />
                <a
                  href={loc.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-[#0a0a0a]/90 border border-[#2a2a2a] hover:border-[#c9a84c]/50 px-3 py-1.5 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-[#c9a84c] text-[9px] tracking-[0.15em] uppercase font-semibold">Route</span>
                </a>
              </div>

              {/* Info */}
              <div className="p-5 lg:p-8">
                <h3
                  className="text-[#f5f0e8] text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {loc.city}
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Address + Phone + Instagram */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="text-[#c9a84c] mt-0.5 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <p className="text-[#f5f0e8] text-sm">{loc.address}</p>
                        <p className="text-[#f5f0e8] text-sm">{loc.zip}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="text-[#c9a84c] shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.64-1.64a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <a
                        href={loc.phoneHref}
                        className="text-[#f5f0e8] text-sm hover:text-[#c9a84c] transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    <InstagramLink href={loc.instagram} handle={loc.instagramHandle} size="sm" />
                  </div>

                  {/* Hours + Call Button */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        className="text-[#c9a84c] shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-[#9a9585] text-xs uppercase tracking-widest">
                        Öffnungszeiten
                      </span>
                    </div>
                    <div className="space-y-2">
                      {loc.hours.map((h) => (
                        <div
                          key={h.day}
                          className="flex justify-between gap-4 text-sm"
                        >
                          <span className="text-[#9a9585]">{h.day}</span>
                          <span
                            className={
                              h.time === "Geschlossen"
                                ? "text-[#9a9585]/50"
                                : "text-[#f5f0e8]"
                            }
                          >
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5">
                      <a
                        href={loc.phoneHref}
                        className="inline-flex items-center gap-2 w-full justify-center bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold tracking-[0.15em] uppercase py-3 hover:bg-[#e8c96f] transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.64-1.64a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Anrufen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
