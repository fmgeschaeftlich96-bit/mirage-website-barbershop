"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";

const ScissorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const RazorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Blade body: rectangle with pointed right tip */}
    <path d="M3 10 L3 14 L16 14 L21 12 L16 10 Z" />
    {/* Spine – inner line on blade back */}
    <line x1="3" y1="10" x2="16" y2="10" />
    {/* Handle end cap */}
    <line x1="3" y1="10" x2="3" y2="14" strokeLinecap="round" />
  </svg>
);

const TweezersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="20" x2="12" y2="4" />
    <line x1="15" y1="20" x2="12" y2="4" />
    <path d="M9 14 Q12 11 15 14" />
  </svg>
);

const EarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer ear helix */}
    <path d="M17 8 C17 4 14 2 11 2 C7 2 4 5 4 9 C4 14 7 18 9 20 L10 22" />
    {/* Inner anti-helix + earlobe */}
    <path d="M14 9 C14 7 13 6 11 6 C9 6 8 8 8 10 C8 13 10 15 11 17 C11 19 10 21 10 22" />
  </svg>
);

const services = [
  {
    name: "Haarschnitt",
    priceLabel: "ab",
    price: "16",
    desc: "Klassischer Herrenhaarschnitt inkl. Styling nach Wunsch",
    icon: <ScissorsIcon />,
  },
  {
    name: "Schneiden + Waschen",
    priceLabel: "",
    price: "18",
    desc: "Haarschnitt inkl. Haarwäsche — komplett aus einer Hand",
    icon: <ScissorsIcon />,
    highlight: true,
  },
  {
    name: "Rasur",
    priceLabel: "ab",
    price: "12",
    desc: "Heißes Tuch, Rasiermesser & Aftershave",
    icon: <RazorIcon />,
  },
  {
    name: "Kinder­haarschnitt",
    priceLabel: "ab",
    price: "15",
    desc: "Für Jungs bis 12 Jahre — ruhig & entspannt",
    icon: <ScissorsIcon />,
  },
  {
    name: "Augenbrauen zupfen",
    priceLabel: "ab",
    price: "7",
    desc: "Saubere Form für einen gepflegten Ausdruck",
    icon: <TweezersIcon />,
  },
  {
    name: "Ohrwachs",
    priceLabel: "ab",
    price: "5",
    desc: "Professionelle Ohrenreinigung mit Wachs",
    icon: <EarIcon />,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="w-full border-t border-b border-[#1a1a1a] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="section-label">Was wir tun</span>
            <span
              className="gold-line mt-3"
              style={{ margin: "0.75rem auto 1.5rem" }}
            />
            <h2 className="section-title">Unsere Leistungen</h2>
          </motion.div>

          {/* 3×2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className={`group relative overflow-hidden p-8 flex flex-col justify-between min-h-[220px] ${
                  service.highlight ? "bg-[#141209]" : "bg-[#0f0f0f]"
                }`}
              >
                {/* Gold accent line top – highlight only */}
                {service.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-[#c9a84c]" />
                )}

                {/* Icon */}
                <div className="text-[#c9a84c]/30 mb-4 w-9 h-9">
                  {service.icon}
                </div>

                {/* Name + Price */}
                <div className="flex items-end justify-between gap-4 mb-4">
                  <h3
                    className="text-[#f5f0e8] text-xl font-bold leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {service.name}
                  </h3>
                  <div className="text-right shrink-0">
                    {service.priceLabel && (
                      <span className="block text-[#9a9585] text-[10px] uppercase tracking-widest mb-0.5">
                        {service.priceLabel}
                      </span>
                    )}
                    <p
                      className={`text-3xl font-bold leading-none ${
                        service.highlight ? "text-[#e8c96f]" : "text-[#c9a84c]"
                      }`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {service.price}
                      <span className="text-base">€</span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#9a9585] text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Bottom hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>

          {/* Walk-in Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-[#9a9585] text-sm">
              Alle Leistungen auch{" "}
              <span className="text-[#f5f0e8] font-medium">ohne Termin</span>{" "}
              verfügbar — einfach vorbeikommen.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
