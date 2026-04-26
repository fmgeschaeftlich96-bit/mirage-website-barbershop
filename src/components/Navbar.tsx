"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Standorte", href: "#locations" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c9a84c]/30">
              <Image
                src="/images/logo.webp"
                alt="MiRash Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="leading-none">
              <span
                className="block text-[#f5f0e8] font-bold text-base tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                MiRash
              </span>
              <span className="block text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase">
                Barbershop
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#9a9585] text-xs tracking-[0.15em] uppercase font-medium hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Phone CTA */}
          <a
            href="tel:+4933918580446"
            className="hidden lg:flex items-center gap-2 border border-[#c9a84c]/50 text-[#c9a84c] text-xs tracking-[0.15em] uppercase font-medium px-4 py-2 hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.64-1.64a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Anrufen
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü öffnen"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#f5f0e8] origin-center transition-colors"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-[#f5f0e8]"
            />
            <motion.span
              animate={
                menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-[#f5f0e8] origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-[#f5f0e8] text-2xl tracking-[0.15em] uppercase font-light hover:text-[#c9a84c] transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+4933918580446"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="mt-4 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-[0.2em] uppercase px-8 py-3"
            >
              Anrufen
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
