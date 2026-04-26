"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/20 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-28 pt-32">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="block w-8 h-px bg-[#c9a84c]" />
          <span className="section-label">Classic Haircut — Classic Shave</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-bold leading-none mb-6 max-w-3xl"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            letterSpacing: "-0.01em",
          }}
        >
          Mehr als
          <br />
          <span className="text-[#c9a84c]">nur ein</span>
          <br />
          Haarschnitt
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#9a9585] text-lg max-w-md mb-10 leading-relaxed"
        >
          Tradition trifft auf modernen Stil.
          <br />
          Für den perfekten Look. Für jeden Mann.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#locations"
            className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a0a0a] text-xs font-bold tracking-[0.2em] uppercase px-7 py-4 hover:bg-[#e8c96f] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Einfach vorbeikommen
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 border border-[#f5f0e8]/30 text-[#f5f0e8] text-xs font-medium tracking-[0.2em] uppercase px-7 py-4 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
          >
            Unsere Leistungen
          </a>
        </motion.div>

        {/* Walk-in Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[#9a9585] text-xs tracking-[0.15em] uppercase">
            Kein Termin nötig — einfach vorbeikommen
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[#9a9585] text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent"
        />
      </motion.div>
    </section>
  );
}
